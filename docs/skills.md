# Skills del proyecto

Los skills se versionan en `.agents/skills/` y su procedencia se registra en `skills-lock.json`. Se restauran con:

```bash
npx skills experimental_install
```

## Instalados en el checkpoint 1

| Nombre | Source | skillPath | Propósito |
| --- | --- | --- | --- |
| astro | `astrolicious/agent-skills` | `skills/astro/SKILL.md` | Estructura, componentes y salida estática de Astro. |
| firecrawl-crawl | `firecrawl/cli` | `skills/firecrawl-crawl/SKILL.md` | Investigación futura de referencias web y assets cuando exista autorización. No se usa en este checkpoint. |
| seo-audit | `coreyhaines31/marketingskills` | `skills/seo-audit/SKILL.md` | Auditoría técnica y on-page antes de publicar. |
| seo-images | `agricidaniel/claude-seo` | `skills/seo-images/SKILL.md` | Optimización, alt text, formatos, responsive images y prevención de CLS. |
| tailwind-design-system | `wshobson/agents` | `plugins/frontend-mobile-development/skills/tailwind-design-system/SKILL.md` | Tokens y consistencia del sistema visual. El skill está orientado a Tailwind 4: en este repo solo se aplican sus principios compatibles y se conserva la configuración Tailwind 3.4.x acordada. |

## Capacidades adicionales evaluadas

No se instalaron skills extra en este checkpoint para evitar redundancia y dependencias conceptuales prematuras.

| Capacidad | Decisión | Motivo |
| --- | --- | --- |
| Frontend design | Posponer | Será valioso al definir layouts editoriales; primero debe aprobarse la dirección creativa. |
| Accessibility audit | Posponer | Aporta QA WCAG cuando existan controles y UI real; ahora bastan reglas de arquitectura y semántica. |
| Core Web Vitals / performance | Posponer | Lighthouse y pruebas de navegador serán útiles con assets e interacción reales; `seo-audit` ya cubre controles iniciales sin sumar redundancia. |
| Visual regression / browser testing | Posponer | Debe incorporarse cuando se apruebe una referencia visual estable. Antes produciría snapshots sin valor. |
| Static deployment / AWS | Posponer | El output ya es estático; un skill de AWS aporta valor cuando se defina bucket, CloudFront, dominios y CI/CD. |
| Copywriting / CRO | No instalar por ahora | Esta es una presentación privada consultiva, no una landing transaccional pública; el contenido necesita validación estratégica antes de optimización CRO. |
| Image optimization | Cubierto | `seo-images` cubre el problema sin otro skill redundante. |
| Motion / interaction | Posponer | El brief exige primero CSS/vanilla y aún no hay interacción aprobada. Se reevaluará solo si la narrativa supera esas capacidades. |

Cada incorporación futura debe resolver un problema presente, no hipotético, y actualizar esta tabla y `skills-lock.json`.
