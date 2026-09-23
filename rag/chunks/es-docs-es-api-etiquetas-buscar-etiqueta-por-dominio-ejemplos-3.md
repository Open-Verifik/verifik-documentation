---
id: "es-docs-es-api-etiquetas-buscar-etiqueta-por-dominio-ejemplos-3"
title: "Buscar Etiquetas por Dominio — Ejemplos"
sourcePath: "docs-es/api/etiquetas/buscar-etiqueta-por-dominio.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/search-by-domain"
sourceAnchor: "Ejemplos"
---

# Buscar Etiquetas por Dominio
**API path(s):** /api/sessions, /api/tags/search-by-domain

Buscar todas las etiquetas dentro de un dominio específico y sistema de almacenamiento.

## Ejemplos

```bash
# Primero crear una sesión para obtener el token JWT
curl -X POST "https://api.zelf.world/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "identifier": "search_domain_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Luego usar el token para buscar etiquetas por dominio
curl -X GET "https://api.zelf.world/api/tags/search-by-domain?domain=zelf&storage=IPFS" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

```javascript
const axios = require('axios');

async function searchTagsByDomain() {
  try {
    // Primero crear una sesión
    const sessionResponse = await axios.post('https://api.zelf.world/api/sessions', {
      identifier: 'search_domain_session_123',
      type: 'createWallet',
      isWebExtension: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com'
      }
    });

    const token = sessionResponse.data.data.token;

    // Luego buscar etiquetas por dominio
    const searchResponse = await axios.get('https://api.zelf.world/api/tags/search-by-domain', {
      params: {
        domain: 'zelf',
        storage: 'IPFS'
      },
      headers: {
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log(`Encontradas ${searchResponse.data.data.length} etiquetas en el dominio zelf`);
    console.log(searchResponse.data.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

searchTagsByDomain();
```

```python

def search_tags_by_domain():
    # Primero crear una sesión
    session_url = "https://api.zelf.world/api/sessions"
    session_data = {
        "identifier": "search_domain_session_123",
        "type": "createWallet",
        "isWebExtension": False
    }
    session_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com"
    }
    
    session_response = requests.post(session_url, json=session_data, headers=session_headers)
    token = session_response.json()["data"]["token"]
    
    # Luego buscar etiquetas por dominio
    search_url = "https://api.zelf.world/api/tags/search-by-domain"
    search_params = {
        "domain": "zelf",
        "storage": "IPFS"
    }
    search_headers = {
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    search_response = requests.get(search_url, params=search_params, headers=search_headers)
    tags = search_response.json()["data"]
    
    print(f"Encontradas {len(tags)} etiquetas en el dominio zelf")
    for tag in tags:
        print(f"- {tag['name']}: {tag['publicData']['ethAddress']}")

search_tags_by_domain()
```

```php
 'search_domain_session_123',
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
    
    // Luego buscar etiquetas por dominio
    $searchUrl = 'https://api.zelf.world/api/tags/search-by-domain?' . http_build_query([
        'domain' => 'zelf',
        'storage' => 'IPFS'
    ]);
    
    $searchOptions = [
        'http' => [
            'header' => "Origin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'GET'
        ]
    ];
    
    $searchResponse = file_get_contents($searchUrl, false, stream_context_create($searchOptions));
    $searchResult = json_decode($searchResponse, true);
    
    $tags = $searchResult['data'];
    echo "Encontradas " . count($tags) . " etiquetas en el dominio zelf\n";
    
    foreach ($tags as $tag) {
        echo "- " . $tag['name'] . ": " . $tag['publicData']['ethAddress'] . "\n";
    }
}

searchTagsByDomain();
?>
```

```rust
use reqwest;
use serde_json::json;
use serde_json::Value;
