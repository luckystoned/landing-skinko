# Asset strategy and inventory

Inventario final previo a presentación. `Source` identifica a quién solicitar el material; no implica autorización. Ningún asset externo fue descargado ni integrado.

## Reglas de ingestión

1. Registrar propietario, autor, permiso, crédito obligatorio y fecha de aprobación.
2. Conservar masters fuera de `public/` y generar derivados web trazables.
3. Logos en SVG aprobado; fotografías en AVIF/WebP con fallback cuando corresponda.
4. Definir dimensiones, `srcset`, `sizes`, alt y rol antes de integrar.
5. Hero/LCP ideal menor a 200 KB y sin lazy loading. Resto ideal 100–200 KB, lazy + async decode.
6. Anonimizar datos personales y material interno de GES.
7. Una relación `PROPOSED` nunca puede representarse visualmente como alianza confirmada.

## REQUIRED BEFORE CLIENT PRESENTATION

| Área | Asset | Source | Uso / condición | Formato ideal |
| --- | --- | --- | --- | --- |
| SKINKO | Logo oficial y variantes | Equipo SKINKO / brand kit | Firma y convivencia de marcas; validar clearspace | SVG |
| SKINKO | Brand guidelines vigentes | Equipo SKINKO | Validar color, tipografía y restricciones | PDF + vinculados |
| SKINKO | Hero oficial `The Art of Skin` | SKINKO / productora / fotógrafo | Reemplazar el placeholder principal; confirmar derechos comerciales | 4:5, master 2400 px |
| SKINKO | `The Living Sculptures` | SKINKO / productora | Evidencia visual de activación | 4:5 o 3:2, 2400 px |
| SKINKO | `Become the Artist` | SKINKO / productora | Evidencia de participación | 16:9 y 4:5 |
| SKINKO | `The Masterpiece` | SKINKO / productora | Cierre del antecedente visual | 3:2 o 4:5, 2400 px |
| GES | Landing real | Bandadas / proyecto GES | Evidencia del caso; revisar publicación | PNG master + WebP 16:10 |
| GES | Flow / plataforma | Bandadas / proyecto GES | Formulario, validaciones y experiencia; anonimizar | PNG master + WebP 4:3 |
| GES | Comunicación | Bandadas / proyecto GES | Identidad y difusión; aprobar piezas mostradas | 1080×1350 o 1080×1920 |
| Bandadas | Logo maestro | Bandadas | Firma final aprobada | SVG |

## NICE TO HAVE

| Área | Asset | Source | Uso / condición | Formato ideal |
| --- | --- | --- | --- | --- |
| SKINKO | Galerías Pacífico / arquitectura | SKINKO, Galerías Pacífico o fotógrafo | Contexto arquitectura × beauty; no tomar del sitio público | 16:9 y vertical |
| SKINKO | Interactive screens | SKINKO / integrador audiovisual | Contexto de interacción existente | Foto 3:2 + captura 16:9 |
| SKINKO | Store / retail | SKINKO / arquitecto / fotógrafo | Posible aplicación espacial | 16:9 y 3:2 |
| SKINKO | Products / objects | SKINKO / marcas distribuidas | Posibles soportes; validar terceros | Cutouts + 4:5 |
| GES | Bases y documentación | Bandadas / cliente GES | Evidencia legal parcial y anónima | PDF + crops 3:2 |
| GES | Timeline o dashboard | Bandadas / proyecto GES | Operación real solo si suma claridad; anonimización crítica | 1600×1000 |
| Bandadas | Sistema de identidad | Bandadas | Apoyo de firma si aporta al cierre | SVG/PDF |
| Institución | Imagen autorizada | Museo / fotógrafo / artista | Solo tras validar conversación, derechos y encuadre `PROPOSED` | Ratio nativo, 2400 px |

## LATER / PUBLIC OPEN CALL

| Área | Asset | Momento / condición |
| --- | --- | --- |
| Premio | Identidad pública definitiva | Después de aprobación conceptual y de marca |
| Premio | Key visual y campaña de convocatoria | Después de definir bases, calendario y permisos |
| Premio | Packaging, objeto y producto finales | Después de concepto, dielines, materiales y derechos aprobados |
| Premio | Sitio y UI pública de postulación | Después de aprobar alcance funcional y privacidad |
| Premio | Retratos, obras y perfiles de artistas | Solo con consentimiento y selección confirmada |
| Premio | Jurado, institución, alianzas y logos asociados | Solo tras acuerdos confirmados |
| Proyecto | OG image pública | Al decidir publicación; 1200×630, menor a 300 KB |
| Proyecto | Favicon e iconografía finales | Con identidad pública aprobada |
| Proyecto | Fuentes definitivas | Tras confirmar licencia y subset WOFF2 |

## Nomenclatura y entrega

- Nombres en minúscula y con guiones: `skinko-art-of-skin-living-sculpture-01-1600.avif`.
- Incluir manifest con `asset`, `owner`, `author`, `rights`, `credit`, `status`, `section` y `altDraft`.
- Orden de solicitud: brand kit → selección SKINKO → paquete GES anonimizado → assets opcionales.
