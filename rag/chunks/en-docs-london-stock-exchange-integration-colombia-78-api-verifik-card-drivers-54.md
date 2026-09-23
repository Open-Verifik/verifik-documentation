---
id: "en-docs-london-stock-exchange-integration-colombia-78-api-verifik-card-drivers-54"
title: "Colombia — Verifik public API — 78. API Verifik Card Drivers"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "78. API Verifik Card Drivers"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 78. API Verifik Card Drivers

**Location in the collection:** v2 › co › bogota › API Verifik Conductores card

**What it does (summary):**

The Verifik Pico y Placa API for Bogotá provides real-time information about the Pico y Placa schedule for vehicles registered in Bogotá, Colombia. Pico y Placa is a traffic restriction policy that limits the circulation of vehicles according to the last digit of the license plate. This API allows developers to query the Peak and Plate schedule for a given vehicle license plate and obtain information about exceptions or special conditions that may apply.

Please note that this service only works for vehicles registered in Bogotá and is intended for informational purposes only.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/bogota/taxi-drivers/card/300283
```

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/bogota/taxi-drivers/card/300283" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "status": "ok",

        "resource": "taxi-drivers/card/300283"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

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
