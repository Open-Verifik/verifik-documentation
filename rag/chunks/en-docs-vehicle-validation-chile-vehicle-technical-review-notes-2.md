---
id: "en-docs-vehicle-validation-chile-vehicle-technical-review-notes-2"
title: "🇨🇱 Chile - Vehicle Technical Review — Notes"
sourcePath: "docs/vehicle-validation/chile/vehicle-technical-review.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle-soap"
  - "/v3/cl/vehicle"
sourceAnchor: "Notes"
slug: "/vehicle-validation/chile/vehicle-technical-review"
url: "https://docs.verifik.co/vehicle-validation/chile/vehicle-technical-review"
---

# 🇨🇱 Chile - Vehicle Technical Review
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle-soap, /v3/cl/vehicle

Use this endpoint when you need Chilean **technical review / inspection** data by license plate: vehicle details, inspection plant, certificate number, expiration date, and review status.
Related Chile vehicle endpoints:
- **Vehicle Information (`v2/cl/vehicle`)**: general vehicle registry data such as make, model, owner RUT, engine, chassis, fines, and theft flags.
- **Vehicle Technical Review (`v3/cl/vehicle`)**: technical inspection status and history.
- **Vehicle SOAP (`v2/cl/vehicle-soap`)**: mandatory personal accident insurance certificate by plate and policy number.

## Notes

- `XH6640`, `FHDJ31`, and `DCCH18` return stable technical review profiles.
- `BB985` returns `409 Invalid_plate_format` because it does not match the v3 plate format.
