# Decrypt Tag

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Decrypt a ZelfProof to access wallet data and metadata using biometric face verification.

## Endpoint

```
POST /api/tags/decrypt
```

## Description

This endpoint allows you to decrypt a ZelfProof using biometric face verification to access the original wallet data, including mnemonic phrases and private keys. The decryption process verifies the user's identity through face recognition before providing access to sensitive information.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name of the tag to decrypt (without domain suffix) |
| `domain` | string | Yes | The domain of the tag (e.g., "zelf", "avax", "bdag") |
| `faceBase64` | string | Yes | Base64-encoded face image for biometric verification |
| `password` | string | Yes | Password used during the original encryption |

## Response

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "id": "0199819c-37b8-7e23-a6f7-3033156b356a",
    "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "ipfs_pin_hash": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "ipfsHash": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "cid": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "size": 20238,
    "date_pinned": "2025-09-25T16:02:03.083Z",
    "publicData": {
      "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
      "domain": "zelf",
      "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
      "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb",
      "suiAddress": "0x6a67465417c8feca9d0787bd5aac77eced8f31f7d4aba664ec778b65e47526bd",
      "zelfName": "testcarlos35.zelf.hold",
      "hasPassword": "true",
      "type": "hold",
      "origin": "online",
      "registeredAt": "2025-09-25 11:02:02",
      "expiresAt": "2025-10-25 11:02:02"
    },
    "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64_DATA]",
    "zelfProof": "[ZELFPROOF_BASE64_DATA]",
    "domain": "zelf",
    "metadata": {
      "mnemonic": "street stairs earn fiscal impose sad document next tube word oblige print bitter home yellow allow between will fatal sorry ancient cushion frown dirt"
    }
  }
}
```

</TabItem>

<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Missing required field: tagName"
}
```

</TabItem>

<TabItem value="401" label="401 Unauthorized">

```json
{
  "error": "Unauthorized access"
}
```

</TabItem>

<TabItem value="500" label="500 Internal Server Error">

```json
{
  "error": "Decryption failed: Invalid credentials"
}
```

</TabItem>
</Tabs>

## Response Fields

### Main Response Object

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier for the IPFS record |
| `url` | string | Direct URL to access the IPFS content |
| `ipfs_pin_hash` | string | IPFS pin hash identifier |
| `ipfsHash` | string | IPFS hash of the stored content |
| `cid` | string | Content identifier for IPFS |
| `size` | number | Size of the stored content in bytes |
| `date_pinned` | string | ISO timestamp when content was pinned to IPFS |
| `publicData` | object | Public wallet information |
| `zelfProofQRCode` | string | Base64-encoded QR code image |
| `zelfProof` | string | Base64-encoded ZelfProof data |
| `domain` | string | Domain of the decrypted tag |
| `metadata` | object | Decrypted sensitive wallet data |

### PublicData Object

| Field | Type | Description |
|-------|------|-------------|
| `btcAddress` | string | Bitcoin wallet address |
| `domain` | string | Domain of the tag |
| `ethAddress` | string | Ethereum wallet address |
| `solanaAddress` | string | Solana wallet address |
| `suiAddress` | string | Sui wallet address |
| `zelfName` | string | Full Zelf name (tagName.domain.type) |
| `hasPassword` | string | Whether the ZelfProof requires a password |
| `type` | string | Type of the tag (e.g., "hold") |
| `origin` | string | Origin of creation ("online" or "offline") |
| `registeredAt` | string | Registration timestamp |
| `expiresAt` | string | Expiration timestamp |

### Metadata Object

| Field | Type | Description |
|-------|------|-------------|
| `mnemonic` | string | BIP39 mnemonic phrase for wallet recovery |

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://api.zelf.world/api/tags/decrypt" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "tagName": "mytag",
    "domain": "zelf",
    "faceBase64": "[FACE_BASE64_DATA]",
    "password": "your_password"
  }'
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const data = {
  tagName: "mytag",
  domain: "zelf",
  faceBase64: "[FACE_BASE64_DATA]",
  password: "your_password"
};

const config = {
  method: 'post',
  url: 'https://api.zelf.world/api/tags/decrypt',
  headers: { 
    'Authorization': 'Bearer YOUR_JWT_TOKEN', 
    'Content-Type': 'application/json'
  },
  data: data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
import requests

url = "https://api.zelf.world/api/tags/decrypt"

payload = {
    "tagName": "mytag",
    "domain": "zelf",
    "faceBase64": "[FACE_BASE64_DATA]",
    "password": "your_password"
}

headers = {
    "Authorization": "Bearer YOUR_JWT_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
$url = "https://api.zelf.world/api/tags/decrypt";

$data = array(
    "tagName" => "mytag",
    "domain" => "zelf",
    "faceBase64" => "[FACE_BASE64_DATA]",
    "password" => "your_password"
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\nAuthorization: Bearer YOUR_JWT_TOKEN\r\n",
        'method'  => 'POST',
        'content' => json_encode($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
echo $result;
?>
```

</TabItem>

<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    let data = json!({
        "tagName": "mytag",
        "domain": "zelf",
        "faceBase64": "[FACE_BASE64_DATA]",
        "password": "your_password"
    });
    
    let response = client
        .post("https://api.zelf.world/api/tags/decrypt")
        .header("Authorization", "Bearer YOUR_JWT_TOKEN")
        .header("Content-Type", "application/json")
        .json(&data)
        .send()
        .await?;
    
    let body = response.text().await?;
    println!("{}", body);
    
    Ok(())
}
```

</TabItem>
</Tabs>

## Notes

- **Biometric Verification**: The `faceBase64` parameter must contain the same face image used during the original encryption
- **Password Security**: The `password` parameter must match the password used during the original encryption
- **Sensitive Data**: The `metadata` field contains sensitive information including mnemonic phrases - handle with care
- **IPFS Storage**: The decrypted data is stored on IPFS and accessible via the provided URLs
- **Domain Support**: Supports multiple domains including "zelf", "avax", "bdag", etc.
- **Expiration**: Tags may have expiration dates as shown in the `expiresAt` field
- **QR Code**: The `zelfProofQRCode` can be used for offline access to the ZelfProof

## Security Considerations

- Always use HTTPS when making requests
- Store JWT tokens securely and rotate them regularly
- Never log or expose sensitive data from the `metadata` field
- Ensure face images are captured securely and not stored insecurely
- Use strong passwords for ZelfProof encryption