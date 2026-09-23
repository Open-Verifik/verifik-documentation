---
id: "en-docs-api-tags-lease-recovery-response-fields-5"
title: "Lease Recovery — Response Fields"
sourcePath: "docs/api/tags/lease-recovery.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/lease-recovery"
sourceAnchor: "Response Fields"
---

# Lease Recovery
**API path(s):** /api/tags/lease-recovery

Recover a tag using an existing ZelfProof from a previously leased tag. This endpoint allows you to create a new tag with the same wallet data from a previous tag.

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `ethAddress` | string | Generated Ethereum wallet address |
| `solanaAddress` | string | Generated Solana wallet address |
| `btcAddress` | string | Generated Bitcoin wallet address |
| `zelfName` | string | Generated Zelf domain name |
| `domain` | string | The domain type used |
| `duration` | number | Lease duration in years |
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
