---
id: "es-docs-es-api-etiquetas-recuperar-etiqueta-ejemplos-6"
title: "Recuperación de una Etiqueta — Ejemplos"
sourcePath: "docs-es/api/etiquetas/recuperar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Ejemplos"
---

# Recuperación de una Etiqueta

Recuperar una etiqueta usando un ZelfProof existente de una etiqueta previamente alquilada. Este endpoint te permite crear una nueva etiqueta con los mismos datos de wallet de una etiqueta anterior.

## Ejemplos

```bash
# Primero, crear una sesión para obtener el token JWT
curl -X POST "https://api.zelf.world/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "identifier": "test_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Luego usar el token para recuperar una etiqueta
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
    // Primero, crear una sesión
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

    // Luego recuperar la etiqueta
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

    console.log('Recuperación exitosa:', recoveryResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

recoverTag();
```

```python

def recover_tag():
    # Primero, crear una sesión
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
    
    # Luego recuperar la etiqueta
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
    print("Recuperación exitosa:", recovery_response.json())

if __name__ == "__main__":
    recover_tag()
```
