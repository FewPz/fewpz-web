# --- STAGE 1: Builder ---
FROM node:22-alpine AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
    
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
    
    # Install all dependencies (including devDependencies)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod=false
    
COPY . .
    
    # This step will run SvelteKit's build script 
    # (Assuming "build" script is defined in package.json => "svelte-kit build")
RUN pnpm build
    
    # --- STAGE 2: Runner ---
FROM node:22-alpine
    
RUN apk add --no-cache tzdata
ENV TZ=Asia/Bangkok
ENV NODE_ENV=production
    
WORKDIR /app
    
COPY --from=builder /app/.svelte-kit/output ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
    
EXPOSE 3000
CMD ["node", "build"]