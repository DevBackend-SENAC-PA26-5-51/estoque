# ---------- Base ----------
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# ---------- Dependencies ----------
FROM base AS deps
RUN apk add --no-cache python3 make g++
COPY package.json package-lock.json ./
# bcrypt precisa compilar; prisma precisa dos engines no postinstall
RUN npm ci

# ---------- Build ----------
FROM base AS builder
RUN apk add --no-cache python3 make g++
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json tsconfig.json tsconfig.build.json nest-cli.json prisma.config.ts ./
COPY prisma ./prisma
COPY src ./src
RUN npx prisma generate
RUN npm run build
RUN npm prune --omit=dev

# ---------- Runner ----------
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=5001
WORKDIR /app

COPY package.json package-lock.json prisma.config.ts ./
COPY prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated

# CLI do Prisma p/ `migrate deploy` + dotenv (importado em main.ts e prisma.config.ts)
RUN npm install --omit=dev --no-save dotenv prisma@7.9.1

EXPOSE 5001

# Aplique migrations na subida do banco com:
#   npx prisma migrate deploy
CMD ["node", "dist/main.js"]
