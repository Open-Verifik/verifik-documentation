---
id: "en-docs-vehicle-validation-chile-vehicle-stolen-notes-3"
title: "🇨🇱 Chile - Stolen Vehicle — Notes"
sourcePath: "docs/vehicle-validation/chile/vehicle-stolen.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoint: "/v2/cl/vehicle-stolen"
sourceAnchor: "Notes"
slug: "/vehicle-validation/chile/vehicle-stolen"
url: "https://docs.verifik.co/vehicle-validation/chile/vehicle-stolen"
---

# 🇨🇱 Chile - Stolen Vehicle
**API path(s):** /v2/cl/vehicle-stolen

Check whether a Chilean vehicle has an active **stolen or theft report** (*encargo por robo o hurto*).
Returns a signed payload when the lookup succeeds:
- **`plate`** — Chilean license plate (Patente), **4–7** alphanumeric characters
- **`hasTheftReport`** — `true` when there is an active theft report; `false` otherwise
- **`description`** — status text (e.g. `NO REGISTRA ENCARGO Vigentes`)
- **`theftReport`** — report object: **`typeCode`**, **`plateOriginal`**, **`plateFormatted`**, **`reportDate`**, **`partiallyResolved`**, **`items`**
- **`items[]`** — stolen parts: **`name`**, **`description`**, **`serial`**, **`resolvedDate`**, **`delivered`**, **`deliveryDate`**, **`type`**
- **Signed** Verifik response
Use for **insurance underwriting**, **fleet onboarding**, and **asset due diligence** before registering or financing a Chilean vehicle.

## Notes

- **No active theft report** returns **HTTP 200** with **`hasTheftReport: false`** — not a 404.
- **Sandbox mode:** plate **`PTKX93`** returns a stable no-encargo profile; **`NG8245`** returns a stolen-report profile.
- Invalid plate format returns **409** `invalid_plate_format`.
- Registry **availability** is environment-dependent; outages may return **409** timeout errors.
