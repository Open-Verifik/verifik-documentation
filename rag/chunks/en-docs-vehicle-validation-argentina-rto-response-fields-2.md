---
id: "en-docs-vehicle-validation-argentina-rto-response-fields-2"
title: "Argentina RTO — Response fields"
sourcePath: "docs/vehicle-validation/argentina/rto.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ar"
  - "vehicle-validation"
endpoint: "/v2/ar/rto"
sourceAnchor: "Response fields"
slug: "/vehicle-validation/argentina/rto"
url: "https://docs.verifik.co/vehicle-validation/argentina/rto"
---

# Argentina RTO
**API path(s):** /v2/ar/rto

## Response fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `plate` | string | Normalized vehicle plate. |
| `totalRecords` | string | Number of RTO records returned. |
| `inspections` | object[] | RTO inspection records. |
| `inspections[].result` | string \| null | Inspection result. |
| `inspections[].inspectionType` | string \| null | Inspection type label. |
| `inspections[].inspectionDate` | string \| null | Inspection date. |
| `inspections[].expirationDate` | string \| null | Expiration date. |
| `inspections[].certificate` | string \| null | Certificate identifier. |
| `inspections[].scalabilityCategory` | string \| null | Scalability category returned by the source. |
| `inspections[].inspectionCenter` | string \| null | Inspection center name. |
| `inspections[].alertType` | string \| null | Source alert type when available. |

### Notes

- Date fields are normalized where the source returns a recognizable day/month/year value.
- RTO records are returned as an `inspections` array so consumers can handle multiple records for the same plate.
