---
id: "es-docs-es-api-licencias-obtener-mi-licencia-campos-de-respuesta-2"
title: "Obtener Mi Licencia — Campos de Respuesta"
sourcePath: "docs-es/api/licencias/obtener-mi-licencia.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses/my-license"
  - "/api/sessions"
sourceAnchor: "Campos de Respuesta"
---

# Obtener Mi Licencia
**API path(s):** /api/licenses/my-license, /api/sessions

Obtener la información y estado de la licencia del usuario actual.

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `license` | object | Información de la licencia del usuario |
| `license.id` | string | Identificador único para la licencia del usuario |
| `license.userId` | string | ID de usuario asociado con esta licencia |
| `license.licenseType` | string | Tipo de licencia ("personal", "business", "enterprise") |
| `license.domain` | string | Dominio principal para esta licencia |
| `license.status` | string | Estado de la licencia ("active", "expired", "suspended") |
| `license.expiresAt` | string | Timestamp ISO cuando expira la licencia |
| `license.createdAt` | string | Timestamp ISO cuando se creó la licencia |
| `license.updatedAt` | string | Timestamp ISO cuando se actualizó la licencia por última vez |
| `license.features` | array | Array de características disponibles con esta licencia |
| `license.usage` | object | Estadísticas de uso (solo si includeUsage=true) |
| `license.usage.tagsCreated` | number | Número de etiquetas creadas con esta licencia |
| `license.usage.tagsRemaining` | number | Número de etiquetas restantes |
| `license.usage.lastUsed` | string | Timestamp ISO del último uso de la licencia |
| `license.history` | array | Historial de la licencia (solo si includeHistory=true) |
| `license.history[].action` | string | Acción realizada en la licencia |
| `license.history[].timestamp` | string | Timestamp ISO cuando ocurrió la acción |
| `license.history[].details` | string | Detalles adicionales sobre la acción |

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

# Luego obtener mi licencia
curl -X GET "https://api.zelf.world/api/licenses/my-license?includeUsage=true&includeHistory=true" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

```javascript
const axios = require('axios');

async function getMyLicense() {
  try {
    // Primero, crear una sesión
    const sessionResponse = await axios.post('https://api.zelf.world/api/sessions', {
      identifier: 'test_session_123',
      type: 'createWallet',
      isWebExtension: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com'
      }
    });

    const token = sessionResponse.data.data.token;

    // Luego obtener mi licencia
    const licenseResponse = await axios.get('https://api.zelf.world/api/licenses/my-license', {
      params: {
        includeUsage: true,
        includeHistory: true
      },
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Mi Licencia:', licenseResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getMyLicense();
```
