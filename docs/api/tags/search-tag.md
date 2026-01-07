# Search Tag

Search for a tag across any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

## Endpoint

```
GET /api/tags/search
```

## Description

This endpoint allows you to search for a tag across multiple domains and storage systems (IPFS and Arweave). The system supports multiple domains including Zelf, Avax, BDAG, and other licensed domains for companies and startups. 

**Response Types:**
1. **Tag Found**: Returns the tag object with all associated data
2. **Tag Not Found**: Returns pricing information for leasing the tag

**Note:** The terms "ZelfProof", "ZK Face Proof", and "ZelfProofQRCode" are trademarked and should be used appropriately.

## Authentication

This endpoint requires authentication via JWT token. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name of the tag to search for (e.g., "username.zelf") |
| `domain` | string | No | The domain type (e.g., "zelf", "avax", "bdag", or other licensed domains) |
| `key` | string | No | Search key for advanced search |
| `value` | string | No | Search value for advanced search |
| `os` | string | No | Operating system ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | CAPTCHA token for bot protection (optional) |
| `duration` | string | No | Duration for pricing ("1", "2", "3", "4", "5", "lifetime") |

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200-found" label="200 OK - Tag Found" default>

```json
{
  "data": {
    "ipfs": [
      {
        "id": "0ee38476-9465-4431-9448-af82ab8156a9",
        "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "ipfs_pin_hash": "bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "ipfsHash": "bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "cid": "bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "size": 20443,
        "date_pinned": "2025-04-11T15:25:31.984Z",
        "publicData": {
          "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
          "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
          "hasPassword": "true",
          "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
          "type": "mainnet",
          "zelfName": "migueltrevino.zelf",
          "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS...[truncated for brevity]",
          "price": 0.8,
          "duration": 1,
          "registeredAt": "2025-01-15 01:31:07",
          "expiresAt": "2026-01-15 01:31:07"
        }
      }
    ],
    "arweave": [
      {
        "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "owner": "vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk",
        "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "explorerUrl": "https://viewblock.io/arweave/tx/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "publicData": {
          "Content-Type": "image/png",
          "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS...[truncated for brevity]",
          "hasPassword": "true",
          "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
          "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA",
          "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
          "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
          "zelfName": "migueltrevino.zelf",
          "leaseExpiresAt": "2026-01-15 01:31:07"
        },
        "size": "20443",
        "zelfProofQRCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOt...[truncated for brevity]",
        "zelfProof": "Avgl3a9BDAg1LhTQnmszezf/Xm0bePHAs4JikXQFusp...[truncated for brevity]"
      }
    ],
    "available": false,
    "tagName": "migueltrevino.zelf",
    "tagObject": {
      "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "owner": "vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk",
      "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "explorerUrl": "https://viewblock.io/arweave/tx/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "publicData": {
        "Content-Type": "image/png",
        "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS...[truncated for brevity]",
        "hasPassword": "true",
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "zelfName": "migueltrevino.zelf",
        "leaseExpiresAt": "2026-01-15 01:31:07"
      },
      "size": "20443",
      "zelfProofQRCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOt...[truncated for brevity]",
      "zelfProof": "Avgl3a9BDAg1LhTQnmszezf/Xm0bePHAs4JikXQFusp...[truncated for brevity]"
    }
  }
}
```

</TabItem>
<TabItem value="200-not-found" label="200 OK - Tag Not Found">

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
    "available": true,
    "tagName": "newuser.zelf",
    "price": {
      "price": 24,
      "currency": "USD",
      "reward": 2.4,
      "discount": 0,
      "priceWithoutDiscount": 24,
      "discountType": "percentage"
    }
  }
}
```

</TabItem>
<TabItem value="200-lifetime" label="200 OK - Lifetime Pricing">

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
    "available": true,
    "tagName": "newuser.zelf",
    "price": {
      "price": 210,
      "currency": "USD",
      "reward": 21,
      "discount": 0,
      "priceWithoutDiscount": 210,
      "discountType": "percentage"
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Name must be no more than 20 characters"
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
<TabItem value="500" label="500 Internal Server Error">

```json
{
  "error": "Cannot read properties of undefined (reading 'toLowerCase')"
}
```

</TabItem>
</Tabs>

### Response Fields

#### When Tag is Found (available: false)

| Field | Type | Description |
|-------|------|-------------|
| `ipfs` | array | IPFS results containing the tag data |
| `arweave` | array | Arweave results containing the tag data |
| `available` | boolean | Whether the tag is available (false = found/taken) |
| `tagName` | string | The searched tag name |
| `tagObject` | object | Complete tag object with all associated data |
| `tagObject.id` | string | Unique identifier on storage system |
| `tagObject.owner` | string | Owner identifier |
| `tagObject.url` | string | Direct URL to access the tag data |
| `tagObject.explorerUrl` | string | Blockchain explorer URL |
| `tagObject.publicData` | object | Public metadata and wallet addresses |
| `tagObject.publicData.zelfProof` | string | ZelfProof signature (trademarked term) |
| `tagObject.publicData.hasPassword` | string | Whether tag has password protection |
| `tagObject.publicData.ethAddress` | string | Ethereum wallet address |
| `tagObject.publicData.evm` | string | Supported EVM networks |
| `tagObject.publicData.solanaAddress` | string | Solana wallet address |
| `tagObject.publicData.btcAddress` | string | Bitcoin wallet address |
| `tagObject.publicData.zelfName` | string | Full tag name |
| `tagObject.publicData.leaseExpiresAt` | string | Tag lease expiration date |
| `tagObject.size` | string | Size of the stored data |
| `tagObject.zelfProofQRCode` | string | Base64 QR code image (trademarked term) |
| `tagObject.zelfProof` | string | Additional ZelfProof data (trademarked term) |

#### When Tag is Not Found (available: true)

| Field | Type | Description |
|-------|------|-------------|
| `ipfs` | array | IPFS search results (empty) |
| `arweave` | array | Arweave search results (empty) |
| `available` | boolean | Whether the tag is available (true = not found) |
| `tagName` | string | The searched tag name |
| `price` | object | Pricing information for leasing the tag |
| `price.price` | number | Lease price in USD |
| `price.currency` | string | Currency (USD) |
| `price.reward` | number | Reward amount in USD |
| `price.discount` | number | Discount amount applied |
| `price.priceWithoutDiscount` | number | Original price before discount |
| `price.discountType` | string | Type of discount (e.g., "percentage") |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

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

</TabItem>
<TabItem value="nodejs" label="Node.js">

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

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

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

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php

function searchTag() {
    try {
        // First, create a session
        $sessionData = [
            'identifier' => 'test_session_123',
            'type' => 'createWallet',
            'isWebExtension' => false
        ];
        
        $sessionResponse = http_request('POST', 'https://api.zelf.world/api/sessions', $sessionData);
        $token = $sessionResponse['data']['token'];
        
        // Then search for the tag
        $searchParams = [
            'tagName' => 'username.zelf',
            'domain' => 'zelf',
            'os' => 'DESKTOP',
            'duration' => 'lifetime'
        ];
        
        $searchUrl = 'https://api.zelf.world/api/tags/search?' . http_build_query($searchParams);
        $searchResponse = http_request('GET', $searchUrl, null, [
            'Origin: https://test.example.com',
            'Authorization: Bearer ' . $token
        ]);
        
        echo "Search result: " . json_encode($searchResponse, JSON_PRETTY_PRINT) . "\n";
        
        if ($searchResponse['data']['available']) {
            echo "Tag is available for lease at: " . $searchResponse['data']['price']['price'] . " USD\n";
        } else {
            echo "Tag is already taken: " . $searchResponse['data']['tagObject']['publicData']['zelfName'] . "\n";
        }
        
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
    }
}

function http_request($method, $url, $data = null, $headers = []) {
    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    
    if ($data) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    }
    
    $defaultHeaders = ['Content-Type: application/json'];
    curl_setopt($ch, CURLOPT_HTTPHEADER, array_merge($defaultHeaders, $headers));
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}

searchTag();

?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};
use std::collections::HashMap;

#[tokio::main]
async fn search_tag() -> Result<(), Box<dyn std::error::Error>> {
    // First, create a session
    let session_data = json!({
        "identifier": "test_session_123",
        "type": "createWallet",
        "isWebExtension": false
    });
    
    let client = reqwest::Client::new();
    let session_response = client
        .post("https://api.zelf.world/api/sessions")
        .json(&session_data)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .send()
        .await?;
    
    let session_result: Value = session_response.json().await?;
    let token = session_result["data"]["token"].as_str().unwrap();
    
    // Then search for the tag
    let mut search_params = HashMap::new();
    search_params.insert("tagName", "username.zelf");
    search_params.insert("domain", "zelf");
    search_params.insert("os", "DESKTOP");
    search_params.insert("duration", "lifetime");
    
    let search_response = client
        .get("https://api.zelf.world/api/tags/search")
        .query(&search_params)
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let result: Value = search_response.json().await?;
    println!("Search result: {}", serde_json::to_string_pretty(&result)?);
    
    if result["data"]["available"].as_bool().unwrap() {
        println!("Tag is available for lease at: {} USD", 
                result["data"]["price"]["price"].as_f64().unwrap());
    } else {
        println!("Tag is already taken: {}", 
                result["data"]["tagObject"]["publicData"]["zelfName"].as_str().unwrap());
    }
    
    Ok(())
}

// Add to Cargo.toml:
// [dependencies]
// reqwest = { version = "0.11", features = ["json"] }
// serde_json = "1.0"
// tokio = { version = "1.0", features = ["full"] }
```

</TabItem>
</Tabs>

## Domain-Specific Pricing

Different domains have different pricing structures:

- **Zelf**: $24 USD (1 year), $210 USD (lifetime)
- **Avax**: $18 USD (1 year)
- **BDAG**: Variable pricing based on domain configuration

## Duration Options

| Duration | Description | Typical Price Multiplier |
|----------|-------------|-------------------------|
| `1` | 1 year | 1x base price |
| `2` | 2 years | ~1.8x base price |
| `3` | 3 years | ~2.5x base price |
| `4` | 4 years | ~3.2x base price |
| `5` | 5 years | ~3.8x base price |
| `lifetime` | Lifetime | ~8.75x base price |

## Error Responses

*Error responses are documented in the response tabs above, including validation errors, authentication errors, and server errors.*