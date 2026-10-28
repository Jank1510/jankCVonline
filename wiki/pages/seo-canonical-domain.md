# Configuración SEO y Dominio Canónico

Documentación de la configuración de SEO técnico y resolución de bucle de redirección canónica en el frontend.

## Contexto y Diagnóstico
Previamente, el proyecto mantenía referencias al dominio de NAS (`https://nas-jankos.com/`) en el archivo CNAME, etiquetas meta, sitemap y directivas de robots. Esto generaba inconsistencias de indexación y bucles de redirección con respecto al dominio de producción público `https://jankostech.com/`.

## Dominio Oficial
- **Dominio Principal de Producción:** `https://jankostech.com/`
- **Dominio CNAME:** `jankostech.com`

## Archivos Intervenidos
1. **`src/CNAME`**:
   - Contenido unificado exactamente a `jankostech.com` para GitHub Pages / hosting estático.
2. **`src/index.html`**:
   - `<link rel="canonical" href="https://jankostech.com/">`
   - `<link rel="icon" type="image/svg+xml" href="assets/img/favicon-jk.svg?v=JK_SVG">` (tipo MIME corregido de `image/png` a `image/svg+xml`).
   - `<link rel="alternate icon" href="favicon.ico">` (soporte y fallback directo a favicon raíz).
   - `og:url`: `https://jankostech.com/`
   - `og:image`: `https://jankostech.com/assets/preview.png`
   - `twitter:image`: `https://jankostech.com/assets/preview.png`
   - Metadatos estructurados JSON-LD (`ProfessionalService` y `Person`) apuntando a `https://jankostech.com/`.
3. **`angular.json`**:
   - Inclusión de `"src/favicon.ico"` en la sección `architect.build.options.assets` para resolver el error 404 en la raíz `/favicon.ico`.
4. **`src/site.webmanifest`**:
   - `name` y `short_name` actualizados a `JANKOS Tech` con icono enlazado a `iconApp.ico`.
5. **`src/404.html`**:
   - Título actualizado a `JANKOS Tech | Redirigiendo` y enlace de retorno actualizado al dominio canónico `https://jankostech.com/`.
6. **`src/robots.txt`**:
   - Directiva de sitemap: `Sitemap: https://jankostech.com/sitemap.xml`.
7. **`src/sitemap.xml`**:
   - Ubicación canónica: `<loc>https://jankostech.com/</loc>`.

## Restricciones
- La lógica de componentes Angular y estilos CSS se mantienen intactos según directiva de intervención quirúrgica.
- Los subdominios de servicios externos o microservicios (como `https://ia.nas-jankos.com/`) se conservan en enlaces específicos de portafolio/perfil según corresponda.
