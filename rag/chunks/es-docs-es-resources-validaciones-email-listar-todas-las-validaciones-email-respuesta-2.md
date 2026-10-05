---
id: "es-docs-es-resources-validaciones-email-listar-todas-las-validaciones-email-respuesta-2"
title: "Listar todas las Validaciones de Email — Respuesta"
sourcePath: "docs-es/resources/validaciones-email/listar-todas-las-validaciones-email.mdx"
locale: "es"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Respuesta"
slug: "/resources/listar-todas-las-validaciones-email"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-validaciones-email"
---

# Listar todas las Validaciones de Email
**API path(s):** /v2/email-validations

## Respuesta

```json
{
    "success": true,
    "data": [
        {
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
            "status": "validated",
            "email": "user@example.com",
            "type": "validation",
            "validationMethod": "verificationCode",
            "expiresAt": "2024-01-15T11:30:00Z",
            "attempts": 1,
            "maxAttempts": 3,
            "createdAt": "2024-01-15T10:30:00Z",
            "updatedAt": "2024-01-15T10:32:00Z",
            "validatedAt": "2024-01-15T10:32:00Z"
        }
    ],
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 1,
        "pages": 1
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
    "error": "Invalid query parameters",
    "code": "INVALID_PARAMETERS"
}
```

### Características

-   **Listado completo**: Recupera todas las validaciones de email de tu cuenta
-   **Paginación**: Soporte para paginación con control de página y límite
-   **Filtrado avanzado**: Filtra por proyecto, estado, tipo y dirección de email
-   **Población de datos**: Incluye información relacionada como datos de cliente y proyecto
-   **Múltiples estados**: Filtra por estado (new, sent, validated, expired, failed)
-   **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Swift
-   **Información detallada**: Incluye intentos, límites y marcas de tiempo de validación
