---
id: "es-docs-es-resources-proyectos-actualizar-un-proyecto-notas-3"
title: "Actualizar un proyecto — Notas"
sourcePath: "docs-es/resources/proyectos/actualizar-un-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
endpoints:
  - "/v3/projects/${projectid}"
  - "/v3/projects/%s"
  - "/v3/projects/{id}"
  - "/v3/projects/{project_id}"
sourceAnchor: "Notas"
---

# Actualizar un proyecto
**API path(s):** /v3/projects/${projectid}, /v3/projects/%s, /v3/projects/{id}, /v3/projects/{project_id}

## Notas

- Actualizaciones parciales: sólo se actualizan los campos enviados.
- Creación de flujo: si se envían campos de `projectFlow` y no existe, se crea automáticamente.
- Validación: campos de `projectFlow` se validan en conjunto para consistencia.
- `steps.document` y `steps.liveness`: `mandatory`, `optional` o `skip`.
- Métodos de verificación: requeridos cuando `steps.document` != `skip`.
