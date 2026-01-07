# Verify Account

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Verify if a client account exists based on email or phone number.

## Endpoint

```
GET /api/clients
```

## Description

This endpoint allows you to check if a client account exists using either email address or phone number. No authentication is required for this verification.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `email` | string | No* | Client email for verification (required if phone not provided) |
| `countryCode` | string | No* | Country code (required if email not provided) |
| `phone` | string | No* | Phone number (required if email not provided) |
| `identificationMethod` | string | No | Identification method used (email or phone) |

*Either email OR countryCode + phone must be provided

## Response

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "exists": true,
    "client": {
      "id": "client_id",
      "name": "Client Name",
      "email": "client@example.com"
    }
  }
}
```

</TabItem>

<TabItem value="400" label="400 Bad Request">

```json
{
  "validationError": "Either email or countryCode + phone must be provided"
}
```

</TabItem>

<TabItem value="404" label="404 Not Found">

```json
{
  "validationError": "Client not found"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X GET "https://api.zelf.world/api/clients?email=client@example.com"
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.zelf.world/api/clients',
  params: {
    email: 'client@example.com'
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

url = "https://api.zelf.world/api/clients"
params = {
    "email": "client@example.com"
}

response = requests.get(url, params=params)
print(response.json())
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
$url = "https://api.zelf.world/api/clients?email=client@example.com";

$context = stream_context_create([
    'http' => [
        'method' => 'GET'
    ]
]);

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
        .get("https://api.zelf.world/api/clients")
        .query(&[("email", "client@example.com")])
        .send()
        .await?;
    
    let body = response.text().await?;
    println!("{}", body);
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Notes

- This endpoint does not require authentication
- Either email OR countryCode + phone must be provided
- Returns client information if account exists
- Useful for checking account status before registration or login
