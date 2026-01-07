# Alquilar Etiqueta Offline

Alquilar una etiqueta para uso offline con datos ZelfProof.

## Endpoint

```
POST /api/tags/lease-offline
```

## Descripción

Este endpoint te permite alquilar una etiqueta para uso offline, habilitando la funcionalidad de Zelf sin conectividad a internet. Procesa datos ZelfProof y códigos QR para crear etiquetas capaces de funcionar offline.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a alquilar (ej., "mytag.zelf"). Debe tener 30 caracteres o menos. |
| `domain` | string | Sí | El dominio para la etiqueta ("zelf", "avax", "bdag", u otros dominios licenciados) |
| `zelfProof` | string | No | Los datos ZelfProof (término registrado) - se puede omitir si se proporciona zelfProofQRCode |
| `zelfProofQRCode` | string | Sí | Imagen de código QR codificada en base64 que contiene datos ZelfProof (término registrado) |
| `referralTagName` | string | No | Nombre de etiqueta de referencia para recompensas |
| `sync` | boolean | No | Si sincronizar con datos de etiqueta existentes |
| `syncPassword` | string | No | Contraseña para sincronizar datos encriptados |
| `syncPublicData` | object | No | Datos públicos para sincronizar (ethAddress, btcAddress, solanaAddress, suiAddress) |
| `duration` | string | No | Duración del alquiler para cálculo de precios |
| `removePGP` | boolean | No | Si eliminar el cifrado PGP |

## Autenticación

Este endpoint requiere un token JWT válido en el header de Autorización:

```
Authorization: Bearer <tu-token-jwt>
```

## Respuesta

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

#### Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data.tagName` | string | El nombre de la etiqueta alquilada |
| `data.domain` | string | El dominio de la etiqueta |
| `data.zelfProof` | string | Los datos ZelfProof (término registrado) |
| `data.zelfProofQRCode` | string | Imagen de código QR codificada en base64 |
| `data.hasPassword` | string | Si la etiqueta tiene protección por contraseña ("true" o "false") |
| `data.origin` | string | Siempre "offline" para este endpoint |
| `data.price` | number | El precio de la etiqueta |
| `data.reward` | number | Cantidad de recompensa |
| `data.discount` | number | Cantidad de descuento |
| `data.discountType` | string | Tipo de descuento aplicado |
| `data.ethAddress` | string | Dirección Ethereum (si se proporciona) |
| `data.btcAddress` | string | Dirección Bitcoin (si se proporciona) |
| `data.solanaAddress` | string | Dirección Solana (si se proporciona) |
| `data.suiAddress` | string | Dirección Sui (si se proporciona) |
| `data.bDAGName` | string | Nombre blockchain bDAG |
| `data.zelfName` | string | Nombre blockchain Zelf |
| `data.ipfs.ipfs_pin_hash` | string | Hash de pin IPFS |
| `data.ipfs.ipfsHash` | string | Hash IPFS |
| `data.ipfs.cid` | string | Identificador de contenido |
| `data.ipfs.publicData` | object | Datos públicos almacenados en IPFS |
| `zelfName` | string | Nombre Zelf completo con sufijo .hold |

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "\"tagName\" is required\n\"domain\" is required\n\"zelfProofQRCode\" is required"
}
```

O para validación de longitud del nombre de etiqueta:

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

O para otros errores del servidor:

```json
{
  "error": "tag_purchased_already"
}
```

</TabItem>
</Tabs>

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

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

</TabItem>
<TabItem value="nodejs" label="Node.js">

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

</TabItem>
<TabItem value="python" label="Python">

```python
import requests
import json

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

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php

// Crear sesión
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

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};
use std::collections::HashMap;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    // Crear sesión
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
    
    // Alquilar etiqueta offline
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

## Notas

- **ZelfProof y ZelfProofQRCode** son términos registrados utilizados por Zelf
- **Funcionalidad offline** permite el uso de etiquetas sin conectividad a internet
- **Función de sincronización** permite sincronizar con datos de etiqueta existentes
- **Soporte multi-dominio** para "zelf", "avax", "bdag", y otros dominios licenciados
- **Protección por contraseña** se puede habilitar para mayor seguridad
- **Sistema de referidos** soporta recompensas por referidos de etiquetas
