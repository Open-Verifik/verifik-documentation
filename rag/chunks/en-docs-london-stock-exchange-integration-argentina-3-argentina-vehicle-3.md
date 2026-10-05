---
id: "en-docs-london-stock-exchange-integration-argentina-3-argentina-vehicle-3"
title: "Argentina — Verifik public API — 3. Argentina Vehicle"
sourcePath: "docs/london-stock-exchange-integration/argentina.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "ar"
  - "london-stock-exchange-integration"
endpoint: "/v2/ar/cedula"
sourceAnchor: "3. Argentina Vehicle"
slug: "/london-stock-exchange-integration/argentina"
url: "https://docs.verifik.co/london-stock-exchange-integration/argentina"
---

# Argentina — Verifik public API
**API path(s):** /v2/ar/cedula

## 3. Argentina Vehicle

**Location in the collection:** v2 › ar › vehicles › Vehicle Argentina

**What it does (summary):**

The Argentine National Identity Document (DNI) verification API allows developers to verify the authenticity of an Argentine identity document (Documento Nacional de Identidad, or DNI) by providing the DNI number. The API returns information such as the person's full name, the first and last name separately, and the DNI number.

This information can be used for various purposes, such as verifying the identity of a customer or validating information provided by a user.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ar/vehicle?plate=AA123BB
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| plates | AA123BB |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ar/vehicle?plate=AA123BB" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "brand": "HERMANN",

        "codeRegistrySectional": "2097",

        "isPlateMercosur": "true",

        "model": "FURGON",

        "plate": "AA123BB",

        "recordAddress": "AV. CORRIENTES 2063  PISO: 1 DPTO: 35",

        "registrationDenomination": "CAPITAL FEDERAL N° 097",

        "registrationLocality": "CABA",

        "registrationProvince": "",

        "type": "MOTOVEHICULO",

        "version": "S.FP.3E.98 2+1",

        "year": "2021"

    },

    "signature": {

        "dateTime": "April 9, 2026 12:17 AM",

        "message": "Certified by Verifik.co"

    },

    "id": "SRAB4"

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

    "message": "plate format invalid for Argentina."

}
```

---
