---
id: "en-docs-london-stock-exchange-integration-colombia-32-lawyers-validity-verification-api-10"
title: "Colombia — Verifik public API — 32. Lawyers Validity Verification API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "32. Lawyers Validity Verification API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 32. Lawyers Validity Verification API

**Location in the collection:** v2 › co › branch › lawyers › Lawyers Validity Verification API

**What it does (summary):**

The Lawyer Verification API provides a comprehensive solution to verify the professional credentials of lawyers in Colombia. This access point allows you to validate a lawyer's document number and type and obtain essential information about their professional status.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=72257968&quality=ABG
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, NIT, CE. |
| documentNumber | 72257968 | (Required) Document number of the person for whom you want to search for judicial processes. |
| quality | ABG |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=72257968&quality=ABG" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "certificado": "",

        "documentNumber": "72257968",

        "documentType": "CC",

        "encalidad": "Abogado",

        "estado": "Vigente",

        "fechaCreacion": "02/06/2009",

        "fechaExpedicion": "2009/06/02",

        "idHojaDeVida": "9d36050d-2e73-e511-80f1-005056b16b17",

        "motivoNoVigencia": " - ",

        "numeroTarCarLice": "180331",

        "observacionesPenaAccesoria": null,

        "quality": "ABG"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:14 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "LA1NG"

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
