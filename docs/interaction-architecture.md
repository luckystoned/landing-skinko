# Interaction architecture

Estado: **PROPOSED**. Especificación conceptual; no se implementaron interacciones ni prototipos en este checkpoint.

## Principios transversales

- El DOM contiene todo el contenido en orden lógico.
- El estado sin CSS/JS es una lectura vertical completa.
- Sticky acompaña el scroll; nunca captura rueda, touch o teclado.
- CSS controla layout, opacity, clip/mask y transforms.
- Un único `IntersectionObserver` vanilla podrá activar estados cuando CSS no alcance.
- Hover solo agrega feedback; nunca revela información exclusiva.
- Con `prefers-reduced-motion: reduce`, cada escena se vuelve lista/spread estático sin desplazamientos.
- No agregar librería de motion. Presupuesto orientativo si se usa observer futuro: <2 KB gzip propio para toda la página.

## A — Hero / The Art of Skin

**Objetivo:** partir de un territorio conocido y abrir la posibilidad del premio.

1. `THE ART OF SKIN` ocupa el campo principal.
2. `Beauty becomes art.` funciona como firma preexistente.
3. La pregunta entra en un segundo plano editorial: “What if art became part of the brand itself?”
4. El nombre `PREMIO SKINKO A LAS ARTES 2027` aparece como respuesta, no como anuncio abrupto.

Solución: dos spreads encadenados; sticky opcional en desktop, stack completo en mobile. Crossfade y leve cambio de escala CSS, sin ocultar el H1 del árbol accesible.

Reduced motion: los cuatro mensajes aparecen en orden con divisores y sin solapamiento.

## B — Activation → Platform

**Objetivo:** hacer visible el cambio de escala.

- Columna izquierda estable: `ACTIVATION`, `EVENT`, `AUDIENCE`.
- Columna derecha reemplaza o descubre: `PLATFORM`, `PROGRAM`, `COMMUNITY`.
- Una máscara recta o desplazamiento de baseline comunica transición; no morphing complejo.

Desktop: contenedor sticky con tres steps observables. Mobile: tres pares verticales con flecha semánticamente decorativa. El copy existe completo desde el HTML; los estados solo modifican énfasis.

## C — Possibilities

**Objetivo:** sugerir que una cápsula artística puede expandirse a distintos soportes.

- Índice de palabras a escala variable sobre una grilla amplia.
- Una figura/crop futuro responde al foco o step activo cuando existan assets.
- El recorrido puede usar scroll-snap únicamente en un eje nativo y nunca como carousel obligatorio.

No usar tarjetas de producto, precios, dots de carousel ni drag custom. Mobile muestra lista numerada completa.

## D — Journey

**Objetivo:** sentir avance sin perder claridad de proceso.

Elección recomendada: **vertical rail en mobile y progresión horizontal sticky en desktop**.

- `ol` de siete fases como semántica base.
- Desktop conserva rail visible y desplaza énfasis, no el documento.
- Cada fase suma una frase breve en español cuando el contenido esté aprobado.
- La línea de progreso es decorativa; números y nombres comunican posición real.

Reduced motion: rail vertical en todos los breakpoints.

## E — Hidden System

**Objetivo:** revelar que la open call visible es la superficie de un sistema operativo.

Metáfora recomendada: **exploded museum archive**.

1. Un registro central: `AN OPEN CALL`.
2. Fichas/planos emergen en el orden Strategy, Legal, Technology, Communication, Artists, Support, Jury, Evaluation, Production, Reporting.
3. Las fichas conservan una grilla de catálogo: número, función y verbo concreto.
4. Al completar el archivo, el statement sustituye el título: `WHAT LOOKS LIKE AN OPEN CALL IS ACTUALLY AN OPERATING SYSTEM.`
5. Cierre: `Bandadas operates every layer.`

No usar órbitas, nodos flotantes, partículas ni dashboard. CSS grid + sticky + transforms bastan. Si la sincronización exige JS, el observer alternará `data-active-step`; no calculará posiciones en cada scroll.

Reduced motion: archivo expandido desde el inicio, seguido por el statement. Orden DOM idéntico al orden narrativo.

## F — GES Case

**Objetivo:** pasar de hipótesis a evidencia verificable.

- Cambio de fondo y tipografía utilitaria más presente.
- Figures con screenshot, caption, fuente, fecha y estado.
- Seis workstreams funcionan como índice, no como cards equivalentes.
- Los hechos seguros aparecen cerca de la evidencia que los respalda.
- `CASE IN PROGRESS` permanece visible en encabezado; no hay contadores animados.

Sin assets, se conservan frames con aspect ratio documentado, nunca mockups inventados.

## Feasibility y decisión sobre prototipos

No se crearon prototipos. Sticky text replacement y exploded reveal son patrones realizables con CSS Grid, `position: sticky`, transforms y un observer compartido. Un sandbox ahora no validaría los riesgos reales —copy final, cantidad y ratios de assets— y agregaría código descartable. La primera prueba debe realizarse con el Hero/Opportunity aprobado en el Checkpoint 3.

## Criterios de aceptación futuros

- Lectura completa con JavaScript deshabilitado.
- Navegación por teclado y búsqueda de texto sin contenido duplicado u oculto.
- Sin layout shift al activarse una escena.
- Sin listener directo de `scroll` salvo necesidad demostrada.
- Sin animaciones en reduced motion.
- INP sin regresión medible y JS total informado después del build.

