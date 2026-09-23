---
id: "es-docs-es-check-list-listar-check-lists-endpoint"
title: "Listar checklists — Endpoint"
sourcePath: "docs-es/check-list/listar-check-lists.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoint: "/v2/check-lists"
sourceAnchor: "Endpoint"
slug: "/check-list/listar-check-lists"
url: "https://docs.verifik.co/verifik-es/check-list/listar-check-lists"
---

# Listar checklists
**API path(s):** /v2/check-lists

## Endpoint

Lista las Check Lists guardadas en el cliente autenticado. Los resultados pertenecen a ese cliente y se ordenan por `updatedAt` descendente (la más reciente primero). Esta llamada no ejecuta consultas y no gasta créditos.

Usa `search` (o `text`) para filtrar por nombre. Envía `page` cuando quieras metadatos de paginación. Omite `page` para recibir el arreglo coincidente en `data` sin campos `total` / `pages`.

### Endpoint

```
GET https://api.verifik.co/v2/check-lists
```

Devuelve las listas guardadas del cliente. Cada ítem incluye `name`, `countries`, `domains`, `featureCodes` y `status`. Cuando viene `page`, la respuesta también incluye `total`, `limit`, `page` y `pages`.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

El token debe ser un **JWT de cliente**. Un token sin `clientId` responde `403`.

### Parameters

| Name      | Type    | Required | Description                                                                 |
| --------- | ------- | -------- | --------------------------------------------------------------------------- |
| `page`    | integer | No       | Si se envía, la API pagina y devuelve `total`, `limit`, `page` y `pages`. Omítelo para recibir solo el arreglo coincidente. |
| `perPage` | integer | No       | Tamaño de página. Alias de `limit`. Se aplica aunque no envíes `page`.      |
| `limit`   | integer | No       | Tamaño de página. Alias de `perPage`.                                       |
| `search`  | string  | No       | Filtro de nombre, sin distinguir mayúsculas.                                |
| `text`    | string  | No       | Alias de `search`.                                                          |
