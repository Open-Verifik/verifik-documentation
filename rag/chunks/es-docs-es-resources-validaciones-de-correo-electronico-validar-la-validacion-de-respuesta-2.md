---
id: "es-docs-es-resources-validaciones-de-correo-electronico-validar-la-validacion-de-respuesta-2"
title: "Validar la Validación de Correo Electrónico — Respuesta"
sourcePath: "docs-es/resources/validaciones-de-correo-electronico/validar-la-validacion-de-correo-electronico.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations/{id}/validate"
sourceAnchor: "Respuesta"
slug: "/resources/validaciones-de-correo-electronico/validar-la-validacion-de-correo-electronico"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-de-correo-electronico/validar-la-validacion-de-correo-electronico"
---

# Validar la Validación de Correo Electrónico
**API path(s):** /v2/email-validations/{id}/validate

## Respuesta

```json
{
    "success": true,
    "data": {
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
    "error": "Invalid verification code",
    "code": "INVALID_CODE"
}
```

  
  

```json
{
    "success": false,
    "error": "Verification code expired",
    "code": "CODE_EXPIRED"
}
```

  
  

```json
{
    "success": false,
    "error": "Maximum attempts exceeded",
    "code": "MAX_ATTEMPTS_EXCEEDED"
}
```

### Características

-   **Validación de código**: Valida códigos OTP de 6 dígitos enviados por email
-   **Control de intentos**: Registra intentos de validación y límites máximos
-   **Expiración**: Maneja códigos expirados con respuestas apropiadas
-   **Actualización de estado**: Actualiza el estado de la validación tras la verificación exitosa
-   **Marcas de tiempo**: Registra cuándo se completó la validación
-   **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de errores**: Respuestas de error detalladas para distintos escenarios
