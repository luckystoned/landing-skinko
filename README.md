# Landing Skinko

Presentación comercial privada de Bandadas para **Premio Skinko a las Artes 2027**.

Este repositorio está en su checkpoint inicial: contiene el stack, la arquitectura, las reglas para agentes, el modelo de contenido y la base SEO. La implementación visual final se realizará por secciones en checkpoints posteriores.

## Requisitos

- Node.js 22
- pnpm 9.15.0

## Comandos

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

## Entorno

Copiar `.env.example` a `.env` y reemplazar la URL cuando exista un dominio confirmado.

- `PUBLIC_SITE_URL`: origen usado por canonical y sitemap.
- `PUBLIC_ALLOW_INDEXING`: debe permanecer en `false` mientras la presentación sea privada.

## Deploy

`pnpm build` genera un sitio estático en `dist/`, preparado para AWS S3 + CloudFront. La infraestructura y el pipeline de deploy quedan fuera de este checkpoint.

Antes de trabajar en el proyecto, leer [AGENTS.md](./AGENTS.md).
