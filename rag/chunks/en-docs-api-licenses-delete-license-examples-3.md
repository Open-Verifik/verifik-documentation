---
id: "en-docs-api-licenses-delete-license-examples-3"
title: "Delete License — Examples"
sourcePath: "docs/api/licenses/delete-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses"
  - "/api/licenses/{licenseid}"
sourceAnchor: "Examples"
---

# Delete License
**API path(s):** /api/licenses, /api/licenses/{licenseid}

Delete an existing license from the system.

## Examples

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

```python

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

```php
 'test_session_123',
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

```rust
use reqwest;
use serde_json::{json, Value};
