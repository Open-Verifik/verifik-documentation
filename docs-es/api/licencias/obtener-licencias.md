# Obtener Licencias

Obtener una lista de todas las licencias disponibles en el sistema.

## Endpoint

```
GET /api/licenses
```

## Descripción

Este endpoint te permite obtener una lista completa de todas las licencias disponibles en el sistema Zelf. Esto incluye información sobre tipos de licencia, precios, características y estado de disponibilidad para diferentes dominios y servicios.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `page` | number | No | Número de página para paginación (por defecto: 1) |
| `limit` | number | No | Número de elementos por página (por defecto: 10, máximo: 100) |
| `domain` | string | No | Filtrar licencias por tipo de dominio (ej., "zelf", "avax", "bdag") |
| `status` | string | No | Filtrar licencias por estado ("active", "inactive", "pending") |
| `type` | string | No | Filtrar licencias por tipo ("personal", "business", "enterprise") |

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200" label="200 OK" default>

```json
{
  "data": {
    "licenses": [
      {
        "id": "license_id_example",
        "name": "Personal License",
        "domain": "zelf",
        "type": "personal",
        "price": 24,
        "duration": 1,
        "features": ["basic_wallet", "face_auth"],
        "status": "active",
        "createdAt": "2025-01-01T00:00:00Z",
        "updatedAt": "2025-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Invalid pagination parameters\n"
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

### Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `licenses` | array | Array de objetos de licencia |
| `licenses[].id` | string | Identificador único para la licencia |
| `licenses[].name` | string | Nombre legible de la licencia |
| `licenses[].domain` | string | Tipo de dominio al que se aplica esta licencia |
| `licenses[].type` | string | Tipo de licencia ("personal", "business", "enterprise") |
| `licenses[].price` | number | Precio de la licencia en USD |
| `licenses[].duration` | number | Duración de la licencia en años |
| `licenses[].features` | array | Array de características incluidas en esta licencia |
| `licenses[].status` | string | Estado de la licencia ("active", "inactive", "pending") |
| `licenses[].createdAt` | string | Timestamp ISO cuando se creó la licencia |
| `licenses[].updatedAt` | string | Timestamp ISO cuando se actualizó la licencia por última vez |
| `pagination` | object | Información de paginación |
| `pagination.page` | number | Número de página actual |
| `pagination.limit` | number | Elementos por página |
| `pagination.total` | number | Número total de licencias |
| `pagination.totalPages` | number | Número total de páginas |

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

# Luego obtener las licencias
curl -X GET "https://api.zelf.world/api/licenses?page=1&limit=10&domain=zelf" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function getLicenses() {
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

    // Luego obtener las licencias
    const licensesResponse = await axios.get('https://api.zelf.world/api/licenses', {
      params: {
        page: 1,
        limit: 10,
        domain: 'zelf',
        status: 'active'
      },
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Licencias:', licensesResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getLicenses();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def get_licenses():
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
    
    # Luego obtener las licencias
    licenses_url = "https://api.zelf.world/api/licenses"
    params = {
        "page": 1,
        "limit": 10,
        "domain": "zelf",
        "status": "active"
    }
    licenses_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    licenses_response = requests.get(licenses_url, params=params, headers=licenses_headers)
    print("Licencias:", licenses_response.json())

if __name__ == "__main__":
    get_licenses()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function getLicenses() {
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
    
    // Luego obtener las licencias
    $licensesUrl = 'https://api.zelf.world/api/licenses?' . http_build_query([
        'page' => 1,
        'limit' => 10,
        'domain' => 'zelf',
        'status' => 'active'
    ]);
    
    $licensesOptions = [
        'http' => [
            'header' => "Content-Type: application/json\r\nOrigin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'GET'
        ]
    ];
    
    $licensesContext = stream_context_create($licensesOptions);
    $licensesResponse = file_get_contents($licensesUrl, false, $licensesContext);
    $licensesResult = json_decode($licensesResponse, true);
    
    echo "Licencias: " . json_encode($licensesResult, JSON_PRETTY_PRINT);
}

getLicenses();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn get_licenses() -> Result<(), Box<dyn std::error::Error>> {
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
    
    // Luego obtener las licencias
    let licenses_url = "https://api.zelf.world/api/licenses";
    let params = [
        ("page", "1"),
        ("limit", "10"),
        ("domain", "zelf"),
        ("status", "active")
    ];
    
    let licenses_response = client
        .get(licenses_url)
        .query(&params)
        .header("Content-Type", "application/json")
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let licenses_result: Value = licenses_response.json().await?;
    println!("Licencias: {}", serde_json::to_string_pretty(&licenses_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>
