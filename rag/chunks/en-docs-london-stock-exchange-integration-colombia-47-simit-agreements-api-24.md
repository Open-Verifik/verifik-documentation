---
id: "en-docs-london-stock-exchange-integration-colombia-47-simit-agreements-api-24"
title: "Colombia — Verifik public API — 47. SIMIT Agreements API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "47. SIMIT Agreements API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 47. SIMIT Agreements API

**Location in collection:** v2 › co › simit › agreements › SIMIT Agreements API

**What it does (summary):**

The SIMIT Agreements API provides a simple way to obtain payment agreements for traffic violations in Colombia's SIMIT system. The API returns a response in JSON format with the details of the agreement, including the name of the offender, the resolution number, the issuing secretariat, and the total amount owed.

Developers can use this API to automate the process of obtaining payment agreements for traffic violations and integrate the data into their applications.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/simit/acuerdos?documentType=CC&documentNumber=12345
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, PA, CE, , RC, NIT. |
| documentNumber | 12345 | (Required) Document number to consult, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/acuerdos?documentType=CC&documentNumber=12345" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "acuerdosPagos": [

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/02/16",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "324",

                "secretaria": "NO DISPONIBLE",

                "total": "837716"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "09072018",

                "secretaria": "NO DISPONIBLE",

                "total": "390621"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "0907182",

                "secretaria": "NO DISPONIBLE",

                "total": "380861"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "0907181",

                "secretaria": "NO DISPONIBLE",

                "total": "527616"

            },

            {

                "estadosResoluciones": "2",

                "fechaComparendo": "1900/01/01",

                "fechaResolucion": "2018 00:00:00/07/09",

                "noComparendo": "NO REPORTADO",

                "permitePago": "S",

                "resoluciones": "090718",

                "secretaria": "NO DISPONIBLE",

                "to
… (respuesta recortada)
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
