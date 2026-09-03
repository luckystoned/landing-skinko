# Component strategy

Estado: **IN USE**. El sistema se mantiene deliberadamente pequeño y orientado a responsabilidades editoriales concretas.

## Candidatos con reutilización real

| Componente | Responsabilidad | Usos esperados | Decisión |
| --- | --- | --- | --- |
| `SectionLabel` | Número de capítulo + eyebrow | 8–12 secciones | Implementado. |
| `EditorialHeading` | Titular display con nivel y escala tipada | Hero, Opportunity y capítulos editoriales | Implementado. |
| `StatusBadge` | Estado editorial contextual | Partnership, GES, roadmap | Ya existe; refinar labels, no convertir en chip. |
| `Figure` | Imagen/picture, ratio, alt, caption, crédito y estado de permiso | Art of Skin, Hero y evidencia futura | Implementado; admite placeholder y asset real. |
| `PhaseLabel` | Número, nombre y copy corto de fase | Siete pasos de Journey y posible Roadmap | Implementado para mantener semántica y lectura consistente. |
| `EvidenceItem` | Figure documental con placeholder o asset real, caption y estado | GES | Implementado para las tres evidencias priorizadas. |

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
- El contenido vive en `src/data/skinko`, no en defaults del componente.
