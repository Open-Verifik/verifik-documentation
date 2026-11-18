---
id: "en-docs-api-tags-search-by-domain-response-fields-2"
title: "Search Tags by Domain — Response Fields"
sourcePath: "docs/api/tags/search-by-domain.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/search-by-domain"
sourceAnchor: "Response Fields"
---

# Search Tags by Domain
**API path(s):** /api/tags/search-by-domain

Search for all tags within a specific domain and storage system.

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data` | array | Array of tag objects found in the domain |
| `id` | string | Unique identifier for the tag |
| `name` | string | Full tag name (e.g., "username.zelf.hold") |
| `cid` | string | Content identifier for IPFS storage |
| `size` | number | File size in bytes |
| `number_of_files` | number | Number of files associated with the tag |
| `mime_type` | string | MIME type of the stored content |
| `group_id` | string\|null | Group identifier (usually null) |
| `created_at` | string | ISO timestamp when the tag was created |
| `url` | string | Direct URL to access the stored content |
| `publicData` | object | Public blockchain and metadata information |
| `publicData.btcAddress` | string | Bitcoin address associated with the tag |
| `publicData.domain` | string | Domain name (zelf, avax, bdag) |
| `publicData.ethAddress` | string | Ethereum address associated with the tag |
| `publicData.solanaAddress` | string | Solana address associated with the tag |
| `publicData.suiAddress` | string | Sui address associated with the tag |
| `publicData.zelfName` | string | Full Zelf name (e.g., "username.zelf.hold") |
| `publicData.extraParams` | string | JSON string containing additional metadata |
| `publicData.zelfProof` | string | Encrypted ZelfProof data (when available) |

```json
{
  "validationError": "Domain 'invalid' is not active"
}
```

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

```json
{
  "validationError": "missing domain\n"
}
```

```json
{
  "message": "Internal server error",
  "code": "INTERNAL_ERROR"
}
```
