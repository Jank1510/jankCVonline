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


