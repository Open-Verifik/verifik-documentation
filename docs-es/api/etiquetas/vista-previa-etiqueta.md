# Vista Previa de Etiqueta

Previsualizar una etiqueta para ver si existe o verificar información de precios antes de alquilarla.

## Endpoint

```
GET /api/tags/preview
```

## Descripción

Este endpoint te permite previsualizar una etiqueta y ver sus detalles antes de comprometerte a alquilarla. Retorna diferentes estructuras de respuesta dependiendo de si la etiqueta ya existe o está disponible para compra.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a previsualizar (ej., "myname") |
| `domain` | string | Sí | El tipo de dominio (ej., "zelf", "avax", "bdag") |
| `os` | string | Sí | Sistema operativo ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | Token CAPTCHA para protección contra bots (opcional) |

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="existing" label="Etiqueta Existente" default>

```json
{
  "data": {
    "preview": {
      "passwordLayer": "WithPassword",
      "publicData": {
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "zelfName": "myname.zelf",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
        "leaseExpiresAt": "2026-01-15 01:31:07",
        "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA"
      },
      "requireLiveness": true
    },
    "tagObject": {
      "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "owner": "vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk",
      "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "explorerUrl": "https://viewblock.io/arweave/tx/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "publicData": {
        "Content-Type": "image/png",
        "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS/y9ZGt9QZyj4xEa5lMrkqPsxuwZNwtXWvuTg57CxLntanbn8e+qFpmw90WMlFcmDOekci3U3ikALMUBRnk0/JL/6vswvvFfNp5txDiXOpeSO19hFsfKjA0cNVpWUti2xZVbH9NjPnMnUMMHP2jeQxVKeVDgdz9FNaUjmKs0UFZYEMhEQW8uDeyHTruY+rIfEY0nbCUCz+FFcVjo2Lz7odNSYEaazCPdNO/NHcSL/gTeBo/uqi/Q1czCWDqgOFkOgHJ9TPrVkCDMJsdJcXf0ndTdshkwWKY2vui7yD5/tNG7yIGQsOfIQY/c0bPGScOGhS7WsIPNmEYM8KOQnJZ17OoOMlLariQkXmpvm+9IkbS68suG4BRJ/2EFKW8aScHxi/yyUL1wWq5Ajyu7Xg5PccVQzl7gb0ivZeMzhWj70D8xNlTQaSxYLLB+PkmsYN+33Dny9WA1rWUgEUZMN1jYPZjZ8MEPjVbhzgQdzPxJEaCUTm0eWVVmnlRSXrpEXFXY7Vgz2nwz5ISbM+1xyb3+oIhAdhHuu5nuizA8f6CstjThtPP/feqMMpj4l0Y1IHD2RVHYE5h56QzNu+Vw38no4AWpiDsZIMODG0ALZ4MAbPNfdhv4G+U21YxHlsMqExTGwefoIO9/7vLaPP73yPdODSXxSX7TWuFqt/IaVOFRvIAIlQ39vCemQKbCH5AC+AxCl6HvdBu5gGv/369w4mvrFC5b1wfDFJl4petOmuBsBGqQcjtVMcBnWj/h3dxkCG7hElWYQkZLAtjLYiYN/XbM7MNfQtcjx8Jxq0gkCyBnUKM+25cFujNu0NZVLznQgBWSDBpxGDJLk3gS55ZSbiWPMcewYzHDBDnzqI3y8CxeAUWVY+Vu6yf2aDr1ikfy9KK3OFYyrTjUxdMLf5cn4pcJUgCGGSvEHeHOmQVP08JCo2ouPdrb3Q+739cI/1VAOGXvhqH5GNmwA7vYyTCILaD3I1jTJJTfj4FneTkT9aKdxe0nIobJbHMo8PU4TzsK09G9PBaz2Fq0BUMVhfPCoVRRqNkj2C5it8QtLnW3CW+ymA40fcCAbWsg259VZ3xhUx8nJlNz7poCbbci4X09hfBEMo4STf4T13/soR9E2Sw8g2KIp4waCoK1BHOYcKPKnoBAruUJlCexD67Kme5nBPxSF0rT/cw7uGJds4zdcA3dMHL1cFQDeL7T2xmPDTHraMPtfVHTAIWjSYJnT8gB/NCdmedq/kRUl9TT4mxeicsqVrBs=",
        "hasPassword": "true",
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "zelfName": "myname.zelf",
        "leaseExpiresAt": "2026-01-15 01:31:07"
      },
      "size": "20443",
      "zelfProofQRCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAABPoklEQVR4Ae3gAZAkSZIkSRKLqpm7R0REZmZmVlVVVVV3d3d3d/fMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMdHd3d3dXV1VVVVVmZkZGRIS7m5kKz0xmV3d1d3dPz8zMzMxMYrXNVVddddVV/+9Queqqq6666v8jKlddddVVV/1/ROWqq6666qr/j6hcddVVV131/xGVq6666qqr/j+ictVVV1111f9HVK666qqrrvr/iMpVV1111VX/H1G56qqrrrrq/yMqV1111VVX/X9E5aqrrrrqqv+PqFx11VVXXfX/EZWrrrrqqqv+P6Jy1VVXXXXV/0dUrrrqqquu+v+IylVXXXXVVf8fUbnqqquuuur/IypXXXXVVVf9f0Tlqquuuuqq/4+oXHXVVVdd9f8Rlauuuuqqq/4/onLVVVddddX/R1Suuuqqq676/4jKVVddddVV/x9Rueqqq6666v8jKlddddVVV/1/ROWqq6666qr/j6hcddVVV131/xGVq6666qqr/j+ictVVV1111f9HVK666qqrrvr/iMpVV1111VX/H1G56qqrrrrq/yMqV1111VVX/X9E5aqrrrrqqv+PqFx11VVXXfX/EZWrrrrqqqv+P6Jy1VVXXXXV/0dUrrrqqquu+v+IylVXXXXVVf8fUbnqqquuuur/IypXXXXVVVf9f0Tlqquuuuqq/4+oXHXVVVdd9f8Rlauuuuqqq/4/onLVVVddddX/R1Suuuqqq676/4jKVVddddVV/x9Rueqqq6666v8jKlddddVVV/1/ROWqq6666qr/j/iHwE/kYLfc5+QdAAAAABJRU5ErkJggg==",
      "zelfProof": "Avgl3a9BDAg1LhTQnmszezf/Xm0bePHAs4JikXQFuspbwWXu0VOKMPe9YE0Rf2++3w1ofqnLdcTJufX99HiLHtPS//eIkOsZJkXf3otci+sdrswpXb+WcOy/S/+/PI+wBQdUCJa728fOXLx62j7lpt0onxFfMwNP5K5Lp+aEkxI0WfzQwOuKVH3nppMMlG/FIpaHST5ocuuFo3xkvVLdT4OeJMfmHAF+PfdoUMR+EreNs8R7JJ9eTXuFYh+/phZ/iB76dvvSEUy8ecB/ZaZX77U/whSWtmqCSXWwkoWpQBeLXGeEb4M4vaTvxhYDXx1Q8MnlryZc8NT7LKhLiK6ghobEG1/QAc1/W8ClHVTxz4EYXl2m0+P8MnC91X+v1xWcw7cU0GmJHHS1SGkRlisKY3fHoCfE0FS6UBsUlUDVTl7WaulJ1Hdgap0Dl8cCZtsFKrdrDkW1LVcqS8qjQO4eqcDjSwOIlAkKnrHfAp3HgGQ0V5r7o7CCQps6WHdV10VXdCGRFwoZJWPbkMWKv6vuqJiOK9Pf501EtXwQR1m7SgeoqSZhgt9dXCVSeRQkkaVKbvjhnZ3vcYnSGNBagP4TOL8HRgfBRPmfM90TX6jW7BIXA8erBROBXpmROGlvnSC86HKzeC9hNWK4f3Sr/RVd0awAPahAXzW02JaSyYghnBNy2LoqOtC3dGn1fi61gkTR4ZJ0ZGTyhlFcUqNV+3zz6IqYUJzTVywfTE7BT5Lm++F8BwcvjU7wfpQ408sJWSzOXFow6mF7jaJtd9li93rZMm2rjvhXReqom1Lo2WFe7y0RtMwLUTEYBRtMtjZQCGLW0ulOrKKSeQM+iSe4G8uluR2+ZAVf+GBi73NO/JqgaMPBchYMS6ojDwCClz4w+JQnIA9NzYsgAftjJi/r19iUo7m26xCpWrzlslfy7kno9R1Ndf0Eh2gEcJAQlrlMF90O7fYGKaNKYqj54CEPu6B34pNZUFWGlaXpdNeQDKAg0OopECvnw2KeFYmAbVhCddG158H5OgoQPtLuW36UbqgHjeSHusCjERF+KW9C4iHS5eBr3+4PSlTBvuDF7ClXcqxtvy7+jn4yy9y+VGd3peecIRwrmLjCJF1gXRPSLTC9nvWdCcvvC2GSPhYFr4B+tTArmScmJ7U7QXgJAfc0KHfuK8WcOJ/EwDseOGKqQ2497sV6YMybXzVhMm2YoLTzxHEeRzYZS1ThpHG6q2OpSG+ClFTpjkT6MJBtzdrmb/GZFxHxOkSGMej1RxO308zqL3CTGGlYs1iTFTk="
    }
  }
}
```

### Campos de Respuesta (Etiqueta Existente)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `preview` | object | Información de previsualización para etiqueta existente |
| `preview.passwordLayer` | string | Nivel de protección por contraseña |
| `preview.publicData` | object | Direcciones públicas de blockchain y metadatos |
| `preview.requireLiveness` | boolean | Si se requiere verificación de vida |
| `tagObject` | object | Objeto de etiqueta completo desde almacenamiento |
| `tagObject.id` | string | Identificador único de la etiqueta |
| `tagObject.owner` | string | Identificador del propietario de la etiqueta |
| `tagObject.url` | string | URL directa a los datos de la etiqueta |
| `tagObject.explorerUrl` | string | URL del explorador de blockchain |
| `tagObject.publicData` | object | Datos públicos de blockchain |
| `tagObject.size` | string | Tamaño de datos en bytes |
| `tagObject.zelfProofQRCode` | string | Código QR codificado en base64 |
| `tagObject.zelfProof` | string | Datos ZelfProof encriptados |

</TabItem>
<TabItem value="available" label="Etiqueta Disponible">

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
    "available": true,
    "tagName": "myname.zelf",
    "price": {
      "price": 24,
      "currency": "USD",
      "reward": 2.4,
      "discount": 0,
      "priceWithoutDiscount": 24,
      "discountType": "percentage"
    }
  }
}
```

### Campos de Respuesta (Etiqueta Disponible)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `ipfs` | array | Opciones de almacenamiento IPFS (vacío para etiquetas disponibles) |
| `arweave` | array | Opciones de almacenamiento Arweave (vacío para etiquetas disponibles) |
| `available` | boolean | Si la etiqueta está disponible para compra |
| `tagName` | string | El nombre de etiqueta solicitado |
| `price` | object | Información de precios para la etiqueta |
| `price.price` | number | Precio actual en USD |
| `price.currency` | string | Tipo de moneda |
| `price.reward` | number | Cantidad de recompensa en USD |
| `price.discount` | number | Cantidad de descuento aplicado |
| `price.priceWithoutDiscount` | number | Precio original antes del descuento |
| `price.discountType` | string | Tipo de descuento (ej., "percentage") |

</TabItem>
<TabItem value="400" label="400 Bad Request">

```json
{
  "validationError": "Name contains invalid characters"
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
  "validationError": "missing tagName\n"
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
    "identifier": "preview_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Luego usar el token para previsualizar una etiqueta
curl -X GET "https://api.zelf.world/api/tags/preview?tagName=myname&domain=zelf&os=DESKTOP" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function previewTag() {
  try {
    // Primero crear una sesión
    const sessionResponse = await axios.post('https://api.zelf.world/api/sessions', {
      identifier: 'preview_session_123',
      type: 'createWallet',
      isWebExtension: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com'
      }
    });

    const token = sessionResponse.data.data.token;

    // Luego previsualizar la etiqueta
    const previewResponse = await axios.get('https://api.zelf.world/api/tags/preview', {
      params: {
        tagName: 'myname',
        domain: 'zelf',
        os: 'DESKTOP'
      },
      headers: {
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log(previewResponse.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

previewTag();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import requests

def preview_tag():
    # Primero crear una sesión
    session_url = "https://api.zelf.world/api/sessions"
    session_data = {
        "identifier": "preview_session_123",
        "type": "createWallet",
        "isWebExtension": False
    }
    session_headers = {
        "Content-Type": "application/json",
        "Origin": "https://test.example.com"
    }
    
    session_response = requests.post(session_url, json=session_data, headers=session_headers)
    token = session_response.json()["data"]["token"]
    
    # Luego previsualizar la etiqueta
    preview_url = "https://api.zelf.world/api/tags/preview"
    preview_params = {
        "tagName": "myname",
        "domain": "zelf",
        "os": "DESKTOP"
    }
    preview_headers = {
        "Origin": "https://test.example.com",
        "Authorization": f"Bearer {token}"
    }
    
    preview_response = requests.get(preview_url, params=preview_params, headers=preview_headers)
    print(preview_response.json())

preview_tag()
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
function previewTag() {
    // Primero crear una sesión
    $sessionUrl = 'https://api.zelf.world/api/sessions';
    $sessionData = [
        'identifier' => 'preview_session_123',
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
    
    // Luego previsualizar la etiqueta
    $previewUrl = 'https://api.zelf.world/api/tags/preview?' . http_build_query([
        'tagName' => 'myname',
        'domain' => 'zelf',
        'os' => 'DESKTOP'
    ]);
    
    $previewOptions = [
        'http' => [
            'header' => "Origin: https://test.example.com\r\nAuthorization: Bearer $token\r\n",
            'method' => 'GET'
        ]
    ];
    
    $previewResponse = file_get_contents($previewUrl, false, stream_context_create($previewOptions));
    echo $previewResponse;
}

previewTag();
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
        "identifier": "preview_session_123",
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
    
    // Luego previsualizar la etiqueta
    let preview_url = "https://api.zelf.world/api/tags/preview";
    let preview_response = client
        .get(preview_url)
        .query(&[
            ("tagName", "myname"),
            ("domain", "zelf"),
            ("os", "DESKTOP")
        ])
        .header("Origin", "https://test.example.com")
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await?;
    
    let preview_result: Value = preview_response.json().await?;
    println!("{}", serde_json::to_string_pretty(&preview_result)?);
    
    Ok(())
}
```

</TabItem>
</Tabs>
