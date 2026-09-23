---
id: "en-docs-api-tags-lease-tag-response-fields-4"
title: "Lease Tag — Response Fields"
sourcePath: "docs/api/tags/lease-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease"
sourceAnchor: "Response Fields"
---

# Lease Tag
**API path(s):** /api/sessions, /api/tags/lease

Lease a tag for any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `ethAddress` | string | Generated Ethereum wallet address |
| `solanaAddress` | string | Generated Solana wallet address |
| `btcAddress` | string | Generated Bitcoin wallet address |
| `bDAGName` | string | Generated BDAG domain name |
| `domain` | string | The domain type used |
| `price` | number | Lease price in USD |
| `reward` | number | Reward amount in USD |
| `discount` | number | Discount amount applied |
| `discountType` | string | Type of discount (e.g., "percentage") |
| `suiAddress` | string | Generated Sui wallet address |
| `hasPassword` | string | Whether the tag has a password ("true"/"false") |
| `zelfProof` | string | Encrypted ZelfProof data (trademarked term) |
| `zelfProofQRCode` | string | Base64 encoded QR code for ZelfProof (trademarked term) |
| `ipfs` | object | IPFS storage information |
| `ipfs.url` | string | IPFS gateway URL |
| `ipfs.ipfs_pin_hash` | string | IPFS pin hash |
| `ipfs.ipfsHash` | string | IPFS hash |
| `ipfs.cid` | string | Content identifier |
| `ipfs.publicData` | object | Public data stored on IPFS |

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
