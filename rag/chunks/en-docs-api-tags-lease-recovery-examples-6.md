---
id: "en-docs-api-tags-lease-recovery-examples-6"
title: "Lease Recovery — Examples"
sourcePath: "docs/api/tags/lease-recovery.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/lease-recovery"
sourceAnchor: "Examples"
---

# Lease Recovery
**API path(s):** /api/tags/lease-recovery

Recover a tag using an existing ZelfProof from a previously leased tag. This endpoint allows you to create a new tag with the same wallet data from a previous tag.

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

# Then use the token to recover a tag
curl -X POST "https://api.zelf.world/api/tags/lease-recovery" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -d '{
    "zelfProof": "your_existing_zelfproof_data",
    "tagName": "mynewtag",
    "domain": "zelf",
    "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "password": "your_password",
    "os": "DESKTOP",
    "removePGP": true,
    "captchaToken": "optional_captcha_token"
  }'
```

```javascript
const axios = require('axios');

async function recoverTag() {
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

    // Then recover the tag
    const recoveryResponse = await axios.post('https://api.zelf.world/api/tags/lease-recovery', {
      zelfProof: 'your_existing_zelfproof_data',
      tagName: 'mynewtag',
      domain: 'zelf',
      faceBase64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
      password: 'your_password',
      os: 'DESKTOP',
      removePGP: true,
      captchaToken: 'optional_captcha_token'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Recovery successful:', recoveryResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

recoverTag();
```

```python

def recover_tag():
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
    
    # Then recover the tag
    recovery_url = "https://api.zelf.world/api/tags/lease-recovery"
    recovery_data = {
        "zelfProof": "your_existing_zelfproof_data",
        "tagName": "mynewtag",
        "domain": "zelf",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "password": "your_password",
        "os": "DESKTOP",
        "removePGP": True,
        "captchaToken": "optional_captcha_token"
    }
    recovery_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    recovery_response = requests.post(recovery_url, json=recovery_data, headers=recovery_headers)
    print("Recovery successful:", recovery_response.json())

if __name__ == "__main__":
    recover_tag()
```
