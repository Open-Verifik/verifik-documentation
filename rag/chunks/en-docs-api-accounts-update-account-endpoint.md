---
id: "en-docs-api-accounts-update-account-endpoint"
title: "Update Account — Endpoint"
sourcePath: "docs/api/accounts/update-account.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/clients/sync"
sourceAnchor: "Endpoint"
---

# Update Account
**API path(s):** /api/clients/sync

## Endpoint

Update an existing client account information.

### Endpoint

```
PUT /api/clients/sync
```

## Description

This endpoint allows you to update an existing client's information. Requires API key authentication.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | No | Client name |
| `email` | string | No | Client email address |
| `countryCode` | string | No | Country code |
| `phone` | string | No | Phone number |
| `language` | string | No | Language preference (en, es) |

## Authentication

This endpoint requires an API key in the request header:
```
x-api-key: YOUR_API_KEY
```

### Response

```json
{
  "data": {
    "message": "Client updated successfully",
    "client": {
      "id": "client_id",
      "name": "Updated Name",
      "email": "updated@example.com",
      "countryCode": "+1",
      "phone": "5551234567",
      "language": "en"
    }
  }
}
```

```json
{
  "validationError": "ApiKey not valid"
}
```

```json
{
  "validationError": "Validation error message"
}
```

## Examples

```bash
curl -X PUT "https://api.zelf.world/api/clients/sync" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{
    "name": "Updated Name",
    "email": "updated@example.com",
    "language": "en"
  }'
```

```javascript
const axios = require('axios');

const data = {
  name: "Updated Name",
  email: "updated@example.com",
  language: "en"
};

const config = {
  method: 'put',
  url: 'https://api.zelf.world/api/clients/sync',
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

url = "https://api.zelf.world/api/clients/sync"

payload = {
    "name": "Updated Name",
    "email": "updated@example.com",
    "language": "en"
}

headers = {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY"
}

response = requests.put(url, json=payload, headers=headers)
print(response.json())
```

```php
 "Updated Name",
    "email" => "updated@example.com",
    "language" => "en"
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
        "name": "Updated Name",
        "email": "updated@example.com",
        "language": "en"
    });
    
    let response = client
        .put("https://api.zelf.world/api/clients/sync")
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
