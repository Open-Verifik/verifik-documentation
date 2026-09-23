---
id: "es-docs-es-api-licencias-eliminar-licencia-campos-de-respuesta-2"
title: "Eliminar Licencia — Campos de Respuesta"
sourcePath: "docs-es/api/licencias/eliminar-licencia.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses/{licenseid}"
  - "/api/sessions"
sourceAnchor: "Campos de Respuesta"
---

# Eliminar Licencia
**API path(s):** /api/licenses/{licenseid}, /api/sessions

Eliminar una licencia existente del sistema.

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `message` | string | Mensaje de éxito confirmando la eliminación de la licencia |
| `licenseId` | string | ID de la licencia eliminada |
| `userId` | string | ID del usuario cuya licencia fue eliminada |
| `deletedAt` | string | Timestamp ISO cuando se eliminó la licencia |
| `reason` | string | Razón proporcionada para la eliminación de la licencia |

## Ejemplos

```bash
# Primero, crear una sesión para obtener el token JWT
curl -X POST "https://api.zelf.world/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "identifier": "test_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Luego eliminar una licencia
curl -X DELETE "https://api.zelf.world/api/licenses/license_123?reason=User%20requested%20cancellation&notifyUser=true" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```
