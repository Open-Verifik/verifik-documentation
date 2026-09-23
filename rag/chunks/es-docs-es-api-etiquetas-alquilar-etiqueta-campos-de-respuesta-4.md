---
id: "es-docs-es-api-etiquetas-alquilar-etiqueta-campos-de-respuesta-4"
title: "Alquilar Etiqueta — Campos de Respuesta"
sourcePath: "docs-es/api/etiquetas/alquilar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease"
sourceAnchor: "Campos de Respuesta"
---

# Alquilar Etiqueta
**API path(s):** /api/sessions, /api/tags/lease

Alquilar una etiqueta para cualquier nombre de dominio soportado (Zelf, Avax, BDAG, u otros dominios licenciados).

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `ethAddress` | string | Dirección de wallet Ethereum generada |
| `solanaAddress` | string | Dirección de wallet Solana generada |
| `btcAddress` | string | Dirección de wallet Bitcoin generada |
| `bDAGName` | string | Nombre de dominio BDAG generado |
| `domain` | string | El tipo de dominio utilizado |
| `price` | number | Precio de alquiler en USD |
| `reward` | number | Cantidad de recompensa en USD |
| `discount` | number | Cantidad de descuento aplicado |
| `discountType` | string | Tipo de descuento (ej., "percentage") |
| `suiAddress` | string | Dirección de wallet Sui generada |
| `hasPassword` | string | Si la etiqueta tiene una contraseña ("true"/"false") |
| `zelfProof` | string | Datos ZelfProof encriptados (término registrado) |
| `zelfProofQRCode` | string | Código QR codificado en base64 para ZelfProof (término registrado) |
| `ipfs` | object | Información de almacenamiento IPFS |
| `ipfs.url` | string | URL del gateway IPFS |
| `ipfs.ipfs_pin_hash` | string | Hash de pin IPFS |
| `ipfs.ipfsHash` | string | Hash IPFS |
| `ipfs.cid` | string | Identificador de contenido |
| `ipfs.publicData` | object | Datos públicos almacenados en IPFS |

```json
{
  "validationError": "missing tagName\n"
}
```

```json
{
  "error": "validation_error",
  "message": "Invalid request parameters"
}
```

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```
