---
id: "es-docs-es-resources-validaciones-email-validaciones-email-endpoints-de-la-api-2"
title: "Validaciones de Email — Endpoints de la API"
sourcePath: "docs-es/resources/validaciones-email/validaciones-email.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Endpoints de la API"
slug: "/resources/validaciones-email"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-email"
---

# Validaciones de Email
**API path(s):** /v2/email-validations

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
