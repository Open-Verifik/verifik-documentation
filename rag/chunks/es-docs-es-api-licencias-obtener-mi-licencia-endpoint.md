---
id: "es-docs-es-api-licencias-obtener-mi-licencia-endpoint"
title: "Obtener Mi Licencia — Endpoint"
sourcePath: "docs-es/api/licencias/obtener-mi-licencia.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Endpoint"
---

# Obtener Mi Licencia

## Endpoint

Obtener la información y estado de la licencia del usuario actual.

### Endpoint

```
GET /api/licenses/my-license
```

## Descripción

Este endpoint permite a los usuarios autenticados obtener su propia información de licencia, incluyendo detalles de la licencia, fecha de expiración, estadísticas de uso e información de renovación. Es útil para verificar la validez de la licencia, características restantes e información de renovación.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `includeUsage` | boolean | No | Incluir estadísticas de uso en la respuesta (por defecto: false) |
| `includeHistory` | boolean | No | Incluir historial de licencia y cambios (por defecto: false) |

### Respuesta

```json
{
  "data": {
    "license": {
      "id": "user_license_id",
      "userId": "user_id_example",
      "licenseType": "personal",
      "domain": "zelf",
      "status": "active",
      "expiresAt": "2025-12-31T23:59:59Z",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-01T00:00:00Z",
      "features": ["basic_wallet", "face_auth", "qr_generation"],
      "usage": {
        "tagsCreated": 5,
        "tagsRemaining": 95,
        "lastUsed": "2025-01-15T10:30:00Z"
      },
      "history": [
        {
          "action": "license_created",
          "timestamp": "2025-01-01T00:00:00Z",
          "details": "Personal license activated"
        }
      ]
    }
  }
}
```

```json
{
  "error": "license_not_found",
  "message": "No license found for this user"
}
```

```json
{
  "error": "validation_error",
  "message": "Invalid request parameters"
}
```

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```
