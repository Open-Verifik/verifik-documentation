---
id: "en-docs-api-licenses-create-license-endpoint"
title: "Create License — Endpoint"
sourcePath: "docs/api/licenses/create-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses"
  - "/api/sessions"
sourceAnchor: "Endpoint"
---

# Create License
**API path(s):** /api/licenses, /api/sessions

## Endpoint

Create a new license for a user or organization.

### Endpoint

```
POST /api/licenses
```

## Description

This endpoint allows administrators or authorized users to create new licenses for users or organizations. This includes setting up license types, features, duration, and associated domains. The endpoint supports various license types including personal, business, and enterprise licenses.

## Authentication

This endpoint requires authentication via JWT token with administrative privileges. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `userId` | string | Yes | ID of the user to assign this license to |
| `licenseType` | string | Yes | Type of license ("personal", "business", "enterprise") |
| `domain` | string | Yes | Primary domain for this license (e.g., "zelf", "avax", "bdag") |
| `duration` | number | Yes | License duration in years |
| `features` | array | Yes | Array of features to include in this license |
| `price` | number | No | License price in USD (for billing purposes) |
| `notes` | string | No | Additional notes or comments about this license |
| `autoRenew` | boolean | No | Whether license should auto-renew (default: false) |

### Response

```json
{
  "data": {
    "license": {
      "id": "new_license_id",
      "userId": "user_id_example",
      "licenseType": "personal",
      "domain": "zelf",
      "status": "active",
      "expiresAt": "2026-01-01T00:00:00Z",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-01T00:00:00Z",
      "features": ["basic_wallet", "face_auth"],
      "price": 24,
      "duration": 1,
      "autoRenew": false,
      "notes": "Personal license for new user"
    }
  }
}
```

```json
{
  "validationError": "User already has an active license\n"
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
  "error": "insufficient_permissions",
  "message": "Administrative privileges required"
}
```

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```
