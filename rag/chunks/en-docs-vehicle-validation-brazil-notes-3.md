---
id: "en-docs-vehicle-validation-brazil-notes-3"
title: "Vehicle Information — Notes"
sourcePath: "docs/vehicle-validation/brazil.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "br"
  - "vehicle-validation"
endpoints:
  - "/v2/br/vehicle"
  - "/v2/br/vehicle?plate=pzy7h82"
sourceAnchor: "Notes"
slug: "/vehicle-validation/brazil"
url: "https://docs.verifik.co/vehicle-validation/brazil"
---

# Vehicle Information
**API path(s):** /v2/br/vehicle, /v2/br/vehicle?plate=pzy7h82

## Notes

- Only **`plate`** is required on the query string.
- Registry-sourced records can return an empty **`transmission`** or **`denatranWarning`** value.
- **`doors`** may be `"0"` when the registry source does not return passenger capacity.
- **`fipeCodes`** may be an empty array when there is no FIPE match.
- Fallback providers can return slightly different field coverage when the primary source has no match.
- Some accounts also enable an **extended data sheet by plate** product; use the URL from your AppFeature catalog when that feature is active.
