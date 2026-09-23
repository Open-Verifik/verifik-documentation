---
id: "es-docs-es-resources-proyectos-listar-todos-los-proyectos-notas-3"
title: "Listar proyectos — Notas"
sourcePath: "docs-es/resources/proyectos/listar-todos-los-proyectos.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
endpoint: "/v3/projects"
sourceAnchor: "Notas"
slug: "/resources/proyectos/listar-todos-los-proyectos"
url: "https://docs.verifik.co/verifik-es/resources/proyectos/listar-todos-los-proyectos"
---

# Listar proyectos
**API path(s):** /v3/projects

## Notas

- Paginación: usa `page` y `limit`. Máximo 100 por página.
- Filtrado: combina parámetros (ej. `?where_status=active&like_name=kyc`).
- Búsqueda: `like_name` hace búsqueda insensible a mayúsculas.
- Múltiples estados: `in_status[]=active&in_status[]=paused`.
- Metadatos: `total`, `limit`, `page`, `pages`.
- Flujos: cada proyecto incluye su arreglo `projectFlows`.
