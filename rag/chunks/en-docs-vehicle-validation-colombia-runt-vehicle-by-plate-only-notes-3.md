---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-plate-only-notes-3"
title: "RUNT - Vehicle Records by Plate Only — Notes"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-plate-only.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/vehicle-by-plate"
  - "/v2/co/runt/vehicle-by-plate-only"
sourceAnchor: "Notes"
slug: "/vehicle-validation/colombia/runt-vehicle-by-plate-only"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-plate-only"
---

# RUNT - Vehicle Records by Plate Only
**API path(s):** /v2/co/runt/vehicle-by-plate, /v2/co/runt/vehicle-by-plate-only

Query official RUNT vehicle information using **only** the license plate. Unlike [Vehicle records by plate](/vehicle-validation/colombia/runt-vehicle-by-plate), this endpoint does **not** require the owner's `documentType` or `documentNumber`.
Use it when you need name, technical, and status blocks for a Colombian plate without an owner document on hand.

## Notes

- The AppFeature code is **`colombia_api_runt_vehicle_by_plate_only`**.
- This route is the plate-only sibling of [GET `/v2/co/runt/vehicle-by-plate`](/vehicle-validation/colombia/runt-vehicle-by-plate). It does not accept owner `documentType` or `documentNumber`.
- `documentType` and `documentNumber` on the payload may be `null`.
- Name, technical, and status blocks are returned when present; empty arrays or objects mean that section had no rows.
- Sandbox plates **`AA123BA`** and **`ABC10001`–`ABC10010`** return stable 200s. **`ERR40401`** returns **404** `NotFound`.
- **409** is used for validation errors and when the service is temporarily unavailable.
