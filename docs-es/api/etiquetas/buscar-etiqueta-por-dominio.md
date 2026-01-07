# Buscar Etiquetas por Dominio

Buscar todas las etiquetas dentro de un dominio específico y sistema de almacenamiento.

## Endpoint

```
GET /api/tags/search-by-domain
```

## Descripción

Este endpoint te permite buscar todas las etiquetas disponibles dentro de un dominio específico usando un sistema de almacenamiento particular (IPFS, Arweave, o Walrus). Retorna un array de objetos de etiqueta que contienen metadatos, direcciones de blockchain e información de almacenamiento.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `domain` | string | Sí | El dominio en el que buscar (ej., "zelf", "avax", "bdag") |
| `storage` | string | Sí | Sistema de almacenamiento a buscar ("IPFS", "Arweave", "Walrus") |

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="success" label="200 OK" default>

```json
{
  "data": [
    {
      "id": "01997817-a6fe-7451-9bbb-1abc0e3ca315",
      "name": "testingdomain.zelf.hold",
      "cid": "bafkreiegb75ipiqjcmwc5gd7sec56i24jcqqsit5wesgxuewbhjwf5kdza",
      "size": 21483,
      "number_of_files": 1,
      "mime_type": "image/png",
      "group_id": null,
      "created_at": "2025-09-23T19:40:40.362Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreiegb75ipiqjcmwc5gd7sec56i24jcqqsit5wesgxuewbhjwf5kdza",
      "publicData": {
        "btcAddress": "bc1qa4lwfcfvr4czx85tulmd83r77w8mnken2jpltk",
        "domain": "zelf",
        "ethAddress": "0x2e54E51BA41Aaf19132F1F5ce5ad4d1266726104",
        "extraParams": "{\"hasPassword\":\"true\",\"type\":\"hold\",\"origin\":\"online\",\"registeredAt\":\"2025-09-23 14:40:39\",\"expiresAt\":\"2025-10-23 14:40:39\",\"suiAddress\":\"0x9362642b91628c337a3bc3a57b9997997241785a8f906a29c9cd4e03667f5877\"}",
        "solanaAddress": "HQRfUpzNiQxwtU37PxGbkCAntw3441mzQFyBkXy7rTxN",
        "zelfName": "testingdomain.zelf.hold"
      }
    },
    {
      "id": "c4805114-0000-4571-ba22-12e6fb0688a5",
      "name": "anotherdomainhere.zelf.hold",
      "cid": "bafkreifkbcqozngq66nzeeqjypkldq5cfpaqmqaq3pe7qjvd47pwplw3ze",
      "size": 18073,
      "number_of_files": 1,
      "mime_type": "false",
      "group_id": null,
      "created_at": "2025-09-13T19:48:23.33Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreifkbcqozngq66nzeeqjypkldq5cfpaqmqaq3pe7qjvd47pwplw3ze",
      "publicData": {
        "btcAddress": "bc1qjcerutgp0y2y7yaxps6zllcy6arccn4mff5qnr",
        "domain": "zelf",
        "ethAddress": "0x9Ca1FF37893730F0BFF9052bB9d605e659E15622",
        "extraParams": "{\"hasPassword\":\"true\",\"duration\":\"yearly\",\"type\":\"hold\",\"origin\":\"online\",\"price\":24,\"registeredAt\":\"2025-09-13 14:48:22\",\"expiresAt\":\"2025-10-13 14:48:22\",\"suiAddress\":\"0x571ffe189865411e4f72c07364eb63647917d4205a5907d1e977f3bd1996f68c\"}",
        "solanaAddress": "A4NRExXSojWjUsey5kf9o879mriNfbbXhKrcG1pVUTKy",
        "zelfName": "anotherdomainhere.zelf.hold",
        "zelfProof": "AujeuMt+bdryMcYP1UarcpoM5GS1S72qGLNyp/EOwfsZjvf8je9P91MYCew4hHgzMqFpU4n+Qs0j8GV2QX8+zsraINjF9lMcQ24O7uD2qrP7trd5FRFnn5gCDIeISx/b9B1Vk+/I36PCPjQDBvJ9zlIpJ5wONSAMps5Ef9/TfuWQML2Zu9cVr6eSKIzi+ewSbs48aeBp6jhsMOPH+6eMNqdHxscTgodkNeuMRgAR11sxdfOZmMMZQ9XXqHqcNyd9muhUVbshHszicemzrwNPTX0q3WFoeQthy6znGP5janpdhoT5Cpq59y984pDCMb47VVoaBrB/WjK+2v2KtfgoNUmqKlvVfMzQ/ef5LMbb1nFsyPtUH1FrxbLYbF/qBspdA1x4FYPKYoz9HiOTraQMfjwmoS0US4lOo7/0zffTZVqXso+h+c8mpod769oCYP3snXlUrLqNewJlp5A0Cf4+PcGCqU6hMIelT62NXwnTY1D1qUW/5suiXfoof84zsvEr7zXS5RR9VhFkthllkGuYpQHaiK/5uv8yTrPtkWDL+QVeQb3DnBAmJCs5SPl62/BIe/0kXm5czzaoa99waUYK3YKghYM9B5Gr+qozEBbnWR0QL1xxdnATfzSvqZ+ywY/eA/1oOr0nvpvXgNzoxk5eVmbuoIQQiUz78XOn7IvR6N+oKmOIVvHTUsxyCa0A6MRYzqTIaQUBTjFQMFFlPbxiljwW+q9k8QTjonlU9HLSxYybrfxUb0+MnvxQw3mXQlCaEBqwYMfwHeQ484tBZFq9W0wcKlkiKUVkCAHjlttq/GcanaGd+XojllGHMfSjuo3rtUAkhOQZXatuiaxSNioW2DccxnGwuepXtcgTaNOAEDxdmc0Q3ecTVYdhNPUVJ1LBltdI/vqJf55SyQgh8kTXKO7HdKbqr22jkK5wkfvDtwXwxdOtR5E0kNVYuSNG37HpqeDkTFkmyrTfSR/7mr7ICjZn4AJ3fdSgrRwLCjLzLdCZl6ctKDUh6VrWsQFpfp69uKVvCdgVyTWQtIkmXl2hqxm7XcKizgZGZuRwiAI1zR1ZqutqBSAciBOkBAinLMuPHMCt7SUODBkH5EO5ZyDcvw=="
      }
    }
  ]
}
```

### Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data` | array | Array de objetos de etiqueta encontrados en el dominio |
| `id` | string | Identificador único para la etiqueta |
| `name` | string | Nombre completo de la etiqueta (ej., "username.zelf.hold") |
| `cid` | string | Identificador de contenido para almacenamiento IPFS |
| `size` | number | Tamaño del archivo en bytes |
| `number_of_files` | number | Número de archivos asociados con la etiqueta |
| `mime_type` | string | Tipo MIME del contenido almacenado |
| `group_id` | string\|null | Identificador de grupo (usualmente null) |
| `created_at` | string | Timestamp ISO cuando se creó la etiqueta |
| `url` | string | URL directa para acceder al contenido almacenado |
| `publicData` | object | Información pública de blockchain y metadatos |
| `publicData.btcAddress` | string | Dirección Bitcoin asociada con la etiqueta |
| `publicData.domain` | string | Nombre del dominio (zelf, avax, bdag) |
| `publicData.ethAddress` | string | Dirección Ethereum asociada con la etiqueta |
| `publicData.solanaAddress` | string | Dirección Solana asociada con la etiqueta |
| `publicData.suiAddress` | string | Dirección Sui asociada con la etiqueta |
| `publicData.zelfName` | string | Nombre completo Zelf (ej., "username.zelf.hold") |
| `publicData.extraParams` | string | String JSON que contiene metadatos adicionales |
| `publicData.zelfProof` | string | Datos ZelfProof encriptados (cuando está disponible) |

</TabItem>
<TabItem value="400" label="400 Bad Request">

```json
{
  "validationError": "Domain 'invalid' is not active"
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
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "missing domain\n"
}
```

</TabItem>
<TabItem value="500" label="500 Internal Server Error">

```json
{
  "message": "Internal server error",
  "code": "INTERNAL_ERROR"
}
```

</TabItem>
</Tabs>

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

```bash
# Primero crear una sesión para obtener el token JWT
curl -X POST "https://api.zelf.world/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "identifier": "search_domain_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Luego usar el token para buscar etiquetas por dominio
curl -X GET "https://api.zelf.world/api/tags/search-by-domain?domain=zelf&storage=IPFS" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function searchTagsByDomain() {
  try {
    // Primero crear una sesión
    const sessionResponse = await axios.post('https://api.zelf.world/api/sessions', {
      identifier: 'search_domain_session_123',
      type: 'createWallet',
      isWebExtension: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com'
      }
    });

    const token = sessionResponse.data.data.token;

    // Luego buscar etiquetas por dominio
    const searchResponse = await axios.get('https://api.zelf.world/api/tags/search-by-domain', {
      params: {
        domain: 'zelf',
        storage: 'IPFS'
      },
      headers: {
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log(`Encontradas ${searchResponse.data.data.length} etiquetas en el dominio zelf`);
    console.log(searchResponse.data.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

searchTagsByDomain();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def search_tags_by_domain():
    # Primero crear una sesión
    session_url = "https://api.zelf.world/api/sessions"
    session_data = {
        "identifier": "search_domain_session_123",
        "type": "createWallet",
        "isWebExtension": False
    }
    session_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com"
    }
    
    session_response = requests.post(session_url, json=session_data, headers=session_headers)
    token = session_response.json()["data"]["token"]
    
    # Luego buscar etiquetas por dominio
    search_url = "https://api.zelf.world/api/tags/search-by-domain"
    search_params = {
        "domain": "zelf",
        "storage": "IPFS"
    }
    search_headers = {
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    search_response = requests.get(search_url, params=search_params, headers=search_headers)
    tags = search_response.json()["data"]
    
    print(f"Encontradas {len(tags)} etiquetas en el dominio zelf")
    for tag in tags:
        print(f"- {tag['name']}: {tag['publicData']['ethAddress']}")

search_tags_by_domain()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function searchTagsByDomain() {
    // Primero crear una sesión
    $sessionUrl = 'https://api.zelf.world/api/sessions';
    $sessionData = [
        'identifier' => 'search_domain_session_123',
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
    
    $sessionResponse = file_get_contents($sessionUrl, false, stream_context_create($sessionOptions));
    $sessionResult = json_decode($sessionResponse, true);
    $token = $sessionResult['data']['token'];
    
    // Luego buscar etiquetas por dominio
    $searchUrl = 'https://api.zelf.world/api/tags/search-by-domain?' . http_build_query([
        'domain' => 'zelf',
        'storage' => 'IPFS'
    ]);
    
    $searchOptions = [
        'http' => [
            'header' => "Origin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'GET'
        ]
    ];
    
    $searchResponse = file_get_contents($searchUrl, false, stream_context_create($searchOptions));
    $searchResult = json_decode($searchResponse, true);
    
    $tags = $searchResult['data'];
    echo "Encontradas " . count($tags) . " etiquetas en el dominio zelf\n";
    
    foreach ($tags as $tag) {
        echo "- " . $tag['name'] . ": " . $tag['publicData']['ethAddress'] . "\n";
    }
}

searchTagsByDomain();
?>
```

</TabItem>
<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::json;
use serde_json::Value;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    
    // Primero crear una sesión
    let session_url = "https://api.zelf.world/api/sessions";
    let session_data = json!({
        "identifier": "search_domain_session_123",
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
    
    // Luego buscar etiquetas por dominio
    let search_url = "https://api.zelf.world/api/tags/search-by-domain";
    let search_response = client
        .get(search_url)
        .query(&[
            ("domain", "zelf"),
            ("storage", "IPFS")
        ])
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let search_result: Value = search_response.json().await?;
    let tags = search_result["data"].as_array().unwrap();
    
    println!("Encontradas {} etiquetas en el dominio zelf", tags.len());
    for tag in tags {
        let name = tag["name"].as_str().unwrap();
        let eth_address = tag["publicData"]["ethAddress"].as_str().unwrap();
        println!("- {}: {}", name, eth_address);
    }
    
    Ok(())
}
```

</TabItem>
</Tabs>