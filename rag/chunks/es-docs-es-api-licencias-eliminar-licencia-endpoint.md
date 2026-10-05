---
id: "es-docs-es-api-licencias-eliminar-licencia-endpoint"
title: "Eliminar Licencia — Endpoint"
sourcePath: "docs-es/api/licencias/eliminar-licencia.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Endpoint"
---

# Eliminar Licencia

## Endpoint

Eliminar una licencia existente del sistema.

### Endpoint

```
DELETE /api/licenses/{licenseId}
```

## Descripción

Este endpoint permite a administradores o usuarios autorizados eliminar una licencia existente del sistema. Esta acción eliminará permanentemente la licencia y revocará todos los permisos y características asociadas para el usuario. Esta operación es irreversible y debe usarse con precaución.

## Autenticación

Este endpoint requiere autenticación mediante token JWT con privilegios administrativos. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `licenseId` | string | Sí | ID de la licencia a eliminar (parámetro de ruta) |
| `reason` | string | No | Razón para la eliminación de la licencia (para propósitos de auditoría) |
| `notifyUser` | boolean | No | Si notificar al usuario sobre la eliminación de la licencia (por defecto: true) |

### Respuesta

```json
{
  "data": {
    "message": "License deleted successfully",
    "licenseId": "license_id_example",
    "userId": "user_id_example",
    "deletedAt": "2025-01-15T10:30:00Z",
    "reason": "User requested cancellation"
  }
}
```

```json
{
  "error": "license_not_found",
  "message": "License with the specified ID does not exist"
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
  "error": "license_in_use",
  "message": "Cannot delete license that is currently in use"
}
```

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```
