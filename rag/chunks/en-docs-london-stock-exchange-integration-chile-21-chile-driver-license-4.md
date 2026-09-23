---
id: "en-docs-london-stock-exchange-integration-chile-21-chile-driver-license-4"
title: "Chile — Verifik public API — 21. Chile Driver License"
sourcePath: "docs/london-stock-exchange-integration/chile.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/cedula?documenttype=run&documentnumber=18.562.530-3"
  - "/v2/cl/company?documenttype=rut&documentnumber=77398220"
  - "/v2/cl/driver-license"
  - "/v2/cl/driver-license?documentnumber=06230840"
  - "/v2/cl/taxpayer?documenttype=rut&documentnumber=263007905"
  - "/v2/cl/vehicle?plate=bb985"
sourceAnchor: "21. Chile Driver License"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/london-stock-exchange-integration/chile"
---

# Chile — Verifik public API
**API path(s):** /v2/cl/cedula, /v2/cl/cedula?documenttype=run&documentnumber=18.562.530-3, /v2/cl/company?documenttype=rut&documentnumber=77398220, /v2/cl/driver-license, /v2/cl/driver-license?documentnumber=06230840, /v2/cl/taxpayer?documenttype=rut&documentnumber=263007905, /v2/cl/vehicle?plate=bb985

## 21. Chile Driver License

**Location in the collection:** v2 › cl › driver-license › Chile Driver License

**What it does (summary):**

This API returns **driver license** details for Chile using the **license number** (`documentNumber`), not the national ID lookup. Typical fields include **RUT**, **license class**, **restrictions**, **control dates**, **municipality**, and **address**, depending on registry availability—use it for **fleet**, **workforce compliance**, or any flow where **driving credentials** must be confirmed.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/cl/driver-license?documentNumber=06230840
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 06230840 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/driver-license?documentNumber=06230840" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "RUT": "7.896.377-8",

        "address": "SAN ISIDRO 311",

        "class": "B",

        "controlDate": "31/10/2013",

        "documentNumber": "06230840",

        "lastControlDate": "31/10/2007",

        "lastName": "SOLIS PLAZA",

        "license": "CA-6230840",

        "municipality": "SANTIAGO",

        "names": "LUIS EMILIO",

        "procedure": ".",

        "restrictions": ".USAR LENTES O DE CONTACTO. "

    },

    "signature": {

        "dateTime": "April 9, 2026 3:01 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "AIXZB"

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

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---
