---
id: "es-docs-es-api-etiquetas-vista-previa-zelfproof-endpoint"
title: "Vista Previa de ZelfProof — Endpoint"
sourcePath: "docs-es/api/etiquetas/vista-previa-zelfproof.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Endpoint"
---

# Vista Previa de ZelfProof

## Endpoint

Obtener una vista previa de un ZelfProof antes del descifrado para ver sus datos públicos y requisitos.

### Endpoint

```
POST /api/tags/preview-zelfproof
```

## Descripción

Este endpoint te permite obtener una vista previa de un ZelfProof y ver sus detalles antes de intentar el descifrado. Devuelve información pública como direcciones de wallet y si se requiere una contraseña, sin exponer datos encriptados sensibles.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `zelfProof` | string | Sí | El ZelfProof en formato base64 que necesita ser analizado |
| `verifierKey` | string | No | Una clave de autenticación requerida si se especifica para el ZelfProof |

### Respuesta

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

```json
{
  "error": "PROVIDED ZELFPROOF BYTES COULD NOT BE DECODED AS A BASE64 STRING."
}
```

## Ejemplos

```bash
curl -X POST "https://api.zelf.world/api/tags/preview-zelfproof" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "zelfProof": "[ZELFPROOF_BASE64_DATA]"
  }'
```

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

```python

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

```php
 "[ZELFPROOF_BASE64_DATA]"
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

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result> {
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
