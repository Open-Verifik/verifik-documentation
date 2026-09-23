---
id: "en-docs-api-tags-lease-offline-endpoint"
title: "Lease Tag Offline — Endpoint"
sourcePath: "docs/api/tags/lease-offline.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/lease-offline"
sourceAnchor: "Endpoint"
---

# Lease Tag Offline
**API path(s):** /api/tags/lease-offline

## Endpoint

Lease a tag for offline usage with ZelfProof data.

### Endpoint

```
POST /api/tags/lease-offline
```

## Description

This endpoint allows you to lease a tag for offline usage, enabling Zelf functionality without internet connectivity. It processes ZelfProof data and QR codes to create offline-capable tags.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name of the tag to lease (e.g., "mytag.zelf"). Must be 30 characters or less. |
| `domain` | string | Yes | The domain for the tag ("zelf", "avax", "bdag", or other licensed domains) |
| `zelfProof` | string | No | The ZelfProof data (trademarked term) - can be omitted if zelfProofQRCode is provided |
| `zelfProofQRCode` | string | Yes | Base64 encoded QR code image containing ZelfProof data (trademarked term) |
| `referralTagName` | string | No | Referral tag name for rewards |
| `sync` | boolean | No | Whether to sync with existing tag data |
| `syncPassword` | string | No | Password for syncing encrypted data |
| `syncPublicData` | object | No | Public data to sync (ethAddress, btcAddress, solanaAddress, suiAddress) |
| `duration` | string | No | Lease duration for pricing calculation |
| `removePGP` | boolean | No | Whether to remove PGP encryption |

## Authentication

This endpoint requires a valid JWT token in the Authorization header:

```
Authorization: Bearer 
```

### Response

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

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data.tagName` | string | The leased tag name |
| `data.domain` | string | The domain of the tag |
| `data.zelfProof` | string | The ZelfProof data (trademarked term) |
| `data.zelfProofQRCode` | string | Base64 encoded QR code image |
| `data.hasPassword` | string | Whether the tag has password protection ("true" or "false") |
| `data.origin` | string | Always "offline" for this endpoint |
| `data.price` | number | The price of the tag |
| `data.reward` | number | Reward amount |
| `data.discount` | number | Discount amount |
| `data.discountType` | string | Type of discount applied |
| `data.ethAddress` | string | Ethereum address (if provided) |
| `data.btcAddress` | string | Bitcoin address (if provided) |
| `data.solanaAddress` | string | Solana address (if provided) |
| `data.suiAddress` | string | Sui address (if provided) |
| `data.bDAGName` | string | bDAG blockchain name |
| `data.zelfName` | string | Zelf blockchain name |
| `data.ipfs.ipfs_pin_hash` | string | IPFS pin hash |
| `data.ipfs.ipfsHash` | string | IPFS hash |
| `data.ipfs.cid` | string | Content identifier |
| `data.ipfs.publicData` | object | Public data stored on IPFS |
| `zelfName` | string | Full Zelf name with .hold suffix |

```json
{
  "validationError": "\"tagName\" is required\n\"domain\" is required\n\"zelfProofQRCode\" is required"
}
```

Or for tag name length validation:

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

Or for other server errors:

```json
{
  "error": "tag_purchased_already"
}
```
