---
id: "es-docs-es-api-licencias-crear-licencia-campos-de-respuesta-2"
title: "Crear Licencia — Campos de Respuesta"
sourcePath: "docs-es/api/licencias/crear-licencia.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Campos de Respuesta"
---

# Crear Licencia

Crear una nueva licencia para un usuario u organización.

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `license` | object | Información de la licencia creada |
| `license.id` | string | Identificador único para la licencia creada |
| `license.userId` | string | ID de usuario al que se asigna esta licencia |
| `license.licenseType` | string | Tipo de licencia ("personal", "business", "enterprise") |
| `license.domain` | string | Dominio principal para esta licencia |
| `license.status` | string | Estado de la licencia ("active", "pending", "suspended") |
| `license.expiresAt` | string | Timestamp ISO cuando expira la licencia |
| `license.createdAt` | string | Timestamp ISO cuando se creó la licencia |
| `license.updatedAt` | string | Timestamp ISO cuando se actualizó la licencia por última vez |
| `license.features` | array | Array de características incluidas en esta licencia |
| `license.price` | number | Precio de la licencia en USD |
| `license.duration` | number | Duración de la licencia en años |
| `license.autoRenew` | boolean | Si la licencia debe renovarse automáticamente |
| `license.notes` | string | Notas adicionales sobre esta licencia |

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

# Luego crear una licencia
curl -X POST "https://api.zelf.world/api/licenses" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -d '{
    "userId": "user_123",
    "licenseType": "personal",
    "domain": "zelf",
    "duration": 1,
    "features": ["basic_wallet", "face_auth"],
    "price": 24,
    "notes": "Personal license for new user",
    "autoRenew": false
  }'
```
