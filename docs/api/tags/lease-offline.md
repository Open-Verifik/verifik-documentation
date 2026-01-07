# Lease Tag Offline

Lease a tag for offline usage with ZelfProof data.

## Endpoint

```
POST /api/tags/lease-offline
```

## Description

This endpoint allows you to lease a tag for offline usage, enabling Zelf functionality without internet connectivity. It processes ZelfProof data and QR codes to create offline-capable tags.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name of the tag to lease (e.g., "mytag.zelf"). Must be 30 characters or less. |
| `domain` | string | Yes | The domain for the tag ("zelf", "avax", "bdag", or other licensed domains) |
| `zelfProof` | string | No | The ZelfProof data (trademarked term) - can be omitted if zelfProofQRCode is provided |
| `zelfProofQRCode` | string | Yes | Base64 encoded QR code image containing ZelfProof data (trademarked term) |
| `referralTagName` | string | No | Referral tag name for rewards |
| `sync` | boolean | No | Whether to sync with existing tag data |
| `syncPassword` | string | No | Password for syncing encrypted data |
| `syncPublicData` | object | No | Public data to sync (ethAddress, btcAddress, solanaAddress, suiAddress) |
| `duration` | string | No | Lease duration for pricing calculation |
| `removePGP` | boolean | No | Whether to remove PGP encryption |

## Authentication

This endpoint requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Response

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "tagName": "mytag.zelf",
    "domain": "zelf",
    "zelfProof": "encrypted_zelfproof_data...",
    "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64_DATA]",
    "hasPassword": "true",
    "origin": "offline",
    "price": 0,
    "reward": 0,
    "discount": 0,
    "discountType": "none",
    "ethAddress": "0x1234567890123456789012345678901234567890",
    "btcAddress": "bc1qtest123456789012345678901234567890",
    "solanaAddress": "Test1234567890123456789012345678901234567890",
    "suiAddress": "0xtest1234567890123456789012345678901234567890",
    "bDAGName": "mytag.bdag",
    "zelfName": "mytag.zelf",
    "ipfs": {
      "ipfs_pin_hash": "QmTestHash123456789",
      "ipfsHash": "QmTestHash123456789",
      "cid": "QmTestCID123456789",
      "publicData": {
        "ethAddress": "0x1234567890123456789012345678901234567890",
        "btcAddress": "bc1qtest123456789012345678901234567890"
      }
    }
  },
  "zelfName": "mytag.zelf.hold"
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data.tagName` | string | The leased tag name |
| `data.domain` | string | The domain of the tag |
| `data.zelfProof` | string | The ZelfProof data (trademarked term) |
| `data.zelfProofQRCode` | string | Base64 encoded QR code image |
| `data.hasPassword` | string | Whether the tag has password protection ("true" or "false") |
| `data.origin` | string | Always "offline" for this endpoint |
| `data.price` | number | The price of the tag |
| `data.reward` | number | Reward amount |
| `data.discount` | number | Discount amount |
| `data.discountType` | string | Type of discount applied |
| `data.ethAddress` | string | Ethereum address (if provided) |
| `data.btcAddress` | string | Bitcoin address (if provided) |
| `data.solanaAddress` | string | Solana address (if provided) |
| `data.suiAddress` | string | Sui address (if provided) |
| `data.bDAGName` | string | bDAG blockchain name |
| `data.zelfName` | string | Zelf blockchain name |
| `data.ipfs.ipfs_pin_hash` | string | IPFS pin hash |
| `data.ipfs.ipfsHash` | string | IPFS hash |
| `data.ipfs.cid` | string | Content identifier |
| `data.ipfs.publicData` | object | Public data stored on IPFS |
| `zelfName` | string | Full Zelf name with .hold suffix |

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "\"tagName\" is required\n\"domain\" is required\n\"zelfProofQRCode\" is required"
}
```

Or for tag name length validation:

```json
{
  "validationError": "Name must be no more than 30 characters"
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
  "error": "INVALID REQUEST: PARSE ERROR: MISSING FIELD `ZELFPROOF_BASE_64` AT LINE 1 COLUMN 2"
}
```

Or for other server errors:

```json
{
  "error": "tag_purchased_already"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# First, create a session to get JWT token
curl -X POST https://api.zelf.world/api/sessions \
  -H "Content-Type: application/json" \
  -H "Origin: https://yourdomain.com" \
  -d '{
    "identifier": "my-session-id",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Then lease a tag offline
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

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function leaseOfflineTag() {
  try {
    // Create session
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

    // Lease tag offline
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

    console.log('Leased tag:', response.data.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

leaseOfflineTag();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

# Create session
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

# Lease tag offline
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

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php

// Create session
function createSession() {
    $url = 'https://api.zelf.world/api/sessions';
    $data = [
        'identifier' => 'my-session-id',
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

// Lease tag offline
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

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};
use std::collections::HashMap;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    // Create session
    let session_response = client
        .post("https://api.zelf.world/api/sessions")
        .header("Content-Type", "application/json")
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "identifier": "my-session-id",
            "type": "createWallet",
            "isWebExtension": false
        }))
        .send()
        .await?;
    
    let session_data: Value = session_response.json().await?;
    let auth_token = session_data["data"]["token"].as_str().unwrap();
    
    // Lease tag offline
    let response = client
        .post("https://api.zelf.world/api/tags/lease-offline")
        .header("Content-Type", "application/json")
        .header("Authorization", format!("Bearer {}", auth_token))
        .header("Origin", "https://yourdomain.com")
        .json(&json!({
            "tagName": "mytag.zelf",
            "domain": "zelf",
            "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64_DATA]"
        }))
        .send()
        .await?;
    
    let result: Value = response.json().await?;
    println!("{}", serde_json::to_string_pretty(&result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Notes

- **ZelfProof and ZelfProofQRCode** are trademarked terms used by Zelf
- **Offline functionality** enables tag usage without internet connectivity
- **Sync feature** allows synchronization with existing tag data
- **Multi-domain support** for "zelf", "avax", "bdag", and other licensed domains
- **Password protection** can be enabled for enhanced security
- **Referral system** supports tag referral rewards
