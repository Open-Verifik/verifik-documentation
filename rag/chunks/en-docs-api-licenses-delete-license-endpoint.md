---
id: "en-docs-api-licenses-delete-license-endpoint"
title: "Delete License — Endpoint"
sourcePath: "docs/api/licenses/delete-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses/{licenseid}"
  - "/api/sessions"
sourceAnchor: "Endpoint"
---

# Delete License
**API path(s):** /api/licenses/{licenseid}, /api/sessions

## Endpoint

Delete an existing license from the system.

### Endpoint

```
DELETE /api/licenses/{licenseId}
```

## Description

This endpoint allows administrators or authorized users to delete an existing license from the system. This action will permanently remove the license and revoke all associated permissions and features for the user. This operation is irreversible and should be used with caution.

## Authentication

This endpoint requires authentication via JWT token with administrative privileges. You must first create a session using the `/api/sessions` endpoint to obtain a JWT token.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `licenseId` | string | Yes | ID of the license to delete (path parameter) |
| `reason` | string | No | Reason for license deletion (for audit purposes) |
| `notifyUser` | boolean | No | Whether to notify the user about license deletion (default: true) |

### Response

```json
{
  "data": {
    "message": "License deleted successfully",
    "licenseId": "license_id_example",
    "userId": "user_id_example",
    "deletedAt": "2025-01-15T10:30:00Z",
    "reason": "User requested cancellation"
  }
}
```

```json
{
  "error": "license_not_found",
  "message": "License with the specified ID does not exist"
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
  "error": "license_in_use",
  "message": "Cannot delete license that is currently in use"
}
```

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```
