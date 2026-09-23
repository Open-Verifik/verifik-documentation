---
id: "en-docs-london-stock-exchange-integration-costa-rica-84-information-on-the-national-identity-card-of-costa-rica"
title: "Costa Rica — Verifik public API — 84. Information on the National Identity Card of Costa Rica"
sourcePath: "docs/london-stock-exchange-integration/costa-rica.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "cr"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cr/cedula"
  - "/v2/cr/company"
  - "/v2/cr/vehicle"
sourceAnchor: "84. Information on the National Identity Card of Costa Rica"
slug: "/london-stock-exchange-integration/costa-rica"
url: "https://docs.verifik.co/london-stock-exchange-integration/costa-rica"
---

# Costa Rica — Verifik public API
**API path(s):** /v2/cr/cedula, /v2/cr/company, /v2/cr/vehicle

## 84. Information on the National Identity Card of Costa Rica

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/costa-rica/)

# Costa Rica

## 84. Information on the National Identity Card of Costa Rica

**Location in the collection:** v2 › cr › cedula › Information on the National Identity Card of Costa Rica

**What it does (summary):**

This API allows you to verify the authenticity of a Costa Rican National Identity Card by providing the document number. The response includes the full name of the cardholder, as well as their first and last names separately.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/cr/cedula?documentType=CCCR&documentNumber=206820588
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CCCR | (Required) Document type. Allowed parameter: CCCR. |
| documentNumber | 206820588 | (Required) Document number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/cr/cedula?documentType=CCCR&documentNumber=206820588" \
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

        "documentNumber": "206820588",

        "documentType": "CCCR",

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
