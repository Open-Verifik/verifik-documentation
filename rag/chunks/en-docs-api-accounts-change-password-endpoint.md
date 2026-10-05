---
id: "en-docs-api-accounts-change-password-endpoint"
title: "Change Password — Endpoint"
sourcePath: "docs/api/accounts/change-password.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/clients/sync/password"
sourceAnchor: "Endpoint"
---

# Change Password
**API path(s):** /api/clients/sync/password

## Endpoint

Change the master password for a client account.

### Endpoint

```
PUT /api/clients/sync/password
```

## Description

This endpoint allows you to change the master password for a client account. Requires API key authentication.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `currentPassword` | string | Yes | Current master password |
| `newPassword` | string | Yes | New master password |
| `confirmPassword` | string | Yes | Confirmation of new password |

## Authentication

This endpoint requires an API key in the request header:
```
x-api-key: YOUR_API_KEY
```

### Response

```json
{
  "data": {
    "message": "Password updated successfully"
  }
}
```

```json
{
  "validationError": "New password and confirmation do not match"
}
```

```json
{
  "validationError": "ApiKey not valid"
}
```

```json
{
  "validationError": "Current password is incorrect"
}
```

## Examples

```bash
curl -X PUT "https://api.zelf.world/api/clients/sync/password" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{
    "currentPassword": "old_password",
    "newPassword": "new_secure_password",
    "confirmPassword": "new_secure_password"
  }'
```

```javascript
const axios = require('axios');

const data = {
  currentPassword: "old_password",
  newPassword: "new_secure_password",
  confirmPassword: "new_secure_password"
};

const config = {
  method: 'put',
  url: 'https://api.zelf.world/api/clients/sync/password',
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

url = "https://api.zelf.world/api/clients/sync/password"

payload = {
    "currentPassword": "old_password",
    "newPassword": "new_secure_password",
    "confirmPassword": "new_secure_password"
}

headers = {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY"
}

response = requests.put(url, json=payload, headers=headers)
print(response.json())
```

```php
 "old_password",
    "newPassword" => "new_secure_password",
    "confirmPassword" => "new_secure_password"
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\nx-api-key: YOUR_API_KEY\r\n",
        'method'  => 'PUT',
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
        "currentPassword": "old_password",
        "newPassword": "new_secure_password",
        "confirmPassword": "new_secure_password"
    });
    
    let response = client
        .put("https://api.zelf.world/api/clients/sync/password")
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
