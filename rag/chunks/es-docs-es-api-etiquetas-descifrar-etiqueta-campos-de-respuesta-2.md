---
id: "es-docs-es-api-etiquetas-descifrar-etiqueta-campos-de-respuesta-2"
title: "Descifrar Etiqueta — Campos de Respuesta"
sourcePath: "docs-es/api/etiquetas/descifrar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/decrypt"
sourceAnchor: "Campos de Respuesta"
---

# Descifrar Etiqueta
**API path(s):** /api/tags/decrypt

Descifrar un ZelfProof para acceder a datos de wallet y metadatos usando verificación biométrica facial.

## Campos de Respuesta

### Objeto de Respuesta Principal

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | string | Identificador único para el registro IPFS |
| `url` | string | URL directa para acceder al contenido IPFS |
| `ipfs_pin_hash` | string | Identificador hash de pin IPFS |
| `ipfsHash` | string | Hash IPFS del contenido almacenado |
| `cid` | string | Identificador de contenido para IPFS |
| `size` | number | Tamaño del contenido almacenado en bytes |
| `date_pinned` | string | Marca de tiempo ISO cuando el contenido fue fijado en IPFS |
| `publicData` | object | Información pública del wallet |
| `zelfProofQRCode` | string | Imagen de código QR codificada en base64 |
| `zelfProof` | string | Datos ZelfProof codificados en base64 |
| `domain` | string | Dominio de la etiqueta descifrada |
| `metadata` | object | Datos sensibles del wallet descifrados |

### Objeto PublicData

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `btcAddress` | string | Dirección de wallet Bitcoin |
| `domain` | string | Dominio de la etiqueta |
| `ethAddress` | string | Dirección de wallet Ethereum |
| `solanaAddress` | string | Dirección de wallet Solana |
| `suiAddress` | string | Dirección de wallet Sui |
| `zelfName` | string | Nombre Zelf completo (tagName.domain.type) |
| `hasPassword` | string | Si el ZelfProof requiere una contraseña |
| `type` | string | Tipo de la etiqueta (ej., "hold") |
| `origin` | string | Origen de creación ("online" o "offline") |
| `registeredAt` | string | Marca de tiempo de registro |
| `expiresAt` | string | Marca de tiempo de expiración |
