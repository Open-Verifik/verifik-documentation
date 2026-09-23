---
id: "en-docs-london-stock-exchange-integration-spain-115-verify-spanish-identity-card-dni-nie-2"
title: "Spain — Verifik public API — 115. Verify Spanish identity card (DNI/NIE)"
sourcePath: "docs/london-stock-exchange-integration/spain.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "es"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/es/cedula?documenttype=dnies&documentnumber=29731290h&expirationdate=27/03/2025"
  - "/v2/es/company?documenttype=nif&documentnumber=a29268166"
  - "/v2/es/vehicle?plate=5684ccd"
sourceAnchor: "115. Verify Spanish identity card (DNI/NIE)"
slug: "/london-stock-exchange-integration/spain"
url: "https://docs.verifik.co/london-stock-exchange-integration/spain"
---

# Spain — Verifik public API
**API path(s):** /v2/es/cedula?documenttype=dnies&documentnumber=29731290h&expirationdate=27/03/2025, /v2/es/company?documenttype=nif&documentnumber=a29268166, /v2/es/vehicle?plate=5684ccd

## 115. Verify Spanish identity card (DNI/NIE)

**Location in the collection:** v2 › es › vehicle › Verify Spanish identity card (DNI/NIE)

**What it does (summary):**

With the Verifik API for Spain, you can easily verify the validity of Spanish identity cards (DNI/NIE) by providing the document number and expiration date. The API returns a JSON response containing the document type, document number, full name, first name, last name, and an array of names.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/es/vehicle?plate=5684CCD
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | 5684CCD | (Required) Document number of the person to be consulted, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/es/vehicle?plate=5684CCD" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "5684CCD",

        "brand": "MAKE",

        "model": "MODEL",

        "year": "2020",

        "vehicleType": "SEDAN"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VHCL1"

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
