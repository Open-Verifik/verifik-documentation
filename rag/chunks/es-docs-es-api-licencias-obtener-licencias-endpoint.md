---
id: "es-docs-es-api-licencias-obtener-licencias-endpoint"
title: "Obtener Licencias — Endpoint"
sourcePath: "docs-es/api/licencias/obtener-licencias.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses"
  - "/api/sessions"
sourceAnchor: "Endpoint"
---

# Obtener Licencias
**API path(s):** /api/licenses, /api/sessions

## Endpoint

Obtener una lista de todas las licencias disponibles en el sistema.

### Endpoint

```
GET /api/licenses
```

## Descripción

Este endpoint te permite obtener una lista completa de todas las licencias disponibles en el sistema Zelf. Esto incluye información sobre tipos de licencia, precios, características y estado de disponibilidad para diferentes dominios y servicios.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `page` | number | No | Número de página para paginación (por defecto: 1) |
| `limit` | number | No | Número de elementos por página (por defecto: 10, máximo: 100) |
| `domain` | string | No | Filtrar licencias por tipo de dominio (ej., "zelf", "avax", "bdag") |
| `status` | string | No | Filtrar licencias por estado ("active", "inactive", "pending") |
| `type` | string | No | Filtrar licencias por tipo ("personal", "business", "enterprise") |

### Respuesta

```json
{
  "data": {
    "licenses": [
      {
        "id": "license_id_example",
        "name": "Personal License",
        "domain": "zelf",
        "type": "personal",
        "price": 24,
        "duration": 1,
        "features": ["basic_wallet", "face_auth"],
        "status": "active",
        "createdAt": "2025-01-01T00:00:00Z",
        "updatedAt": "2025-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

```json
{
  "validationError": "Invalid pagination parameters\n"
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
