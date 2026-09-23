---
id: "en-docs-london-stock-exchange-integration-mexico-99-identification-of-mexican-citizen-with-curp-2"
title: "Mexico — Verifik public API — 99. Identification of Mexican Citizen with CURP"
sourcePath: "docs/london-stock-exchange-integration/mexico.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "mx"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/mx/company?documenttype=fme&documentnumber=n-2021007300"
  - "/v2/mx/curp?documentnumber=nuha930929hslxrl02&documenttype=curp"
  - "/v2/mx/vehiculo/placa?plate=338er"
  - "/v2/mx/vehiculo/placa?plate=mse9670"
sourceAnchor: "99. Identification of Mexican Citizen with CURP"
slug: "/london-stock-exchange-integration/mexico"
url: "https://docs.verifik.co/london-stock-exchange-integration/mexico"
---

# Mexico — Verifik public API
**API path(s):** /v2/mx/company?documenttype=fme&documentnumber=n-2021007300, /v2/mx/curp?documentnumber=nuha930929hslxrl02&documenttype=curp, /v2/mx/vehiculo/placa?plate=338er, /v2/mx/vehiculo/placa?plate=mse9670

## 99. Identification of Mexican Citizen with CURP

**Location in the collection:** v2 › mx › company › Mexican Citizen Identification with CURP

**What it does (summary):**

The CURP API allows you to easily verify the identity of Mexican citizens through their CURP number. With this API, you can obtain important personal information such as full name, date of birth, nationality and supporting document associated with a specific CURP number.

The data returned also includes details about the place of registration and other relevant information, making it an essential tool for identity verification and fraud prevention.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/mx/company?documentType=FME&documentNumber=N-2021007300
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | FME | (Required) Document type. Valid parameter: CURP. |
| documentNumber | N-2021007300 | (Required) Document of the person to be consulted, without spaces or points. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/mx/company?documentType=FME&documentNumber=N-2021007300" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "FME",

        "documentNumber": "N-2021007300",

        "legalName": "EMPRESA EJEMPLO SA",

        "status": "ACTIVO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "CMPY1"

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

    "message": "documentNumber invalid format."

}
```

---
