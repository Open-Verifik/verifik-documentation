---
id: "es-docs-es-api-cuentas-autenticar-endpoint"
title: "Autenticar — Endpoint"
sourcePath: "docs-es/api/cuentas/autenticar.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Endpoint"
---

# Autenticar

## Endpoint

Autenticar un cliente usando verificación biométrica facial.

### Endpoint

```
POST /api/clients/auth
```

## Descripción

Este endpoint te permite autenticar un cliente usando email O número de teléfono con verificación biométrica opcional. Requiere autenticación con clave API.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `email` | string | No* | Email del cliente para autenticación (requerido si no se proporciona teléfono) |
| `countryCode` | string | No* | Código de país (requerido si no se proporciona email) |
| `phone` | string | No* | Número de teléfono (requerido si no se proporciona email) |
| `faceBase64` | string | No | Imagen facial codificada en base64 para verificación biométrica |
| `masterPassword` | string | No | Contraseña maestra para verificación biométrica |

*Se debe proporcionar email O countryCode + phone

## Autenticación

Este endpoint requiere una clave API en el header de la solicitud:
```
x-api-key: TU_CLAVE_API
```

### Respuesta

```json
{
  "data": {
    "token": "jwt_authentication_token",
    "zelfProof": "datos_zelf_proof",
    "zelfAccount": {
      "datos_cuenta": "desde_ipfs"
    }
  }
}
```

```json
{
  "validationError": "Se debe proporcionar email o countryCode + phone"
}
```

```json
{
  "validationError": "Clave faltante"
}
```

```json
{
  "validationError": "Cliente no encontrado"
}
```

## Ejemplos

```bash
curl -X POST "https://api.zelf.world/api/clients/auth" \
  -H "Content-Type: application/json" \
  -H "x-api-key: TU_CLAVE_API" \
  -d '{
    "email": "cliente@ejemplo.com",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "tu_contraseña"
  }'
```

```javascript
const axios = require('axios');

const data = {
  email: "cliente@ejemplo.com",
  faceBase64: "[FACE_BASE64_DATA]",
  masterPassword: "tu_contraseña"
};

const config = {
  method: 'post',
  url: 'https://api.zelf.world/api/clients/auth',
  headers: { 
    'Content-Type': 'application/json',
    'x-api-key': 'TU_CLAVE_API'
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

```python

url = "https://api.zelf.world/api/clients/auth"

payload = {
    "email": "cliente@ejemplo.com",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "tu_contraseña"
}

headers = {
    "Content-Type": "application/json",
    "x-api-key": "TU_CLAVE_API"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

```php
 "cliente@ejemplo.com",
    "faceBase64" => "[FACE_BASE64_DATA]",
    "masterPassword" => "tu_contraseña"
);

$options = array(
    'http' => array(
        'header'  => "Content-Type: application/json\r\nx-api-key: TU_CLAVE_API\r\n",
        'method'  => 'POST',
        'content' => json_encode($data)
    )
);

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
echo $result;
?>
```

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    let data = json!({
        "email": "cliente@ejemplo.com",
        "faceBase64": "[FACE_BASE64_DATA]",
        "masterPassword": "tu_contraseña"
    });
    
    let response = client
        .post("https://api.zelf.world/api/clients/auth")
        .header("Content-Type", "application/json")
        .header("x-api-key", "TU_CLAVE_API")
        .json(&data)
        .send()
        .await?;
    
    let body = response.text().await?;
    println!("{}", body);
    
    Ok(())
}
```
