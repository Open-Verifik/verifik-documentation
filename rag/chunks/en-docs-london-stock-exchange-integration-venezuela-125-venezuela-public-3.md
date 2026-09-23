---
id: "en-docs-london-stock-exchange-integration-venezuela-125-venezuela-public-3"
title: "Venezuela — Verifik public API — 125. venezuela public"
sourcePath: "docs/london-stock-exchange-integration/venezuela.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ve"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ve/cedula?documentnumber=31802329"
  - "/v2/ve/foreigner-id?documentnumber=27976032"
  - "/v2/ve/public/cedula?documentnumber=25622914"
sourceAnchor: "125. venezuela public"
slug: "/london-stock-exchange-integration/venezuela"
url: "https://docs.verifik.co/london-stock-exchange-integration/venezuela"
---

# Venezuela — Verifik public API
**API path(s):** /v2/ve/cedula?documentnumber=31802329, /v2/ve/foreigner-id?documentnumber=27976032, /v2/ve/public/cedula?documentnumber=25622914

## 125. venezuela public

**Location in the collection:** v2 › ve › Publico › venezuela publico

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ve/public/cedula?documentNumber=25622914
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 25622914 |  |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ve/public/cedula?documentNumber=25622914"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "25622914"

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
