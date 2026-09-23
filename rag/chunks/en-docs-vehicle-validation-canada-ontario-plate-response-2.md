---
id: "en-docs-vehicle-validation-canada-ontario-plate-response-2"
title: "\\U0001F1E8\\U0001F1E6 Canada - Ontario Plate Expiry — Response"
sourcePath: "docs/vehicle-validation/canada/ontario-plate.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ca"
  - "vehicle-validation"
endpoint: "/v2/ca/ontario/plate"
sourceAnchor: "Response"
slug: "/vehicle-validation/canada/ontario-plate"
url: "https://docs.verifik.co/vehicle-validation/canada/ontario-plate"
---

# \U0001F1E8\U0001F1E6 Canada - Ontario Plate Expiry
**API path(s):** /v2/ca/ontario/plate

Check Ontario licence plate sticker expiry using the **plate number** and **vehicle permit number** (green card / vehicle registration document issued by Ontario).
Typical response fields: `expired`, `plateNumber`, `permitNumber`, `expiryDate`, and `success`. The `expired` flag is `true` when `expiryDate` is before the current time.
Use this service to quickly confirm plate sticker validity against the Ontario government registry. Ideal for fleet onboarding, compliance checks, and vehicle verification.

## Response

```json
{
  "data": {
    "expired": false,
    "expiryDate": "2027-01-24T04:41:22.932Z",
    "permitNumber": "N9166001",
    "plateNumber": "BKTR456",
    "success": true
  },
  "signature": {
    "dateTime": "July 7, 2026 11:31 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "8X9FD"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```
