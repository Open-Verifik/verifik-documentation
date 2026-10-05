---
id: "en-docs-api-accounts-authenticate-endpoint"
title: "Authenticate — Endpoint"
sourcePath: "docs/api/accounts/authenticate.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/clients/auth"
sourceAnchor: "Endpoint"
---

# Authenticate
**API path(s):** /api/clients/auth

## Endpoint

Authenticate a client using biometric face verification.

### Endpoint

```
POST /api/clients/auth
```

## Description

This endpoint allows you to authenticate a client using email OR phone number with optional biometric verification. Requires API key authentication.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No* | Client email for authentication (required if phone not provided) |
| `countryCode` | string | No* | Country code (required if email not provided) |
| `phone` | string | No* | Phone number (required if email not provided) |
| `faceBase64` | string | No | Base64-encoded face image for biometric verification |
| `masterPassword` | string | No | Master password for biometric verification |

*Either email OR countryCode + phone must be provided

## Authentication

This endpoint requires an API key in the request header:
```
x-api-key: YOUR_API_KEY
```

### Response

```json
{
  "data": {
    "token": "jwt_authentication_token",
    "zelfProof": "zelf_proof_data",
    "zelfAccount": {
      "account_data": "from_ipfs"
    }
  }
}
```

```json
{
  "validationError": "Either email or countryCode + phone must be provided"
}
```

```json
{
  "validationError": "Missing key"
}
```

```json
{
  "validationError": "Client not found"
}
```

## Examples

```bash
curl -X POST "https://api.zelf.world/api/clients/auth" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{
    "email": "client@example.com",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "your_password"
  }'
```

```javascript
const axios = require('axios');

const data = {
  email: "client@example.com",
  faceBase64: "[FACE_BASE64_DATA]",
  masterPassword: "your_password"
};

const config = {
  method: 'post',
  url: 'https://api.zelf.world/api/clients/auth',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY'
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

url = "https://api.zelf.world/api/clients/auth"

payload = {
    "email": "client@example.com",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "your_password"
}

headers = {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

```php
 "client@example.com",
    "faceBase64" => "[FACE_BASE64_DATA]",
    "masterPassword" => "your_password"
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\nx-api-key: YOUR_API_KEY\r\n",
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
        "email": "client@example.com",
        "faceBase64": "[FACE_BASE64_DATA]",
        "masterPassword": "your_password"
    });
    
    let response = client
        .post("https://api.zelf.world/api/clients/auth")
        .header("Content-Type", "application/json")
        .header("x-api-key", "YOUR_API_KEY")
        .json(&data)
        .send()
        .await?;
    
    let body = response.text().await?;
    println!("{}", body);
    
    Ok(())
}
```
