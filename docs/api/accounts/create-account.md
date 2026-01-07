# Create Account

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Create a new client account with biometric face verification and master password authentication.

## Endpoint

```
POST /api/clients
```

## Description

This endpoint allows you to create a new client account with the provided information. No authentication is required for account creation, but biometric face verification and a master password are required for security. The account is stored on IPFS and returns a JWT token for future authentication.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Client name |
| `countryCode` | string | Yes | Country code (e.g., "+1") |
| `phone` | string | Yes | Phone number |
| `email` | string | Yes | Valid email address |
| `language` | string | No | Preferred language ("en" or "es") |
| `company` | string | Yes | Company name |
| `faceBase64` | string | Yes | Base64-encoded face image for biometric verification |
| `masterPassword` | string | Yes | Master password for account security |

## Response

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "ipfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "zelfAccount": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "cid": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfs_pin_hash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "ipfsHash": "bafkreic6je22ypwrat7xlso7igw4gfvnkoyf7lhdztwu3hxojyrsi72v6e",
      "pinned": true,
      "web3": true,
      "name": "testclient_1758854160982_y992b@example.com.account",
      "publicData": {
        "accountEmail": "testclient_1758854160982_y992b@example.com",
        "accountPhone": "5554160982",
        "accountCompany": "Test Company",
        "accountCountryCode": "+1",
        "accountType": "client_account",
        "accountSubscriptionId": "free",
        "name": "Test Client"
      }
    },
    "zelfProof": "AhfX5KHGyDdYzSeEs5AlNyxP+Nc1mUiAZD2hODPTnjvem7UI1baWW8ZoCrW10U4uG9ZcxT3EJgX5w6lPwdvMa4v+YZ/L4Hut54j4sMjCzLYEmNLSYkLEFUpsYB6MHnCIpbnP52Jr0khuDLK+3vIoll0doNRq+hJvo6VfOtwzqVNXe0tIxAs8yy8dfzRUg2DntRNSkrcEk2XNW2s6jG3wCDD5BHFL+DA5AaytZP0xl4DI572hf8KEM0YMBzQAfNeofeJTNeEfk1SjtGcf1Xj2abLk3ImCJ+VUm4h3G9fcL12b4qVIE+aqBnuTWJBmAU/9RzxNL2RPX4ZFppQ63JImnJqFR+Pyte24rCFDVir1qFI27Ny7zOvokxt/VwN9GfXuQwv1xTRiccjmqJywZavVzqBMTI6haL99IJK6HTkLLXVJ3ebKS0jXO6p5LLFSDPod/2zuNkVkUtrWupYVo5SL58DWpAHrImKiKrgJgpVgNt78SRbM4z9zOeD7lB2ugUek3lmUMXqoTL4A8Rz7gOzdVCKAzFf47lZ+X1lD7ldPtvxsagqKw/krpXHZ7AxuO3ARwbWY13SBTeSdyDR7NJ7WbebWhiTI07hRRLrEv+9i06eGd4tFaUg+UaLKJLHqLYsKqI8yKpvL5QnduKnLNOgiU1WYsvfw6it6TI41y3LpTaR/FczoucuTO9oUNN5Ktskjh6bSjJAKtT6Ttt2t5OLek0urUkoGtMwMDIhMof2C/IMV6JSJLX5yxjwj16WJtVvNxTW5L4iEIKXm6agYWt94ia3LP9V/AGmZuSGW0JOfpisHqzRN+alBFDu9k99juGWbSUEp42454vFvBM7ALl7yi9Gpv9k6sUJRUoS/QdLnm3AgKIpLBWvNJooofmQIbDCfutpdFphFbyHp6vkWkTC497urbZkH/NkEvuvtP+F9FgLI+5LFQzGIzqb4LS5SIQ1Zi9nrUXkzfgmeOXc9ht1DsgYetGFMfgzPG0nqs5LGuv9EBO9zBDDiBH7mlM/Y43hugl9/14o41iRpi5Efw3UQQmTd6qWp0yfAaXhIox0yFM3Gg74S1DtCf9C0i4SQuZzIEJS/YSJNDy8396z39uZP7Z2QBcmOdEszXE8Frw6w3dDrSJDExCZ8TZ3TZBkVae7MpgUaKGiL0ZcssYApixrxEYEj728YGuI0RXO0s/rc8yCnoeoU3rahqKjP5FlzvtJkTNXp262nDBFIOGJ+UmAIc1Ii7JE0gg=="
  }
}
```

</TabItem>

<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing countryCode\n. missing phone\n. missing email\n. missing company\n. missing faceBase64\n. missing masterPassword\n"
}
```

</TabItem>

<TabItem value="400" label="400 Bad Request">

```json
{
  "validationError": "\"email\" must be a valid email"
}
```

</TabItem>
</Tabs>

## Examples

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
curl -X POST "https://api.zelf.world/api/clients" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "countryCode": "+1",
    "phone": "5551234567",
    "email": "john.doe@example.com",
    "language": "en",
    "company": "Example Corp",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "SecurePassword123!"
  }'
```

</TabItem>

<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

const data = {
  name: "John Doe",
  countryCode: "+1",
  phone: "5551234567",
  email: "john.doe@example.com",
  language: "en",
  company: "Example Corp",
  faceBase64: "[FACE_BASE64_DATA]",
  masterPassword: "SecurePassword123!"
};

const config = {
  method: 'post',
  url: 'https://api.zelf.world/api/clients',
  headers: { 
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

url = "https://api.zelf.world/api/clients"

payload = {
    "name": "John Doe",
    "countryCode": "+1",
    "phone": "5551234567",
    "email": "john.doe@example.com",
    "language": "en",
    "company": "Example Corp",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "SecurePassword123!"
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
$url = "https://api.zelf.world/api/clients";

$data = array(
    "name" => "John Doe",
    "countryCode" => "+1",
    "phone" => "5551234567",
    "email" => "john.doe@example.com",
    "language" => "en",
    "company" => "Example Corp",
    "faceBase64" => "[FACE_BASE64_DATA]",
    "masterPassword" => "SecurePassword123!"
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\n",
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
        "name": "John Doe",
        "countryCode": "+1",
        "phone": "5551234567",
        "email": "john.doe@example.com",
        "language": "en",
        "company": "Example Corp",
        "faceBase64": "[FACE_BASE64_DATA]",
        "masterPassword": "SecurePassword123!"
    });
    
    let response = client
        .post("https://api.zelf.world/api/clients")
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

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data.ipfsHash` | string | IPFS hash of the stored account data |
| `data.token` | string | JWT authentication token for future requests |
| `data.zelfAccount` | object | Account data stored on IPFS |
| `data.zelfAccount.url` | string | IPFS URL to access the account data |
| `data.zelfAccount.cid` | string | Content identifier for IPFS |
| `data.zelfAccount.pinned` | boolean | Whether the data is pinned on IPFS |
| `data.zelfAccount.web3` | boolean | Whether the account supports Web3 features |
| `data.zelfAccount.name` | string | Account filename on IPFS |
| `data.zelfAccount.publicData` | object | Public account information |
| `data.zelfAccount.publicData.accountEmail` | string | Account email address |
| `data.zelfAccount.publicData.accountPhone` | string | Account phone number |
| `data.zelfAccount.publicData.accountCompany` | string | Account company name |
| `data.zelfAccount.publicData.accountCountryCode` | string | Account country code |
| `data.zelfAccount.publicData.accountType` | string | Type of account ("client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Subscription level ("free") |
| `data.zelfAccount.publicData.name` | string | Display name for the account |
| `data.zelfProof` | string | ZelfProof cryptographic proof |

## Notes

- This endpoint does not require authentication
- Face image must be provided in base64 format
- Master password is required for account security
- All required fields must be provided
- Language defaults to "en" if not specified
- Company field is required
- Account data is stored on IPFS (InterPlanetary File System)
- Returns a JWT token for future authentication
- Email validation is enforced (must be valid email format)
- Account is automatically pinned on IPFS for persistence
