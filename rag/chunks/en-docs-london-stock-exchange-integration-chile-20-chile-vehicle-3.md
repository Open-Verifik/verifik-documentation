---
id: "en-docs-london-stock-exchange-integration-chile-20-chile-vehicle-3"
title: "Chile — Verifik public API — 20. Chile Vehicle"
sourcePath: "docs/london-stock-exchange-integration/chile.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoint: "/v2/cl/cedula"
sourceAnchor: "20. Chile Vehicle"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/london-stock-exchange-integration/chile"
---

# Chile — Verifik public API
**API path(s):** /v2/cl/cedula

## 20. Chile Vehicle

**Location in the collection:** v2 › cl › vehicle › Vehicle Chile

**What it does (summary):**

This API allows you to verify the information of a vehicle registered in Chile by providing its license plate number. The response includes details such as the chassis number, engine number, manufacturer, model, year, color and any outstanding fines associated with the vehicle. In addition, the API also provides information about the vehicle owner, its type and origin, when available. 

Please note that you must provide the vehicle's license plate number to view its information.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/cl/vehicle?plate=BB985
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plate | BB985 | (Required) Plate to consult, without spaces or points. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/vehicle?plate=BB985" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "chasisNumber": "ME1KG0447E2066723",

        "color": "NEGRO",

        "engineNumber": "1ES3032465",

        "fines": "NO POSEE MULTAS",

        "manufacturer": "INDIA YAMAHA MOTOR PVT. LTD",

        "mark": "YAMAHA",

        "model": "FZ 16",

        "orderTheft": "NO DISPONIBLE",

        "origin": "INDIA",

        "owner": "SALAH-EDDINE SALIHI",

        "plate": "BB985",

        "publicTrans": "NO",

        "revision": "AGOSTO (REVISION VENCIDA - SIN SELLO)",

        "rut": "26043542-6",

        "type": "MOTO",

        "typeTransPub": "NO APLICA",

        "year": "2014"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VVBWL"

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
