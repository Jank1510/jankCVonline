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

## 3. Síntesis y Divulgación Progresiva (Scannability)

- **Experiencia Laboral:**
  - Presentación concisa con cargo, empresa, período y síntesis operativa.
  - Máximo 2 a 3 funciones principales por rol.
  - Divulgación progresiva mediante `<details>` accesible para logros específicos y badges de aptitudes técnicas.
- **Sobre Jankos:**
  - Tarjetas duales compactas: *Perfil Profesional* y *Propósito & JANKOS Tech*.
  - Reducción de párrafos extensos a resúmenes de alto impacto orientados a capacidades técnicas y valor operativo.
  - Banner CTA de disponibilidad laboral («Disponible para oportunidades y proyectos»).
