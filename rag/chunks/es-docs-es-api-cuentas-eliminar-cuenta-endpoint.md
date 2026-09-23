---
id: "es-docs-es-api-cuentas-eliminar-cuenta-endpoint"
title: "Eliminar Cuenta — Endpoint"
sourcePath: "docs-es/api/cuentas/eliminar-cuenta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoint: "/api/clients/{id}"
sourceAnchor: "Endpoint"
---

# Eliminar Cuenta
**API path(s):** /api/clients/{id}

## Endpoint

Eliminar una cuenta de cliente por ID.

### Endpoint

```
DELETE /api/clients/{id}
```

## Descripción

Este endpoint te permite eliminar una cuenta de cliente por su ID. Requiere autenticación con clave API.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | string | Sí | ID del cliente (parámetro de ruta) |

## Autenticación

Este endpoint requiere una clave API en el header de la solicitud:
```
x-api-key: TU_CLAVE_API
```

### Respuesta

```json
{
  "data": {
    "message": "Cliente eliminado exitosamente"
  }
}
```

```json
{
  "validationError": "Clave API no válida"
}
```

```json
{
  "validationError": "Cliente no encontrado"
}
```

```json
{
  "validationError": "Mensaje de error de validación"
}
```

## Ejemplos

```bash
curl -X DELETE "https://api.zelf.world/api/clients/client_id" \
  -H "x-api-key: TU_CLAVE_API"
```

```javascript
const axios = require('axios');

const config = {
  method: 'delete',
  url: 'https://api.zelf.world/api/clients/client_id',
  headers: { 
    'x-api-key': 'TU_CLAVE_API'
  }
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

url = "https://api.zelf.world/api/clients/client_id"

headers = {
    "x-api-key": "TU_CLAVE_API"
}

response = requests.delete(url, headers=headers)
print(response.json())
```

```php
 array(
        'header'  => "x-api-key: TU_CLAVE_API\r\n",
        'method'  => 'DELETE'
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
echo $result;
?>
```

```rust
use reqwest;

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    let response = client
        .delete("https://api.zelf.world/api/clients/client_id")
        .header("x-api-key", "TU_CLAVE_API")
        .send()
        .await?;
    
    let body = response.text().await?;
    println!("{}", body);
    
    Ok(())
}
```
