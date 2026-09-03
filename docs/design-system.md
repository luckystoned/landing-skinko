# Design system preliminar

Estado: **PROPOSED**. Los tokens técnicos están implementados para habilitar composición; fuentes, accent y aplicaciones visuales requieren aprobación antes del Checkpoint 3.

## Concepto visual

**A living exhibition dossier: classical frame, contemporary surface, operational core.**

El sistema combina una estructura editorial precisa con superficies de beauty y un registro documental. El marco clásico aparece en proporción, serif, eje y pausa; lo contemporáneo aparece en escala, crop, fotografía, reflejo y montaje. El núcleo operativo aparece en índices, captions, líneas y documentos reales.

## Color

| Token | Valor preliminar | Uso |
| --- | --- | --- |
| `bg-primary` / `canvas` | `#F4F2ED` | Papel cálido general. |
| `bg-secondary` / `surface` | `#FBFAF7` | Pausas, documentos y superficies elevadas sin sombra. |
| `fg-primary` / `ink` | `#12110F` | Texto principal y fondos oscuros. |
| `fg-muted` / `muted` | `#68655F` | Captions y texto secundario con contraste controlado. |
| `border` / `line` | `#D5D1C9` | Reglas editoriales y divisores. |
| `metal` | `#8C9093` | Aproximación plana para índices; no simula chrome. |
| `accent` | `#665683` | Foco y annotations puntuales; pendiente de aprobación. |
| `on-dark` | `#F8F7F3` | Texto sobre tinta. |

No usar gradientes para “fabricar” chrome. La materialidad metálica depende de fotografía o 3D con derechos confirmados.

## Tipografía

### Roles actuales sin descarga

- `DISPLAY`: Georgia → Times New Roman → serif. Titulares conceptuales y números de gran escala.
- `EDITORIAL`: misma familia serif durante el prototipo para evitar carga adicional; citas o statements.
- `BODY`: Helvetica Neue → Arial → sans-serif. Argumento en español.
- `UTILITY`: Arial → sans-serif. Eyebrows, captions, estados e índices.

### Familias candidatas

| Opción | Roles | Licencia / disponibilidad | Pesos aproximados | Motivo |
| --- | --- | --- | --- | --- |
| Canela + Helvetica Neue/Arial | Display + body | Canela es comercial de [Commercial Type](https://commercialtype.com/uploads/0623/515f26a6d02ab06d01e3433d802f895d9adb4cfaa1e3432700871d7e42082218/Canela_Text-family.pdf); requiere licencia web. Sans del sistema sin descarga. | Canela Light/Regular; sans Regular/Medium | Elegancia sobria entre fashion y catálogo, sin aspecto heritage rígido. |
| Suisse Works + Suisse Int’l | Editorial/display + body/utility | Familia comercial de [Swiss Typefaces](https://www.swisstypefaces.com/fonts/suisse/); admite self-hosting según licencia. | Works Regular/Book; Int’l Regular/Medium | Sistema coherente, cultural y extremadamente preciso. Mayor costo y menor contraste expresivo. |
| Instrument Serif + Inter | Display + body/utility | Ambas bajo SIL OFL; [Instrument Serif](https://github.com/Instrument/instrument-serif) e [Inter](https://rsms.me/inter/) pueden self-hostearse. | Instrument Regular; Inter 400/500/600 | Alternativa gratuita de bajo riesgo, expresiva en titulares y robusta en lectura. |

Recomendación preliminar: probar **Canela + sans del sistema** y **Instrument Serif + Inter** con copy real antes de licenciar. Cargar únicamente WOFF2 y los pesos usados.

## Type scale

| Rol | Escala | Line-height |
| --- | --- | --- |
| `display-xl` | `clamp(3.75rem, 12vw, 10rem)` | `0.86` |
| `display-lg` | `clamp(3rem, 8vw, 7.5rem)` | `0.90` |
| `h1` | `clamp(2.625rem, 6vw, 5.5rem)` | `0.94` |
| `h2` | `clamp(2.125rem, 4.5vw, 4rem)` | `0.98` |
| `h3` | `clamp(1.5rem, 2.5vw, 2.25rem)` | `1.05` |
| `body-lg` | `clamp(1.125rem, 1.5vw, 1.375rem)` | `1.50` |
| `body` | `clamp(1rem, 1vw, 1.125rem)` | `1.55` |
| `caption` | `0.875rem` | `1.40` |
| `eyebrow` | `0.75rem` | `1.20`, tracking `0.10em` |

Display se reserva para frases breves. Body nunca debe adoptar line-height comprimido.

## Spacing y ritmo

- Gutter: `clamp(1rem, 4vw, 3rem)`.
- Section regular: `clamp(5rem, 12vw, 11rem)`.
- Section compact: `clamp(3.5rem, 8vw, 7rem)`.
- Separación interna principal: `clamp(1.5rem, 4vw, 4rem)`.
- Escala discreta para microespacios: 4, 8, 12, 16, 24, 32, 48 y 64 px.

No todas las secciones usan `section regular`: beats conectados comparten fondo y reducen el corte; Hero, Hidden System y cierre admiten mayor altura.

## Grid

- Mobile `< 640`: 4 columnas, gutter 16 px, gap 12 px.
- Tablet `640–1023`: 8 columnas, gutter 24–32 px, gap 16 px.
- Desktop `1024–1599`: 12 columnas, gutter 40–48 px, gap 20–24 px, canvas máximo 1440 px.
- Wide `>= 1600`: 12 columnas dentro de 1440 px; el espacio adicional es margen, no columnas nuevas.

Texto largo: máximo aproximado de 42rem. La asimetría surge de spans y offsets sobre la misma grilla.

## Bordes, radios y profundidad

- Línea de 1 px para índice, timeline, captions y documentos.
- Radio por defecto: 0. Elementos funcionales pequeños pueden usar 2–4 px.
- Sin pills salvo estados breves cuyo texto lo requiera.
- Sin sombras de card. La profundidad se expresa por superposición real de planos, crop o contraste de fondo.

## Imágenes

- Cuatro roles: `atmosphere`, `object`, `space`, `evidence`.
- Ratios sugeridos: 16:9 para contexto, 4:5/3:4 para objeto, 1:1 para detalle, ratio nativo para documentos.
- Hero/LCP: AVIF + WebP/JPEG fallback, ideal <200 KB, dimensiones explícitas, sin lazy loading y `fetchpriority="high"` solo después de medir.
- Below-fold: ideal <100–200 KB, `loading="lazy"`, `decoding="async"`, `srcset` y `sizes` acordes a la grilla.
- Alt describe contenido y función en contexto; decoración usa `alt=""`.
- Toda figura real lleva crédito/permiso cuando corresponda.

## Status language

- `CONFIRMED`: sin badge por defecto; la voz declarativa alcanza.
- `PROPOSED`: micro-label editorial contextual (`PROPUESTA`, `POTENTIAL PARTNERSHIP`, `PROPOSED TIMELINE`) o lenguaje condicional.
- `CASE_IN_PROGRESS`: `CASE IN PROGRESS` visible al ingresar al caso GES.

Los estados no usan semáforos, chips de dashboard ni color como único indicador.

## Interacción

- La página completa debe leerse sin JS.
- CSS sticky, masks, transforms y opacity son la primera capa.
- `IntersectionObserver` solo sincroniza estados visuales; nunca inserta contenido esencial.
- Movimiento de 300–700 ms para cambios locales; escenas responden al scroll sin modificar su velocidad.
- `prefers-reduced-motion` elimina transforms y presenta el estado final o una secuencia vertical.

## Responsive

- Mobile conserva orden y copy completo; no es una versión resumida.
- Las secuencias horizontales se convierten en rails verticales o listas numeradas.
- Sticky solo se activa cuando altura y ancho permiten contexto suficiente.
- No ocultar captions, estados o evidence en pantallas pequeñas.

## Componentes propuestos

La estrategia detallada está en [component-strategy.md](./component-strategy.md). No se implementaron componentes nuevos en este checkpoint.

## DO

- Diseñar con copy y assets reales.
- Usar escala, silencio y alineación antes que efectos.
- Mantener captions, créditos y estados cerca del contenido que califican.
- Probar cada spread en 320 px y en 1440 px.
- Conservar una lectura lineal completa.

## DON'T

- Crear una card por concepto.
- Agregar estilos por sección fuera de tokens sin justificar.
- Simular chrome con gradientes o glassmorphism.
- Usar serif display en párrafos largos.
- Ocultar información imprescindible tras hover, reveal o desktop-only.
- Introducir fuentes, scripts o librerías sin aprobación y medición.

