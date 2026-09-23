---
id: "en-docs-london-stock-exchange-integration-colombia-50-vehicle-information-service-in-colombia-27"
title: "Colombia — Verifik public API — 50. Vehicle Information Service in Colombia"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "50. Vehicle Information Service in Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 50. Vehicle Information Service in Colombia

**Location in the collection:** v2 › co › runt › vehicle › Vehicle Information Service in Colombia

**What it does (summary):**

The Colombia Vehicle Information Service API provides access to real-time information about a vehicle registered in Colombia. It offers details such as the name and identification of the owner, color of the vehicle, make and model, registration status and expiration dates of the SOAT (mandatory traffic accident insurance) and the technical-mechanical inspection.

This API is ideal for automotive companies, insurance companies, and government agencies that want to verify vehicle information and regulatory compliance.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=1102378802&plate=OSG43H
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document Type. Allowed values ​​are: CC, , CE, PA, RC, NIT. |
| documentNumber | 1102378802 |  |
| plates | OSG43H |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=1102378802&plate=OSG43H" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "OSG43H",

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
