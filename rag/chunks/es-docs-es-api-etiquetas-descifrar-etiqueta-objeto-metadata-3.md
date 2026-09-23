---
id: "es-docs-es-api-etiquetas-descifrar-etiqueta-objeto-metadata-3"
title: "Descifrar Etiqueta — Objeto Metadata"
sourcePath: "docs-es/api/etiquetas/descifrar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/decrypt"
sourceAnchor: "Objeto Metadata"
---

# Descifrar Etiqueta
**API path(s):** /api/tags/decrypt

Descifrar un ZelfProof para acceder a datos de wallet y metadatos usando verificación biométrica facial.

## Objeto Metadata

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `mnemonic` | string | Frase mnemónica BIP39 para recuperación del wallet |

## Ejemplos

```bash
curl -X POST "https://api.zelf.world/api/tags/decrypt" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "tagName": "mytag",
    "domain": "zelf",
    "faceBase64": "[FACE_BASE64_DATA]",
    "password": "your_password"
  }'
```

```javascript
const axios = require('axios');

const data = {
  tagName: "mytag",
  domain: "zelf",
  faceBase64: "[FACE_BASE64_DATA]",
  password: "your_password"
};

const config = {
  method: 'post',
  url: 'https://api.zelf.world/api/tags/decrypt',
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

url = "https://api.zelf.world/api/tags/decrypt"

payload = {
    "tagName": "mytag",
    "domain": "zelf",
    "faceBase64": "[FACE_BASE64_DATA]",
    "password": "your_password"
}

headers = {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

```php
 "mytag",
    "domain" => "zelf",
    "faceBase64" => "[FACE_BASE64_DATA]",
    "password" => "your_password"
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
        "tagName": "mytag",
        "domain": "zelf",
        "faceBase64": "[FACE_BASE64_DATA]",
        "password": "your_password"
    });
    
    let response = client
        .post("https://api.zelf.world/api/tags/decrypt")
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
