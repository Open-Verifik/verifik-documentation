---
id: "es-docs-es-resources-email-validations-validaciones-de-correo-electronico-retrie-respuesta-2"
title: "Recuperar una Validación de Correo Electrónico — Respuesta"
sourcePath: "docs-es/resources/email-validations-validaciones-de-correo-electronico/retrieve-an-email-validation-recuperar-una-validacion-de-correo-electronico.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/email-validations-validaciones-de-correo-electronico/retrieve-an-email-validation-recuperar-una-validacion-de-correo-electronico"
url: "https://docs.verifik.co/verifik-es/resources/email-validations-validaciones-de-correo-electronico/retrieve-an-email-validation-recuperar-una-validacion-de-correo-electronico"
---

# Recuperar una Validación de Correo Electrónico
**API path(s):** /v2/email-validations/{id}

## Respuesta

```json
{
    "success": true,
    "data": {
        "_id": "email_validation_123456789",
        "client": {
            "_id": "client_123456789",
            "name": "Example Client",
            "email": "client@example.com"
        },
        "project": {
            "_id": "project_123456789",
            "name": "Example Project",
            "description": "Example project description"
        },
        "projectFlow": {
            "_id": "flow_123456789",
            "name": "Example Flow",
            "type": "onboarding"
        },
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
    "error": "Email validation not found",
    "code": "EMAIL_VALIDATION_NOT_FOUND"
}
```

### Características

-   **Recuperación por ID**: Obtén una validación de email específica usando su ID único
-   **Información completa**: Incluye todos los detalles del proceso de validación
-   **Datos relacionados**: Información de cliente, proyecto y flujo del proyecto
-   **Estado detallado**: Estado actual, intentos, límites y marcas de tiempo
-   **Configuración**: URLs de redirección, webhooks y configuraciones de seguridad
-   **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de errores**: Respuestas de error detalladas para distintos escenarios
