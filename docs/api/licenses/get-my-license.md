# Get My License

Retrieve the current user's license information and status.

## Endpoint

```
GET /api/licenses/my-license
```

## Description

This endpoint allows authenticated users to retrieve their own license information, including license details, expiration date, usage statistics, and current status. This is useful for checking license validity, remaining features, and renewal information.

## Authentication

This endpoint requires authentication via JWT token. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `includeUsage` | boolean | No | Include usage statistics in response (default: false) |
| `includeHistory` | boolean | No | Include license history and changes (default: false) |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "license": {
      "id": "user_license_id",
      "userId": "user_id_example",
      "licenseType": "personal",
      "domain": "zelf",
      "status": "active",
      "expiresAt": "2025-12-31T23:59:59Z",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-01T00:00:00Z",
      "features": ["basic_wallet", "face_auth", "qr_generation"],
      "usage": {
        "tagsCreated": 5,
        "tagsRemaining": 95,
        "lastUsed": "2025-01-15T10:30:00Z"
      },
      "history": [
        {
          "action": "license_created",
          "timestamp": "2025-01-01T00:00:00Z",
          "details": "Personal license activated"
        }
      ]
    }
  }
}
```

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
  "error": "license_not_found",
  "message": "No license found for this user"
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
| `license` | object | User's license information |
| `license.id` | string | Unique identifier for the user's license |
| `license.userId` | string | User ID associated with this license |
| `license.licenseType` | string | Type of license ("personal", "business", "enterprise") |
| `license.domain` | string | Primary domain for this license |
| `license.status` | string | License status ("active", "expired", "suspended") |
| `license.expiresAt` | string | ISO timestamp when license expires |
| `license.createdAt` | string | ISO timestamp when license was created |
| `license.updatedAt` | string | ISO timestamp when license was last updated |
| `license.features` | array | Array of features available with this license |
| `license.usage` | object | Usage statistics (only if includeUsage=true) |
| `license.usage.tagsCreated` | number | Number of tags created with this license |
| `license.usage.tagsRemaining` | number | Number of tags remaining |
| `license.usage.lastUsed` | string | ISO timestamp of last license usage |
| `license.history` | array | License history (only if includeHistory=true) |
| `license.history[].action` | string | Action performed on the license |
| `license.history[].timestamp` | string | ISO timestamp when action occurred |
| `license.history[].details` | string | Additional details about the action |

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

# Then get my license
curl -X GET "https://api.zelf.world/api/licenses/my-license?includeUsage=true&includeHistory=true" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function getMyLicense() {
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

    // Then get my license
    const licenseResponse = await axios.get('https://api.zelf.world/api/licenses/my-license', {
      params: {
        includeUsage: true,
        includeHistory: true
      },
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('My License:', licenseResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getMyLicense();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def get_my_license():
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
    
    # Then get my license
    license_url = "https://api.zelf.world/api/licenses/my-license"
    params = {
        "includeUsage": True,
        "includeHistory": True
    }
    license_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    license_response = requests.get(license_url, params=params, headers=license_headers)
    print("My License:", license_response.json())

if __name__ == "__main__":
    get_my_license()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function getMyLicense() {
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
    
    // Then get my license
    $licenseUrl = 'https://api.zelf.world/api/licenses/my-license?' . http_build_query([
        'includeUsage' => true,
        'includeHistory' => true
    ]);
    
    $licenseOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'GET'
        ]
    ];
    
    $licenseContext = stream_context_create($licenseOptions);
    $licenseResponse = file_get_contents($licenseUrl, false, $licenseContext);
    $licenseResult = json_decode($licenseResponse, true);
    
    echo "My License: " . json_encode($licenseResult, JSON_PRETTY_PRINT);
}

getMyLicense();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn get_my_license() -> Result<(), Box<dyn std::error::Error>> {
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
    
    // Then get my license
    let license_url = "https://api.zelf.world/api/licenses/my-license";
    let params = [
        ("includeUsage", "true"),
        ("includeHistory", "true")
    ];
    
    let license_response = client
        .get(license_url)
        .query(&params)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let license_result: Value = license_response.json().await?;
    println!("My License: {}", serde_json::to_string_pretty(&license_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>
