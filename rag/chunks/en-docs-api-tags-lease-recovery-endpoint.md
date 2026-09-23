---
id: "en-docs-api-tags-lease-recovery-endpoint"
title: "Lease Recovery — Endpoint"
sourcePath: "docs/api/tags/lease-recovery.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease-recovery"
sourceAnchor: "Endpoint"
---

# Lease Recovery
**API path(s):** /api/sessions, /api/tags/lease-recovery

## Endpoint

Recover a tag using an existing ZelfProof from a previously leased tag. This endpoint allows you to create a new tag with the same wallet data from a previous tag.

### Endpoint

```
POST /api/tags/lease-recovery
```

## Description

This endpoint allows you to recover a tag using an existing ZelfProof from a previously leased tag. This is useful when you want to create a new tag with the same wallet data from a previous tag. The system supports multiple domains including Zelf, Avax, BDAG, and other licensed domains.

**Note:** The terms "ZelfProof", "ZK Face Proof", and "ZelfProofQRCode" are trademarked and should be used appropriately.

## Authentication

This endpoint requires authentication via JWT token. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `zelfProof` | string | Yes | ZelfProof data from a previously leased tag |
| `tagName` | string | Yes | Name for the new tag (supports multiple domains) |
| `domain` | string | Yes | Domain for the new tag (e.g., "zelf", "avax", "bdag") |
| `faceBase64` | string | Yes | Base64 encoded face image for biometric verification |
| `password` | string | Yes | Password used to encrypt the original ZelfProof |
| `os` | string | Yes | Operating system ("DESKTOP", "ANDROID", "IOS") |
| `removePGP` | boolean | No | Whether to skip PGP encryption (default: false) |
| `captchaToken` | string | No | CAPTCHA token for bot protection (optional) |
