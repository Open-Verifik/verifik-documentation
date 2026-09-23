---
id: "en-docs-london-stock-exchange-integration-bolivia-5-bolivian-vehicle-2"
title: "Bolivia — Verifik public API — 5. Bolivian Vehicle"
sourcePath: "docs/london-stock-exchange-integration/bolivia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "bo"
  - "london-stock-exchange-integration"
endpoint: "/v2/bo/cedula"
sourceAnchor: "5. Bolivian Vehicle"
slug: "/london-stock-exchange-integration/bolivia"
url: "https://docs.verifik.co/london-stock-exchange-integration/bolivia"
---

# Bolivia — Verifik public API
**API path(s):** /v2/bo/cedula

## 5. Bolivian Vehicle

**Location in the collection:** v2 › bo › vehicle › Bolivian Vehicle

**What it does (summary):**

The Bolivian Citizen Identification API allows you to obtain basic information about a Bolivian citizen based on their national identification number and date of birth.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/bo/vehicle?plate=1852PHD
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | 1852PHD | (Required) Document type. Allowed value: CI. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |
| User-Agent |  |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/bo/vehicle?plate=1852PHD" \
  -H "Accept: application/json" \
  -H "User-Agent: "
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "Policy": "71063790",

        "brand": "TOYOTA",

        "clase": "VAGONETA",

        "declaratory": "ACHOCALLA",

        "plate": "1852PHD",

        "service": "PARTICULAR",

        "type": "LAND CRUISER PRADO"

    },

    "signature": {

        "dateTime": "April 9, 2026 12:22 AM",

        "message": "Certified by Verifik.co"

    },

    "id": "JO37I"

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
