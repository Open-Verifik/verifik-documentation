---
id: "en-docs-api-tags-preview-tag-endpoint"
title: "Preview Tag — Endpoint"
sourcePath: "docs/api/tags/preview-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/preview"
sourceAnchor: "Endpoint"
---

# Preview Tag
**API path(s):** /api/tags/preview

## Endpoint

Preview a tag to see if it exists or check pricing information before leasing it.

### Endpoint

```
GET /api/tags/preview
```

## Description

This endpoint allows you to preview a tag and see its details before committing to lease it. It returns different response structures depending on whether the tag already exists or is available for purchase.

## Authentication

This endpoint requires authentication via JWT token. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name of the tag to preview (e.g., "myname") |
| `domain` | string | Yes | The domain type (e.g., "zelf", "avax", "bdag") |
| `os` | string | Yes | Operating system ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | CAPTCHA token for bot protection (optional) |
