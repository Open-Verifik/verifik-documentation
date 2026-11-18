---
id: "es-docs-es-resources-validaciones-email-crear-una-validacion-email-respuesta-3"
title: "Crear una Validación de Email — Respuesta"
sourcePath: "docs-es/resources/validaciones-email/crear-una-validacion-email.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Respuesta"
slug: "/resources/crear-una-validacion-email"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-validacion-email"
---

# Crear una Validación de Email
**API path(s):** /v2/email-validations

## Respuesta

```json
{
    "success": true,
    "data": {
        "_id": "email_validation_123456789",
        "client": "client_123456789",
        "project": "project_123456789",
        "projectFlow": "flow_123456789",
        "status": "sent",
        "email": "user@example.com",
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
    "error": "Invalid email address",
    "code": "INVALID_EMAIL"
}
```

### Características

-   **Creación de validaciones**: Crea nuevas validaciones de email con configuración completa
-   **Múltiples métodos**: Soporte para códigos de verificación y enlaces de un solo uso
-   **Tipos de validación**: Validación estándar, login, onboarding y enlaces únicos
-   **Configuración avanzada**: URLs de redirección, webhooks y autenticación de dos factores
-   **Seguridad**: Control de intentos, expiración y prevención de abuso
-   **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de errores**: Respuestas de error detalladas para distintos escenarios
