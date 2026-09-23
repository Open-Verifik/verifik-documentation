---
id: "en-docs-api-licenses-create-license-examples-3"
title: "Create License — Examples"
sourcePath: "docs/api/licenses/create-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses"
  - "/api/sessions"
sourceAnchor: "Examples"
---

# Create License
**API path(s):** /api/licenses, /api/sessions

Create a new license for a user or organization.

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

```python

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
