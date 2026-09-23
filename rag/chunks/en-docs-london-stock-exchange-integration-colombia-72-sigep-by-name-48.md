---
id: "en-docs-london-stock-exchange-integration-colombia-72-sigep-by-name-48"
title: "Colombia — Verifik public API — 72. SIGEP by name"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "72. SIGEP by name"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 72. SIGEP by name

**Location in collection:** v2 › co › SIGEP › SIGEP by name

**What it does (summary):**

The SENA Certificates API allows developers to access certification data of people who have completed courses with the National Learning Service (SENA), a Colombian institution that offers training and technical education. By providing parameters such as the document type and the person's number, the API returns a response in JSON format that includes information about the title, type, program, certification date, and download link of each certificate obtained by the person.

This API can be used to automate certificate verification processes or to create custom certificate management applications.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/sigep/name?fullName=URIEL ALFREDO PRIETO ATUESTA
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| fullName | URIEL ALFREDO PRIETO ATUESTA | (Required) Document number of the person to be consulted, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/sigep/name?fullName=URIEL ALFREDO PRIETO ATUESTA" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "fullName": "URIEL ALFREDO PRIETO ATUESTA",

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
