---
id: "en-docs-api-tags-search-tag-endpoint"
title: "Search Tag — Endpoint"
sourcePath: "docs/api/tags/search-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/search"
sourceAnchor: "Endpoint"
---

# Search Tag
**API path(s):** /api/sessions, /api/tags/search

## Endpoint

Search for a tag across any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

### Endpoint

```
GET /api/tags/search
```

## Description

This endpoint allows you to search for a tag across multiple domains and storage systems (IPFS and Arweave). The system supports multiple domains including Zelf, Avax, BDAG, and other licensed domains for companies and startups. 

**Response Types:**
1. **Tag Found**: Returns the tag object with all associated data
2. **Tag Not Found**: Returns pricing information for leasing the tag

**Note:** The terms "ZelfProof", "ZK Face Proof", and "ZelfProofQRCode" are trademarked and should be used appropriately.

## Authentication

This endpoint requires authentication via JWT token. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name of the tag to search for (e.g., "username.zelf") |
| `domain` | string | No | The domain type (e.g., "zelf", "avax", "bdag", or other licensed domains) |
| `key` | string | No | Search key for advanced search |
| `value` | string | No | Search value for advanced search |
| `os` | string | No | Operating system ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | CAPTCHA token for bot protection (optional) |
| `duration` | string | No | Duration for pricing ("1", "2", "3", "4", "5", "lifetime") |
