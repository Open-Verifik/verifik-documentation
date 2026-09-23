---
id: "es-docs-es-resources-webhooks-actualizar-un-webhook-ejemplo-de-respuesta-2"
title: "Actualizar un Webhook — Ejemplo de Respuesta"
sourcePath: "docs-es/resources/webhooks/actualizar-un-webhook.mdx"
locale: "es"
category: "resources"
tags:
  - "webhooks"
  - "resources"
endpoints:
  - "/v2/webhooks/66de320d6a5c6ef0e02d4223"
  - "/v2/webhooks/{id}"
sourceAnchor: "Ejemplo de Respuesta"
slug: "/resources/actualizar-un-webhook"
url: "https://docs.verifik.co/verifik-es/resources/actualizar-un-webhook"
---

# Actualizar un Webhook
**API path(s):** /v2/webhooks/66de320d6a5c6ef0e02d4223, /v2/webhooks/{id}

## Ejemplo de Respuesta

```json
{
  "data": {
    "_id": "66de320d6a5c6ef0e02d4223",
    "client": "613375a1eab2fe08527f81e2",
    "projectFlow": [],
    "isActive": true,
    "name": "Updated webhook name",
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

### Características

- **Actualizaciones flexibles**: Actualiza cualquier campo del webhook de forma independiente
- **Gestión de flujos de proyecto**: Vincula o desvincula flujos de proyecto de los webhooks
- **Actualizaciones parciales**: Solo envía los campos que quieres cambiar
- **Múltiples lenguajes de programación**: Soporte para JavaScript, Python, PHP y Go
- **Manejo de errores**: Respuestas 404 apropiadas para webhooks no existentes
