---
id: "en-docs-api-tags-lease-tag-examples-5"
title: "Lease Tag — Examples"
sourcePath: "docs/api/tags/lease-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/lease"
sourceAnchor: "Examples"
---

# Lease Tag
**API path(s):** /api/tags/lease

Lease a tag for any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

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

# Then use the token to lease a tag
curl -X POST "https://api.zelf.world/api/tags/lease" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
      -d '{
        "tagName": "myname",
        "domain": "avax",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "type": "create",
        "os": "DESKTOP",
        "captchaToken": "optional_captcha_token"
      }'
```

```javascript
const axios = require('axios');

async function leaseTag() {
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

    // Then lease the tag
        const leaseResponse = await axios.post('https://api.zelf.world/api/tags/lease', {
          tagName: 'myname',
          domain: 'zelf',
          faceBase64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
          type: 'create',
          os: 'DESKTOP',
          captchaToken: 'optional_captcha_token'
        }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Lease successful:', leaseResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

leaseTag();
```

```python

def lease_tag():
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
    
    # Then lease the tag
    lease_url = "https://api.zelf.world/api/tags/lease"
        lease_data = {
            "tagName": "myname",
            "domain": "bdag",
            "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
            "type": "create",
            "os": "DESKTOP",
            "captchaToken": "optional_captcha_token"
        }
    lease_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    lease_response = requests.post(lease_url, json=lease_data, headers=lease_headers)
    print("Lease successful:", lease_response.json())

if __name__ == "__main__":
    lease_tag()
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
    
    // Then lease the tag
    $leaseUrl = 'https://api.zelf.world/api/tags/lease';
        $leaseData = [
            'tagName' => 'myname',
            'domain' => 'avax',
            'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
            'type' => 'create',
            'os' => 'DESKTOP',
            'captchaToken' => 'optional_captcha_token'
        ];
    
    $leaseOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'POST',
            'content' => json_encode($leaseData)
        ]
    ];
    
    $leaseContext = stream_context_create($leaseOptions);
    $leaseResponse = file_get_contents($leaseUrl, false, $leaseContext);
    $leaseResult = json_decode($leaseResponse, true);
    
    echo "Lease successful: " . json_encode($leaseResult, JSON_PRETTY_PRINT);
}

leaseTag();
?>
```
