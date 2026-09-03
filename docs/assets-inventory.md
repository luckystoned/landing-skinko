# Asset strategy and inventory

No se descargaron, copiaron ni generaron assets en el Checkpoint 2. `Source` identifica a quién solicitar el material, no una autorización existente.

## Reglas de ingestión

1. Registrar propietario, autor, permiso, crédito obligatorio y fecha de aprobación.
2. Conservar master original fuera de `public/`; generar derivados web trazables.
3. Logos en SVG aprobado. Fotografías en AVIF/WebP con fallback cuando sea necesario.
4. Definir `width`, `height`, `srcset`, `sizes`, alt y rol (`atmosphere`, `object`, `space`, `evidence`) antes de integrar.
5. Hero/LCP ideal <200 KB y nunca lazy. Imágenes de contenido ideal <100–200 KB, lazy + async decode.
6. No reutilizar imágenes encontradas durante visual research.
7. Assets de partnership `PROPOSED` no se usan como si existiera patrocinio o aval.

## CRITICAL

| Marca | Asset | Source | Uso | Copyright / permiso | Ideal | Sección |
| --- | --- | --- | --- | --- | --- | --- |
| Skinko | Logo maestro y variantes | Equipo Skinko / brand kit | Firma y convivencia de marcas | Pendiente; solicitar SVG + clearspace | SVG, horizontal/vertical | Hero, Closing |
| Skinko | Brand guidelines vigentes | Equipo Skinko | Validar color, tipografía y restricciones | Pendiente, uso interno | PDF + archivos vinculados | Sistema completo |
| Skinko | Campaña `THE ART OF SKIN` | Skinko / productora / fotógrafo | Probar territorio artístico existente | Pendiente; autor y alcance comercial | Masters; 16:9, 4:5 y 3:2 | Art of Skin |
| Skinko | Living Sculptures | Skinko / productora | Evidencia visual de activación | Pendiente | 2400 px lado largo; 4:5/3:2 | Art of Skin |
| Skinko | Gallery interventions / obras clásicas intervenidas | Skinko / productora / titulares de obra | Relación arte–retail | Pendiente; revisar derechos de obra y foto | 2400 px; ratio nativo | Art of Skin |
| Skinko | Galerías Pacífico / arquitectura | Skinko, Galerías Pacífico o fotógrafo | Tensión arquitectura clásica × beauty | Pendiente; no tomar del sitio público | 2560 px; 16:9 y vertical | Hero, Art of Skin |
| GES | Landing y plataforma | Bandadas / proyecto GES | Evidencia real de ejecución | Revisión interna y anonimización pendiente | PNG master + WebP; 16:10 | GES Case |
| GES | Formulario y campos dinámicos | Bandadas / proyecto GES | Evidencia de tecnología y UX | Pendiente; ocultar datos personales | PNG master + WebP; 4:3/vertical | GES Case |
| Bandadas | Logo maestro | Bandadas | Firma | Confirmar versión aprobada | SVG | Bandadas, Closing |

## IMPORTANT

| Marca | Asset | Source | Uso | Copyright / permiso | Ideal | Sección |
| --- | --- | --- | --- | --- | --- | --- |
| Skinko | Interactive screens | Skinko / integrador audiovisual | Evidencia de interacción existente | Pendiente | Foto 3:2 + captura 16:9 | Art of Skin |
| Skinko | Become the Artist | Skinko / productora | Participación de audiencia | Pendiente | Foto/video still 16:9 y 4:5 | Art of Skin |
| Skinko | The Masterpiece | Skinko / productora | Clímax del antecedente | Pendiente | 2400 px; 3:2 o 4:5 | Art of Skin |
| Skinko | Products / objects | Skinko / marcas distribuidas | Posibilidades de cápsula | Pendiente; validar marcas de terceros | Cutouts + 4:5, fondo limpio | Possibilities |
| Skinko | Store / retail | Skinko / arquitecto / fotógrafo | Aplicación espacial posible | Pendiente | 2400 px; 16:9 y 3:2 | Possibilities |
| Skinko | Packaging mockup neutro | Skinko / diseño futuro aprobado | Evaluar una aplicación sin presentar un diseño definitivo | No producir hasta aprobar concepto y dieline | Master editable + 3:4 | Possibilities |
| Skinko | Object / product mockup | Skinko / diseño o 3D futuro aprobado | Probar escala objetual de la misma idea | No producir hasta aprobar producto y materiales | Master editable + 1:1 y 4:5 | Possibilities |
| Skinko | Digital / content surfaces | Skinko / diseño futuro aprobado | Reencuadre de la cápsula en pantalla y editorial | Pendiente; sin UI ni campaña inventada | 16:9 y 3:4 | Possibilities |
| Skinko | Experience / installation frame | Skinko / productora futura | Mostrar una posible manifestación espacial | No producir como proyecto confirmado | 2400 px; 16:9 | Possibilities |
| GES | Piezas de identidad y social | Bandadas / proyecto GES | Evidencia de comunicación | Revisión de publicación pendiente | 1080×1350, 1080×1920 | GES Case |
| GES | Bases y condiciones / documentación | Bandadas / cliente GES | Evidencia legal y documental | Uso parcial/anónimo pendiente | PDF + crops 3:2 | Hidden System, GES |
| GES | Timeline y materiales de proceso | Bandadas / proyecto GES | Mostrar coordinación | Pendiente; limpiar información sensible | 1600×1000 o ratio nativo | GES Case |
| GES | Kanban / dashboard | Bandadas / proyecto GES | Operación real, solo si agrega claridad | Pendiente; anonimización crítica | 1600×1000 | GES Case |
| Bandadas | UI / plataforma | Bandadas | Capacidad tecnológica | Confirmar versión y datos visibles | PNG master + WebP; 16:10 | Bandadas Value |
| Bandadas | Sistema de identidad | Bandadas | Firma y captions | Confirmar archivos vigentes | SVG/PDF | Bandadas Value |

## OPTIONAL

| Marca | Asset | Source | Uso | Copyright / permiso | Ideal | Sección |
| --- | --- | --- | --- | --- | --- | --- |
| Skinko | Macros de piel | Sesión propia o licencia explícita | Atmósfera y transición | No adquirido | 2400 px; 1:1 y 16:9 | Hero, transitions |
| Skinko | Vidrio / chrome / reflejos | Sesión propia, 3D o licencia | Materialidad contemporánea | No adquirido; documentar IA/3D si aplica | 2400 px; múltiples ratios | Hero, Possibilities |
| Skinko | Video de activación | Skinko / productora | Contexto guiado, no estructural | Pendiente | MP4/WebM corto + poster; <2 MB objetivo | Art of Skin |
| Museo | Logo institucional | Museo Nacional de Arte Oriental | Identificación de vínculo potencial | No solicitar/usar hasta validar conversación | SVG oficial | Cultural Connection |
| Museo | Arquitectura / colección | Museo / fotógrafos / artistas | Contexto cultural potencial | Derechos complejos; no usar sin acuerdo | 2400 px; ratio nativo | Cultural Connection |
| Proyecto | OG image | Diseño futuro aprobado | Preview al compartir | Pendiente de key visual | 1200×630, <300 KB | Metadata |
| Proyecto | Favicon final | Identidad futura | Browser UI | Pendiente | SVG + PNG fallbacks | Global |
| Proyecto | Fuentes | Foundry / repositorio oficial | Sistema tipográfico | Pendiente de elección/licencia | WOFF2 subset, pesos mínimos | Global |

## Nomenclatura y entrega

- `skinko-art-of-skin-living-sculpture-01-master.tif`
- `skinko-art-of-skin-living-sculpture-01-1600.avif`
- `ges-platform-form-stage-01.webp`
- Nombres en minúscula, guiones, sin “final-final”.
- Entregar un manifest con `asset`, `owner`, `author`, `rights`, `credit`, `status`, `section`, `altDraft`.

## Orden de solicitud

1. Brand guidelines + logos Skinko/Bandadas.
2. Selección curada de 12–20 masters de `THE ART OF SKIN` con derechos.
3. Paquete GES anonimizado: landing, plataforma, formulario, piezas y proceso.
4. Retail/product y posibles soportes.
5. Assets atmosféricos o generados solo después de detectar huecos reales.
