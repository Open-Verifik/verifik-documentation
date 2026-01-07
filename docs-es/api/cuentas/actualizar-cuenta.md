# Actualizar Cuenta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Actualizar la información de una cuenta de cliente existente.

## Endpoint

```
PUT /api/clients/sync
```

## Descripción

Este endpoint te permite actualizar la información de un cliente existente. Requiere autenticación con clave API.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `name` | string | No | Nombre del cliente |
| `email` | string | No | Dirección de email del cliente |
| `countryCode` | string | No | Código de país |
| `phone` | string | No | Número de teléfono |
| `language` | string | No | Preferencia de idioma (en, es) |

## Autenticación

Este endpoint requiere una clave API en el header de la solicitud:
```
x-api-key: TU_CLAVE_API
```

## Respuesta

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "message": "Cliente actualizado exitosamente",
    "client": {
      "id": "client_id",
      "name": "Nombre Actualizado",
      "email": "actualizado@ejemplo.com",
      "countryCode": "+1",
      "phone": "5551234567",
      "language": "es"
    }
  }
}
```

</TabItem>

<TabItem value="403" label="403 Forbidden">

```json
{
  "validationError": "Clave API no válida"
}
```

</TabItem>

<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Mensaje de error de validación"
}
```

</TabItem>
</Tabs>

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X PUT "https://api.zelf.world/api/clients/sync" \
  -H "Content-Type: application/json" \
  -H "x-api-key: TU_CLAVE_API" \
  -d '{
    "name": "Nombre Actualizado",
    "email": "actualizado@ejemplo.com",
    "language": "es"
  }'
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const data = {
  name: "Nombre Actualizado",
  email: "actualizado@ejemplo.com",
  language: "es"
};

const config = {
  method: 'put',
  url: 'https://api.zelf.world/api/clients/sync',
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

</TabItem>

<TabItem value="python" label="Python">

```python
import requests

url = "https://api.zelf.world/api/clients/sync"

payload = {
    "name": "Nombre Actualizado",
    "email": "actualizado@ejemplo.com",
    "language": "es"
}

headers = {
    "Content-Type": "application/json",
    "x-api-key": "TU_CLAVE_API"
}

response = requests.put(url, json=payload, headers=headers)
print(response.json())
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
$url = "https://api.zelf.world/api/clients/sync";

$data = array(
    "name" => "Nombre Actualizado",
    "email" => "actualizado@ejemplo.com",
    "language" => "es"
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

</TabItem>

<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    let data = json!({
        "name": "Nombre Actualizado",
        "email": "actualizado@ejemplo.com",
        "language": "es"
    });
    
    let response = client
        .put("https://api.zelf.world/api/clients/sync")
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

</TabItem>
</Tabs>

## Notas

- Requiere autenticación con clave API
- Todos los parámetros son opcionales - solo se actualizarán los campos proporcionados
- El idioma debe ser "en" o "es"
- El formato del email debe ser válido si se proporciona
- El formato del número de teléfono debe coincidir con el código de país
