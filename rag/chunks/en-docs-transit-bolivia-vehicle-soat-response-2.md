---
id: "en-docs-transit-bolivia-vehicle-soat-response-2"
title: "Bolivia - Vehicle SOAT — Response"
sourcePath: "docs/transit/bolivia/vehicle-soat.mdx"
locale: "en"
category: "transit"
tags:
  - "bo"
  - "transit"
endpoint: "/v2/bo/vehicle-soat"
sourceAnchor: "Response"
slug: "/transit/bolivia/vehicle-soat"
url: "https://docs.verifik.co/transit/bolivia/vehicle-soat"
---

# Bolivia - Vehicle SOAT
**API path(s):** /v2/bo/vehicle-soat

Verifik queries the official Bolivia **SOAT** (*Seguro Obligatorio de Accidentes de Tránsito*) registry by **license plate**. Use this endpoint for **fleet compliance**, **insurance verification**, and **transit checks**.
Returns SOAT coverage details when the source provides them:
- **`plate`** — vehicle license plate (**5–8** characters), normalized to uppercase
- **`managementYear`** — SOAT management or coverage year
- **`validFrom`** / **`validTo`** — coverage validity dates (DD/MM/YYYY)
- **`vehicleType`** — vehicle category (e.g. AUTOMOVIL, VAGONETA, MOTOCICLETA)
- **`useType`** — use classification (PARTICULAR, COMERCIAL)
- **`department`** — department associated with the policy
- **`status`** — computed status: VIGENTE, VENCIDO, or PENDIENTE
- **Signed** Verifik response

## Response

```json
{
  "data": {
    "plate": "1852PHD",
    "managementYear": "2026",
    "validFrom": "01/01/2026",
    "validTo": "31/12/2026",
    "vehicleType": "VAGONETA",
    "useType": "PARTICULAR",
    "department": "LA PAZ",
    "status": "VIGENTE"
  },
  "signature": {
    "dateTime": "July 2, 2026 3:00 PM",
    "message": "Certified by Verifik.co"
  }
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

### Notes

- **`plate`** is required; the middleware normalizes it to uppercase.
- **`status`** is derived from **`validFrom`** and **`validTo`** relative to the current date.
- Treat responses as **sensitive vehicle data**; comply with applicable privacy laws.
