---
id: "es-docs-es-resources-webhooks-delete-a-webhook-eliminar-un-webhook-ejemplo-de-respuesta-2"
title: "Eliminar un Webhook — Ejemplo de Respuesta"
sourcePath: "docs-es/resources/webhooks/delete-a-webhook-eliminar-un-webhook.mdx"
locale: "es"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoints:
  - "/v2/webhooks/66df1c0ad08b9d244bd1c806"
  - "/v2/webhooks/{id}"
sourceAnchor: "Ejemplo de Respuesta"
slug: "/resources/webhooks/delete-a-webhook-eliminar-un-webhook"
url: "https://docs.verifik.co/verifik-es/resources/webhooks/delete-a-webhook-eliminar-un-webhook"
---

# Eliminar un Webhook
**API path(s):** /v2/webhooks/66df1c0ad08b9d244bd1c806, /v2/webhooks/{id}

## Ejemplo de Respuesta

```json
{
  "data": {
    "_id": "66df1c0ad08b9d244bd1c806",
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [],
    "isActive": true,
    "name": "Postman sample",
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "notification": {
      "success": false,
      "fail": true,
      "_id": "66df1c0ad08b9d244bd1c805"
    },
    "updatedAt": "2024-09-09T16:02:18.713Z",
    "createdAt": "2024-09-09T16:02:18.713Z",
    "__v": 0
  }
}
```

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```
