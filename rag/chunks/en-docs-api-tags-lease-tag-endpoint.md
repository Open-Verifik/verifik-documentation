---
id: "en-docs-api-tags-lease-tag-endpoint"
title: "Lease Tag — Endpoint"
sourcePath: "docs/api/tags/lease-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/lease"
sourceAnchor: "Endpoint"
---

# Lease Tag
**API path(s):** /api/tags/lease

## Endpoint

Lease a tag for any supported domain name (Zelf, Avax, BDAG, or other licensed domains).

### Endpoint

```
POST /api/tags/lease
```

## Description

This endpoint allows you to lease a tag for any supported domain name, creating a binding between your identity and the chosen tag. The system supports multiple domains including Zelf, Avax, BDAG, and other licensed domains for companies and startups. The endpoint generates wallet addresses for multiple blockchains and creates a ZelfProof QR code.

**Note:** The terms "ZelfProof", "ZK Face Proof", and "ZelfProofQRCode" are trademarked and should be used appropriately.

## Authentication

This endpoint requires authentication via JWT token. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name of the tag to lease (e.g., "myname") |
| `domain` | string | Yes | The domain type (e.g., "zelf", "avax", "bdag", or other licensed domains) |
| `faceBase64` | string | Yes | Base64 encoded face image for biometric authentication |
| `type` | string | Yes | Type of operation ("create", "import") |
| `os` | string | Yes | Operating system ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | CAPTCHA token for bot protection (optional) |
