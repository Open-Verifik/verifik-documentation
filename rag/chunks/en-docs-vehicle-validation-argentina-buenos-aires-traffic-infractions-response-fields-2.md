---
id: "en-docs-vehicle-validation-argentina-buenos-aires-traffic-infractions-response-fields-2"
title: "Buenos Aires Traffic Infractions — Response fields"
sourcePath: "docs/vehicle-validation/argentina/buenos-aires-traffic-infractions.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ar"
  - "vehicle-validation"
endpoint: "/v2/ar/buenos-aires/traffic-infractions"
sourceAnchor: "Response fields"
slug: "/vehicle-validation/argentina/buenos-aires-traffic-infractions"
url: "https://docs.verifik.co/vehicle-validation/argentina/buenos-aires-traffic-infractions"
---

# Buenos Aires Traffic Infractions
**API path(s):** /v2/ar/buenos-aires/traffic-infractions

## Response fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `plate` | string | Normalized vehicle plate. |
| `totalRecords` | string | Number of records returned by the source. |
| `infractions` | object[] | Traffic infraction records associated with the plate. |
| `infractions[].caseNumber` | string \| null | Case number. |
| `infractions[].actNumber` | string \| null | Act number. |
| `infractions[].status` | string \| null | Public status of the case. |
| `infractions[].isExpired` | boolean \| null | Whether the record is expired. |
| `infractions[].totalAmount` | string \| null | Total amount returned by the source. |
| `infractions[].details` | object[] | Articles and descriptions for the infraction. |

### Notes

- This endpoint is scoped to Buenos Aires traffic infraction records.
- `infractions` can be an empty array when the plate has no returned infractions.
