---
id: "en-docs-api-licenses-get-my-license-response-fields-2"
title: "Get My License — Response Fields"
sourcePath: "docs/api/licenses/get-my-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/licenses/my-license"
sourceAnchor: "Response Fields"
---

# Get My License
**API path(s):** /api/licenses/my-license

Retrieve the current user's license information and status.

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `license` | object | User's license information |
| `license.id` | string | Unique identifier for the user's license |
| `license.userId` | string | User ID associated with this license |
| `license.licenseType` | string | Type of license ("personal", "business", "enterprise") |
| `license.domain` | string | Primary domain for this license |
| `license.status` | string | License status ("active", "expired", "suspended") |
| `license.expiresAt` | string | ISO timestamp when license expires |
| `license.createdAt` | string | ISO timestamp when license was created |
| `license.updatedAt` | string | ISO timestamp when license was last updated |
| `license.features` | array | Array of features available with this license |
| `license.usage` | object | Usage statistics (only if includeUsage=true) |
| `license.usage.tagsCreated` | number | Number of tags created with this license |
| `license.usage.tagsRemaining` | number | Number of tags remaining |
| `license.usage.lastUsed` | string | ISO timestamp of last license usage |
| `license.history` | array | License history (only if includeHistory=true) |
| `license.history[].action` | string | Action performed on the license |
| `license.history[].timestamp` | string | ISO timestamp when action occurred |
| `license.history[].details` | string | Additional details about the action |
