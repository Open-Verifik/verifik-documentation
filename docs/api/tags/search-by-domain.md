# Search Tags by Domain

Search for all tags within a specific domain and storage system.

## Endpoint

```
GET /api/tags/search-by-domain
```

## Description

This endpoint allows you to search for all available tags within a specific domain using a particular storage system (IPFS, Arweave, or Walrus). It returns an array of tag objects containing metadata, blockchain addresses, and storage information.

## Authentication

This endpoint requires authentication via JWT token. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | Yes | The domain to search within (e.g., "zelf", "avax", "bdag") |
| `storage` | string | Yes | Storage system to search ("IPFS", "Arweave", "Walrus") |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="success" label="200 OK" default>

```json
{
  "data": [
    {
      "id": "01997817-a6fe-7451-9bbb-1abc0e3ca315",
      "name": "testingdomain.zelf.hold",
      "cid": "bafkreiegb75ipiqjcmwc5gd7sec56i24jcqqsit5wesgxuewbhjwf5kdza",
      "size": 21483,
      "number_of_files": 1,
      "mime_type": "image/png",
      "group_id": null,
      "created_at": "2025-09-23T19:40:40.362Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreiegb75ipiqjcmwc5gd7sec56i24jcqqsit5wesgxuewbhjwf5kdza",
      "publicData": {
        "btcAddress": "bc1qa4lwfcfvr4czx85tulmd83r77w8mnken2jpltk",
        "domain": "zelf",
        "ethAddress": "0x2e54E51BA41Aaf19132F1F5ce5ad4d1266726104",
        "extraParams": "{\"hasPassword\":\"true\",\"type\":\"hold\",\"origin\":\"online\",\"registeredAt\":\"2025-09-23 14:40:39\",\"expiresAt\":\"2025-10-23 14:40:39\",\"suiAddress\":\"0x9362642b91628c337a3bc3a57b9997997241785a8f906a29c9cd4e03667f5877\"}",
        "solanaAddress": "HQRfUpzNiQxwtU37PxGbkCAntw3441mzQFyBkXy7rTxN",
        "zelfName": "testingdomain.zelf.hold"
      }
    },
    {
      "id": "c4805114-0000-4571-ba22-12e6fb0688a5",
      "name": "anotherdomainhere.zelf.hold",
      "cid": "bafkreifkbcqozngq66nzeeqjypkldq5cfpaqmqaq3pe7qjvd47pwplw3ze",
      "size": 18073,
      "number_of_files": 1,
      "mime_type": "false",
      "group_id": null,
      "created_at": "2025-09-13T19:48:23.33Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreifkbcqozngq66nzeeqjypkldq5cfpaqmqaq3pe7qjvd47pwplw3ze",
      "publicData": {
        "btcAddress": "bc1qjcerutgp0y2y7yaxps6zllcy6arccn4mff5qnr",
        "domain": "zelf",
        "ethAddress": "0x9Ca1FF37893730F0BFF9052bB9d605e659E15622",
        "extraParams": "{\"hasPassword\":\"true\",\"duration\":\"yearly\",\"type\":\"hold\",\"origin\":\"online\",\"price\":24,\"registeredAt\":\"2025-09-13 14:48:22\",\"expiresAt\":\"2025-10-13 14:48:22\",\"suiAddress\":\"0x571ffe189865411e4f72c07364eb63647917d4205a5907d1e977f3bd1996f68c\"}",
        "solanaAddress": "A4NRExXSojWjUsey5kf9o879mriNfbbXhKrcG1pVUTKy",
        "zelfName": "anotherdomainhere.zelf.hold",
        "zelfProof": "AujeuMt+bdryMcYP1UarcpoM5GS1S72qGLNyp/EOwfsZjvf8je9P91MYCew4hHgzMqFpU4n+Qs0j8GV2QX8+zsraINjF9lMcQ24O7uD2qrP7trd5FRFnn5gCDIeISx/b9B1Vk+/I36PCPjQDBvJ9zlIpJ5wONSAMps5Ef9/TfuWQML2Zu9cVr6eSKIzi+ewSbs48aeBp6jhsMOPH+6eMNqdHxscTgodkNeuMRgAR11sxdfOZmMMZQ9XXqHqcNyd9muhUVbshHszicemzrwNPTX0q3WFoeQthy6znGP5janpdhoT5Cpq59y984pDCMb47VVoaBrB/WjK+2v2KtfgoNUmqKlvVfMzQ/ef5LMbb1nFsyPtUH1FrxbLYbF/qBspdA1x4FYPKYoz9HiOTraQMfjwmoS0US4lOo7/0zffTZVqXso+h+c8mpod769oCYP3snXlUrLqNewJlp5A0Cf4+PcGCqU6hMIelT62NXwnTY1D1qUW/5suiXfoof84zsvEr7zXS5RR9VhFkthllkGuYpQHaiK/5uv8yTrPtkWDL+QVeQb3DnBAmJCs5SPl62/BIe/0kXm5czzaoa99waUYK3YKghYM9B5Gr+qozEBbnWR0QL1xxdnATfzSvqZ+ywY/eA/1oOr0nvpvXgNzoxk5eVmbuoIQQiUz78XOn7IvR6N+oKmOIVvHTUsxyCa0A6MRYzqTIaQUBTjFQMFFlPbxiljwW+q9k8QTjonlU9HLSxYybrfxUb0+MnvxQw3mXQlCaEBqwYMfwHeQ484tBZFq9W0wcKlkiKUVkCAHjlttq/GcanaGd+XojllGHMfSjuo3rtUAkhOQZXatuiaxSNioW2DccxnGwuepXtcgTaNOAEDxdmc0Q3ecTVYdhNPUVJ1LBltdI/vqJf55SyQgh8kTXKO7HdKbqr22jkK5wkfvDtwXwxdOtR5E0kNVYuSNG37HpqeDkTFkmyrTfSR/7mr7ICjZn4AJ3fdSgrRwLCjLzLdCZl6ctKDUh6VrWsQFpfp69uKVvCdgVyTWQtIkmXl2hqxm7XcKizgZGZuRwiAI1zR1ZqutqBSAciBOkBAinLMuPHMCt7SUODBkH5EO5ZyDcvw=="
      }
    }
  ]
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | array | Array of tag objects found in the domain |
| `id` | string | Unique identifier for the tag |
| `name` | string | Full tag name (e.g., "username.zelf.hold") |
| `cid` | string | Content identifier for IPFS storage |
| `size` | number | File size in bytes |
| `number_of_files` | number | Number of files associated with the tag |
| `mime_type` | string | MIME type of the stored content |
| `group_id` | string\|null | Group identifier (usually null) |
| `created_at` | string | ISO timestamp when the tag was created |
| `url` | string | Direct URL to access the stored content |
| `publicData` | object | Public blockchain and metadata information |
| `publicData.btcAddress` | string | Bitcoin address associated with the tag |
| `publicData.domain` | string | Domain name (zelf, avax, bdag) |
| `publicData.ethAddress` | string | Ethereum address associated with the tag |
| `publicData.solanaAddress` | string | Solana address associated with the tag |
| `publicData.suiAddress` | string | Sui address associated with the tag |
| `publicData.zelfName` | string | Full Zelf name (e.g., "username.zelf.hold") |
| `publicData.extraParams` | string | JSON string containing additional metadata |
| `publicData.zelfProof` | string | Encrypted ZelfProof data (when available) |

</TabItem>
<TabItem value="400" label="400 Bad Request">

```json
{
  "validationError": "Domain 'invalid' is not active"
}
```

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing domain\n"
}
```

</TabItem>
<TabItem value="500" label="500 Internal Server Error">

```json
{
  "message": "Internal server error",
  "code": "INTERNAL_ERROR"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

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

</TabItem>
<TabItem value="nodejs" label="Node.js">

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

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

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

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function searchTagsByDomain() {
    // First create a session
    $sessionUrl = 'https://api.zelf.world/api/sessions';
    $sessionData = [
        'identifier' => 'search_domain_session_123',
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

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::json;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    // First create a session
    let session_url = "https://api.zelf.world/api/sessions";
    let session_data = json!({
        "identifier": "search_domain_session_123",
        "type": "createWallet",
        "isWebExtension": false
    });
    
    let session_response = client
        .post(session_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .json(&session_data)
        .send()
        .await?;
    
    let session_result: Value = session_response.json().await?;
    let token = session_result["data"]["token"].as_str().unwrap();
    
    // Then search tags by domain
    let search_url = "https://api.zelf.world/api/tags/search-by-domain";
    let search_response = client
        .get(search_url)
        .query(&[
            ("domain", "zelf"),
            ("storage", "IPFS")
        ])
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let search_result: Value = search_response.json().await?;
    let tags = search_result["data"].as_array().unwrap();
    
    println!("Found {} tags in zelf domain", tags.len());
    for tag in tags {
        let name = tag["name"].as_str().unwrap();
        let eth_address = tag["publicData"]["ethAddress"].as_str().unwrap();
        println!("- {}: {}", name, eth_address);
    }
    
    Ok(())
}
```

</TabItem>
</Tabs>
