# Alquilar Etiqueta

Alquilar una etiqueta para cualquier nombre de dominio soportado (Zelf, Avax, BDAG, u otros dominios licenciados).

## Endpoint

```
POST /api/tags/lease
```

## Descripción

Este endpoint te permite alquilar una etiqueta para cualquier nombre de dominio soportado, creando un vínculo entre tu identidad y la etiqueta elegida. El sistema soporta múltiples dominios incluyendo Zelf, Avax, BDAG, y otros dominios licenciados para empresas y startups. El endpoint genera direcciones de wallet para múltiples blockchains y crea un código QR ZelfProof.

**Nota:** Los términos "ZelfProof", "ZK Face Proof", y "ZelfProofQRCode" están registrados como marca y deben usarse apropiadamente.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a alquilar (ej., "myname") |
| `domain` | string | Sí | El tipo de dominio (ej., "zelf", "avax", "bdag", u otros dominios licenciados) |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para autenticación biométrica |
| `type` | string | Sí | Tipo de operación ("create", "import") |
| `os` | string | Sí | Sistema operativo ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | Token CAPTCHA para protección contra bots (opcional) |

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "ethAddress": "0xd987520cb3877CA9A3796Eb2174f0688a1E89612",
    "solanaAddress": "HC1PVTR3TCbPzpdviMXCzNvv6u8cs46u76DVTdmbCHZ6",
    "btcAddress": "bc1qh2qrnha05sr2vsu3a7sl9f6d6qely3k3jma4vv",
    "bDAGName": "test99fjijfih3.bdag",
    "domain": "bdag",
    "price": 24,
    "reward": 2.4,
    "discount": 0,
    "discountType": "percentage",
    "suiAddress": "0x91f99dc88ff58728d3de5ff0e7c31e7786caf6a90f9064a2d394191386528b48",
    "hasPassword": "true",
    "zelfProof": "AtxfV40bK7VSB4fDl5QMUcjcIdOu4ZQ6Oq8duuz1UXsqhpIgSZ320S13DlqkH9y6FeSwJarYmYKaujP37H9fYzNlpgjP6nMKNJDTyiNkpJyLMsocnaOu5j395t0KouvFJQZ4wYyAFVWyZXbcLk2QNAP0+sHW4zyYwY71TpSoddnFYw1JxC417SgzypbEMBUjzr1DfC0AVISowe3wdGBmf821F5PBIljCWJ2wyG9zg5vF2cMtKa3Dk74s+sC/ykQoufMFKkOWpGd0p/TplVQILJW8kBAHkLfX45Z2RmuKxU+DSf/obws0sKNc9TcOfEeGuzDCVOkxH9StycOXfP5up7ftu2WMFPA0M5drTj80u1he+okdnRA53FaqbKhwLroZm4DOJxeGuz7rb1IdeJ8VtNE5CRfKMncVxBW36VoMvHF+ZEyNnUoOUX6ngq0/izY5fm2HlKcUurvHkKxpTz/0qNeicSge2FDjLe5Q0t7MI6KrmfMWlUTF+Ii9tytIyluLFqMG016ggLlxKVA9AIslWVRmZONQiz/JIIFxq6PTnrdu4nb1weX7B0VzkgBPt6HhMPcFXOC6BRq+r63NOaLqIj6oS6lYT74KyuQjqI2BqYBkp3Z6P7tPgw6d/ICw4dAmB0AJV0kbUNEo7KDNcbfiK4gfTRKf4WDYZpLNGGJPj2EeoJ3ajX2pacPDusxf+S/T2+cw51R9RFRUkhYzxrHtSqOllx8T1HHdxT1Q0QpT2szPlh60qXBWbBxGJo8rHwSuc+he0YeY3TA4JdbRpaFqhnYM7UZFnYC0YZNs8bpW1gvnnNYvSLIqycSJbWFIq7ZwPy8miO4Drb7v2IIHZCKTy57qWHIb2JHtfoh0e+Z8/VTxCtzJq2WwP73zEVL32wVY4tV+8tWE8HRYW+nAsf9aw42dpB9xwlrxVCUKSqUv9KP5cKBAJKQDNnKzgdwgBijsaKRfx1wL10PBcKt65e/M1TT1Mzuyajd99dhqdiHUu8RcciCpxujuezEFLxOfW8qdYDgBJXRuakyqaJ3apdLIsiOwhhnTLouHVzJvxhh2SMpRQ8J0SbDjNL6wfCKe54FR1D+PHeuHSOTKNJMHY3fD4Zo3Uy74TWFPRs2wkp3+GA1kNC0YJp/1rvp044yW697rCdW8F12atb8zK/0MLC3nr2CcicGZ9ZcFMhdi5jEX93ScM69Qds9Ms98rZ1yDzohrANXqNt/cnigEZ9MnMhzJCrCunCC9aaBzEQSYGwUfNK+rydG2OVLVaXPQRZyvwTy92AnrceHXwA==",
    "zelfProofQRCode": "data:image/png;base64,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JPFvJYn72eZ+kvjXkMT9bHM/SdzPNveTxP1scz9J3M8295PEv5Vt/jVs868hif8Ikrifbe4nifvZ5vmRxP1scz/b3E8S97PN/zhUrrrqqquu+v+IylVXXXXVVf8fUbnqqquuuur/I2Sbq6666qqr/t+hctVVV1111f9HVK666qqrrvr/iMpVV1111VX/H1G56qqrrrrq/yMqV1111VVX/X9E5aqrrrrqqv+PqFx11VVXXfX/EZWrrrrqqqv+P6Jy1VVXXXXV/0dUrrrqqquu+v+IylVXXXXVVf8fUbnqqquuuur/IypXXXXVVVf9f0Tlqquuuuqq/4+oXHXVVVdd9f8Rlauuuuqqq/4/onLVVVddddX/R1Suuuqqq676/4jKVVddddVV/x9Rueqqq6666v8jKlddddVVV/1/ROWqq6666qr/j6hcddVVV131/xGVq6666qqr/j+ictVVV1111f9HVK666qqrrvr/iMpVV1111VX/H1G56qqrrrrq/yMqV1111VVX/X9E5aqrrrrqqv+PqFx11VVXXfX/EZWrrrrqqqv+P6Jy1VVXXXXV/0dUrrrqqquu+v+IylVXXXXVVf8fUbnqqquuuur/IypXXXXVVVf9f0Tlqquuuuqq/4+oXHXVVVdd9f8Rlauuuuqqq/4/onLVVVddddX/R1Suuuqqq676/4jKVVddddVV/x9Rueqqq6666v8jKlddddVVV/1/xD8CE6X8TjoZbU4AAAAASUVORK5CYII=",
    "ipfs": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreihrk4qkneehsrrd5njcro33ajcscftwdps4qlvlpk4ktfct6qnar4",
      "ipfs_pin_hash": "bafkreihrk4qkneehsrrd5njcro33ajcscftwdps4qlvlpk4ktfct6qnar4",
      "ipfsHash": "bafkreihrk4qkneehsrrd5njcro33ajcscftwdps4qlvlpk4ktfct6qnar4",
      "cid": "bafkreihrk4qkneehsrrd5njcro33ajcscftwdps4qlvlpk4ktfct6qnar4",
      "publicData": {
        "bDAGName": "test99fjijfih3.bdag.hold",
        "domain": "bdag",
        "ethAddress": "0xd987520cb3877CA9A3796Eb2174f0688a1E89612",
        "btcAddress": "bc1qh2qrnha05sr2vsu3a7sl9f6d6qely3k3jma4vv",
        "solanaAddress": "HC1PVTR3TCbPzpdviMXCzNvv6u8cs46u76DVTdmbCHZ6",
        "suiAddress": "0x91f99dc88ff58728d3de5ff0e7c31e7786caf6a90f9064a2d394191386528b48",
        "hasPassword": "true",
        "type": "hold",
        "origin": "online",
        "registeredAt": "2025-09-23 16:39:45",
        "expiresAt": "2025-10-23 16:39:45"
      }
    }
  }
}
```

### Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `ethAddress` | string | Dirección de wallet Ethereum generada |
| `solanaAddress` | string | Dirección de wallet Solana generada |
| `btcAddress` | string | Dirección de wallet Bitcoin generada |
| `bDAGName` | string | Nombre de dominio BDAG generado |
| `domain` | string | El tipo de dominio utilizado |
| `price` | number | Precio de alquiler en USD |
| `reward` | number | Cantidad de recompensa en USD |
| `discount` | number | Cantidad de descuento aplicado |
| `discountType` | string | Tipo de descuento (ej., "percentage") |
| `suiAddress` | string | Dirección de wallet Sui generada |
| `hasPassword` | string | Si la etiqueta tiene una contraseña ("true"/"false") |
| `zelfProof` | string | Datos ZelfProof encriptados (término registrado) |
| `zelfProofQRCode` | string | Código QR codificado en base64 para ZelfProof (término registrado) |
| `ipfs` | object | Información de almacenamiento IPFS |
| `ipfs.url` | string | URL del gateway IPFS |
| `ipfs.ipfs_pin_hash` | string | Hash de pin IPFS |
| `ipfs.ipfsHash` | string | Hash IPFS |
| `ipfs.cid` | string | Identificador de contenido |
| `ipfs.publicData` | object | Datos públicos almacenados en IPFS |

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing tagName\n"
}
```

</TabItem>
<TabItem value="400" label="400 Bad Request">

```json
{
  "error": "validation_error",
  "message": "Invalid request parameters"
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
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```

</TabItem>
</Tabs>

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# Primero, crear una sesión para obtener el token JWT
curl -X POST "https://api.zelf.world/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "identifier": "test_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Luego usar el token para alquilar una etiqueta
curl -X POST "https://api.zelf.world/api/tags/lease" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
      -d '{
        "tagName": "myname",
        "domain": "avax",
        "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
        "type": "create",
        "os": "DESKTOP",
        "captchaToken": "optional_captcha_token"
      }'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function leaseTag() {
  try {
    // Primero, crear una sesión
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

    // Luego alquilar la etiqueta
        const leaseResponse = await axios.post('https://api.zelf.world/api/tags/lease', {
          tagName: 'myname',
          domain: 'zelf',
          faceBase64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
          type: 'create',
          os: 'DESKTOP',
          captchaToken: 'optional_captcha_token'
        }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Alquiler exitoso:', leaseResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

leaseTag();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import base64

def lease_tag():
    # Primero, crear una sesión
    session_url = "https://api.zelf.world/api/sessions"
    session_data = {
        "identifier": "test_session_123",
        "type": "createWallet",
        "isWebExtension": False
    }
    session_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com"
    }
    
    session_response = requests.post(session_url, json=session_data, headers=session_headers)
    token = session_response.json()["data"]["token"]
    
    # Luego alquilar la etiqueta
    lease_url = "https://api.zelf.world/api/tags/lease"
        lease_data = {
            "tagName": "myname",
            "domain": "bdag",
            "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
            "type": "create",
            "os": "DESKTOP",
            "captchaToken": "optional_captcha_token"
        }
    lease_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    lease_response = requests.post(lease_url, json=lease_data, headers=lease_headers)
    print("Alquiler exitoso:", lease_response.json())

if __name__ == "__main__":
    lease_tag()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function leaseTag() {
    // Primero, crear una sesión
    $sessionUrl = 'https://api.zelf.world/api/sessions';
    $sessionData = [
        'identifier' => 'test_session_123',
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
    
    $sessionContext = stream_context_create($sessionOptions);
    $sessionResponse = file_get_contents($sessionUrl, false, $sessionContext);
    $sessionResult = json_decode($sessionResponse, true);
    $token = $sessionResult['data']['token'];
    
    // Luego alquilar la etiqueta
    $leaseUrl = 'https://api.zelf.world/api/tags/lease';
        $leaseData = [
            'tagName' => 'myname',
            'domain' => 'avax',
            'faceBase64' => 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...',
            'type' => 'create',
            'os' => 'DESKTOP',
            'captchaToken' => 'optional_captcha_token'
        ];
    
    $leaseOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'POST',
            'content' => json_encode($leaseData)
        ]
    ];
    
    $leaseContext = stream_context_create($leaseOptions);
    $leaseResponse = file_get_contents($leaseUrl, false, $leaseContext);
    $leaseResult = json_decode($leaseResponse, true);
    
    echo "Alquiler exitoso: " . json_encode($leaseResult, JSON_PRETTY_PRINT);
}

leaseTag();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};
use std::collections::HashMap;

#[tokio::main]
async fn lease_tag() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    // Primero, crear una sesión
    let session_url = "https://api.zelf.world/api/sessions";
    let session_data = json!({
        "identifier": "test_session_123",
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
    
    // Luego alquilar la etiqueta
    let lease_url = "https://api.zelf.world/api/tags/lease";
        let lease_data = json!({
            "tagName": "myname",
            "domain": "zelf",
            "faceBase64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
            "type": "create",
            "os": "DESKTOP",
            "captchaToken": "optional_captcha_token"
        });
    
    let lease_response = client
        .post(lease_url)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .json(&lease_data)
        .send()
        .await?;
    
    let lease_result: Value = lease_response.json().await?;
    println!("Alquiler exitoso: {}", serde_json::to_string_pretty(&lease_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>
