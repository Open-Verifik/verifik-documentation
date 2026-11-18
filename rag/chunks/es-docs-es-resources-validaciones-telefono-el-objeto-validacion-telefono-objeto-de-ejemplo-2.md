---
id: "es-docs-es-resources-validaciones-telefono-el-objeto-validacion-telefono-objeto-de-ejemplo-2"
title: "El Objeto de Validación de Teléfono — Objeto de Ejemplo"
sourcePath: "docs-es/resources/validaciones-telefono/el-objeto-validacion-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Objeto de Ejemplo"
slug: "/resources/validaciones-de-telefono/el-objeto-de-validaciones-de-telefono"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-de-telefono/el-objeto-de-validaciones-de-telefono"
---

# El Objeto de Validación de Teléfono

## Objeto de Ejemplo

```json
{
    "_id": "phone_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "validated",
    "countryCode": "+1",
    "phone": "1234567890",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "attempts": 1,
    "maxAttempts": 3,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "validatedAt": "2024-01-15T10:32:00Z"
}
```
