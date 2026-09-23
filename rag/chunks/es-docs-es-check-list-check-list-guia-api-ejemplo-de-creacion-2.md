---
id: "es-docs-es-check-list-check-list-guia-api-ejemplo-de-creacion-2"
title: "Check List — Guía de API — Ejemplo de creación"
sourcePath: "docs-es/check-list/check-list-guia-api.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/{id}"
sourceAnchor: "Ejemplo de creación"
slug: "/check-list/guia-api"
url: "https://docs.verifik.co/verifik-es/check-list/guia-api"
---

# Check List — Guía de API
**API path(s):** /v2/check-lists, /v2/check-lists/{id}

Usa esta página cuando tu **backend** deba guardar el mismo playbook que guarda la UI de Smart-Agent. Para el recorrido de producto, ver [Check List](/verifik-es/check-list).
El CRUD de Check List **no** ejecuta consultas y **no** gasta créditos. Ejecutar un servicio es una llamada normal al catálogo (la misma URL que ya usas en SmartCheck o Postman).

## Ejemplo de creación

```
POST https://api.verifik.co/v2/check-lists
Authorization: Bearer 
Content-Type: application/json
```

```json
{
  "name": "KYC Colombia",
  "countries": ["Colombia"],
  "domains": [],
  "featureCodes": [],
  "status": "draft"
}
```

La respuesta es `{ "data": { …checklist } }`. Guarda `data._id`. Cuando el usuario agregue servicios, haz `PUT` a ese id con los `featureCodes` nuevos.

## Ejecutar un servicio guardado

**No** hay un endpoint “ejecutar checklist”. Por cada código de la lista, llama la URL de catálogo de esa feature como en SmartCheck. Los créditos se cobran en esas llamadas.

Para enviar la mezcla como archivo o cola, usa [SmartBatch](/verifik-es/smart-batch) (país + códigos + nombre). Check List no inicia el lote por ti.

## Relacionado

- [Check List](/verifik-es/check-list) — recorrido en Smart-Agent
- [SmartCheck](/verifik-es/verificacion-inteligente) — APIs del catálogo
- [SmartBatch](/verifik-es/smart-batch) — lote de los servicios guardados
