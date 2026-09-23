---
id: "es-docs-es-check-list-listar-check-lists-notes-3"
title: "Listar checklists — Notes"
sourcePath: "docs-es/check-list/listar-check-lists.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-lists?page=1&perpage=20&search=colombia"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists?page=1&perpage=20&search=colombia"
sourceAnchor: "Notes"
slug: "/check-list/listar-check-lists"
url: "https://docs.verifik.co/verifik-es/check-list/listar-check-lists"
---

# Listar checklists
**API path(s):** /v2/check-lists, /v2/check-lists?page=1&perpage=20&search=colombia

## Notes

- Las listas pertenecen al cliente del JWT. No puedes leer las de otro cliente.
- El orden es siempre el `updatedAt` más reciente primero.
- `search` y `text` hacen el mismo filtro de nombre, sin distinguir mayúsculas.
- `perPage` y `limit` son alias. Si envías `limit` sin `page`, el arreglo igual se recorta.
- Este endpoint no gasta créditos y no ejecuta los servicios guardados.
- Recorrido de producto: [Check List](/verifik-es/check-list). Crear: [Crear una checklist](/verifik-es/check-list/crear-un-check-list).
