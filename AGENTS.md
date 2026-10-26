# jankCVonline

<!-- JANKOS-LLM-WIKI:START -->
## LLM Wiki Guidelines (Karpathy Pattern)

Este proyecto mantiene una base de conocimiento incremental en `wiki/` según la especificación en `wiki/SCHEMA.md`.

### Reglas para Agentes
1. **Consulta previa (Query)**: Al iniciar tareas de diagnóstico, refactorización o diseño, consulta `wiki/index.md` y las últimas entradas de `wiki/log.md` antes de escanear a ciegas el código.
2. **Fuentes primarias (`wiki/raw/`)**: Los insumos en bruto (reportes forenses, requerimientos externos, transcripciones) residen en `wiki/raw/` y son inmutables (solo lectura). Nunca edites archivos en `wiki/raw/`.
3. **Páginas compiladas (`wiki/pages/`)**: Documenta arquitectura, módulos, flujos, endpoints e incidentes en `wiki/pages/<tema>.md` utilizando enlaces cruzados con formato `[[wikilinks]]`.
4. **Actualización continua (Code Sync)**: Cada vez que un turno modifique contratos de API, arquitectura, servicios clave o resuelva bugs estructurales:
   - Actualiza o crea la página relevante en `wiki/pages/`.
   - Mantén actualizado el catálogo en `wiki/index.md`.
   - Añade una entrada obligatoria en `wiki/log.md` con el formato parseable:
     `## [YYYY-MM-DD] <ingest|update|architecture|fix|lint> | <Título corto>` seguido de 2-4 bullets concisos.
<!-- JANKOS-LLM-WIKI:END -->
