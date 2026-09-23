---
id: "es-docs-es-api-etiquetas-alquiler-etiqueta-offline-ejemplos-3"
title: "Alquilar Etiqueta Offline — Ejemplos"
sourcePath: "docs-es/api/etiquetas/alquiler-etiqueta-offline.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease-offline"
sourceAnchor: "Ejemplos"
---

# Alquilar Etiqueta Offline
**API path(s):** /api/sessions, /api/tags/lease-offline

Alquilar una etiqueta para uso offline con datos ZelfProof.

## Ejemplos

```bash
# Primero, crear una sesión para obtener el token JWT
curl -X POST https://api.zelf.world/api/sessions \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -d '{
    "identifier": "my-session-id",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Luego alquilar una etiqueta offline
curl -X POST https://api.zelf.world/api/tags/lease-offline \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Origin: https://yourdomain.com" \
  -d '{
    "tagName": "mytag.zelf",
    "domain": "zelf",
    "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64_DATA]"
  }'
```

```javascript
const axios = require('axios');

async function leaseOfflineTag() {
  try {
    // Crear sesión
    const sessionResponse = await axios.post('https://api.zelf.world/api/sessions', {
      identifier: 'my-session-id',
      type: 'createWallet',
      isWebExtension: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://yourdomain.com'
      }
    });

    const authToken = sessionResponse.data.data.token;

    // Alquilar etiqueta offline
    const response = await axios.post('https://api.zelf.world/api/tags/lease-offline', {
      tagName: 'mytag.zelf',
      domain: 'zelf',
      zelfProofQRCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
        'Origin': 'https://yourdomain.com'
      }
    });

    console.log('Etiqueta alquilada:', response.data.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

leaseOfflineTag();
```

```python

# Crear sesión
def create_session():
    url = 'https://api.zelf.world/api/sessions'
    data = {
        'identifier': 'my-session-id',
        'type': 'createWallet',
        'isWebExtension': False
    }
    headers = {
        'Content-Type': 'application/json',
        'Origin': 'https://yourdomain.com'
    }
    
    response = requests.post(url, json=data, headers=headers)
    return response.json()['data']['token']

# Alquilar etiqueta offline
def lease_offline_tag():
    auth_token = create_session()
    
    url = 'https://api.zelf.world/api/tags/lease-offline'
    data = {
        'tagName': 'mytag.zelf',
        'domain': 'zelf',
        'zelfProofQRCode': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
    }
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {auth_token}',
        'Origin': 'https://yourdomain.com'
    }
    
    response = requests.post(url, json=data, headers=headers)
    return response.json()

result = lease_offline_tag()
print(json.dumps(result, indent=2))
```

```php
 'my-session-id',
        'type' => 'createWallet',
        'isWebExtension' => false
    ];
    
    $options = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://yourdomain.com\r\n",
            'method' => 'POST',
            'content' => json_encode($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $result = json_decode($response, true);
    
    return $result['data']['token'];
}

// Alquilar etiqueta offline
function leaseOfflineTag() {
    $authToken = createSession();
    
    $url = 'https://api.zelf.world/api/tags/lease-offline';
    $data = [
        'tagName' => 'mytag.zelf',
        'domain' => 'zelf',
        'zelfProofQRCode' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
    ];
    
    $options = [
        'http' => [
            'header' => "Content-Type: application/json\r\nAuthorization: Bearer $authToken\r\nOrigin: https://yourdomain.com\r\n",
            'method' => 'POST',
            'content' => json_encode($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    
    return json_decode($response, true);
}

$result = leaseOfflineTag();
echo json_encode($result, JSON_PRETTY_PRINT);

?>
```

```rust
use reqwest;
use serde_json::{json, Value};
use std::collections::HashMap;
