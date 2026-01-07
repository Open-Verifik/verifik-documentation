# Eliminar Cuenta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Eliminar una cuenta de cliente por ID.

## Endpoint

```
DELETE /api/clients/{id}
```

## Descripción

Este endpoint te permite eliminar una cuenta de cliente por su ID. Requiere autenticación con clave API.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `id` | string | Sí | ID del cliente (parámetro de ruta) |

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
    "message": "Cliente eliminado exitosamente"
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

<TabItem value="404" label="404 Not Found">

```json
{
  "validationError": "Cliente no encontrado"
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
curl -X DELETE "https://api.zelf.world/api/clients/client_id" \
  -H "x-api-key: TU_CLAVE_API"
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

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

</TabItem>

<TabItem value="python" label="Python">

```python
import requests

url = "https://api.zelf.world/api/clients/client_id"

headers = {
    "x-api-key": "TU_CLAVE_API"
}

response = requests.delete(url, headers=headers)
print(response.json())
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
$url = "https://api.zelf.world/api/clients/client_id";

$options = array(
    'http' => array(
        'header'  => "x-api-key: TU_CLAVE_API\r\n",
        'method'  => 'DELETE'
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

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
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

</TabItem>
</Tabs>

## Notas

- Requiere autenticación con clave API
- El ID del cliente debe ser válido
- Esta acción es irreversible
- Todos los datos asociados serán eliminados permanentemente
- Usar con precaución - considerar respaldo de datos antes de la eliminación
