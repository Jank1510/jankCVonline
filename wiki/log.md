# LLM Wiki — Bitácora Cronológica (jankCVonline)

## [2026-10-27] update | Indicador de scroll Bajar y preservación de botón en Hero
- Retiro del botón secundario «Descargar CV» en la sección principal Hero preservando intacto «Contactar / Cotizar».
- Incorporación del indicador accesible de scroll vertical con flecha animada y texto «Bajar».
- Desplazamiento suave con soporte de teclado, historial de navegación y compatibilidad con `prefers-reduced-motion`.
- Preservación independiente de ramas de desarrollo previo sin alteraciones al resto del feed.

## [2026-10-26] fix | Unificación de dominio canónico SEO a jankostech.com
- Corrección de etiquetas canónicas, Open Graph, Twitter cards y schema JSON-LD en `src/index.html`.
- Actualización de directiva en `src/robots.txt` a `https://jankostech.com/sitemap.xml` y `<loc>` en `src/sitemap.xml`.
- Modificación de `src/CNAME` para establecer `jankostech.com` como host raíz oficial.
- Creación de documentación técnica en `wiki/pages/seo-canonical-domain.md`.

## [2026-10-18] update | Integración final de muestras Marketplace 1 y 2 en Litofanías
- Recepción confirmada de `marketplace1.mp4` (5.05 MB) y `marketplace2.mp4` (4.65 MB) en `/DATA/media/catalogo-3d/litofanias/`.
- Validación técnica: códec H.264 High Profile, faststart (moov al inicio) y decodificación verificada vía CDN.
- Integración en las posiciones 1 y 2 de "Litofanías y lámparas", preservando las 8 muestras anteriores (10 en total).
- Actualización de documentación en `wiki/pages/catalogo-3d.md`.

## [2026-10-18] update | Integración de nuevos videos al catálogo 3D
- Inspección técnica y verificación de streams H.264 / faststart para videos en NAS (`powerbank.mp4`, `llaverolitofania.mp4`).
- Incorporación de muestras prioritarias en tarjetas "Prototipado funcional" y "Llaveros NFC".
- Verificación de ausencia de `marketplace1` y `marketplace2` en almacenamiento NAS para reporte al usuario.
- Documentación de arquitectura de medios en `wiki/pages/catalogo-3d.md`.

## [2026-10-16] init | Inicialización de LLM Wiki en jankCVonline
- Estructura base aprovisionada en `wiki/` (`raw/`, `pages/`, `SCHEMA.md`, `index.md`, `log.md`).
- Especificación del patrón Karpathy registrada para orientación de agentes.
- Directiva y reglas operativas integradas en `AGENTS.md`.
