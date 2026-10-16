---
id: "es-docs-es-resources-validaciones-email-el-objeto-validacion-email-objeto-de-ejemplo-2"
title: "El Objeto de Validación de Email — Objeto de Ejemplo"
sourcePath: "docs-es/resources/validaciones-email/el-objeto-validacion-email.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Objeto de Ejemplo"
slug: "/resources/el-objeto-validacion-email"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-validacion-email"
---

# El Objeto de Validación de Email

## Objeto de Ejemplo

```json
{
    "_id": "email_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "validated",
    "email": "user@example.com",
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
