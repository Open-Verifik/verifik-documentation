---
id: "es-docs-es-check-list-actualizar-un-check-list-endpoint"
title: "Actualizar una checklist — Endpoint"
sourcePath: "docs-es/check-list/actualizar-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/${id}"
  - "/v2/check-lists/{check_list_id}"
  - "/v2/check-lists/{id}"
sourceAnchor: "Endpoint"
slug: "/check-list/actualizar-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/actualizar-un-check-list"
---

# Actualizar una checklist
**API path(s):** /v2/check-lists, /v2/check-lists/${id}, /v2/check-lists/{check_list_id}, /v2/check-lists/{id}

## Endpoint

Actualiza una Check List tuya. Envía solo los campos que quieras cambiar. Los campos omitidos conservan su valor actual. El documento fusionado se vuelve a validar, así que `name` debe seguir presente después de la fusión.

Guardar cambios no ejecuta consultas y no gasta créditos. En Smart-Agent, los países quedan fijos después de crear — esta API sí acepta un nuevo arreglo `countries` si lo envías.

### Endpoint

```
PUT https://api.verifik.co/v2/check-lists/{id}
```

Devuelve la lista actualizada. Úsalo cuando el usuario agregue o quite servicios (`featureCodes`), cambie el nombre o defina `status`. Ids inválidos y listas de otros clientes responden `404`.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

El token debe ser un **JWT de cliente**. Un token sin `clientId` responde `403`.

### Parameters

| Name | Type   | Required | Description                          |
| ---- | ------ | -------- | ------------------------------------ |
| `id` | string | Yes      | ObjectId de la Check List al crear o listar. |

### Body

Todos los campos son opcionales en la petición. Después de la fusión, `name` sigue siendo obligatorio.

| Name           | Type     | Required | Description                                                                 |
| -------------- | -------- | -------- | --------------------------------------------------------------------------- |
| `name`         | string   | No       | Nombre visible. Recortado, 1–150 caracteres.                                |
| `countries`    | string[] | No       | Países. Reemplaza la lista guardada si se envía.                            |
| `domains`      | string[] | No       | `people`, `vehicles` y/o `businesses`. Reemplaza la lista guardada si se envía. |
| `featureCodes` | string[] | No       | Valores `code` de AppFeature. Reemplaza la lista guardada si se envía.      |
| `status`       | string   | No       | `draft` o `active`. Solo etiqueta.                                          |

Los `featureCodes` desconocidos fallan. Un servicio cuyo país no coincide con los `countries` fusionados falla, salvo que el servicio sea mundial o `countries` esté vacío.
