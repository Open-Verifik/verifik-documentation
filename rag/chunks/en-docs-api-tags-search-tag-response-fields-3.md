---
id: "en-docs-api-tags-search-tag-response-fields-3"
title: "Search Tag — Response Fields"
sourcePath: "docs/api/tags/search-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/search"
sourceAnchor: "Response Fields"
---

# Search Tag
**API path(s):** /api/tags/search

Search for a tag across any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

## Response Fields

#### When Tag is Found (available: false)

| Field | Type | Description |
|-------|------|-------------|
| `ipfs` | array | IPFS results containing the tag data |
| `arweave` | array | Arweave results containing the tag data |
| `available` | boolean | Whether the tag is available (false = found/taken) |
| `tagName` | string | The searched tag name |
| `tagObject` | object | Complete tag object with all associated data |
| `tagObject.id` | string | Unique identifier on storage system |
| `tagObject.owner` | string | Owner identifier |
| `tagObject.url` | string | Direct URL to access the tag data |
| `tagObject.explorerUrl` | string | Blockchain explorer URL |
| `tagObject.publicData` | object | Public metadata and wallet addresses |
| `tagObject.publicData.zelfProof` | string | ZelfProof signature (trademarked term) |
| `tagObject.publicData.hasPassword` | string | Whether tag has password protection |
| `tagObject.publicData.ethAddress` | string | Ethereum wallet address |
| `tagObject.publicData.evm` | string | Supported EVM networks |
| `tagObject.publicData.solanaAddress` | string | Solana wallet address |
| `tagObject.publicData.btcAddress` | string | Bitcoin wallet address |
| `tagObject.publicData.zelfName` | string | Full tag name |
| `tagObject.publicData.leaseExpiresAt` | string | Tag lease expiration date |
| `tagObject.size` | string | Size of the stored data |
| `tagObject.zelfProofQRCode` | string | Base64 QR code image (trademarked term) |
| `tagObject.zelfProof` | string | Additional ZelfProof data (trademarked term) |

#### When Tag is Not Found (available: true)

| Field | Type | Description |
|-------|------|-------------|
| `ipfs` | array | IPFS search results (empty) |
| `arweave` | array | Arweave search results (empty) |
| `available` | boolean | Whether the tag is available (true = not found) |
| `tagName` | string | The searched tag name |
| `price` | object | Pricing information for leasing the tag |
| `price.price` | number | Lease price in USD |
| `price.currency` | string | Currency (USD) |
| `price.reward` | number | Reward amount in USD |
| `price.discount` | number | Discount amount applied |
| `price.priceWithoutDiscount` | number | Original price before discount |
| `price.discountType` | string | Type of discount (e.g., "percentage") |
