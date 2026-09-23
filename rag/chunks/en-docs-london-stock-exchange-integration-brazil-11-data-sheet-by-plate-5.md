---
id: "en-docs-london-stock-exchange-integration-brazil-11-data-sheet-by-plate-5"
title: "Brazil: Verifik public API — 11. data sheet by plate"
sourcePath: "docs/london-stock-exchange-integration/brazil.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "london-stock-exchange-integration"
endpoint: "/v2/br/cedula"
sourceAnchor: "11. data sheet by plate"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/london-stock-exchange-integration/brazil"
---

# Brazil: Verifik public API
**API path(s):** /v2/br/cedula

## 11. data sheet by plate

**Location in collection:** v2 › br › data sheet › data sheet by plate

**What it does (summary):**

**Brazil** extended **vehicle data sheet by plate**: returns a richer technical / reference payload for a Brazilian **license plate** than the basic `v2/br/vehicle` lookup, when this product is enabled for your account.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/br/vehicle/data-sheet-by-plate?plate=JIZ5244
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plate | JIZ5244 | (Required) License plate. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/br/vehicle/data-sheet-by-plate?plate=JIZ5244" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "JIZ5244",

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

## 12. Brazilian Background

**Location in collection:** v2 › br › background › Background Brazilian

**What it does (summary):**

**Brazil individual background check** by **CPF** and **date of birth**. The response includes identity-related fields and, when the provider returns it, a **base64-encoded PDF** report. Use for screening and compliance; do not confuse this with the lighter **CPF identity** check (`v2/br/cedula`).

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=019.166.586-01&dateOfBirth=17/02/2002
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CPF | (Required) Document type. Allowed value: CPF. |
| documentNumber | 019.166.586-01 | (Required) Document number of the person to consult. |
| dateOfBirth | 17/02/2002 | (Required) Date of birth (`dd/mm/yyyy`). |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=019.166.586-01&dateOfBirth=17/02/2002" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "APELLIDO",

            "NOMBRE",

            "SEGUNDO"

        ],

        "documentNumber": "019.166.586-01",

        "documentType": "CPF",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO",

        "dateOfBirth": "17/02/2002"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "IDNT1"

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
