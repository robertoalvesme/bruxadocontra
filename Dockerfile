# syntax=docker/dockerfile:1
# =============================================================================
# Site da Bruxa do Contra (Nuxt 4, SSR), no contrato de build da plataforma:
# o @rhfactor/kit vem de um contexto de build a parte, "kit" (a pasta do
# rhfactor-kit), compilado aqui mesmo - o cloud-management publica assim:
#
#   docker build --build-context kit=../rhfactor-kit \
#     --build-arg RHFACTOR_STORE_ID=... -t bruxadocontra .
#
# Os dados da loja (nome, logotipo) entram no BUILD: o sales-api precisa
# responder em RHFACTOR_API_BASE nesse momento.
# =============================================================================

FROM node:24-alpine AS kit-build
WORKDIR /src/rhfactor-kit
COPY --from=kit package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY --from=kit . .
RUN npm run build

# -----------------------------------------------------------------------------
FROM node:24-alpine AS builder
# O site depende de "file:../rhfactor-kit": a mesma arvore de pastas do dev.
COPY --from=kit-build /src/rhfactor-kit/package.json /src/rhfactor-kit/package.json
COPY --from=kit-build /src/rhfactor-kit/dist /src/rhfactor-kit/dist
WORKDIR /src/bruxadocontra
COPY package.json .npmrc ./
# `npm install` (e nao `npm ci`): o lock gerado no macOS omite dependencias
# opcionais que o Linux precisa (fallback WASM do oxc-parser/rollup).
RUN npm install --ignore-scripts --no-audit --no-fund
COPY . .

ARG RHFACTOR_STORE_ID=""
ARG RHFACTOR_API_BASE="http://host.docker.internal:8085"
# Muda a cada publicacao: sem ele, o build sairia do cache com os dados antigos da loja.
ARG RHFACTOR_BUILD_ID=""
ENV RHFACTOR_STORE_ID=$RHFACTOR_STORE_ID \
    RHFACTOR_API_BASE=$RHFACTOR_API_BASE \
    NODE_ENV=production
RUN npx nuxt prepare && npm run build

# -----------------------------------------------------------------------------
FROM node:24-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nuxt && adduser --system --uid 1001 --ingroup nuxt nuxt
COPY --from=builder --chown=nuxt:nuxt /src/bruxadocontra/.output ./.output
USER nuxt

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000
EXPOSE 3000
# NUXT_RHFACTOR_*: os servicos vistos de dentro da rede (trocam sem novo build).
CMD ["node", ".output/server/index.mjs"]
