---
id: "es-docs-es-api-etiquetas-descifrar-etiqueta-endpoint"
title: "Descifrar Etiqueta — Endpoint"
sourcePath: "docs-es/api/etiquetas/descifrar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/decrypt"
sourceAnchor: "Endpoint"
---

# Descifrar Etiqueta
**API path(s):** /api/tags/decrypt

## Endpoint

Descifrar un ZelfProof para acceder a datos de wallet y metadatos usando verificación biométrica facial.

### Endpoint

```
POST /api/tags/decrypt
```

## Descripción

Este endpoint te permite descifrar un ZelfProof usando verificación biométrica facial para acceder a los datos originales del wallet, incluyendo frases mnemónicas y claves privadas. El proceso de descifrado verifica la identidad del usuario a través del reconocimiento facial antes de proporcionar acceso a información sensible.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a descifrar (sin sufijo de dominio) |
| `domain` | string | Sí | El dominio de la etiqueta (ej., "zelf", "avax", "bdag") |
| `faceBase64` | string | Sí | Imagen facial codificada en base64 para verificación biométrica |
| `password` | string | Sí | Contraseña utilizada durante el cifrado original |

### Respuesta

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

```json
{
  "validationError": "Missing required field: tagName"
}
```

```json
{
  "error": "Unauthorized access"
}
```

```json
{
  "error": "Decryption failed: Invalid credentials"
}
```
