---
id: "en-docs-london-stock-exchange-integration-un"
title: "UN / other — Verifik public API — 128. UN"
sourcePath: "docs/london-stock-exchange-integration/un.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "onu?fullname=muhammad"
  - "london-stock-exchange-integration"
endpoint: "/v2/onu?fullname=muhammad"
sourceAnchor: "128. UN"
slug: "/london-stock-exchange-integration/un"
url: "https://docs.verifik.co/london-stock-exchange-integration/un"
---

# UN / other — Verifik public API
**API path(s):** /v2/onu?fullname=muhammad

## 128. UN

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/un/)

# UN / other

## 128. UN

**Location in collection:** v2 › un › UN

**What it does (summary):**

The UN endpoint allows you to check if a person is included on the United Nations sanctions list.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/onu?fullName=MUHAMMAD TAHER ANWARI
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Allowed values: CC,CE,PA,RC,,PEP,CCVE,NIT,CURP,DNI, CCECP. |
| documentNumber | 1121329661 | (Required) Document number of the person to be consulted, without spaces or periods. |
| fullName | MUHAMMAD TAHER ANWARI |  |
| fullName | ANUAR DE JESUS ​​HERNANDEZ GARCIA |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/onu?fullName=MUHAMMAD TAHER ANWARI" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "fullName": "MUHAMMAD TAHER ANWARI",

        "matchStatus": "FOUND",

        "records": []

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "SRCH1"

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
