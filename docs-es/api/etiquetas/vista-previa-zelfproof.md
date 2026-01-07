# Vista Previa de ZelfProof

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Obtener una vista previa de un ZelfProof antes del descifrado para ver sus datos públicos y requisitos.

## Endpoint

```
POST /api/tags/preview-zelfproof
```

## Descripción

Este endpoint te permite obtener una vista previa de un ZelfProof y ver sus detalles antes de intentar el descifrado. Devuelve información pública como direcciones de wallet y si se requiere una contraseña, sin exponer datos encriptados sensibles.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `zelfProof` | string | Sí | El ZelfProof en formato base64 que necesita ser analizado |
| `verifierKey` | string | No | Una clave de autenticación requerida si se especifica para el ZelfProof |

## Respuesta

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "passwordLayer": "WithPassword",
  "publicData": {
    "ethAddress": "0x1234567890123456789012345678901234567890",
    "btcAddress": "bc1qtest123456789012345678901234567890",
    "solanaAddress": "Test1234567890123456789012345678901234567890",
    "suiAddress": "0xtest1234567890123456789012345678901234567890"
  },
  "requireLiveness": true
}
```

</TabItem>

<TabItem value="500" label="500 Internal Server Error">

```json
{
  "error": "PROVIDED ZELFPROOF BYTES COULD NOT BE DECODED AS A BASE64 STRING."
}
```

</TabItem>
</Tabs>

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://api.zelf.world/api/tags/preview-zelfproof" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "zelfProof": "[ZELFPROOF_BASE64_DATA]"
  }'
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const data = {
  zelfProof: "[ZELFPROOF_BASE64_DATA]"
};

const config = {
  method: 'post',
  url: 'https://api.zelf.world/api/tags/preview-zelfproof',
  headers: { 
    'Authorization': 'Bearer YOUR_JWT_TOKEN', 
    'Content-Type': 'application/json'
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

url = "https://api.zelf.world/api/tags/preview-zelfproof"

payload = {
    "zelfProof": "[ZELFPROOF_BASE64_DATA]"
}

headers = {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
$url = "https://api.zelf.world/api/tags/preview-zelfproof";

$data = array(
    "zelfProof" => "[ZELFPROOF_BASE64_DATA]"
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\nAuthorization: Bearer YOUR_JWT_TOKEN\r\n",
        'method'  => 'POST',
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
        "zelfProof": "[ZELFPROOF_BASE64_DATA]"
    });
    
    let response = client
        .post("https://api.zelf.world/api/tags/preview-zelfproof")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Content-Type", "application/json")
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

- El parámetro `zelfProof` debe contener los datos completos del ZelfProof codificados en base64
- El parámetro `verifierKey` es opcional y solo se requiere si el ZelfProof fue creado con una clave verificadora
- El campo `passwordLayer` indica si el ZelfProof requiere una contraseña para el descifrado
- El campo `publicData` contiene direcciones de wallet para blockchains soportados
- El campo `requireLiveness` indica si se requiere verificación de vivacidad
