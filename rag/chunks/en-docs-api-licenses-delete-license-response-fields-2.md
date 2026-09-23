---
id: "en-docs-api-licenses-delete-license-response-fields-2"
title: "Delete License — Response Fields"
sourcePath: "docs/api/licenses/delete-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses/{licenseid}"
  - "/api/sessions"
sourceAnchor: "Response Fields"
---

# Delete License
**API path(s):** /api/licenses/{licenseid}, /api/sessions

Delete an existing license from the system.

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `message` | string | Success message confirming license deletion |
| `licenseId` | string | ID of the deleted license |
| `userId` | string | ID of the user whose license was deleted |
| `deletedAt` | string | ISO timestamp when license was deleted |
| `reason` | string | Reason provided for license deletion |
