---
id: "es-docs-es-resources-webhooks-recuperar-un-webhook-ejemplo-de-respuesta-2"
title: "Recuperar un Webhook — Ejemplo de Respuesta"
sourcePath: "docs-es/resources/webhooks/recuperar-un-webhook.mdx"
locale: "es"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks/{id}"
sourceAnchor: "Ejemplo de Respuesta"
slug: "/resources/webhooks/retrieve-a-webhook"
url: "https://docs.verifik.co/verifik-es/resources/webhooks/retrieve-a-webhook"
---

# Recuperar un Webhook
**API path(s):** /v2/webhooks/{id}

## Ejemplo de Respuesta

```json
{
  "data": {
    "_id": "66de320d6a5c6ef0e02d4223",
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [],
    "isActive": true,
    "name": "Postman sample",
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "notification": {
      "success": false,
      "fail": true,
      "_id": "66de320d6a5c6ef0e02d4222"
    },
    "updatedAt": "2024-09-08T23:23:57.678Z",
    "createdAt": "2024-09-08T23:23:57.678Z",
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
