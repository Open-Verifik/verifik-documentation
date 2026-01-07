# Delete Account

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Delete a client account by ID.

## Endpoint

```
DELETE /api/clients/{id}
```

## Description

This endpoint allows you to delete a client account by their ID. Requires API key authentication.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | Client ID (path parameter) |

## Authentication

This endpoint requires an API key in the request header:
```
x-api-key: YOUR_API_KEY
```

## Response

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "message": "Client deleted successfully"
  }
}
```

</TabItem>

<TabItem value="403" label="403 Forbidden">

```json
{
  "validationError": "ApiKey not valid"
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

<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Validation error message"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X DELETE "https://api.zelf.world/api/clients/client_id" \
  -H "x-api-key: YOUR_API_KEY"
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

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

</TabItem>

<TabItem value="python" label="Python">

```python
import requests

url = "https://api.zelf.world/api/clients/client_id"

headers = {
    "x-api-key": "YOUR_API_KEY"
}

response = requests.delete(url, headers=headers)
print(response.json())
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
$url = "https://api.zelf.world/api/clients/client_id";

$options = array(
    'http' => array(
        'header'  => "x-api-key: YOUR_API_KEY\r\n",
        'method'  => 'DELETE'
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

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
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

</TabItem>
</Tabs>

## Notes

- Requires API key authentication
- Client ID must be valid
- This action is irreversible
- All associated data will be permanently deleted
- Use with caution - consider data backup before deletion
