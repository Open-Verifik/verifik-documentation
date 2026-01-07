# Create License

Create a new license for a user or organization.

## Endpoint

```
POST /api/licenses
```

## Description

This endpoint allows administrators or authorized users to create new licenses for users or organizations. This includes setting up license types, features, duration, and associated domains. The endpoint supports various license types including personal, business, and enterprise licenses.

## Authentication

This endpoint requires authentication via JWT token with administrative privileges. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | ID of the user to assign this license to |
| `licenseType` | string | Yes | Type of license ("personal", "business", "enterprise") |
| `domain` | string | Yes | Primary domain for this license (e.g., "zelf", "avax", "bdag") |
| `duration` | number | Yes | License duration in years |
| `features` | array | Yes | Array of features to include in this license |
| `price` | number | No | License price in USD (for billing purposes) |
| `notes` | string | No | Additional notes or comments about this license |
| `autoRenew` | boolean | No | Whether license should auto-renew (default: false) |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="201" label="201 Created" default>

```json
{
  "data": {
    "license": {
      "id": "new_license_id",
      "userId": "user_id_example",
      "licenseType": "personal",
      "domain": "zelf",
      "status": "active",
      "expiresAt": "2026-01-01T00:00:00Z",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-01T00:00:00Z",
      "features": ["basic_wallet", "face_auth"],
      "price": 24,
      "duration": 1,
      "autoRenew": false,
      "notes": "Personal license for new user"
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "User already has an active license\n"
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
<TabItem value="403" label="403 Forbidden">

```json
{
  "error": "insufficient_permissions",
  "message": "Administrative privileges required"
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
| `license` | object | Created license information |
| `license.id` | string | Unique identifier for the created license |
| `license.userId` | string | User ID this license is assigned to |
| `license.licenseType` | string | Type of license ("personal", "business", "enterprise") |
| `license.domain` | string | Primary domain for this license |
| `license.status` | string | License status ("active", "pending", "suspended") |
| `license.expiresAt` | string | ISO timestamp when license expires |
| `license.createdAt` | string | ISO timestamp when license was created |
| `license.updatedAt` | string | ISO timestamp when license was last updated |
| `license.features` | array | Array of features included in this license |
| `license.price` | number | License price in USD |
| `license.duration` | number | License duration in years |
| `license.autoRenew` | boolean | Whether license should auto-renew |
| `license.notes` | string | Additional notes about this license |

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

# Then create a license
curl -X POST "https://api.zelf.world/api/licenses" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -d '{
    "userId": "user_123",
    "licenseType": "personal",
    "domain": "zelf",
    "duration": 1,
    "features": ["basic_wallet", "face_auth"],
    "price": 24,
    "notes": "Personal license for new user",
    "autoRenew": false
  }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function createLicense() {
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

    // Then create a license
    const licenseResponse = await axios.post('https://api.zelf.world/api/licenses', {
      userId: 'user_123',
      licenseType: 'personal',
      domain: 'zelf',
      duration: 1,
      features: ['basic_wallet', 'face_auth'],
      price: 24,
      notes: 'Personal license for new user',
      autoRenew: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('License created:', licenseResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

createLicense();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def create_license():
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
    
    # Then create a license
    license_url = "https://api.zelf.world/api/licenses"
    license_data = {
        "userId": "user_123",
        "licenseType": "personal",
        "domain": "zelf",
        "duration": 1,
        "features": ["basic_wallet", "face_auth"],
        "price": 24,
        "notes": "Personal license for new user",
        "autoRenew": False
    }
    license_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    license_response = requests.post(license_url, json=license_data, headers=license_headers)
    print("License created:", license_response.json())

if __name__ == "__main__":
    create_license()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function createLicense() {
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
    
    // Then create a license
    $licenseUrl = 'https://api.zelf.world/api/licenses';
    $licenseData = [
        'userId' => 'user_123',
        'licenseType' => 'personal',
        'domain' => 'zelf',
        'duration' => 1,
        'features' => ['basic_wallet', 'face_auth'],
        'price' => 24,
        'notes' => 'Personal license for new user',
        'autoRenew' => false
    ];
    
    $licenseOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'POST',
            'content' => json_encode($licenseData)
        ]
    ];
    
    $licenseContext = stream_context_create($licenseOptions);
    $licenseResponse = file_get_contents($licenseUrl, false, $licenseContext);
    $licenseResult = json_decode($licenseResponse, true);
    
    echo "License created: " . json_encode($licenseResult, JSON_PRETTY_PRINT);
}

createLicense();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn create_license() -> Result<(), Box<dyn std::error::Error>> {
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
    
    // Then create a license
    let license_url = "https://api.zelf.world/api/licenses";
    let license_data = json!({
        "userId": "user_123",
        "licenseType": "personal",
        "domain": "zelf",
        "duration": 1,
        "features": ["basic_wallet", "face_auth"],
        "price": 24,
        "notes": "Personal license for new user",
        "autoRenew": false
    });
    
    let license_response = client
        .post(license_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .json(&license_data)
        .send()
        .await?;
    
    let license_result: Value = license_response.json().await?;
    println!("License created: {}", serde_json::to_string_pretty(&license_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>
