---
id: "es-docs-es-api-licencias-crear-licencia-endpoint"
title: "Crear Licencia — Endpoint"
sourcePath: "docs-es/api/licencias/crear-licencia.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses"
  - "/api/sessions"
sourceAnchor: "Endpoint"
---

# Crear Licencia
**API path(s):** /api/licenses, /api/sessions

## Endpoint

Crear una nueva licencia para un usuario u organización.

### Endpoint

```
POST /api/licenses
```

## Descripción

Este endpoint permite a administradores o usuarios autorizados crear nuevas licencias para usuarios u organizaciones. Esto incluye configurar tipos de licencia, características, duración y dominios asociados. El endpoint soporta varios tipos de licencia incluyendo personal, empresarial y empresarial.

## Autenticación

Este endpoint requiere autenticación mediante token JWT con privilegios administrativos. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `userId` | string | Sí | ID del usuario al que asignar esta licencia |
| `licenseType` | string | Sí | Tipo de licencia ("personal", "business", "enterprise") |
| `domain` | string | Sí | Dominio principal para esta licencia (ej., "zelf", "avax", "bdag") |
| `duration` | number | Sí | Duración de la licencia en años |
| `features` | array | Sí | Array de características a incluir en esta licencia |
| `price` | number | No | Precio de la licencia en USD (para propósitos de facturación) |
| `notes` | string | No | Notas adicionales o comentarios sobre esta licencia |
| `autoRenew` | boolean | No | Si la licencia debe renovarse automáticamente (por defecto: false) |

### Respuesta

```json
{
  "data": {
    "license": {
      "id": "new_license_id",
      "userId": "user_id_example",
      "licenseType": "personal",
      "domain": "zelf",
      "status": "active",
      "expiresAt": "2026-01-01T00:00:00Z",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-01T00:00:00Z",
      "features": ["basic_wallet", "face_auth"],
      "price": 24,
      "duration": 1,
      "autoRenew": false,
      "notes": "Personal license for new user"
    }
  }
}
```

```json
{
  "validationError": "User already has an active license\n"
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
  "error": "insufficient_permissions",
  "message": "Administrative privileges required"
}
```

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```
