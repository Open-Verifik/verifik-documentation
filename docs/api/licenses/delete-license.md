# Delete License

Delete an existing license from the system.

## Endpoint

```
DELETE /api/licenses/{licenseId}
```

## Description

This endpoint allows administrators or authorized users to delete an existing license from the system. This action will permanently remove the license and revoke all associated permissions and features for the user. This operation is irreversible and should be used with caution.

## Authentication

This endpoint requires authentication via JWT token with administrative privileges. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `licenseId` | string | Yes | ID of the license to delete (path parameter) |
| `reason` | string | No | Reason for license deletion (for audit purposes) |
| `notifyUser` | boolean | No | Whether to notify the user about license deletion (default: true) |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "message": "License deleted successfully",
    "licenseId": "license_id_example",
    "userId": "user_id_example",
    "deletedAt": "2025-01-15T10:30:00Z",
    "reason": "User requested cancellation"
  }
}
```

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
  "error": "license_not_found",
  "message": "License with the specified ID does not exist"
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
<TabItem value="409" label="409 Conflict">

```json
{
  "error": "license_in_use",
  "message": "Cannot delete license that is currently in use"
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
| `message` | string | Success message confirming license deletion |
| `licenseId` | string | ID of the deleted license |
| `userId` | string | ID of the user whose license was deleted |
| `deletedAt` | string | ISO timestamp when license was deleted |
| `reason` | string | Reason provided for license deletion |

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

# Then delete a license
curl -X DELETE "https://api.zelf.world/api/licenses/license_123?reason=User%20requested%20cancellation&notifyUser=true" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function deleteLicense() {
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

    // Then delete a license
    const licenseResponse = await axios.delete('https://api.zelf.world/api/licenses/license_123', {
      params: {
        reason: 'User requested cancellation',
        notifyUser: true
      },
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('License deleted:', licenseResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

deleteLicense();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def delete_license():
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
    
    # Then delete a license
    license_url = "https://api.zelf.world/api/licenses/license_123"
    params = {
        "reason": "User requested cancellation",
        "notifyUser": True
    }
    license_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    license_response = requests.delete(license_url, params=params, headers=license_headers)
    print("License deleted:", license_response.json())

if __name__ == "__main__":
    delete_license()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function deleteLicense() {
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
    
    // Then delete a license
    $licenseUrl = 'https://api.zelf.world/api/licenses/license_123?' . http_build_query([
        'reason' => 'User requested cancellation',
        'notifyUser' => true
    ]);
    
    $licenseOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'DELETE'
        ]
    ];
    
    $licenseContext = stream_context_create($licenseOptions);
    $licenseResponse = file_get_contents($licenseUrl, false, $licenseContext);
    $licenseResult = json_decode($licenseResponse, true);
    
    echo "License deleted: " . json_encode($licenseResult, JSON_PRETTY_PRINT);
}

deleteLicense();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn delete_license() -> Result<(), Box<dyn std::error::Error>> {
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
    
    // Then delete a license
    let license_url = "https://api.zelf.world/api/licenses/license_123";
    let params = [
        ("reason", "User requested cancellation"),
        ("notifyUser", "true")
    ];
    
    let license_response = client
        .delete(license_url)
        .query(&params)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let license_result: Value = license_response.json().await?;
    println!("License deleted: {}", serde_json::to_string_pretty(&license_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>
