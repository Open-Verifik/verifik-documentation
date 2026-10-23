---
id: "en-docs-london-stock-exchange-integration-colombia-58-voting-information-for-colombian-citizens-35"
title: "Colombia — Verifik public API — 58. Voting Information for Colombian Citizens"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "58. Voting Information for Colombian Citizens"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 58. Voting Information for Colombian Citizens

**Location in the collection:** v2 › co › registration › voting › Voting Information for Colombian Citizens

**What it does (summary):**

This API allows you to obtain voting information for Colombian citizens from the National Registry of Civil Status. By providing the citizen's document number, you can access details such as address, department, municipality, polling station and voting station. 

Use this API to seamlessly integrate election information into your applications or services.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/registraduria/votacion?documentNumber=1010103248
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 1010103248 | (Required) Document number of the person to be consulted, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/registraduria/votacion?documentNumber=1010103248" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{
    "data": {
        "documentNumber": "1121329661",
        "NUIP": "1121329661",
        "department": "LA GUAJIRA",
        "municipality": "VILLANUEVA",
        "votingStation": "COLEGIO SILVESTRE DANGOND DAZA",
        "address": "CRA 10  #  23 - 120",
        "pollingTable": "3"
    },
    "signature": {
        "dateTime": "March 7, 2026 10:05 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "0NFN3"
}
```

---
