# Component strategy

Estado: **PROPOSED**. No se implementaron componentes nuevos en este checkpoint.

## Candidatos con reutilización real

| Componente | Responsabilidad | Usos esperados | Decisión |
| --- | --- | --- | --- |
| `SectionLabel` | Número de capítulo + eyebrow | 8–12 secciones | Crear cuando comience implementación. |
| `EditorialHeading` | Titular display con eyebrow y ancho controlado | Hero, Opportunity, Hidden System, cierre | Crear solo si las props evitan duplicación real. |
| `StatusBadge` | Estado editorial contextual | Partnership, GES, roadmap | Ya existe; refinar labels, no convertir en chip. |
| `Figure` | Imagen/picture, ratio, alt, caption, crédito y estado de permiso | Art of Skin, Possibilities, GES | Prioridad alta cuando lleguen assets. |
| `PhaseLabel` | Número, nombre y copy corto de fase | Journey y posiblemente Roadmap | Crear si ambos comparten semántica; si no, mantener local. |
| `EvidenceItem` | Figure o documento + caption + hecho verificable | GES | Crear después de auditar los assets reales. |

## Mantener dentro de la sección

- Transformaciones de Opportunity.
- Archivo explotado de Hidden System.
- Composición de possibilities.
- Hero y Final CTA.

Son piezas narrativas específicas; extraerlas a una biblioteca genérica ocultaría su intención.

## No crear

- `Card`, `Button`, `Container` o `Stack` genéricos sin casos reales.
- Sistema de variants complejo.
- Wrapper para cada tag semántico.
- Componentes React o islands para layout estático.

## Reglas de implementación

- Props pequeñas, tipadas y orientadas a contenido.
- Variantes finitas; no props que acepten clases arbitrarias por defecto.
- Semántica nativa y slot solo cuando exista una composición legítima.
- El contenido vive en `src/content/skinko`, no en defaults del componente.

