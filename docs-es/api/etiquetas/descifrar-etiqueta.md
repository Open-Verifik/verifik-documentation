# Descifrar Etiqueta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Descifrar un ZelfProof para acceder a datos de wallet y metadatos usando verificación biométrica facial.

## Endpoint

```
POST /api/tags/decrypt
```

## Descripción

Este endpoint te permite descifrar un ZelfProof usando verificación biométrica facial para acceder a los datos originales del wallet, incluyendo frases mnemónicas y claves privadas. El proceso de descifrado verifica la identidad del usuario a través del reconocimiento facial antes de proporcionar acceso a información sensible.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a descifrar (sin sufijo de dominio) |
| `domain` | string | Sí | El dominio de la etiqueta (ej., "zelf", "avax", "bdag") |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para verificación biométrica |
| `password` | string | Sí | Contraseña utilizada durante el cifrado original |

## Respuesta

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

## Campos de Respuesta

### Objeto de Respuesta Principal

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | string | Identificador único para el registro IPFS |
| `url` | string | URL directa para acceder al contenido IPFS |
| `ipfs_pin_hash` | string | Identificador hash de pin IPFS |
| `ipfsHash` | string | Hash IPFS del contenido almacenado |
| `cid` | string | Identificador de contenido para IPFS |
| `size` | number | Tamaño del contenido almacenado en bytes |
| `date_pinned` | string | Marca de tiempo ISO cuando el contenido fue fijado en IPFS |
| `publicData` | object | Información pública del wallet |
| `zelfProofQRCode` | string | Imagen de código QR codificada en base64 |
| `zelfProof` | string | Datos ZelfProof codificados en base64 |
| `domain` | string | Dominio de la etiqueta descifrada |
| `metadata` | object | Datos sensibles del wallet descifrados |

### Objeto PublicData

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `btcAddress` | string | Dirección de wallet Bitcoin |
| `domain` | string | Dominio de la etiqueta |
| `ethAddress` | string | Dirección de wallet Ethereum |
| `solanaAddress` | string | Dirección de wallet Solana |
| `suiAddress` | string | Dirección de wallet Sui |
| `zelfName` | string | Nombre Zelf completo (tagName.domain.type) |
| `hasPassword` | string | Si el ZelfProof requiere una contraseña |
| `type` | string | Tipo de la etiqueta (ej., "hold") |
| `origin` | string | Origen de creación ("online" o "offline") |
| `registeredAt` | string | Marca de tiempo de registro |
| `expiresAt` | string | Marca de tiempo de expiración |

### Objeto Metadata

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `mnemonic` | string | Frase mnemónica BIP39 para recuperación del wallet |

## Ejemplos

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

## Notas

- **Verificación Biométrica**: El parámetro `faceBase64` debe contener la misma imagen facial utilizada durante el cifrado original
- **Seguridad de Contraseña**: El parámetro `password` debe coincidir con la contraseña utilizada durante el cifrado original
- **Datos Sensibles**: El campo `metadata` contiene información sensible incluyendo frases mnemónicas - manejar con cuidado
- **Almacenamiento IPFS**: Los datos descifrados se almacenan en IPFS y son accesibles a través de las URLs proporcionadas
- **Soporte de Dominio**: Soporta múltiples dominios incluyendo "zelf", "avax", "bdag", etc.
- **Expiración**: Las etiquetas pueden tener fechas de expiración como se muestra en el campo `expiresAt`
- **Código QR**: El `zelfProofQRCode` puede ser utilizado para acceso offline al ZelfProof

## Consideraciones de Seguridad

- Siempre usar HTTPS al hacer solicitudes
- Almacenar tokens JWT de forma segura y rotarlos regularmente
- Nunca registrar o exponer datos sensibles del campo `metadata`
- Asegurar que las imágenes faciales se capturen de forma segura y no se almacenen de forma insegura
- Usar contraseñas fuertes para el cifrado de ZelfProof
