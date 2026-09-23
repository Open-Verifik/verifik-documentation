---
id: "en-docs-london-stock-exchange-integration-mexico-100-vehicle-3"
title: "Mexico — Verifik public API — 100. VEHICLE"
sourcePath: "docs/london-stock-exchange-integration/mexico.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "mx"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/mx/company"
  - "/v2/mx/curp"
  - "/v2/mx/vehiculo/placa"
sourceAnchor: "100. VEHICLE"
slug: "/london-stock-exchange-integration/mexico"
url: "https://docs.verifik.co/london-stock-exchange-integration/mexico"
---

# Mexico — Verifik public API
**API path(s):** /v2/mx/company, /v2/mx/curp, /v2/mx/vehiculo/placa

## 100. VEHICLE

**Location in collection:** v2 › mx › vehicle › license plate › VEHICLE

**What it does (summary):**

Method to obtain complementary and diverse information about a vehicle, such as body type, chassis serial number, the only parameter you need is the license plate of the vehicle to consult.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/mx/vehiculo/placa?plate=MSE9670
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | MSE9670 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/mx/vehiculo/placa?plate=MSE9670" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "MSE9670",

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

## 101. VEHICLE Copy

**Location in collection:** v2 › mx › vehicle › license plate › VEHICLE Copy

**What it does (summary):**

Method to obtain complementary and diverse information about a vehicle, such as body type, chassis serial number, the only parameter you need is the license plate of the vehicle to consult.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/mx/vehiculo/placa?plate=338ER
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | 338ER | (Required) Vehicle license plate to consult. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/mx/vehiculo/placa?plate=338ER" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "338ER",

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
