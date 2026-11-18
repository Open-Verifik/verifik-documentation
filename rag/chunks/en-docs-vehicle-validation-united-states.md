---
id: "en-docs-vehicle-validation-united-states"
title: "🇺🇸 United States - Vehicle Information — Endpoint"
sourcePath: "docs/vehicle-validation/united-states.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "us"
  - "usa"
  - "vehicle-validation"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/united-states"
url: "https://docs.verifik.co/vehicle-validation/united-states"
---

# 🇺🇸 United States - Vehicle Information
**API path(s):** /v2/usa/vehicle

## Endpoint

:::info Temporarily unavailable
U.S. vehicle lookup by **license plate and state** (`GET /v2/usa/vehicle`) is temporarily disabled and is not available for new integrations.

Use **Vehicle by VIN** instead:

- **[United States - Vehicle by VIN](/vehicle-validation/united-states/vehicle-by-vin)** — `GET /v2/usa/vehicle-by-vin`
:::

### Endpoint

```
GET https://api.verifik.co/v2/usa/vehicle
```

This route previously accepted `plate` and `state` query parameters. Prefer the VIN endpoint while plate lookup remains offline.
