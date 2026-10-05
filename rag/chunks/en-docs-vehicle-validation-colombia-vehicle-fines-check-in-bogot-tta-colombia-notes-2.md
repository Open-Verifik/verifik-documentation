---
id: "en-docs-vehicle-validation-colombia-vehicle-fines-check-in-bogot-tta-colombia-notes-2"
title: "Vehicle Fines Check — Notes"
sourcePath: "docs/vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/bogota/vehicle/fines"
sourceAnchor: "Notes"
slug: "/vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia"
url: "https://docs.verifik.co/vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia"
---

# Vehicle Fines Check
**API path(s):** /v2/co/bogota/vehicle/fines

## Notes

- Fine status "vigente" indicates the fine is currently active and requires payment.
- The `total` field includes the original fine amount plus any accumulated interest.
- Use the `number` field to reference specific fines for payment or appeals.
