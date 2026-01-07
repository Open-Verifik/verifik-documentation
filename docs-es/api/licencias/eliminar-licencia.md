# Eliminar Licencia

Eliminar una licencia existente del sistema.

## Endpoint

```
DELETE /api/licenses/{licenseId}
```

## Descripción

Este endpoint permite a administradores o usuarios autorizados eliminar una licencia existente del sistema. Esta acción eliminará permanentemente la licencia y revocará todos los permisos y características asociadas para el usuario. Esta operación es irreversible y debe usarse con precaución.

## Autenticación

Este endpoint requiere autenticación mediante token JWT con privilegios administrativos. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `licenseId` | string | Sí | ID de la licencia a eliminar (parámetro de ruta) |
| `reason` | string | No | Razón para la eliminación de la licencia (para propósitos de auditoría) |
| `notifyUser` | boolean | No | Si notificar al usuario sobre la eliminación de la licencia (por defecto: true) |

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

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

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
  "error": "license_not_found",
  "message": "License with the specified ID does not exist"
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
<TabItem value="409" label="409 Conflict">

```json
{
  "error": "license_in_use",
  "message": "Cannot delete license that is currently in use"
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
| `message` | string | Mensaje de éxito confirmando la eliminación de la licencia |
| `licenseId` | string | ID de la licencia eliminada |
| `userId` | string | ID del usuario cuya licencia fue eliminada |
| `deletedAt` | string | Timestamp ISO cuando se eliminó la licencia |
| `reason` | string | Razón proporcionada para la eliminación de la licencia |

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

# Luego eliminar una licencia
curl -X DELETE "https://api.zelf.world/api/licenses/license_123?reason=User%20requested%20cancellation&notifyUser=true" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
</Tabs>
