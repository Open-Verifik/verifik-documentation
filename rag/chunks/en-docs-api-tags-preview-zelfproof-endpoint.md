---
id: "en-docs-api-tags-preview-zelfproof-endpoint"
title: "Preview ZelfProof — Endpoint"
sourcePath: "docs/api/tags/preview-zelfproof.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/preview-zelfproof"
sourceAnchor: "Endpoint"
---

# Preview ZelfProof
**API path(s):** /api/tags/preview-zelfproof

## Endpoint

Preview a ZelfProof before decryption to see its public data and requirements.

### Endpoint

```
POST /api/tags/preview-zelfproof
```

## Description

This endpoint allows you to preview a ZelfProof and see its details before attempting decryption. It returns public information such as wallet addresses and whether a password is required, without exposing sensitive encrypted data.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zelfProof` | string | Yes | The ZelfProof in base64 format that needs to be parsed |
| `verifierKey` | string | No | An authentication key required if specified for the ZelfProof |

### Response

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

## Examples

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
