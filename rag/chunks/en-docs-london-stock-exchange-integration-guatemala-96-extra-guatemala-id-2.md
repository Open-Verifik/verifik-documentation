---
id: "en-docs-london-stock-exchange-integration-guatemala-96-extra-guatemala-id-2"
title: "Guatemala — Verifik public API — 96. Extra Guatemala ID"
sourcePath: "docs/london-stock-exchange-integration/guatemala.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "gt"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/gt/cedula/extra?documenttype=cui&documentnumber=2222624190903&dateofbirth=12/03/1984"
  - "/v2/gt/cedula?documenttype=cui&documentnumber=2222624190903&dateofbirth=12/03/1984"
sourceAnchor: "96. Extra Guatemala ID"
slug: "/london-stock-exchange-integration/guatemala"
url: "https://docs.verifik.co/london-stock-exchange-integration/guatemala"
---

# Guatemala — Verifik public API
**API path(s):** /v2/gt/cedula/extra?documenttype=cui&documentnumber=2222624190903&dateofbirth=12/03/1984, /v2/gt/cedula?documenttype=cui&documentnumber=2222624190903&dateofbirth=12/03/1984

## 96. Extra Guatemala ID

**Location in the collection:** v2 › gt › cedula › Cedula Guatemala extra

**What it does (summary):**

Same identity lookup as the standard Guatemala endpoint, with additional fields such as **birth date** and **gender** from SAT individual records. Requires **`documentType`**, **`documentNumber`**, and **`dateOfBirth`** (`DD/MM/YYYY`).

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/gt/cedula/extra?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984
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
curl -X GET "https://api.verifik.co/v2/gt/cedula/extra?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984" \
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
        "birthDate": "1984-03-12",
        "documentNumber": "2222624190903",
        "documentType": "CUI",
        "firstName": "ERICK ROBERTO",
        "fullName": "ERICK ROBERTO RAMIREZ MORALES",
        "gender": "MASCULINO",
        "lastName": "RAMIREZ MORALES"
    },
    "signature": {
        "dateTime": "January 15, 2026 1:56 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "OQPT8"
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
