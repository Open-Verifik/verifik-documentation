# Verificar Cuenta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Verificar si existe una cuenta de cliente basada en email o número de teléfono.

## Endpoint

```
GET /api/clients
```

## Descripción

Este endpoint te permite verificar si existe una cuenta de cliente usando dirección de email o número de teléfono. No se requiere autenticación para esta verificación.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `email` | string | No* | Email del cliente para verificación (requerido si no se proporciona teléfono) |
| `countryCode` | string | No* | Código de país (requerido si no se proporciona email) |
| `phone` | string | No* | Número de teléfono (requerido si no se proporciona email) |
| `identificationMethod` | string | No | Método de identificación utilizado (email o phone) |

*Se debe proporcionar email O countryCode + phone

## Respuesta

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "exists": true,
    "client": {
      "id": "client_id",
      "name": "Nombre del Cliente",
      "email": "cliente@ejemplo.com"
    }
  }
}
```

</TabItem>

<TabItem value="400" label="400 Bad Request">

```json
{
  "validationError": "Se debe proporcionar email o countryCode + phone"
}
```

</TabItem>

<TabItem value="404" label="404 Not Found">

```json
{
  "validationError": "Cliente no encontrado"
}
```

</TabItem>
</Tabs>

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://api.zelf.world/api/clients?email=cliente@ejemplo.com"
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.zelf.world/api/clients',
  params: {
    email: 'cliente@ejemplo.com'
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

</TabItem>

<TabItem value="python" label="Python">

```python
import requests

url = "https://api.zelf.world/api/clients"
params = {
    "email": "cliente@ejemplo.com"
}

response = requests.get(url, params=params)
print(response.json())
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
$url = "https://api.zelf.world/api/clients?email=cliente@ejemplo.com";

$context = stream_context_create([
    'http' => [
        'method' => 'GET'
    ]
]);

$result = file_get_contents($url, false, $context);
echo $result;
?>
```

</TabItem>

<TabItem value="rust" label="Rust">

```rust
use reqwest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    let response = client
        .get("https://api.zelf.world/api/clients")
        .query(&[("email", "cliente@ejemplo.com")])
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

- Este endpoint no requiere autenticación
- Se debe proporcionar email O countryCode + phone
- Retorna información del cliente si la cuenta existe
- Útil para verificar el estado de la cuenta antes del registro o inicio de sesión
