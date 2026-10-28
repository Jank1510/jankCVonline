# Perfil Profesional y Experiencia

Documentación de la arquitectura de contenidos para el perfil profesional, la trayectoria laboral y la formación técnica en [[index|jankCVonline]].

## 1. Clasificación Académica y Certificaciones

Para reflejar con rigor los títulos formales y evitar confusión con formación continua:

- **Formación Académica (`formacionAcademica`):**
  - **Ingeniería en Sistemas** — UNAD Colombia | En progreso (2025 - 2030)
  - **Tecnólogo en Mecatrónica** — SENA | Jun. 2019 - Oct. 2022
  - **Técnico en Programación Web** — UNAB | May. 2021 - Dic. 2021
  - **Técnico en Mantenimiento de Equipos de Cómputo** — SENA | Nov. 2018
- **Cursos y Certificaciones (`cursosCertificaciones`):**
  - **Conceptualización del Lenguaje C++** — SENA | Formación complementaria
  - **Fundamentos de Angular** — Udemy | Formación complementaria
  - **Ofimática** — SENA | Jul. 2017 (40 horas)

## 2. Renombramiento de Sección: Experiencia

- **Etiqueta visible:** Actualizada de «Trabajos» a **«Experiencia»** tanto en la barra lateral de escritorio (`.aside_desktop`) como en el menú móvil (`.aside_Ipad`).
- **Título de sección:** `<hr><span>Experiencia</span>` dentro de [`ExperienciaComponent`](src/app/content/experiencia/experiencia.component.ts).
- **Estabilidad de anclajes:** Se preserva el identificador técnico `#app-trabajos` en el DOM para evitar rotura de enlaces externos o marcadores.

## 3. Síntesis, Servicios Técnicos y Divulgación Progresiva

- **Reestructuración en Doble Columna (Escritorio):**
  - **Columna Izquierda — Servicios Técnicos Especializados:** Recupera y presenta las tarjetas de servicio técnico comercial (`tarjetaServicio`):
    - *Mantenimiento de computadores:* Diagnóstico de hardware/software, optimización, formateo e instalación con acento `#0ea5e9` y fotografía técnica (`servicio-tecnico-computadores.png`).
    - *Mantenimiento de impresoras:* Diagnóstico, limpieza de cabezales, calibración y sistemas continuos con acento cobrizo `#d97706` y fotografía técnica (`servicio-tecnico-impresora-epson.png`).
    - Botones de acción directa con cotización por WhatsApp (`https://wa.me/JankosTech?text=...`).
  - **Columna Derecha — Trayectoria y Soporte Laboral:**
    - Presentación concisa con cargo, empresa, período y síntesis operativa (Multitintas INK y Comercializadora Internacional de Llantas).
    - Máximo 2 a 3 funciones principales por rol.
    - Divulgación progresiva mediante acordeón accesible `<details>` para logros específicos y badges de aptitudes técnicas.
- **Comportamiento en Móvil (`< 900px`):**
  - Apilado vertical natural que prioriza los Servicios Técnicos Especializados primero y la Trayectoria Laboral a continuación, optimizando la conversión comercial inmediata.
  - Usabilidad táctil móvil (WCAG 2.5.5): botón de WhatsApp `.btnCotizarServicio` con altura mínima de 44 px (`min-height: 44px; padding: 0.75rem 1rem`) y área de interacción del acordeón `<summary>` con altura interactiva mínima de 44 px (`min-height: 44px; padding: 0.75rem 0` en móvil y `0.65rem 0` en escritorio).
- **Sobre Jankos:**
  - Tarjetas duales compactas: *Perfil Profesional* y *Propósito & JANKOS Tech*.
  - Reducción de párrafos extensos a resúmenes de alto impacto orientados a capacidades técnicas y valor operativo.
  - Banner CTA de disponibilidad laboral («Disponible para oportunidades y proyectos»).
