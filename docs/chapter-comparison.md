# Propuesta alternativa en /nueva

Estado: PROPOSED. Versión de comparación solicitada tras revisar la reunión del 2 de octubre de 2026. La portada `/` conserva la propuesta anterior.

## Dirección aprobada para explorar

SKINKO ocupa el centro: identidad, contenido, comunidad y vínculos. Una convocatoria para una obra de sitio específico permanece como primera experiencia propuesta, con nombre, formato, criterios y espacio por definir junto al equipo de marca.

Secuencia: The Art of Skin → valor para SKINKO → primera experiencia → invitar, crear y presentar → dos referencias documentadas → respaldo breve de Bandadas y GES → sistema detrás del premio → decisiones compartidas.

- Corea aparece solo como una posibilidad breve, sin instituciones ni compromisos.
- GES conserva el estado CASE_IN_PROGRESS. No se agregan métricas ni resultados.
- Se omite la ubicación de la activación antecedente hasta validar la diferencia entre las fuentes existentes.
- Se reutiliza el visual conceptual de participación, identificado como tal. No representa documentación de una activación.
- Los contenidos propuestos no garantizan ventas, prensa, audiencia ni alianzas.
- El calendario se define tras acordar objetivo, alcance, responsabilidades y presupuesto.

## Implementación

Contenido tipado en `src/data/skinko/chapterProposal.ts`, contrato en `src/schemas/chapter.ts`, ocho secciones y estilos limitados a `.chapter-page`. Se reutiliza `HiddenSystem` con los textos originales de `nueva.ts`, su animación CSS y una variante violeta; el cierre sigue siendo el último bloque. Sin nuevas dependencias ni JavaScript cliente. Metadata propia y privacidad heredada del layout común.

Antes de una presentación externa, validar materiales de marca y permisos ya señalados en el inventario de assets. Esta variante no agrega assets externos.
