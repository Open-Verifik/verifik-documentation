---
id: "en-docs-london-stock-exchange-integration-colombia-79-bogota-vehicle-taxes-55"
title: "Colombia — Verifik public API — 79. Bogota vehicle taxes"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "79. Bogota vehicle taxes"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 79. Bogota vehicle taxes

**Location in the collection:** v2 › co › bogota › vehicle taxes bogota

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/bogota/vehicle/tax?documentType=CC&documentNumber=1019005801&plate=JMU866
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC |  |
| documentNumber | 1019005801 | WITH DEBT |
| plates | JMU866 | WITH DEBT |
| documentNumber | 79611422 | NO DEBT |
| plates | UGK190 | NO DEBT |
| documentNumber | 860059294 | fiduciary |
| plates | HVL031 | fiduciary |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/bogota/vehicle/tax?documentType=CC&documentNumber=1019005801&plate=JMU866"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "JMU866",

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

## 80. ACCIDENTAL CONSULTATION IN BOGOTÁ

**Location in the collection:** v2 › co › bogota › CONSULTATION OF ACCIDENTS IN BOGOTÁ

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/bogota/vehicle/accidentality?plate=BRH797
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | BRH797 |  |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/bogota/vehicle/accidentality?plate=BRH797"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "BRH797",

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
