---
id: "es-docs-es-resources-validaciones-telefono-recuperar-una-validacion-telefono-respuesta-2"
title: "Recuperar una Validación de Teléfono — Respuesta"
sourcePath: "docs-es/resources/validaciones-telefono/recuperar-una-validacion-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations/phone_validation_123456789"
  - "/v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow"
  - "/v2/phone-validations/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/recuperar-una-validacion-telefono"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-validacion-telefono"
---

# Recuperar una Validación de Teléfono
**API path(s):** /v2/phone-validations/phone_validation_123456789, /v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow, /v2/phone-validations/{id}

## Respuesta

```json
{
    "success": true,
    "data": {
        "_id": "phone_validation_123456789",
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
    "error": "Phone validation not found",
    "code": "PHONE_VALIDATION_NOT_FOUND"
}
```

### Características

-   **Recuperación por ID**: Obtén una validación de teléfono específica usando su ID único
-   **Información completa**: Incluye todos los detalles del proceso de validación
-   **Datos relacionados**: Información de cliente, proyecto y flujo del proyecto
-   **Estado detallado**: Estado actual, intentos, límites y marcas de tiempo
-   **Configuración**: URLs de redirección, webhooks y configuraciones de seguridad
-   **Códigos de país**: Información completa de código de país y número
-   **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de errores**: Respuestas de error detalladas para distintos escenarios
