# Obtener Mi Licencia

Obtener la información y estado de la licencia del usuario actual.

## Endpoint

```
GET /api/licenses/my-license
```

## Descripción

Este endpoint permite a los usuarios autenticados obtener su propia información de licencia, incluyendo detalles de la licencia, fecha de expiración, estadísticas de uso e información de renovación. Es útil para verificar la validez de la licencia, características restantes e información de renovación.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `includeUsage` | boolean | No | Incluir estadísticas de uso en la respuesta (por defecto: false) |
| `includeHistory` | boolean | No | Incluir historial de licencia y cambios (por defecto: false) |

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

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

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
  "error": "license_not_found",
  "message": "No license found for this user"
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

```json
{
  "error": "validation_error",
  "message": "Invalid request parameters"
}
```

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

</TabItem>
<TabItem value="500" label="500 Internal Server Error">

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```

</TabItem>
</Tabs>

### Campos de Respuesta

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

<Tabs>
<TabItem value="curl" label="cURL" default>

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

</TabItem>
<TabItem value="nodejs" label="Node.js">

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

</TabItem>
</Tabs>
