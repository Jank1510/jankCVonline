# Catálogo 3D y Gestión de Medios Multimedia

> Módulo de presentación interactiva de muestras de impresión 3D, litofanías, llaveros NFC y prototipado en [[jankCVonline]].

## 1. Arquitectura de Medios
- **Servidor de Medios (NAS)**: Servido de forma desacoplada vía Caddy y Cloudflare en el subdominio `https://media.nas-jankos.com/`.
- **Ruta física en host**: `/DATA/media/catalogo-3d/` montada en Caddy.
  - Subdirectorios: `prototipado/`, `nfc/`, `litofanias/`, `piezas-mecanicas/`, `Qr/`.
- **Directiva Frontend**: En Angular no se emplean rutas locales del NAS ni assets pesados embebidos en el bundle; los recursos se cargan vía CDN público `https://media.nas-jankos.com/<categoria>/<archivo>`.

## 2. Componente de Visualización
- **Definición**: Implementado en [[HabilidadesComponent]] (`src/app/content/habilidades/habilidades.component.ts`).
- **Estructura de Datos**:
  - `ProductItem`: Representa cada tarjeta de servicio (`Litofanías y lámparas`, `Llaveros NFC`, `Prototipado funcional`, `Piezas mecánicas`, `QR de pagos para negocios`).
  - `CatalogItem`: Define cada muestra con `{ tipo: 'imagen' | 'video', src: string, titulo?: string, descripcion?: string }`.
- **Modal Interactivo**:
  - Contenedor con relación de aspecto cuadrada 1:1 (`aspect-ratio: 1 / 1; object-fit: cover`).
  - Reproducción con `playsinline`, `muted`, `preload="metadata"` y arranque automático en navegación.
  - Navegación por teclado (Flecha izquierda, Flecha derecha, Escape), botones y paginación por indicadores.

## 3. Muestras Integradas Recientemente
- **Prototipado**: `https://media.nas-jankos.com/prototipado/powerbank.mp4` (Carcasa y prototipo funcional de powerbank con marca Jankos).
- **Llaveros NFC**: `https://media.nas-jankos.com/nfc/llaverolitofania.mp4` (Llavero inteligente con litofanía integrada).
- **Litofanías**:
  - `https://media.nas-jankos.com/litofanias/marketplace1.mp4` (Lámpara litofanía cúbica iluminada con texto grabado).
  - `https://media.nas-jankos.com/litofanias/marketplace2.mp4` (Retrato litofánico retroiluminado con soporte personalizado Angie).

## 4. Auditoría de Cargas FileBrowser (2026-10-18)
- Carga inicial: `powerbank.mp4` (17:18) y `llaverolitofania.mp4` (17:20) integrados en Prototipado y NFC.
- Carga posterior: `marketplace1.mp4` (19:04) y `marketplace2.mp4` (19:04) recepcionados en `/DATA/media/catalogo-3d/litofanias/`, validados con H.264 High Profile, faststart habilitado y reproducibilidad HTML5.

## 5. Rediseño Minimalista y Usabilidad Comercial (2026-10-28)
- **Tarjetas Blancas y Sobrias:** Sustitución del fondo oscuro `#2a2a2a` y la dispersión cromática neón por tarjetas blancas `#ffffff` con bordes `#e4e4e7` y radio de 12 px (`0.75rem`), unificadas con la estética global de JANKOS TECH.
- **Acentos Bicromáticos:** Esquema restringido a 2 tonos corporativos: Cian tecnológico `#0ea5e9` (NFC, Prototipado, QR, CTA) y Naranja de fabricación `#d97706` (Litofanías, Piezas mecánicas).
- **Proporción y Encuadre Multimedia:** Incorporación de regla `object-fit: contain` para imágenes verticales (QR Bre-B) evitando recortes destructivos.
- **Extracto Descriptivo:** Integración de extracto de descripción de 2 líneas (`.tarjeta-desc`) derivado de `item.descripcion`.
- **Accesibilidad Táctil (WCAG 2.5.5):** Altura mínima de 44 px en botones «VER MUESTRAS» y «SOLICITAR DISEÑO». Controles de cierre y navegación del modal ampliados a 44 × 44 px.
- **Resolución de Desbordamiento:** Reemplazo de `data-aos="fade-left"` por `data-aos="fade-up"` en `.content-tarjetas`, erradicando el desbordamiento horizontal en móvil.
- **Priorización Visual del Catálogo (DOM Reordering):** Reordenación semántica del HTML colocando las 6 tarjetas del catálogo como primer contenido visual tras el encabezado de sección (`margin-top: 0`), ubicando el bloque descriptivo general y la tarjeta de proyectos debajo para elevar el impacto comercial y preservar el orden secuencial de lectura y foco (accesibilidad).


