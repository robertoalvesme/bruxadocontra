# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies. Usamos `npm install` (não `npm ci`): o package-lock.json
# foi gerado no macOS e omite dependências opcionais que o Linux precisa
# (@emnapi/core, @emnapi/runtime — fallback WASM do oxc-parser/rollup), o que
# faz o `npm ci` falhar no build. `npm install` reconcilia o lock e instala.
COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

# Build the Nuxt app -> generates .output (Nitro node-server)
COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Nitro reads HOST/PORT; Cloud Run injects PORT (defaults to 8080)
ENV HOST=0.0.0.0
ENV PORT=8080

# Only the build output is needed at runtime (server + client assets)
COPY --from=builder /app/.output ./.output

EXPOSE 8080
CMD ["node", ".output/server/index.mjs"]
