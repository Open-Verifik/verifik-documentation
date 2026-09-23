---
id: "en-docs-london-stock-exchange-integration-india-88-indian-id"
title: "India — Verifik public API — 88. Indian ID"
sourcePath: "docs/london-stock-exchange-integration/india.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "in"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/in/epic"
  - "/v2/in/epic/votacion"
sourceAnchor: "88. Indian ID"
slug: "/london-stock-exchange-integration/india"
url: "https://docs.verifik.co/london-stock-exchange-integration/india"
---

# India — Verifik public API
**API path(s):** /v2/in/epic, /v2/in/epic/votacion

## 88. Indian ID

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/india/)

# India

## 88. Indian ID

**Location in the collection:** v2 › in › cedula › Cedula India

**What it does (summary):**

The Argentine National Identity Document (DNI) verification API allows developers to verify the authenticity of an Argentine identity document (Documento Nacional de Identidad, or DNI) by providing the DNI number. The API returns information such as the person's full name, the first and last name separately, and the DNI number.

This information can be used for various purposes, such as verifying the identity of a customer or validating information provided by a user.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/in/epic?documentNumber=IHM2796746
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | IHM2796746 | (Required) Document number of the person to consult. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/in/epic?documentNumber=IHM2796746" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "IHM2796746"

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
