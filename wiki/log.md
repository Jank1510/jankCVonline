# LLM Wiki — Bitácora Cronológica (jankCVonline)

## [2026-10-28] update | Reordenamiento de navegación y renovación de portada 1200x630
- Reordenamiento de la navegación en menú de escritorio y móvil: 1. Inicio, 2. Impresión 3D, 3. Proyectos, 4. Trabajos, 5. Sobre Jankos, 6. Cotización.
- Ajuste de estilos geométricos y sincronización de estado activo en `aside-menu.component.ts`.
- Sustitución de `src/assets/preview.png` con la portada oficial (1200x630 px), preservando el dominio canónico `https://jankostech.com/`.
- Incorporación de etiquetas Open Graph `og:image:width`, `og:image:height` y `og:image:type` en `src/index.html`.

## [2026-10-28] fix | Corrección técnica de favicon 404, MIME SVG, manifiesto y página 404
- Inclusión de `src/favicon.ico` en `angular.json` assets para resolver el error 404 en la raíz `/favicon.ico`.
- Corrección del tipo MIME a `image/svg+xml` y adición de `<link rel="alternate icon">` en `src/index.html`.
- Actualización de marca en `src/site.webmanifest` (`name` y `short_name` establecidos en `JANKOS Tech`).
- Saneamiento de `src/404.html` actualizando título y enlace de retorno al dominio canónico `https://jankostech.com/`.

## [2026-10-27] update | Consolidación Fases 1–4: Simplificación de fondo y Hero a pantalla completa
- Retiro de 150 iconos flotantes multicolor neón y lienzo tecnológico, estableciendo fondo neutro sobrio y profesional.
- Saneamiento de listener huérfano mouseMove y variable positionBackground en inicio.component.
- Rediseño minimalista de una sola columna con protagonismo tipográfico absoluto para «JANKOS».
- Retiro definitivo de acceso secundario a JankOS en Hero, enfocando la conversión en «Contactar / Cotizar» (#app-cotizacion).
- Dimensionamiento a pantalla completa (100svh / 100vh) con centrado en área útil y transición inmediata a #app-servicios.
- Preservación íntegra del indicador de desplazamiento móvil con chevrón minimalista (< 700px).

## [2026-10-27] update | Refinamiento de indicador de scroll exclusivo para móvil
- Eliminación del texto «Bajar», sustituyéndolo por un chevrón SVG estilizado y minimalista.
- Visibilidad restringida exclusivamente a viewports móviles (< 700px), permaneciendo oculto en desktop y tablet.
- Animación vertical sutil optimizada y respeto a la preferencia de movimiento reducido.

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
