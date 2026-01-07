# Crear Cuenta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Crear una nueva cuenta de cliente con verificación biométrica facial y autenticación con contraseña maestra.

## Endpoint

```
POST /api/clients
```

## Descripción

Este endpoint te permite crear una nueva cuenta de cliente con la información proporcionada. No se requiere autenticación para la creación de cuenta, pero se requiere verificación biométrica facial y una contraseña maestra por seguridad. La cuenta se almacena en IPFS y devuelve un token JWT para futuras autenticaciones.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `name` | string | Sí | Nombre del cliente |
| `countryCode` | string | Sí | Código de país (ej., "+1") |
| `phone` | string | Sí | Número de teléfono |
| `email` | string | Sí | Dirección de email válida |
| `language` | string | No | Idioma preferido ("en" o "es") |
| `company` | string | Sí | Nombre de la empresa |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para verificación biométrica |
| `masterPassword` | string | Sí | Contraseña maestra para seguridad de la cuenta |

## Respuesta

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

## Ejemplos

<Tabs>
<TabItem value="curl" label="cURL" default>

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

</TabItem>

<TabItem value="nodejs" label="Node.js">

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

</TabItem>

<TabItem value="python" label="Python">

```python
import requests

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

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
$url = "https://api.zelf.world/api/clients";

$data = array(
    "name" => "Juan Pérez",
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

</TabItem>

<TabItem value="rust" label="Rust">

```rust
use reqwest;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
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

</TabItem>
</Tabs>

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `data.ipfsHash` | string | Hash IPFS de los datos de cuenta almacenados |
| `data.token` | string | Token de autenticación JWT para futuras solicitudes |
| `data.zelfAccount` | object | Datos de cuenta almacenados en IPFS |
| `data.zelfAccount.url` | string | URL IPFS para acceder a los datos de cuenta |
| `data.zelfAccount.cid` | string | Identificador de contenido para IPFS |
| `data.zelfAccount.pinned` | boolean | Si los datos están fijados en IPFS |
| `data.zelfAccount.web3` | boolean | Si la cuenta soporta características Web3 |
| `data.zelfAccount.name` | string | Nombre de archivo de cuenta en IPFS |
| `data.zelfAccount.publicData` | object | Información pública de la cuenta |
| `data.zelfAccount.publicData.accountEmail` | string | Dirección de email de la cuenta |
| `data.zelfAccount.publicData.accountPhone` | string | Número de teléfono de la cuenta |
| `data.zelfAccount.publicData.accountCompany` | string | Nombre de empresa de la cuenta |
| `data.zelfAccount.publicData.accountCountryCode` | string | Código de país de la cuenta |
| `data.zelfAccount.publicData.accountType` | string | Tipo de cuenta ("client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Nivel de suscripción ("free") |
| `data.zelfAccount.publicData.name` | string | Nombre para mostrar de la cuenta |
| `data.zelfProof` | string | Prueba criptográfica ZelfProof |

## Notas

- Este endpoint no requiere autenticación
- La imagen facial debe proporcionarse en formato base64
- La contraseña maestra es requerida para la seguridad de la cuenta
- Todos los campos requeridos deben proporcionarse
- El idioma por defecto es "en" si no se especifica
- El campo empresa es requerido
- Los datos de cuenta se almacenan en IPFS (Sistema de Archivos InterPlanetario)
- Devuelve un token JWT para futuras autenticaciones
- La validación de email es obligatoria (debe ser formato de email válido)
- La cuenta se fija automáticamente en IPFS para persistencia
