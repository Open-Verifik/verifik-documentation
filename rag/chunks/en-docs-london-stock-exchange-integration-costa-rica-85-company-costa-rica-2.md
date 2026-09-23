---
id: "en-docs-london-stock-exchange-integration-costa-rica-85-company-costa-rica-2"
title: "Costa Rica — Verifik public API — 85. company Costa Rica"
sourcePath: "docs/london-stock-exchange-integration/costa-rica.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "cr"
  - "london-stock-exchange-integration"
endpoint: "/v2/cr/cedula"
sourceAnchor: "85. company Costa Rica"
slug: "/london-stock-exchange-integration/costa-rica"
url: "https://docs.verifik.co/london-stock-exchange-integration/costa-rica"
---

# Costa Rica — Verifik public API
**API path(s):** /v2/cr/cedula

## 85. company Costa Rica

**Location in collection:** v2 › cr › company › company Costa Rica

**What it does (summary):**

This API allows you to verify the authenticity of a Costa Rican National Identity Card by providing the document number. The response includes the full name of the cardholder, as well as their first and last names separately.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/cr/company?documentType=NITE&documentNumber=3101122876
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | NITE | (Required) Document type. Allowed parameter: CCCR. |
| documentNumber | 3101122876 | (Required) Document number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/cr/company?documentType=NITE&documentNumber=3101122876" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "NITE",

        "documentNumber": "3101122876",

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
