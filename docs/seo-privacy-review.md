# SEO and privacy review

Revisión del Checkpoint 2. No se modificó la política de privacidad ni se desplegó el sitio.

## Estado actual

- `BaseLayout.astro` emite `noindex, nofollow` salvo que `PUBLIC_ALLOW_INDEXING=true`.
- `public/robots.txt` contiene `Disallow: /`.
- Canonical y sitemap usan `PUBLIC_SITE_URL`, con `https://example.com` como fallback aislado.
- Open Graph, Twitter Cards y Schema.org existen sin publicar claims no confirmados.

## Sitemap privado

Generar un sitemap no indexa por sí mismo el sitio, pero publicarlo junto a una presentación privada no aporta valor. `Disallow: /` y `noindex` mantienen el bloqueo, aunque robots no sustituye control de acceso. Para producción privada se recomienda excluir el sitemap del artefacto o no declararlo en robots hasta decidir el mecanismo de acceso.

## Recomendación antes de deploy

1. Fallar el build de producción si `PUBLIC_SITE_URL` conserva `example.com`.
2. Mantener `PUBLIC_ALLOW_INDEXING=false`.
3. Definir si CloudFront aplicará acceso firmado, Basic Auth en edge u otra restricción; `noindex` no protege confidencialidad.
4. Hacer que `robots.txt` se genere desde la misma variable antes de una publicación pública, evitando estados contradictorios.
5. Al volver indexable: habilitar flag, permitir robots, confirmar canonical/OG, incluir sitemap y ejecutar auditoría SEO.

El cambio futuro es de configuración y archivo de salida; no requiere redefinir la arquitectura.

