---
id: "en-docs-london-stock-exchange-integration-ecuador-91-vehicle-license-plate-fines-in-ecuador-2"
title: "Ecuador — Verifik public API — 91. Vehicle License Plate Fines in Ecuador"
sourcePath: "docs/london-stock-exchange-integration/ecuador.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ec"
  - "london-stock-exchange-integration"
endpoint: "/v2/ec/cedula"
sourceAnchor: "91. Vehicle License Plate Fines in Ecuador"
slug: "/london-stock-exchange-integration/ecuador"
url: "https://docs.verifik.co/london-stock-exchange-integration/ecuador"
---

# Ecuador — Verifik public API
**API path(s):** /v2/ec/cedula

## 91. Vehicle License Plate Fines in Ecuador

**Location in the collection:** v2 › ec › vehicle › license plate › fines › Vehicle License Plate Fines in Ecuador

**What it does (summary):**

The Ecuador Vehicle License Plate Fines API allows you to obtain information about the fines associated with a vehicle license plate in Ecuador. This API provides details such as vehicle registration information, including license plate number, class and model. It also shows the current status, type of service, and expiration date of the registration. Additionally, the API displays any outstanding fines associated with the license plate.

This information is useful for people and companies that wish to stay up to date with fines associated with their vehicles and maintain compliance with Ecuadorian traffic laws.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ec/vehiculo/placa?plate=PBB3239
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | PBB3239 | (Required) Plate number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ec/vehiculo/placa?plate=PBB3239" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "PBB3239",

        "brand": "MAKE",

        "model": "MODEL",

        "year": "2020",

        "vehicleType": "SEDAN"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VHCL1"

}
```

- **HTTP 404 (Not Found)**

```json
{

    "code": "NotFound",

    "message": "Record not found."

}
```

- **HTTP 409 (Conflict)**

```json
{

    "code": "MissingParameter",

    "message": "plate format invalid."

}
```

---
