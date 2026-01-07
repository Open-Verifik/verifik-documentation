# Get Licenses

Retrieve a list of all available licenses in the system.

## Endpoint

```
GET /api/licenses
```

## Description

This endpoint allows you to retrieve a comprehensive list of all licenses available in the Zelf system. This includes information about license types, pricing, features, and availability status for different domains and services.

## Authentication

This endpoint requires authentication via JWT token. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `page` | number | No | Page number for pagination (default: 1) |
| `limit` | number | No | Number of items per page (default: 10, max: 100) |
| `domain` | string | No | Filter licenses by domain type (e.g., "zelf", "avax", "bdag") |
| `status` | string | No | Filter licenses by status ("active", "inactive", "pending") |
| `type` | string | No | Filter licenses by type ("personal", "business", "enterprise") |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "licenses": [
      {
        "id": "license_id_example",
        "name": "Personal License",
        "domain": "zelf",
        "type": "personal",
        "price": 24,
        "duration": 1,
        "features": ["basic_wallet", "face_auth"],
        "status": "active",
        "createdAt": "2025-01-01T00:00:00Z",
        "updatedAt": "2025-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Invalid pagination parameters\n"
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

```json
{
  "error": "validation_error",
  "message": "Invalid request parameters"
}
```

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

</TabItem>
<TabItem value="500" label="500 Internal Server Error">

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```

</TabItem>
</Tabs>

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `licenses` | array | Array of license objects |
| `licenses[].id` | string | Unique identifier for the license |
| `licenses[].name` | string | Human-readable name of the license |
| `licenses[].domain` | string | Domain type this license applies to |
| `licenses[].type` | string | License type ("personal", "business", "enterprise") |
| `licenses[].price` | number | License price in USD |
| `licenses[].duration` | number | License duration in years |
| `licenses[].features` | array | Array of features included in this license |
| `licenses[].status` | string | License status ("active", "inactive", "pending") |
| `licenses[].createdAt` | string | ISO timestamp when license was created |
| `licenses[].updatedAt` | string | ISO timestamp when license was last updated |
| `pagination` | object | Pagination information |
| `pagination.page` | number | Current page number |
| `pagination.limit` | number | Items per page |
| `pagination.total` | number | Total number of licenses |
| `pagination.totalPages` | number | Total number of pages |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# First, create a session to get JWT token
curl -X POST "https://api.zelf.world/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "identifier": "test_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Then get licenses
curl -X GET "https://api.zelf.world/api/licenses?page=1&limit=10&domain=zelf" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function getLicenses() {
  try {
    // First, create a session
    const sessionResponse = await axios.post('https://api.zelf.world/api/sessions', {
      identifier: 'test_session_123',
      type: 'createWallet',
      isWebExtension: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com'
      }
    });

    const token = sessionResponse.data.data.token;

    // Then get licenses
    const licensesResponse = await axios.get('https://api.zelf.world/api/licenses', {
      params: {
        page: 1,
        limit: 10,
        domain: 'zelf',
        status: 'active'
      },
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Licenses:', licensesResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getLicenses();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def get_licenses():
    # First, create a session
    session_url = "https://api.zelf.world/api/sessions"
    session_data = {
        "identifier": "test_session_123",
        "type": "createWallet",
        "isWebExtension": False
    }
    session_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com"
    }
    
    session_response = requests.post(session_url, json=session_data, headers=session_headers)
    token = session_response.json()["data"]["token"]
    
    # Then get licenses
    licenses_url = "https://api.zelf.world/api/licenses"
    params = {
        "page": 1,
        "limit": 10,
        "domain": "zelf",
        "status": "active"
    }
    licenses_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    licenses_response = requests.get(licenses_url, params=params, headers=licenses_headers)
    print("Licenses:", licenses_response.json())

if __name__ == "__main__":
    get_licenses()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function getLicenses() {
    // First, create a session
    $sessionUrl = 'https://api.zelf.world/api/sessions';
    $sessionData = [
        'identifier' => 'test_session_123',
        'type' => 'createWallet',
        'isWebExtension' => false
    ];
    
    $sessionOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\n",
            'method' => 'POST',
            'content' => json_encode($sessionData)
        ]
    ];
    
    $sessionContext = stream_context_create($sessionOptions);
    $sessionResponse = file_get_contents($sessionUrl, false, $sessionContext);
    $sessionResult = json_decode($sessionResponse, true);
    $token = $sessionResult['data']['token'];
    
    // Then get licenses
    $licensesUrl = 'https://api.zelf.world/api/licenses?' . http_build_query([
        'page' => 1,
        'limit' => 10,
        'domain' => 'zelf',
        'status' => 'active'
    ]);
    
    $licensesOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'GET'
        ]
    ];
    
    $licensesContext = stream_context_create($licensesOptions);
    $licensesResponse = file_get_contents($licensesUrl, false, $licensesContext);
    $licensesResult = json_decode($licensesResponse, true);
    
    echo "Licenses: " . json_encode($licensesResult, JSON_PRETTY_PRINT);
}

getLicenses();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn get_licenses() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    // First, create a session
    let session_url = "https://api.zelf.world/api/sessions";
    let session_data = json!({
        "identifier": "test_session_123",
        "type": "createWallet",
        "isWebExtension": false
    });
    
    let session_response = client
        .post(session_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .json(&session_data)
        .send()
        .await?;
    
    let session_result: Value = session_response.json().await?;
    let token = session_result["data"]["token"].as_str().unwrap();
    
    // Then get licenses
    let licenses_url = "https://api.zelf.world/api/licenses";
    let params = [
        ("page", "1"),
        ("limit", "10"),
        ("domain", "zelf"),
        ("status", "active")
    ];
    
    let licenses_response = client
        .get(licenses_url)
        .query(&params)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let licenses_result: Value = licenses_response.json().await?;
    println!("Licenses: {}", serde_json::to_string_pretty(&licenses_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>
