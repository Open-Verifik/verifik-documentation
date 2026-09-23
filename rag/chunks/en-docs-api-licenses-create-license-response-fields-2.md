---
id: "en-docs-api-licenses-create-license-response-fields-2"
title: "Create License — Response Fields"
sourcePath: "docs/api/licenses/create-license.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/licenses"
  - "/api/sessions"
sourceAnchor: "Response Fields"
---

# Create License
**API path(s):** /api/licenses, /api/sessions

Create a new license for a user or organization.

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `license` | object | Created license information |
| `license.id` | string | Unique identifier for the created license |
| `license.userId` | string | User ID this license is assigned to |
| `license.licenseType` | string | Type of license ("personal", "business", "enterprise") |
| `license.domain` | string | Primary domain for this license |
| `license.status` | string | License status ("active", "pending", "suspended") |
| `license.expiresAt` | string | ISO timestamp when license expires |
| `license.createdAt` | string | ISO timestamp when license was created |
| `license.updatedAt` | string | ISO timestamp when license was last updated |
| `license.features` | array | Array of features included in this license |
| `license.price` | number | License price in USD |
| `license.duration` | number | License duration in years |
| `license.autoRenew` | boolean | Whether license should auto-renew |
| `license.notes` | string | Additional notes about this license |
