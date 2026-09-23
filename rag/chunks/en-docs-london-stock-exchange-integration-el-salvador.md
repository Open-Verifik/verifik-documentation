---
id: "en-docs-london-stock-exchange-integration-el-salvador"
title: "El Salvador — Verifik public API — 94. El Salvador DUI Information Lookup"
sourcePath: "docs/london-stock-exchange-integration/el-salvador.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "sv"
  - "london-stock-exchange-integration"
endpoint: "/v2/sv/dui?documentnumber=055765964&dateofbirth=06/07/1997"
sourceAnchor: "94. El Salvador DUI Information Lookup"
slug: "/london-stock-exchange-integration/el-salvador"
url: "https://docs.verifik.co/london-stock-exchange-integration/el-salvador"
---

# El Salvador — Verifik public API
**API path(s):** /v2/sv/dui?documentnumber=055765964&dateofbirth=06/07/1997

## 94. El Salvador DUI Information Lookup

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/el-salvador/)

# El Salvador

## 94. El Salvador DUI Information Lookup

**Location in collection:** v2 › sv › dui › El Salvador DUI Information Lookup

**What it does (summary):**

The El Salvador DUI Information Lookup API allows you to effortlessly retrieve personal information associated with a DUI (Documento Único de Identidad) by using the document number. This API is a reliable and efficient tool for obtaining essential details related to an individual's identity.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/sv/dui?documentNumber=055765964&dateOfBirth=06/07/1997
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 055765964 | (Required) Document number of the person to consult, without spaces or points. |
| dateOfBirth | 07/06/1997 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/sv/dui?documentNumber=055765964&dateOfBirth=06/07/1997" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "055765964",

        "dateOfBirth": "06/07/1997"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

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
