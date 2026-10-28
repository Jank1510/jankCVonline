# LLM Wiki — Bitácora Cronológica (jankCVonline)

## [2026-10-28] update | Ajuste UX quirúrgico en Servicios Técnicos y Catálogo 3D
- Compactación de tarjetas de mantenimiento en Experiencia eliminando pastillas redundantes al pie, logrando equilibrio visual con la trayectoria laboral adyacente.
- Reordenación en el DOM de Impresión 3D (`#app-impresion3d`): el catálogo de 6 tarjetas se presenta como primer contenido y el texto descriptivo general se ubica debajo.
- Coincidencia estricta del orden visual con el orden de lectura y navegación por teclado (sin trucos de CSS `order`), preservando WCAG 2.5.5 y responsive completo.

## [2026-10-28] fix | Corrección de objetivo táctil en summary de acordeones laborales (WCAG 2.5.5)
- Ajuste de `.desplegableExperiencia summary` con `min-height: 44px` y `box-sizing: border-box`.
- Padding vertical de `0.75rem 0` en móvil y `0.65rem 0` en escritorio para garantizar al menos 44 × 44 px de área interactiva.
- Verificación con Puppeteer a 390 × 844 y 1440 × 900: apertura, cierre, teclado, ausencia de desbordamiento horizontal y cero errores de consola.

## [2026-10-28] architecture | Rediseño minimalista del Catálogo 3D y corrección de usabilidad
- Rediseño de 6 tarjetas de `#app-impresion3d` a tarjetas blancas (#ffffff) con acentos bicromáticos (#0ea5e9 y #d97706), eliminando el esquema oscuro y la dispersión neón.
- Enfoque visual en la fotografía, tratamiento unificado de imágenes verticales (QR Bre-B) con `object-fit: contain` e inclusión de extracto descriptivo de 2 líneas.
- Botones de acción táctil de 44px («VER MUESTRAS» y «SOLICITAR DISEÑO») y controles de modal optimizados a 44 × 44px (WCAG 2.5.5).
- Sustitución de `data-aos="fade-left"` por `data-aos="fade-up"` eliminando el desbordamiento lateral de 80px en móvil, preservando intacto el comportamiento multimedia.

## [2026-10-28] fix | Ajustes de accesibilidad y usabilidad táctil móvil en Experiencia
- Altura táctil mínima de 44px (`min-height: 44px; padding: 0.75rem 1rem`) en `.btnCotizarServicio` para viewports móviles (< 700px), cumpliendo directriz WCAG 2.5.5.
- Ampliación de área táctil vertical en `.desplegableExperiencia summary` con padding de `0.5rem 0` en móvil y `0.45rem 0` en escritorio.
- Verificación exhaustiva con Puppeteer: respuesta táctil, activación por teclado (Enter/Espacio) y ausencia de desbordamiento horizontal.

## [2026-10-28] architecture | Integración de Servicios Técnicos en Experiencia (Layout 2 Columnas)
- Reestructuración de `#app-trabajos` en cuadrícula simétrica de dos columnas para escritorio y apilado secuencial móvil.
- Columna izquierda: recuperación de tarjetas técnicas de mantenimiento de computadores e impresoras con fotografías, capacidades y CTA de cotización por WhatsApp.
- Columna derecha: consolidación de trayectoria laboral (Multitintas INK y Comercializadora Internacional de Llantas) con disclosure progresivo accesible.
- Preservación íntegra de catálogo 3D (`#app-impresion3d`), identificadores de navegación y suite de pruebas unitarias (10/10 pasando).

## [2026-10-28] update | Mejora de perfil profesional, experiencia y clasificación académica
- Reclasificación académica: traslado de «Técnico en Programación Web» a «Formación Académica» y depuración de «Cursos y Certificaciones».
- Renombramiento integral de «Trabajos» a «Experiencia» en navegación (escritorio y móvil) y encabezado visible, preservando el anclaje `#app-trabajos`.
- Reducción de carga textual y divulgación progresiva mediante tarjetas compactas en Sobre Jankos y acordeón `<details>` para logros/competencias en Experiencia.
- Creación de documentación modular en `wiki/pages/perfil-y-experiencia.md` y actualización del catálogo general en `wiki/index.md`.

## [2026-10-28] architecture | Alineación de secciones DOM con navegación y unificación de Sobre Jankos
- Reordenamiento del DOM en `app.component.html` para coincidir exactamente con el menú: Inicio, Impresión 3D, Proyectos, Trabajos, Sobre Jankos y Cotización.
- Unificación de Educación dentro de Sobre Jankos: eliminación del encabezado redundante de Educación y de la línea divisoria `<hr>` interna, conservando un único título «Sobre Jankos».
- Actualización de anclajes de desplazamiento en Hero (`inicio.component.html/ts`) y Contacto hacia `#app-impresion3d` para evitar anclajes rotos.

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
