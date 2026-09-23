---
id: "en-docs-api-tags-search-tag-examples-4"
title: "Search Tag — Examples"
sourcePath: "docs/api/tags/search-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/search"
sourceAnchor: "Examples"
---

# Search Tag
**API path(s):** /api/sessions, /api/tags/search

Search for a tag across any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

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

# Then search for a tag
curl -X GET "https://api.zelf.world/api/tags/search?tagName=username.zelf&domain=zelf&os=DESKTOP" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"

# Search with lifetime duration for pricing
curl -X GET "https://api.zelf.world/api/tags/search?tagName=username.zelf&domain=zelf&os=DESKTOP&duration=lifetime" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

```javascript
const axios = require('axios');

async function searchTag() {
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

    // Then search for the tag
    const searchResponse = await axios.get('https://api.zelf.world/api/tags/search', {
      params: {
        tagName: 'username.zelf',
        domain: 'zelf',
        os: 'DESKTOP',
        duration: 'lifetime'
      },
      headers: {
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Search result:', searchResponse.data);
    
    if (searchResponse.data.data.available) {
      console.log('Tag is available for lease at:', searchResponse.data.data.price.price, 'USD');
    } else {
      console.log('Tag is already taken:', searchResponse.data.data.tagObject.publicData.tagName);
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

searchTag();
```

```python

def search_tag():
    try:
        # First, create a session
        session_data = {
            "identifier": "test_session_123",
            "type": "createWallet",
            "isWebExtension": False
        }
        
        session_response = requests.post(
            "https://api.zelf.world/api/sessions",
            json=session_data,
            headers={
                "Content-Type": "application/json",
                "Origin": "https://test.example.com"
            }
        )
        
        token = session_response.json()["data"]["token"]
        
        # Then search for the tag
        search_params = {
            "tagName": "username.zelf",
            "domain": "zelf",
            "os": "DESKTOP",
            "duration": "lifetime"
        }
        
        search_response = requests.get(
            "https://api.zelf.world/api/tags/search",
            params=search_params,
            headers={
                "Origin": "https://test.example.com",
                "Authorization": f"Bearer {token}"
            }
        )
        
        result = search_response.json()
        print("Search result:", json.dumps(result, indent=2))
        
        if result["data"]["available"]:
            print(f"Tag is available for lease at: {result['data']['price']['price']} USD")
        else:
            print(f"Tag is already taken: {result['data']['tagObject']['publicData']['zelfName']}")
            
    except Exception as e:
        print(f"Error: {e}")

search_tag()
```
