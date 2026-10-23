---
id: "es-docs-es-resources-webhooks-create-a-webhook-crear-un-webhook-ejemplo-de-respuesta-2"
title: "Crear un Webhook — Ejemplo de Respuesta"
sourcePath: "docs-es/resources/webhooks/create-a-webhook-crear-un-webhook.mdx"
locale: "es"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoint: "/v2/webhooks"
sourceAnchor: "Ejemplo de Respuesta"
slug: "/resources/webhooks/create-a-webhook-crear-un-webhook"
url: "https://docs.verifik.co/verifik-es/resources/webhooks/create-a-webhook-crear-un-webhook"
---

# Crear un Webhook
**API path(s):** /v2/webhooks

## Ejemplo de Respuesta

```json
{
  "data": {
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [
      "66df24f4c80823e06a348019"
    ],
    "isActive": true,
    "name": "Postman sample",
    "url": "https://sandbox.verifik.co/v2/webhooks/logs",
    "notification": {
      "success": false,
      "fail": true,
      "_id": "66df272bf82f3bfab17dea9a"
    },
    "_id": "66df272bf82f3bfab17dea9b",
    "updatedAt": "2024-09-09T16:49:47.373Z",
    "createdAt": "2024-09-09T16:49:47.373Z",
    "__v": 0
  }
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing url\n"
}
```

### Características

- **Integración con flujos de proyecto**: Vincula webhooks a flujos de proyecto específicos
- **Configuración flexible**: Establece URLs, nombres y descripciones personalizadas
- **Múltiples lenguajes de programación**: Soporte para JavaScript, Python, PHP y Go
- **Manejo de errores**: Respuestas de error completas para diversos escenarios
