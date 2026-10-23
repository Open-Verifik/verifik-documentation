---
id: "en-docs-london-stock-exchange-integration-colombia-56-consult-sisconmp-training-in-colombia-33"
title: "Colombia — Verifik public API — 56. Consult SISCONMP Training in Colombia"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "56. Consult SISCONMP Training in Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 56. Consult SISCONMP Training in Colombia

**Location in the collection:** v2 › co › sisconmp › trainings › Consult SISCONMP Training in Colombia

**What it does (summary):**

This API allows you to consult the training registered in the SISCONMP (Personnel Control and Monitoring System) in Colombia. Simply provide the participant's document number and type to obtain detailed information about the training completed. The response will include data such as the document number, type of document, first and last names of the participant, name of the educational institution, name of the training, issuance and expiration dates, license status, among other relevant details. 

Use this API to obtain updated and verified information about the training carried out in Colombia through SISCONMP.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/sisconmp/trainings?documentType=CC&documentNumber=3599676
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type: Allowed values ​​are: CC, , CE, PA, RC. |
| documentNumber | 3599676 | 79324123 |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/sisconmp/trainings?documentType=CC&documentNumber=3599676" \
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

        "documentNumber": "3599676",

        "documentType": "CC",

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
