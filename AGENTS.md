# AGENTS.md

Guía permanente para agentes de IA y desarrolladores que trabajen en la presentación comercial de Premio Skinko a las Artes 2027.

## Objetivo y alcance

Este repositorio construye una presentación comercial privada de Bandadas dirigida al equipo de Skinko. Expone una oportunidad estratégica y una propuesta de programa cultural. **No es todavía la landing pública de convocatoria para artistas**: no debe incluir mecánicas de postulación, llamados públicos ni afirmaciones de lanzamiento sin aprobación.

La narrativa parte de Skinko y su territorio “The Art of Skin”; Bandadas aparece después como el sistema operativo capaz de convertir una activación en un programa. El sitio debe sentirse específico, editorial y premium, no como una plantilla SaaS.

## Principios no negociables

- PERFORMANCE
- SEO
- ACCESSIBILITY
- SEMANTIC HTML
- MOBILE FIRST
- LOW MAINTENANCE
- STATIC-FIRST
- PROGRESSIVE ENHANCEMENT
- AGENT READABILITY
- COMPONENTIZATION
- CONTENT / PRESENTATION SEPARATION
- NO UNNECESSARY JS
- NO UNNECESSARY DEPENDENCIES

## Veracidad y estado del contenido

Todo dato sensible debe declarar uno de estos estados tipados:

- `CONFIRMED`: hecho verificable y aprobado; puede redactarse como realidad.
- `PROPOSED`: idea, partnership, aplicación o cronograma tentativo; siempre debe rotularse como propuesta o posibilidad.
- `CASE_IN_PROGRESS`: evidencia real de un caso todavía en curso; nunca insinuar cierre o resultados finales.

No inventar métricas, participantes, visitas, conversiones, alcance, ROI, ganadores, alianzas ni compromisos. La vinculación con el Museo Nacional de Arte Oriental es `PROPOSED`. Premio GES a las Artes 2026 es `CASE_IN_PROGRESS`. Ante una duda, conservar lenguaje condicional y pedir validación.

## Stack

- Astro 5 como framework y generador estático.
- TypeScript estricto.
- Tailwind CSS 3.4.x mediante PostCSS y Autoprefixer.
- `@astrojs/sitemap` para sitemap.
- `@astrojs/check` para validación.
- pnpm 9.15.0.
- Target: archivos estáticos para AWS S3 + CloudFront.

No reemplazar Astro. No agregar React, Framer Motion, GSAP, runtimes UI ni librerías de componentes sin necesidad demostrable y aprobación explícita.

## Arquitectura

```txt
src/
  components/ui/       UI reutilizable y pequeña
  components/common/   piezas compartidas de sitio
  layouts/             documento, metadata y estructura común
  sections/            secciones completas de la narrativa
  pages/               rutas
  styles/              estilos globales y tokens
  content/skinko/      contenido editable tipado
  seo/                  metadata y Schema.org
  schemas/              contratos TypeScript del dominio
  scripts/              JavaScript cliente imprescindible
public/
  assets/ images/ fonts/ robots.txt favicon.svg
```

- Evitar carpetas profundas y abstracciones prematuras.
- Un archivo tiene un propósito claro; una sección, una responsabilidad narrativa.
- El contenido no vive disperso dentro de componentes cuando puede expresarse como datos tipados.
- `public/` solo aloja archivos que Astro debe copiar sin procesamiento. Imágenes procesables futuras deben evaluarse para `src/assets/`.

## Convenciones

- Componentes Astro: `PascalCase.astro`.
- Variables, funciones y módulos TypeScript: `camelCase`.
- Tipos explícitos para props y contenido; evitar `any`.
- Imports cercanos y legibles; usar el alias `@/` solo si reduce ruido.
- HTML semántico antes que wrappers genéricos. Una única `h1` y jerarquía lógica.
- Extraer componentes únicamente ante reutilización, responsabilidad independiente o mejora real de lectura.
- Comentarios explican decisiones, no repiten el código.

## Responsive y dirección visual

- Diseñar mobile first y verificar mobile, tablet, desktop y ultra-wide.
- Evitar overflow horizontal, texto ilegible y composiciones que dependan de un viewport exacto.
- Mantener whitespace, jerarquía editorial y ritmo; evitar acumulación de cards, estética startup y gradientes tech genéricos.
- La dirección propuesta combina museo, arte contemporáneo, luxury beauty, editorial de moda, catálogo, arquitectura, chrome, glass, reflejos y piel. Es una interpretación, no una copia literal de la identidad Skinko.

## Imágenes y fuentes

- No sumar assets sin procedencia, permiso de uso y propósito narrativo claros.
- Usar dimensiones explícitas, `srcset`/`sizes` cuando aplique y formatos modernos.
- Imágenes fuera del viewport usan lazy loading; el recurso LCP se prioriza solo si está identificado.
- `alt` significativo para contenido y `alt=""` para decoración.
- Optimizar/subsetear fuentes; preferir fallbacks del sistema hasta confirmar licencias y archivos.
- Evitar video estructural pesado, canvas y WebGL salvo justificación fuerte.

## SEO y privacidad

- Centralizar title, description, canonical, Open Graph, Twitter Cards y Schema.org.
- Mantener headings, enlaces y landmarks semánticos.
- La presentación privada permanece `noindex, nofollow` y bloqueada en `robots.txt` hasta decisión explícita de publicación. La indexación debe poder habilitarse por configuración.
- No publicar URLs, claims o perfiles sociales no confirmados.

## Accesibilidad

- Objetivo mínimo WCAG 2.2 AA y Lighthouse Accessibility >= 95.
- Navegación completa por teclado, foco siempre visible, orden lógico y contraste AA.
- Usar controles nativos; nunca `div` interactivos. ARIA solo cuando la semántica nativa no alcance.
- No depender solo de color, movimiento, hover o posición para comunicar estado.
- Respetar `prefers-reduced-motion` y ofrecer equivalencia estática.

## Performance

- Objetivos Lighthouse: Performance, Accessibility, Best Practices y SEO >= 95.
- Priorizar LCP, CLS e INP: dimensiones reservadas, fuentes controladas, CSS pequeño y trabajo mínimo en main thread.
- Cero JavaScript cliente para contenido estático. No hidratar por comodidad.
- Preload únicamente para recursos críticos medidos. Sin trackers, sliders o paquetes pesados por defecto.
- Toda dependencia nueva debe documentar problema resuelto, costo aproximado, alternativas consideradas y alcance de carga.

## Interacción y animación

Orden de preferencia: HTML → CSS moderno → JavaScript vanilla → Astro island → librería externa.

- La interacción debe aclarar la narrativa; no decorar.
- Preferir sticky CSS, transforms, transitions e `IntersectionObserver` pequeño.
- Evitar scroll hijacking. La lectura y navegación deben funcionar sin JavaScript.
- Antes de una librería de motion, explicar por qué CSS/vanilla no alcanza, cuantificar su impacto, aislarla y cargarla solo donde se usa.
- Toda animación debe respetar `prefers-reduced-motion`.

## Workflow obligatorio por checkpoint

1. Leer este archivo y el brief vigente.
2. Declarar alcance y archivos previstos; no avanzar al checkpoint siguiente.
3. Inspeccionar estado del repo y cambios preexistentes.
4. Implementar el cambio mínimo coherente, sin alterar decisiones acordadas en silencio.
5. Verificar tipado, semántica, responsive, accesibilidad, SEO, performance y ausencia de JS innecesario según el alcance.
6. Ejecutar `pnpm check` y `pnpm build`; sumar tests o browser QA cuando exista UI relevante.
7. Revisar `git diff` y reportar archivos, decisiones, warnings, errores y checks.
8. Detenerse y esperar aprobación para el siguiente checkpoint.

## Checklist antes de terminar una tarea

- [ ] El alcance corresponde al checkpoint activo.
- [ ] Los estados `CONFIRMED`, `PROPOSED` y `CASE_IN_PROGRESS` son veraces y visibles.
- [ ] Contenido, presentación y SEO permanecen separados.
- [ ] HTML y headings son semánticos; teclado, foco y contraste están contemplados.
- [ ] La experiencia es mobile first y no depende de JavaScript.
- [ ] No se agregaron dependencias, hydration, imágenes o motion innecesarios.
- [ ] Imágenes tienen dimensiones/alt y las fuentes están optimizadas, si existen.
- [ ] Metadata, canonical, robots y Schema.org reflejan la privacidad vigente.
- [ ] `pnpm check` y `pnpm build` pasan.
- [ ] El diff no contiene secretos ni cambios ajenos.
