---
id: "en-docs-api-tags-decrypt-tag-response-fields-2"
title: "Decrypt Tag — Response Fields"
sourcePath: "docs/api/tags/decrypt-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/decrypt"
sourceAnchor: "Response Fields"
---

# Decrypt Tag
**API path(s):** /api/tags/decrypt

Decrypt a ZelfProof to access wallet data and metadata using biometric face verification.

## Response Fields

### Main Response Object

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier for the IPFS record |
| `url` | string | Direct URL to access the IPFS content |
| `ipfs_pin_hash` | string | IPFS pin hash identifier |
| `ipfsHash` | string | IPFS hash of the stored content |
| `cid` | string | Content identifier for IPFS |
| `size` | number | Size of the stored content in bytes |
| `date_pinned` | string | ISO timestamp when content was pinned to IPFS |
| `publicData` | object | Public wallet information |
| `zelfProofQRCode` | string | Base64-encoded QR code image |
| `zelfProof` | string | Base64-encoded ZelfProof data |
| `domain` | string | Domain of the decrypted tag |
| `metadata` | object | Decrypted sensitive wallet data |

### PublicData Object

| Field | Type | Description |
|-------|------|-------------|
| `btcAddress` | string | Bitcoin wallet address |
| `domain` | string | Domain of the tag |
| `ethAddress` | string | Ethereum wallet address |
| `solanaAddress` | string | Solana wallet address |
| `suiAddress` | string | Sui wallet address |
| `zelfName` | string | Full Zelf name (tagName.domain.type) |
| `hasPassword` | string | Whether the ZelfProof requires a password |
| `type` | string | Type of the tag (e.g., "hold") |
| `origin` | string | Origin of creation ("online" or "offline") |
| `registeredAt` | string | Registration timestamp |
| `expiresAt` | string | Expiration timestamp |

### Metadata Object

| Field | Type | Description |
|-------|------|-------------|
| `mnemonic` | string | BIP39 mnemonic phrase for wallet recovery |
