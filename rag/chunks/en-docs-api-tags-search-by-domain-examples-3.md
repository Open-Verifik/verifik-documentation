---
id: "en-docs-api-tags-search-by-domain-examples-3"
title: "Search Tags by Domain — Examples"
sourcePath: "docs/api/tags/search-by-domain.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/search-by-domain"
sourceAnchor: "Examples"
---

# Search Tags by Domain
**API path(s):** /api/sessions, /api/tags/search-by-domain

Search for all tags within a specific domain and storage system.

## Examples

```bash
# First create a session to get JWT token
curl -X POST "https://api.zelf.world/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "identifier": "search_domain_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Then use the token to search tags by domain
curl -X GET "https://api.zelf.world/api/tags/search-by-domain?domain=zelf&storage=IPFS" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

```javascript
const axios = require('axios');

async function searchTagsByDomain() {
  try {
    // First create a session
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

    // Then search tags by domain
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

    console.log(`Found ${searchResponse.data.data.length} tags in zelf domain`);
    console.log(searchResponse.data.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

searchTagsByDomain();
```

```python

def search_tags_by_domain():
    # First create a session
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
    
    # Then search tags by domain
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
    
    print(f"Found {len(tags)} tags in zelf domain")
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
    
    // Then search tags by domain
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
    echo "Found " . count($tags) . " tags in zelf domain\n";
    
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
