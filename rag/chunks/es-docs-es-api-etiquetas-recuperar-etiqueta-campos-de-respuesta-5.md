---
id: "es-docs-es-api-etiquetas-recuperar-etiqueta-campos-de-respuesta-5"
title: "Recuperación de una Etiqueta — Campos de Respuesta"
sourcePath: "docs-es/api/etiquetas/recuperar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease-recovery"
sourceAnchor: "Campos de Respuesta"
---

# Recuperación de una Etiqueta
**API path(s):** /api/sessions, /api/tags/lease-recovery

Recuperar una etiqueta usando un ZelfProof existente de una etiqueta previamente alquilada. Este endpoint te permite crear una nueva etiqueta con los mismos datos de wallet de una etiqueta anterior.

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `ethAddress` | string | Dirección de wallet Ethereum generada |
| `solanaAddress` | string | Dirección de wallet Solana generada |
| `btcAddress` | string | Dirección de wallet Bitcoin generada |
| `zelfName` | string | Nombre de dominio Zelf generado |
| `domain` | string | El tipo de dominio utilizado |
| `duration` | number | Duración del alquiler en años |
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
