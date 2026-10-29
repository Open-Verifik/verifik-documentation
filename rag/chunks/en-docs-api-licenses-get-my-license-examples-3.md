---
id: "en-docs-api-licenses-get-my-license-examples-3"
title: "Get My License — Examples"
sourcePath: "docs/api/licenses/get-my-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/licenses/my-license"
sourceAnchor: "Examples"
---

# Get My License
**API path(s):** /api/licenses/my-license

Retrieve the current user's license information and status.

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

# Then get my license
curl -X GET "https://api.zelf.world/api/licenses/my-license?includeUsage=true&includeHistory=true" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

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

```python

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

```rust
use reqwest;
use serde_json::{json, Value};
