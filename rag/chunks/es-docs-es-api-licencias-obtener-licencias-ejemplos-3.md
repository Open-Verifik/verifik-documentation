---
id: "es-docs-es-api-licencias-obtener-licencias-ejemplos-3"
title: "Obtener Licencias — Ejemplos"
sourcePath: "docs-es/api/licencias/obtener-licencias.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Ejemplos"
---

# Obtener Licencias

Obtener una lista de todas las licencias disponibles en el sistema.

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

# Luego obtener las licencias
curl -X GET "https://api.zelf.world/api/licenses?page=1&limit=10&domain=zelf" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

```javascript
const axios = require('axios');

async function getLicenses() {
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

    // Luego obtener las licencias
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

    console.log('Licencias:', licensesResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getLicenses();
```

```python

def get_licenses():
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
    
    # Luego obtener las licencias
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
    print("Licencias:", licenses_response.json())

if __name__ == "__main__":
    get_licenses()
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
    
    // Luego obtener las licencias
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
    
    echo "Licencias: " . json_encode($licensesResult, JSON_PRETTY_PRINT);
}

getLicenses();
?>
```

```rust
use reqwest;
use serde_json::{json, Value};
