---
id: "es-docs-es-api-etiquetas-buscar-etiqueta-campos-de-respuesta-3"
title: "Buscar Etiqueta — Campos de Respuesta"
sourcePath: "docs-es/api/etiquetas/buscar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Campos de Respuesta"
---

# Buscar Etiqueta

Buscar una etiqueta en cualquier nombre de dominio soportado (Zelf, Avax, BDAG, u otros dominios licenciados).

## Campos de Respuesta

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
