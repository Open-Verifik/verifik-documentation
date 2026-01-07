# Buscar Etiqueta

Buscar una etiqueta en cualquier nombre de dominio soportado (Zelf, Avax, BDAG, u otros dominios licenciados).

## Endpoint

```
GET /api/tags/search
```

## Descripción

Este endpoint te permite buscar una etiqueta a través de múltiples dominios y sistemas de almacenamiento (IPFS y Arweave). El sistema soporta múltiples dominios incluyendo Zelf, Avax, BDAG, y otros dominios licenciados para empresas y startups.

**Tipos de Respuesta:**
1. **Etiqueta Encontrada**: Retorna el objeto de etiqueta con todos los datos asociados
2. **Etiqueta No Encontrada**: Retorna información de precios para alquilar la etiqueta

**Nota:** Los términos "ZelfProof", "ZK Face Proof", y "ZelfProofQRCode" están registrados como marca y deben usarse apropiadamente.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

## Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a buscar (ej., "username.zelf") |
| `domain` | string | No | El tipo de dominio (ej., "zelf", "avax", "bdag", u otros dominios licenciados) |
| `key` | string | No | Clave de búsqueda para búsqueda avanzada |
| `value` | string | No | Valor de búsqueda para búsqueda avanzada |
| `os` | string | No | Sistema operativo ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | Token CAPTCHA para protección contra bots (opcional) |
| `duration` | string | No | Duración para precios ("1", "2", "3", "4", "5", "lifetime") |

## Respuesta

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="200-found" label="200 OK - Etiqueta Encontrada" default>

```json
{
  "data": {
    "ipfs": [
      {
        "id": "0ee38476-9465-4431-9448-af82ab8156a9",
        "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "ipfs_pin_hash": "bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "ipfsHash": "bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "cid": "bafkreibv4c2j5covzbbzlldetlua7iubupz62sypgryel63xwyoua4qjte",
        "size": 20443,
        "date_pinned": "2025-04-11T15:25:31.984Z",
        "publicData": {
          "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
          "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
          "hasPassword": "true",
          "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
          "type": "mainnet",
          "zelfName": "migueltrevino.zelf",
          "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS...[truncated for brevity]",
          "price": 0.8,
          "duration": 1,
          "registeredAt": "2025-01-15 01:31:07",
          "expiresAt": "2026-01-15 01:31:07"
        }
      }
    ],
    "arweave": [
      {
        "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "owner": "vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk",
        "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "explorerUrl": "https://viewblock.io/arweave/tx/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
        "publicData": {
          "Content-Type": "image/png",
          "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS...[truncated for brevity]",
          "hasPassword": "true",
          "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
          "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA",
          "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
          "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
          "zelfName": "migueltrevino.zelf",
          "leaseExpiresAt": "2026-01-15 01:31:07"
        },
        "size": "20443",
        "zelfProofQRCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOt...[truncated for brevity]",
        "zelfProof": "Avgl3a9BDAg1LhTQnmszezf/Xm0bePHAs4JikXQFusp...[truncated for brevity]"
      }
    ],
    "available": false,
    "tagName": "migueltrevino.zelf",
    "tagObject": {
      "id": "fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "owner": "vzrsUNMg17WFPmh73xZguPbn_cZzqnef3btvmn6-YDk",
      "url": "https://arweave.zelf.world/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "explorerUrl": "https://viewblock.io/arweave/tx/fL2-FBVD0GFddYIfbD8wrjE7kKSMFtSgTxKJGHXYKgk",
      "publicData": {
        "Content-Type": "image/png",
        "zelfProof": "A54jeNyfJFD+x9WOpXQL+s8VYa2PFtlS...[truncated for brevity]",
        "hasPassword": "true",
        "ethAddress": "0x2DDcA84eF860085053A0008471BF27D73658f261",
        "evm": "ETH,BNB,MATIC,AVAX,FTM,ARB,OP,CRO,ONE,KLAY,xDAI,GLMR,CELO,OKT,AURORA",
        "solanaAddress": "5nKCBsij6qPYLMqVMQUXikgnAvnUSYCKEi8uS91Rg1dr",
        "btcAddress": "18gM3C84vAeAYvy5KweUdaJtmhD86dLAN2",
        "zelfName": "migueltrevino.zelf",
        "leaseExpiresAt": "2026-01-15 01:31:07"
      },
      "size": "20443",
      "zelfProofQRCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOt...[truncated for brevity]",
      "zelfProof": "Avgl3a9BDAg1LhTQnmszezf/Xm0bePHAs4JikXQFusp...[truncated for brevity]"
    }
  }
}
```

</TabItem>
<TabItem value="200-not-found" label="200 OK - Etiqueta No Encontrada">

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
    "available": true,
    "tagName": "newuser.zelf",
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

</TabItem>
<TabItem value="200-lifetime" label="200 OK - Precios de Por Vida">

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
    "available": true,
    "tagName": "newuser.zelf",
    "price": {
      "price": 210,
      "currency": "USD",
      "reward": 21,
      "discount": 0,
      "priceWithoutDiscount": 210,
      "discountType": "percentage"
    }
  }
}
```

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
  "validationError": "Name must be no more than 20 characters"
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
  "error": "Cannot read properties of undefined (reading 'toLowerCase')"
}
```

</TabItem>
</Tabs>

### Campos de Respuesta

#### Cuando la Etiqueta es Encontrada (available: false)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `ipfs` | array | Resultados IPFS que contienen los datos de la etiqueta |
| `arweave` | array | Resultados Arweave que contienen los datos de la etiqueta |
| `available` | boolean | Si la etiqueta está disponible (false = encontrada/ocupada) |
| `tagName` | string | El nombre de la etiqueta buscada |
| `tagObject` | object | Objeto de etiqueta completo con todos los datos asociados |
| `tagObject.id` | string | Identificador único en el sistema de almacenamiento |
| `tagObject.owner` | string | Identificador del propietario |
| `tagObject.url` | string | URL directa para acceder a los datos de la etiqueta |
| `tagObject.explorerUrl` | string | URL del explorador de blockchain |
| `tagObject.publicData` | object | Metadatos públicos y direcciones de wallet |
| `tagObject.publicData.zelfProof` | string | Firma ZelfProof (término registrado) |
| `tagObject.publicData.hasPassword` | string | Si la etiqueta tiene protección por contraseña |
| `tagObject.publicData.ethAddress` | string | Dirección de wallet Ethereum |
| `tagObject.publicData.evm` | string | Redes EVM soportadas |
| `tagObject.publicData.solanaAddress` | string | Dirección de wallet Solana |
| `tagObject.publicData.btcAddress` | string | Dirección de wallet Bitcoin |
| `tagObject.publicData.zelfName` | string | Nombre completo de la etiqueta |
| `tagObject.publicData.leaseExpiresAt` | string | Fecha de expiración del alquiler de la etiqueta |
| `tagObject.size` | string | Tamaño de los datos almacenados |
| `tagObject.zelfProofQRCode` | string | Imagen QR código base64 (término registrado) |
| `tagObject.zelfProof` | string | Datos adicionales ZelfProof (término registrado) |

#### Cuando la Etiqueta No es Encontrada (available: true)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `ipfs` | array | Resultados de búsqueda IPFS (vacío) |
| `arweave` | array | Resultados de búsqueda Arweave (vacío) |
| `available` | boolean | Si la etiqueta está disponible (true = no encontrada) |
| `tagName` | string | El nombre de la etiqueta buscada |
| `price` | object | Información de precios para alquilar la etiqueta |
| `price.price` | number | Precio de alquiler en USD |
| `price.currency` | string | Moneda (USD) |
| `price.reward` | number | Cantidad de recompensa en USD |
| `price.discount` | number | Cantidad de descuento aplicado |
| `price.priceWithoutDiscount` | number | Precio original antes del descuento |
| `price.discountType` | string | Tipo de descuento (ej., "percentage") |

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

# Luego buscar una etiqueta
curl -X GET "https://api.zelf.world/api/tags/search?tagName=username.zelf&domain=zelf&os=DESKTOP" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"

# Buscar con duración de por vida para precios
curl -X GET "https://api.zelf.world/api/tags/search?tagName=username.zelf&domain=zelf&os=DESKTOP&duration=lifetime" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const axios = require('axios');

async function searchTag() {
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

    // Luego buscar la etiqueta
    const searchResponse = await axios.get('https://api.zelf.world/api/tags/search', {
      params: {
        tagName: 'username.zelf',
        domain: 'zelf',
        os: 'DESKTOP',
        duration: 'lifetime'
      },
      headers: {
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Resultado de búsqueda:', searchResponse.data);
    
    if (searchResponse.data.data.available) {
      console.log('La etiqueta está disponible para alquilar en:', searchResponse.data.data.price.price, 'USD');
    } else {
      console.log('La etiqueta ya está ocupada:', searchResponse.data.data.tagObject.publicData.tagName);
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

searchTag();
```

</TabItem>
</Tabs>

## Precios Específicos por Dominio

Diferentes dominios tienen diferentes estructuras de precios:

- **Zelf**: $24 USD (1 año), $210 USD (por vida)
- **Avax**: $18 USD (1 año)
- **BDAG**: Precios variables basados en la configuración del dominio

## Opciones de Duración

| Duración | Descripción | Multiplicador de Precio Típico |
|----------|-------------|--------------------------------|
| `1` | 1 año | 1x precio base |
| `2` | 2 años | ~1.8x precio base |
| `3` | 3 años | ~2.5x precio base |
| `4` | 4 años | ~3.2x precio base |
| `5` | 5 años | ~3.8x precio base |
| `lifetime` | Por vida | ~8.75x precio base |

## Respuestas de Error

*Las respuestas de error están documentadas en las pestañas de respuesta arriba, incluyendo errores de validación, errores de autenticación y errores del servidor.*
