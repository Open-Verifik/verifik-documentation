---
id: "en-docs-london-stock-exchange-integration-panama-103-vehicle-information-in-panama-2"
title: "Panama — Verifik public API — 103. Vehicle Information in Panama"
sourcePath: "docs/london-stock-exchange-integration/panama.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "pa"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pa/cedula"
  - "/v2/pa/company"
  - "/v2/pa/vehiculo/placa"
sourceAnchor: "103. Vehicle Information in Panama"
slug: "/london-stock-exchange-integration/panama"
url: "https://docs.verifik.co/london-stock-exchange-integration/panama"
---

# Panama — Verifik public API
**API path(s):** /v2/pa/cedula, /v2/pa/company, /v2/pa/vehiculo/placa

## 103. Vehicle Information in Panama

**Location in the collection:** v2 › pa › vehicle › license plate › Vehicle Information in Panama

**What it does (summary):**

This API allows users to obtain information about a vehicle registered in Panama using its license plate number. The answer includes details such as the vehicle's make and model, year of manufacture, engine and body serial numbers, registration status, and more. The API also provides information about the vehicle policy status, insurance certificate number, and the start and end dates of the insurance policy.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/pa/vehiculo/placa?plate=AM5240
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | AM5240 | (Required) Plate to be consulted without spaces or points. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/pa/vehiculo/placa?plate=AM5240" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "AM5240",

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
