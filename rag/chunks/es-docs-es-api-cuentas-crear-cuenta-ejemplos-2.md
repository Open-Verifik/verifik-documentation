---
id: "es-docs-es-api-cuentas-crear-cuenta-ejemplos-2"
title: "Crear Cuenta — Ejemplos"
sourcePath: "docs-es/api/cuentas/crear-cuenta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Ejemplos"
---

# Crear Cuenta

Crear una nueva cuenta de cliente con verificación biométrica facial y autenticación con contraseña maestra.

## Ejemplos

```bash
curl -X POST "https://api.zelf.world/api/clients" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "countryCode": "+1",
    "phone": "5551234567",
    "email": "juan.perez@ejemplo.com",
    "language": "es",
    "company": "Empresa Ejemplo",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "ContraseñaSegura123!"
  }'
```

```javascript
const axios = require('axios');

const data = {
  name: "Juan Pérez",
  countryCode: "+1",
  phone: "5551234567",
  email: "juan.perez@ejemplo.com",
  language: "es",
  company: "Empresa Ejemplo",
  faceBase64: "[FACE_BASE64_DATA]",
  masterPassword: "ContraseñaSegura123!"
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

```python

url = "https://api.zelf.world/api/clients"

payload = {
    "name": "Juan Pérez",
    "countryCode": "+1",
    "phone": "5551234567",
    "email": "juan.perez@ejemplo.com",
    "language": "es",
    "company": "Empresa Ejemplo",
    "faceBase64": "[FACE_BASE64_DATA]",
    "masterPassword": "ContraseñaSegura123!"
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

```php
 "Juan Pérez",
    "countryCode" => "+1",
    "phone" => "5551234567",
    "email" => "juan.perez@ejemplo.com",
    "language" => "es",
    "company" => "Empresa Ejemplo",
    "faceBase64" => "[FACE_BASE64_DATA]",
    "masterPassword" => "ContraseñaSegura123!"
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

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result> {
    let client = reqwest::Client::new();
    
    let data = json!({
        "name": "Juan Pérez",
        "countryCode": "+1",
        "phone": "5551234567",
        "email": "juan.perez@ejemplo.com",
        "language": "es",
        "company": "Empresa Ejemplo",
        "faceBase64": "[FACE_BASE64_DATA]",
        "masterPassword": "ContraseñaSegura123!"
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
