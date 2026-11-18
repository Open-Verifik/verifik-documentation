---
id: "en-docs-api-licenses-get-my-license-endpoint"
title: "Get My License — Endpoint"
sourcePath: "docs/api/licenses/get-my-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/licenses/my-license"
sourceAnchor: "Endpoint"
---

# Get My License
**API path(s):** /api/licenses/my-license

## Endpoint

Retrieve the current user's license information and status.

### Endpoint

```
GET /api/licenses/my-license
```

## Description

This endpoint allows authenticated users to retrieve their own license information, including license details, expiration date, usage statistics, and current status. This is useful for checking license validity, remaining features, and renewal information.

## Authentication

This endpoint requires authentication via JWT token. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `includeUsage` | boolean | No | Include usage statistics in response (default: false) |
| `includeHistory` | boolean | No | Include license history and changes (default: false) |

### Response

```json
{
  "data": {
    "license": {
      "id": "user_license_id",
      "userId": "user_id_example",
      "licenseType": "personal",
      "domain": "zelf",
      "status": "active",
      "expiresAt": "2025-12-31T23:59:59Z",
      "createdAt": "2025-01-01T00:00:00Z",
      "updatedAt": "2025-01-01T00:00:00Z",
      "features": ["basic_wallet", "face_auth", "qr_generation"],
      "usage": {
        "tagsCreated": 5,
        "tagsRemaining": 95,
        "lastUsed": "2025-01-15T10:30:00Z"
      },
      "history": [
        {
          "action": "license_created",
          "timestamp": "2025-01-01T00:00:00Z",
          "details": "Personal license activated"
        }
      ]
    }
  }
}
```

```json
{
  "error": "license_not_found",
  "message": "No license found for this user"
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
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```
