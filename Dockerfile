# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies from the lockfile (reproducible build)
COPY package.json package-lock.json ./
RUN npm ci

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
