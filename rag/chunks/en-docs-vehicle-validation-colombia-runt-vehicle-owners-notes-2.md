---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-owners-notes-2"
title: "RUNT - Vehicle owners by plate — Notes"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-owners.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/propietarios"
sourceAnchor: "Notes"
slug: "/vehicle-validation/colombia/runt-vehicle-owners"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-owners"
---

# RUNT - Vehicle owners by plate
**API path(s):** /v2/co/runt/propietarios

## Notes

- The AppFeature code is **`colombia_api_runt_owners`**.
- Use **`CRL299`** in the sandbox.
- Owner properties may be `null` when a value is unavailable; `owners` may contain multiple historical records.
- **`GET /v2/co/runt/vehiculo/owners`** is a legacy alias of the same endpoint; it does not change the result or the charge.
