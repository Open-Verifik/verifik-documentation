---
id: "es-docs-es-check-list-check-list-guia-api-autenticacion"
title: "Check List — Guía de API — Autenticación"
sourcePath: "docs-es/check-list/check-list-guia-api.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/{id}"
sourceAnchor: "Autenticación"
slug: "/check-list/guia-api"
url: "https://docs.verifik.co/verifik-es/check-list/guia-api"
---

# Check List — Guía de API
**API path(s):** /v2/check-lists, /v2/check-lists/{id}

## Autenticación

Usa esta página cuando tu **backend** deba guardar el mismo playbook que guarda la UI de Smart-Agent. Para el recorrido de producto, ver [Check List](/verifik-es/check-list).

El CRUD de Check List **no** ejecuta consultas y **no** gasta créditos. Ejecutar un servicio es una llamada normal al catálogo (la misma URL que ya usas en SmartCheck o Postman).

## Autenticación

Todas las rutas necesitan un **JWT de cliente** (`Authorization: Bearer …`). Un token sin `clientId` responde `403` (`Client context required`). Las listas pertenecen a ese cliente.

## Endpoints

| Método | Ruta | Referencia |
| --- | --- | --- |
| `GET` | `/v2/check-lists` | [Listar checklists](/verifik-es/check-list/listar-check-lists) |
| `POST` | `/v2/check-lists` | [Crear una checklist](/verifik-es/check-list/crear-un-check-list) |
| `GET` | `/v2/check-lists/{id}` | [Obtener una checklist](/verifik-es/check-list/obtener-un-check-list) |
| `PUT` | `/v2/check-lists/{id}` | [Actualizar una checklist](/verifik-es/check-list/actualizar-un-check-list) |
| `DELETE` | `/v2/check-lists/{id}` | [Eliminar una checklist](/verifik-es/check-list/eliminar-un-check-list) |

Parámetros de listado: `page`, `perPage` (o `limit`) y `search` (o `text`) para filtrar por nombre. Ver [Listar checklists](/verifik-es/check-list/listar-check-lists) para las dos formas de `200` (con y sin `page`).

## Campos del cuerpo

| Campo | Significado |
| --- | --- |
| `name` | Obligatorio al crear. Máximo 150 caracteres. |
| `countries` | Países donde operas (por ejemplo `Colombia`). |
| `domains` | Pestañas opcionales: `people`, `vehicles`, `businesses`. |
| `featureCodes` | Valores `code` de AppFeature de los servicios en la lista. |
| `status` | `draft` (predeterminado) o `active`. Solo etiqueta — ambas funcionan igual. |

Los `featureCodes` desconocidos fallan. Un servicio cuyo país no coincide con la lista falla, salvo que el servicio sea mundial (o la lista aún no tenga países).
