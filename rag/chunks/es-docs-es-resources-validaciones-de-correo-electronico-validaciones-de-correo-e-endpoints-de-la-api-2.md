---
id: "es-docs-es-resources-validaciones-de-correo-electronico-validaciones-de-correo-e-endpoints-de-la-api-2"
title: "Validaciones de Correo Electrónico — Endpoints de la API"
sourcePath: "docs-es/resources/validaciones-de-correo-electronico/validaciones-de-correo-electronico.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/email-validations"
  - "/v2/email-validations/{validationid}"
  - "/v2/email-validations/{validationid}/validate"
sourceAnchor: "Endpoints de la API"
slug: "/resources/validaciones-de-correo-electronico"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-de-correo-electronico"
---

# Validaciones de Correo Electrónico
**API path(s):** /v2/email-validations, /v2/email-validations/{validationid}, /v2/email-validations/{validationid}/validate

## Endpoints de la API

#### Crear una Validación de Email

```http
POST https://api.verifik.co/v2/email-validations
```

#### Listar todas las Validaciones de Email

```http
GET https://api.verifik.co/v2/email-validations
```

#### Recuperar una Validación de Email

```http
GET https://api.verifik.co/v2/email-validations/{validationId}
```

#### Validar una Validación de Email

```http
POST https://api.verifik.co/v2/email-validations/{validationId}/validate
```

### Estructura del Objeto Validación de Email

```json
{
    "id": "email_validation_123456789",
    "email": "user@example.com",
    "status": "completed",
    "type": "validation",
    "verificationCode": "123456",
    "attempts": 1,
    "maxAttempts": 3,
    "expiresAt": "2024-01-15T11:30:00Z",
    "deliveryStatus": "delivered",
    "validatedAt": "2024-01-15T10:32:00Z",
    "createdAt": "2024-01-15T10:30:00Z"
}
```

### Casos de uso

-   **Autenticación de usuarios**: Verifica la titularidad del email para un inicio de sesión seguro
-   **Registro de cuentas**: Confirma direcciones de email durante el registro
-   **Restablecimiento de contraseña**: Verifica la titularidad del email para recuperación de contraseña
-   **Seguridad**: Mejora la seguridad de la cuenta mediante verificación por email
