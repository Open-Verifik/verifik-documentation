---
id: "es-docs-es-api-etiquetas-alquiler-etiqueta-offline-respuesta-2"
title: "Alquilar Etiqueta Offline — Respuesta"
sourcePath: "docs-es/api/etiquetas/alquiler-etiqueta-offline.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease-offline"
sourceAnchor: "Respuesta"
---

# Alquilar Etiqueta Offline
**API path(s):** /api/sessions, /api/tags/lease-offline

Alquilar una etiqueta para uso offline con datos ZelfProof.

## Respuesta

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

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

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
