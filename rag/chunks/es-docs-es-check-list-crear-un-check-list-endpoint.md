---
id: "es-docs-es-check-list-crear-un-check-list-endpoint"
title: "Crear una checklist — Endpoint"
sourcePath: "docs-es/check-list/crear-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoint: "/v2/check-lists"
sourceAnchor: "Endpoint"
slug: "/check-list/crear-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/crear-un-check-list"
---

# Crear una checklist
**API path(s):** /v2/check-lists

## Endpoint

Crea una Check List en el cliente autenticado. `name` es obligatorio. Países, dominios y códigos de feature son opcionales al crear — puedes agregar servicios después con [Actualizar una checklist](/verifik-es/check-list/actualizar-un-check-list).

Guardar la lista no ejecuta consultas y no gasta créditos. En Smart-Agent, crear te deja en el tablero; esta API devuelve el documento nuevo de inmediato.

### Endpoint

```
POST https://api.verifik.co/v2/check-lists
```

Crea una lista del cliente del JWT. El objeto `data` de la respuesta incluye `_id` — guárdalo para GET, PUT y DELETE. El `status` predeterminado es `draft`.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

El token debe ser un **JWT de cliente**. Un token sin `clientId` responde `403`.

### Body

| Name           | Type     | Required | Description                                                                 |
| -------------- | -------- | -------- | --------------------------------------------------------------------------- |
| `name`         | string   | Yes      | Nombre visible. Recortado, 1–150 caracteres.                                |
| `countries`    | string[] | No       | Países donde operas (por ejemplo `Colombia`). Se eliminan duplicados. Predeterminado `[]`. |
| `domains`      | string[] | No       | Pestañas opcionales: `people`, `vehicles`, `businesses`. Predeterminado `[]`. |
| `featureCodes` | string[] | No       | Valores `code` de AppFeature a guardar. Predeterminado `[]`.                |
| `status`       | string   | No       | `draft` (predeterminado) o `active`. Solo etiqueta — ambas funcionan igual. |

Los `featureCodes` desconocidos fallan. Un servicio cuyo país no coincide con `countries` falla, salvo que el servicio sea mundial o `countries` esté vacío.
