# LLM Wiki Specification (Karpathy Pattern) — JANKOS TECH

## 1. Visión y Filosofía
Esta wiki es una base de conocimiento incremental, estructurada en Markdown y optimizada para agentes de IA (Antigravity, Codex, Kilo, OpenCode).
Sigue el principio de compilación y acumulación continua del conocimiento del código y decisiones técnicas a lo largo del ciclo de vida del proyecto.

## 2. Arquitectura de 3 Capas
1. **`wiki/raw/` (Inmutable — Fuentes primarias)**:
   - Insumos sin procesar: especificaciones, volcados de datos, reportes forenses, transcripciones y requerimientos iniciales.
   - Regla de oro: El agente solo lee de `wiki/raw/`; nunca modifica ni elimina su contenido.
2. **`wiki/pages/` (Compilada por IA — Conocimiento interconectado)**:
   - Páginas Markdown sobre arquitectura, módulos, flujos de datos, APIs, decisiones técnicas e incidentes resueltos.
   - Enlaces cruzados: Emplear enlaces estilo `[[nombre-pagina]]` o `[Nombre](nombre-pagina.md)` para relacionar conceptos.
3. **`wiki/SCHEMA.md` (Gobierno operativo)**:
   - Especificación normativa de la wiki que define las reglas para la interacción de agentes y desarrolladores.

## 3. Archivos de Control Obligatorios
- **`wiki/index.md` (Índice Maestro Categorizado)**:
  - Estructurado en las categorías: `Arquitectura`, `Módulos`, `Operaciones`, `Decisiones` e `Incidentes`.
  - Cada entrada vincula la página respectiva en `wiki/pages/` con un resumen claro en una sola línea.
- **`wiki/log.md` (Bitácora Cronológica)**:
  - Registro cronológico acumulativo (append-only) de todas las modificaciones relevantes.
  - Formato parseable obligatorio:
    `## [YYYY-MM-DD] <ingest|update|architecture|fix|lint> | <Título corto>`
    Seguido de 2 a 4 bullets concisos que describan los cambios o aprendizajes adquiridos.

## 4. Operaciones del Agente
- **Lectura previa (Query)**:
  - Antes de escanear el repositorio o diseñar modificaciones complejas, el agente debe consultar `wiki/index.md` y las entradas recientes de `wiki/log.md`.
- **Actualización continua (Ingest / Code Sync)**:
  - Cuando un turno modifique arquitectura, endpoints, modelos, servicios o solucione un bug estructural, el agente debe actualizar la página correspondiente en `wiki/pages/`, mantener sincronizado `wiki/index.md` y registrar la entrada en `wiki/log.md`.
