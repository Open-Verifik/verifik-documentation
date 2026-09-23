---
id: "es-docs-es-api-cuentas-cambiar-contrasena-endpoint"
title: "Cambiar Contraseña — Endpoint"
sourcePath: "docs-es/api/cuentas/cambiar-contrasena.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoint: "/api/clients/sync/password"
sourceAnchor: "Endpoint"
---

# Cambiar Contraseña
**API path(s):** /api/clients/sync/password

## Endpoint

Cambiar la contraseña maestra de una cuenta de cliente.

### Endpoint

```
PUT /api/clients/sync/password
```

## Descripción

Este endpoint te permite cambiar la contraseña maestra de una cuenta de cliente. Requiere autenticación con clave API.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `currentPassword` | string | Sí | Contraseña maestra actual |
| `newPassword` | string | Sí | Nueva contraseña maestra |
| `confirmPassword` | string | Sí | Confirmación de la nueva contraseña |

## Autenticación

Este endpoint requiere una clave API en el header de la solicitud:
```
x-api-key: TU_CLAVE_API
```

### Respuesta

```json
{
  "data": {
    "message": "Contraseña actualizada exitosamente"
  }
}
```

```json
{
  "validationError": "La nueva contraseña y la confirmación no coinciden"
}
```

```json
{
  "validationError": "Clave API no válida"
}
```

```json
{
  "validationError": "La contraseña actual es incorrecta"
}
```

## Ejemplos

```bash
curl -X PUT "https://api.zelf.world/api/clients/sync/password" \
  -H "Content-Type: application/json" \
  -H "x-api-key: TU_CLAVE_API" \
  -d '{
    "currentPassword": "contraseña_anterior",
    "newPassword": "nueva_contraseña_segura",
    "confirmPassword": "nueva_contraseña_segura"
  }'
```

```javascript
const axios = require('axios');

const data = {
  currentPassword: "contraseña_anterior",
  newPassword: "nueva_contraseña_segura",
  confirmPassword: "nueva_contraseña_segura"
};

const config = {
  method: 'put',
  url: 'https://api.zelf.world/api/clients/sync/password',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'TU_CLAVE_API'
  },
  data: data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

```python

url = "https://api.zelf.world/api/clients/sync/password"

payload = {
    "currentPassword": "contraseña_anterior",
    "newPassword": "nueva_contraseña_segura",
    "confirmPassword": "nueva_contraseña_segura"
}

headers = {
    "Content-Type": "application/json",
    "x-api-key": "TU_CLAVE_API"
}

response = requests.put(url, json=payload, headers=headers)
print(response.json())
```

```php
 "contraseña_anterior",
    "newPassword" => "nueva_contraseña_segura",
    "confirmPassword" => "nueva_contraseña_segura"
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\nx-api-key: TU_CLAVE_API\r\n",
        'method'  => 'PUT',
        'content' => json_encode($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
echo $result;
?>
```

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    let data = json!({
        "currentPassword": "contraseña_anterior",
        "newPassword": "nueva_contraseña_segura",
        "confirmPassword": "nueva_contraseña_segura"
    });
    
    let response = client
        .put("https://api.zelf.world/api/clients/sync/password")
        .header("Content-Type", "application/json")
        .header("x-api-key", "TU_CLAVE_API")
        .json(&data)
        .send()
        .await?;
    
    let body = response.text().await?;
    println!("{}", body);
    
    Ok(())
}
```
