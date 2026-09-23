---
id: "en-docs-london-stock-exchange-integration-peru-108-vehicle-information-in-peru"
title: "Peru — Verifik public API — 108. Vehicle Information in Peru"
sourcePath: "docs/london-stock-exchange-integration/peru.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pe/cedula/extra?documenttype=dni&documentnumber=70904000"
  - "/v2/pe/cedula?documenttype=dni&documentnumber=01028795"
  - "/v2/pe/empresa?documenttype=ruc&documentnumber=20605980008"
  - "/v2/pe/foreigner-id/ce?documentnumber=005005393&dateofbirth=16/08/1993"
  - "/v2/pe/vehiculo/placa?plate=afj286"
  - "/v2/pe/vehiculo/soat?plate=afj289"
sourceAnchor: "108. Vehicle Information in Peru"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/london-stock-exchange-integration/peru"
---

# Peru — Verifik public API
**API path(s):** /v2/pe/cedula/extra?documenttype=dni&documentnumber=70904000, /v2/pe/cedula?documenttype=dni&documentnumber=01028795, /v2/pe/empresa?documenttype=ruc&documentnumber=20605980008, /v2/pe/foreigner-id/ce?documentnumber=005005393&dateofbirth=16/08/1993, /v2/pe/vehiculo/placa?plate=afj286, /v2/pe/vehiculo/soat?plate=afj289

## 108. Vehicle Information in Peru

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/peru/)

# Peru

## 108. Vehicle Information in Peru

**Location in the collection:** v2 › pe › vehicle › license plate › Vehicle Information in Peru

**What it does (summary):**

The Peru Vehicle Information API provides detailed information about vehicles registered in Peru based on their license plate number. The API returns information such as the make, model, year, engine and chassis serial numbers, seating capacity, and type of use of the vehicle.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/pe/vehiculo/placa?plate=AFJ286
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | AFJ286 | (Required) Plate number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/vehiculo/placa?plate=AFJ286" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "brand": "KIA",

        "chasisSerial": "KNADM411AF6513136",

        "engineSerial": "G4LAEP154276",

        "model": "RIO",

        "plate": "AFJ286",

        "seats": "5",

        "serial": "KNADM411AF6513136",

        "type": "AUTOMOVIL",

        "use": "PARTICULAR",

        "validFormat": "true",

        "year": "2014"

    },

    "signature": {

        "dateTime": "April 10, 2026 3:54 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "P9QR6"

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
