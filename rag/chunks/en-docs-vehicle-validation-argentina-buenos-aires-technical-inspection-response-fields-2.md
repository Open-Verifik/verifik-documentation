---
id: "en-docs-vehicle-validation-argentina-buenos-aires-technical-inspection-response-fields-2"
title: "Buenos Aires Technical Inspection — Response fields"
sourcePath: "docs/vehicle-validation/argentina/buenos-aires-technical-inspection.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ar"
  - "vehicle-validation"
endpoint: "/v2/ar/buenos-aires/technical-inspection"
sourceAnchor: "Response fields"
slug: "/vehicle-validation/argentina/buenos-aires-technical-inspection"
url: "https://docs.verifik.co/vehicle-validation/argentina/buenos-aires-technical-inspection"
---

# Buenos Aires Technical Inspection
**API path(s):** /v2/ar/buenos-aires/technical-inspection

## Response fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `plate` | string | Normalized vehicle plate. |
| `totalRecords` | string | Number of technical inspection records returned. |
| `inspections` | object[] | Technical inspection records. |
| `inspections[].verificationId` | string \| null | Verification identifier. |
| `inspections[].verificationDate` | string \| null | Inspection verification date. |
| `inspections[].resultTypeId` | string \| null | Result type identifier returned by the source. |
| `inspections[].stickerNumber` | string \| null | Inspection sticker number. |
| `inspections[].expirationDate` | string \| null | Inspection expiration date. |
| `inspections[].brand` | string \| null | Vehicle brand. |
| `inspections[].model` | string \| null | Vehicle model. |
| `inspections[].plantName` | string \| null | Inspection plant name. |

### Notes

- This endpoint is scoped to Buenos Aires technical inspection records.
- Date fields are normalized where the source returns a recognizable day/month/year value.
