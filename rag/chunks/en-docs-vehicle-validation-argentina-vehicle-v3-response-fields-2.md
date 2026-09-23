---
id: "en-docs-vehicle-validation-argentina-vehicle-v3-response-fields-2"
title: "Argentina - Vehicle v3 — Response fields"
sourcePath: "docs/vehicle-validation/argentina/vehicle-v3.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ar"
  - "vehicle-validation"
sourceAnchor: "Response fields"
slug: "/vehicle-validation/argentina/vehicle-v3"
url: "https://docs.verifik.co/vehicle-validation/argentina/vehicle-v3"
---

# Argentina - Vehicle v3

## Response fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `plate` | string | Normalized vehicle plate. |
| `engineNumber` | string \| null | Engine number returned by the source. |
| `chassis` | string \| null | Chassis identifier returned by the source. |
| `year` | string \| null | Vehicle year. |
| `brand` | string \| null | Vehicle brand. |
| `modelGroup` | string \| null | Model family or group. |
| `model` | string \| null | Vehicle model/version label. |
| `color` | string \| null | Registered color. |
| `type` | string \| null | Vehicle unit type. |
| `isActivePolicyFound` | boolean | Whether an active policy was found for the vehicle. |
| `technicalSheet` | object \| null | Technical-sheet data when available. |

### Notes

- `technicalSheet` can be `null` or partially populated when matching technical data is unavailable.
- The service normalizes plate casing before querying the source.
