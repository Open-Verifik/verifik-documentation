# Crear Licencia

Crear una nueva licencia para un usuario u organización.

## Endpoint

```
POST /api/licenses
```

## Descripción

Este endpoint permite a administradores o usuarios autorizados crear nuevas licencias para usuarios u organizaciones. Esto incluye configurar tipos de licencia, características, duración y dominios asociados. El endpoint soporta varios tipos de licencia incluyendo personal, empresarial y empresarial.

## Autenticación

Este endpoint requiere autenticación mediante token JWT con privilegios administrativos. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

## Parámetros

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

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="201" label="201 Created" default>

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

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "User already has an active license\n"
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
<TabItem value="403" label="403 Forbidden">

```json
{
  "error": "insufficient_permissions",
  "message": "Administrative privileges required"
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

</TabItem>
</Tabs>
