---
id: "es-docs-es-api-etiquetas-vista-previa-etiqueta-ejemplos-5"
title: "Vista Previa de Etiqueta — Ejemplos"
sourcePath: "docs-es/api/etiquetas/vista-previa-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Ejemplos"
---

# Vista Previa de Etiqueta

Previsualizar una etiqueta para ver si existe o verificar información de precios antes de alquilarla.

## Ejemplos

```bash
# Primero crear una sesión para obtener el token JWT
curl -X POST "https://api.zelf.world/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "identifier": "preview_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Luego usar el token para previsualizar una etiqueta
curl -X GET "https://api.zelf.world/api/tags/preview?tagName=myname&domain=zelf&os=DESKTOP" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

```javascript
const axios = require('axios');

async function previewTag() {
  try {
    // Primero crear una sesión
    const sessionResponse = await axios.post('https://api.zelf.world/api/sessions', {
      identifier: 'preview_session_123',
      type: 'createWallet',
      isWebExtension: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com'
      }
    });

    const token = sessionResponse.data.data.token;

    // Luego previsualizar la etiqueta
    const previewResponse = await axios.get('https://api.zelf.world/api/tags/preview', {
      params: {
        tagName: 'myname',
        domain: 'zelf',
        os: 'DESKTOP'
      },
      headers: {
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log(previewResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

previewTag();
```

```python

def preview_tag():
    # Primero crear una sesión
    session_url = "https://api.zelf.world/api/sessions"
    session_data = {
        "identifier": "preview_session_123",
        "type": "createWallet",
        "isWebExtension": False
    }
    session_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com"
    }
    
    session_response = requests.post(session_url, json=session_data, headers=session_headers)
    token = session_response.json()["data"]["token"]
    
    # Luego previsualizar la etiqueta
    preview_url = "https://api.zelf.world/api/tags/preview"
    preview_params = {
        "tagName": "myname",
        "domain": "zelf",
        "os": "DESKTOP"
    }
    preview_headers = {
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    preview_response = requests.get(preview_url, params=preview_params, headers=preview_headers)
    print(preview_response.json())

preview_tag()
```

```php
 'preview_session_123',
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
    
    $sessionResponse = file_get_contents($sessionUrl, false, stream_context_create($sessionOptions));
    $sessionResult = json_decode($sessionResponse, true);
    $token = $sessionResult['data']['token'];
    
    // Luego previsualizar la etiqueta
    $previewUrl = 'https://api.zelf.world/api/tags/preview?' . http_build_query([
        'tagName' => 'myname',
        'domain' => 'zelf',
        'os' => 'DESKTOP'
    ]);
    
    $previewOptions = [
        'http' => [
            'header' => "Origin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'GET'
        ]
    ];
    
    $previewResponse = file_get_contents($previewUrl, false, stream_context_create($previewOptions));
    echo $previewResponse;
}

previewTag();
?>
```

```rust
use reqwest;
use serde_json::json;
use serde_json::Value;
