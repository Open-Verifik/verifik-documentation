---
id: "en-docs-api-accounts-create-account-examples-2"
title: "Create Account — Examples"
sourcePath: "docs/api/accounts/create-account.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/clients"
sourceAnchor: "Examples"
---

# Create Account
**API path(s):** /api/clients

Create a new client account with biometric face verification and master password authentication.

## Examples

```bash
curl -X POST "https://api.zelf.world/api/clients" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "countryCode": "+1",
    "phone": "5551234567",
    "email": "john.doe@example.com",
    "language": "en",
    "company": "Example Corp",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "SecurePassword123!"
  }'
```

```javascript
const axios = require('axios');

const data = {
  name: "John Doe",
  countryCode: "+1",
  phone: "5551234567",
  email: "john.doe@example.com",
  language: "en",
  company: "Example Corp",
  faceBase64: "[FACE_BASE64_DATA]",
  masterPassword: "SecurePassword123!"
};

const config = {
  method: 'post',
  url: 'https://api.zelf.world/api/clients',
  headers: { 
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

url = "https://api.zelf.world/api/clients"

payload = {
    "name": "John Doe",
    "countryCode": "+1",
    "phone": "5551234567",
    "email": "john.doe@example.com",
    "language": "en",
    "company": "Example Corp",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "SecurePassword123!"
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

```php
 "John Doe",
    "countryCode" => "+1",
    "phone" => "5551234567",
    "email" => "john.doe@example.com",
    "language" => "en",
    "company" => "Example Corp",
    "faceBase64" => "[FACE_BASE64_DATA]",
    "masterPassword" => "SecurePassword123!"
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\n",
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
        "name": "John Doe",
        "countryCode": "+1",
        "phone": "5551234567",
        "email": "john.doe@example.com",
        "language": "en",
        "company": "Example Corp",
        "faceBase64": "[FACE_BASE64_DATA]",
        "masterPassword": "SecurePassword123!"
    });
    
    let response = client
        .post("https://api.zelf.world/api/clients")
        .header("Content-Type", "application/json")
        .json(&data)
        .send()
        .await?;
    
    let body = response.text().await?;
    println!("{}", body);
    
    Ok(())
}
```
