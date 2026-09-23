---
id: "en-docs-london-stock-exchange-integration-peru-113-information-on-companies-in-peru-by-ruc-number-6"
title: "Peru — Verifik public API — 113. Information on Companies in Peru by RUC Number"
sourcePath: "docs/london-stock-exchange-integration/peru.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pe/cedula"
  - "/v2/pe/cedula/extra"
  - "/v2/pe/empresa"
  - "/v2/pe/foreigner-id/ce"
  - "/v2/pe/vehiculo/placa"
  - "/v2/pe/vehiculo/soat"
sourceAnchor: "113. Information on Companies in Peru by RUC Number"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/london-stock-exchange-integration/peru"
---

# Peru — Verifik public API
**API path(s):** /v2/pe/cedula, /v2/pe/cedula/extra, /v2/pe/empresa, /v2/pe/foreigner-id/ce, /v2/pe/vehiculo/placa, /v2/pe/vehiculo/soat

## 113. Information on Companies in Peru by RUC Number

**Location in the collection:** v2 › pe › company › Information on Companies in Peru by RUC Number

**What it does (summary):**

This API allows users to obtain information about companies in Peru by providing the RUC (Unique Taxpayer Registry) number. The API returns data such as company name, address, tax status, and more. The information is obtained from official sources and is certified by Verifik.co. The API can be used by companies, researchers or anyone who needs to verify the status or information of a company in Peru.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/pe/empresa?documentType=RUC&documentNumber=20605980008
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | RUC | (Required) Document type. Allowed value: RUC. |
| documentNumber | 20605980008 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/empresa?documentType=RUC&documentNumber=20605980008" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "APELLIDO",

            "NOMBRE",

            "SEGUNDO"

        ],

        "documentNumber": "20605980008",

        "documentType": "RUC",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "IDNT1"

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

    "message": "documentNumber maximum length exceeded.\n"

}
```

---
