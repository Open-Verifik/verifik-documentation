---
id: "en-docs-api-tags-preview-tag-response-fields-existing-tag-4"
title: "Preview Tag — Response Fields (Existing Tag)"
sourcePath: "docs/api/tags/preview-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/preview"
sourceAnchor: "Response Fields (Existing Tag)"
---

# Preview Tag
**API path(s):** /api/sessions, /api/tags/preview

Preview a tag to see if it exists or check pricing information before leasing it.

## Response Fields (Existing Tag)

| Field | Type | Description |
|-------|------|-------------|
| `preview` | object | Preview information for existing tag |
| `preview.passwordLayer` | string | Password protection level |
| `preview.publicData` | object | Public blockchain addresses and metadata |
| `preview.requireLiveness` | boolean | Whether liveness check is required |
| `tagObject` | object | Complete tag object from storage |
| `tagObject.id` | string | Unique tag identifier |
| `tagObject.owner` | string | Tag owner identifier |
| `tagObject.url` | string | Direct URL to tag data |
| `tagObject.explorerUrl` | string | Blockchain explorer URL |
| `tagObject.publicData` | object | Public blockchain data |
| `tagObject.size` | string | Data size in bytes |
| `tagObject.zelfProofQRCode` | string | Base64 encoded QR code |
| `tagObject.zelfProof` | string | Encrypted ZelfProof data |

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
    "available": true,
    "tagName": "myname.zelf",
    "price": {
      "price": 24,
      "currency": "USD",
      "reward": 2.4,
      "discount": 0,
      "priceWithoutDiscount": 24,
      "discountType": "percentage"
    }
  }
}
```

### Response Fields (Available Tag)

| Field | Type | Description |
|-------|------|-------------|
| `ipfs` | array | IPFS storage options (empty for available tags) |
| `arweave` | array | Arweave storage options (empty for available tags) |
| `available` | boolean | Whether the tag is available for purchase |
| `tagName` | string | The requested tag name |
| `price` | object | Pricing information for the tag |
| `price.price` | number | Current price in USD |
| `price.currency` | string | Currency type |
| `price.reward` | number | Reward amount in USD |
| `price.discount` | number | Discount amount applied |
| `price.priceWithoutDiscount` | number | Original price before discount |
| `price.discountType` | string | Type of discount (e.g., "percentage") |

```json
{
  "validationError": "Name contains invalid characters"
}
```

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

```json
{
  "validationError": "missing tagName\n"
}
```
