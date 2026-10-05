---
id: "es-docs-es-resources-validaciones-telefono-crear-una-validacion-telefono-ejemplo-de-respuesta-3"
title: "Crear una Validación de Teléfono — Ejemplo de Respuesta"
sourcePath: "docs-es/resources/validaciones-telefono/crear-una-validacion-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations"
sourceAnchor: "Ejemplo de Respuesta"
slug: "/resources/crear-una-validacion-telefono"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-telefono"
---

# Crear una Validación de Teléfono
**API path(s):** /v2/phone-validations

## Ejemplo de Respuesta

```json
{
    "success": true,
    "data": {
        "_id": "phone_validation_123456789",
        "client": "client_123456789",
        "project": "project_123456789",
        "projectFlow": "flow_123456789",
        "status": "sent",
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
        "attempts": 0,
        "maxAttempts": 3,
        "createdAt": "2024-01-15T10:30:00Z",
        "updatedAt": "2024-01-15T10:30:00Z"
    },
    "signature": {
        "dateTime": "April 11, 2023 12:25 PM",
        "message": "Certified by Verifik.co"
    }
}
```

```json
{
    "success": false,
    "error": "Invalid phone number",
    "code": "INVALID_PHONE"
}
```

### Características

-   **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de errores**: Respuestas de error detalladas para distintos escenarios
