---
id: "es-docs-es-resources-proyectos-recuperar-un-proyecto-notas-4"
title: "Obtener un proyecto — Notas"
sourcePath: "docs-es/resources/proyectos/recuperar-un-proyecto.mdx"
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

# Obtener un proyecto
**API path(s):** /v3/projects/${projectid}, /v3/projects/%s, /v3/projects/{id}, /v3/projects/{project_id}

## Notas

- `projectFlows` incluye las configuraciones asociadas al proyecto.
- `currentStep` y `lastStep` indican progreso de configuración (0–6).
- Branding incluye colores, logos e imágenes.
