---
id: "en-docs-london-stock-exchange-integration-colombia-35-colombian-legal-processes-api-13"
title: "Colombia — Verifik public API — 35. Colombian Legal Processes API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "35. Colombian Legal Processes API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 35. Colombian Legal Processes API

**Location in the collection:** v2 › co › Fascolda › Claims › Colombian Legal Processes API

**What it does (summary):**

The Colombian Legal Processes API provides information about the legal processes associated with a Colombian citizen or company. Given a valid Colombian document number, this API returns a list of legal processes that match the query name of the subject, as well as information about each legal process, including the date of the process, the last action date, the office where it was processed, and the subjects involved in the process. This API is useful for people and organizations that need to verify the legal history of a person in Colombia.

Note: The Judicial Branch does not generate exact queries using the identity card data, the queries are made through the name, so Verifik does not guarantee a 100% successful response due to this limitation presented by the data source.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/fasecolda/sinister?plate=DCS022
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | DCS022 | DCS022 |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/fasecolda/sinister?plate=DCS022" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "DCS022",

        "sinister": [

            {

                "accidentDate": "20/10/2013",

                "id": "1",

                "protection": "PÃ©rdida Mayor CuantÃ­a"

            }

        ]

    },

    "signature": {

        "dateTime": "April 9, 2026 3:16 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "F53V7"

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

    "message": "plate format invalid."

}
```

---
