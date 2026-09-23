---
id: "es-docs-es-legal-colombian-legal-processes-notas-3"
title: "Colombia — Procesos judiciales — Notas"
sourcePath: "docs-es/legal/colombian-legal-processes.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/procesos"
sourceAnchor: "Notas"
slug: "/legal/procesos-judiciales-colombianos"
url: "https://docs.verifik.co/verifik-es/legal/procesos-judiciales-colombianos"
---

# Colombia — Procesos judiciales
**API path(s):** /v2/co/rama/procesos

Este endpoint devuelve un **listado de procesos judiciales** asociados a una persona (**CC**) o empresa (**NIT**). Incluye fechas, despacho, departamento, sujetos procesales y **paginación** cuando aplica.

## Notas

- Solo **`CC`** y **`NIT`** son válidos como **`documentType`**.
- La fuente puede devolver **lista vacía** o no coincidencias pese a datos válidos.
