---
id: "en-docs-london-stock-exchange-integration-guatemala-95-guatemala-id-card"
title: "Guatemala — Verifik public API — 95. Guatemala ID Card"
sourcePath: "docs/london-stock-exchange-integration/guatemala.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "gt"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/gt/cedula"
  - "/v2/gt/cedula/extra"
sourceAnchor: "95. Guatemala ID Card"
slug: "/london-stock-exchange-integration/guatemala"
url: "https://docs.verifik.co/london-stock-exchange-integration/guatemala"
---

# Guatemala — Verifik public API
**API path(s):** /v2/gt/cedula, /v2/gt/cedula/extra

## 95. Guatemala ID Card

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/guatemala/)

# Guatemala

## 95. Guatemala ID Card

**Location in the collection:** v2 › gt › cedula › Cedula Guatemala

**What it does (summary):**

The Guatemalan Identity Verification API validates a citizen's CUI against official SAT records. Provide **`documentType`**, **`documentNumber`**, and **`dateOfBirth`** (`DD/MM/YYYY`). The API returns the holder's full name split into first and last name, plus document metadata.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/gt/cedula?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CUI | Allowed value: `CUI`. |
| documentNumber | 2222624190903 | Document number to consult, without spaces or periods. |
| dateOfBirth | 12/03/1984 | **(Required)** Date of birth in `DD/MM/YYYY` format. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |
| Authorization | Bearer \ |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/gt/cedula?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{
    "data": {
        "arrayName": [
            "ERICK",
            "ROBERTO",
            "RAMIREZ",
            "MORALES"
        ],
        "documentNumber": "2222624190903",
        "documentType": "CUI",
        "firstName": "ERICK ROBERTO",
        "fullName": "ERICK ROBERTO RAMIREZ MORALES",
        "lastName": "RAMIREZ MORALES"
    },
    "signature": {
        "dateTime": "January 16, 2024 3:44 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "GT001"
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
    "message": "missing dateOfBirth\n"
}
```

---
