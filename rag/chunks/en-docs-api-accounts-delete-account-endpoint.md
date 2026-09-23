---
id: "en-docs-api-accounts-delete-account-endpoint"
title: "Delete Account — Endpoint"
sourcePath: "docs/api/accounts/delete-account.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/clients"
  - "/api/clients/{id}"
sourceAnchor: "Endpoint"
---

# Delete Account
**API path(s):** /api/clients, /api/clients/{id}

## Endpoint

Delete a client account by ID.

### Endpoint

```
DELETE /api/clients/{id}
```

## Description

This endpoint allows you to delete a client account by their ID. Requires API key authentication.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Client ID (path parameter) |

## Authentication

This endpoint requires an API key in the request header:
```
x-api-key: YOUR_API_KEY
```

### Response

```json
{
  "data": {
    "message": "Client deleted successfully"
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
  "validationError": "Client not found"
}
```

```json
{
  "validationError": "Validation error message"
}
```

## Examples

```bash
curl -X DELETE "https://api.zelf.world/api/clients/client_id" \
  -H "x-api-key: YOUR_API_KEY"
```

```javascript
const axios = require('axios');

const config = {
  method: 'delete',
  url: 'https://api.zelf.world/api/clients/client_id',
  headers: { 
    'x-api-key': 'YOUR_API_KEY'
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

```python

url = "https://api.zelf.world/api/clients/client_id"

headers = {
    "x-api-key": "YOUR_API_KEY"
}

response = requests.delete(url, headers=headers)
print(response.json())
```

```php
 array(
        'header'  => "x-api-key: YOUR_API_KEY\r\n",
        'method'  => 'DELETE'
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
echo $result;
?>
```

```rust
use reqwest;

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    let response = client
        .delete("https://api.zelf.world/api/clients/client_id")
        .header("x-api-key", "YOUR_API_KEY")
        .send()
        .await?;
    
    let body = response.text().await?;
    println!("{}", body);
    
    Ok(())
}
```
