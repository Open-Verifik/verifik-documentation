---
id: "en-docs-london-stock-exchange-integration-brazil-7-brazilian-id"
title: "Brazil: Verifik public API — 7. Brazilian ID"
sourcePath: "docs/london-stock-exchange-integration/brazil.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "vehicle"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/br/background-check?documenttype=cpf&documentnumber=019.166.586-01&dateofbirth=17/02/2002"
  - "/v2/br/cedula"
  - "/v2/br/cedula?documenttype=cpf&documentnumber=019.166.586-01&dateofbirth=17/02/2002"
  - "/v2/br/company?documenttype=cnpj&documentnumber=45990181000189"
  - "/v2/br/public/cedula"
  - "/v2/br/public/cedula?documenttype=cpf&documentnumber=019.166.58601&dateofbirth=17/02/2002"
  - "/v2/br/public/vehicle?plate=cdv2172"
  - "/v2/br/vehicle"
  - "/v2/br/vehicle/data-sheet-by-plate?plate=jiz5244"
  - "/v2/br/vehicle?plate=pzy7h82"
  - "/v2/vehicle/data-sheet"
  - "/v2/vehicle/data-sheet?brand=chevrolet&model=cruze&year=2011&version=lt&vehicletype=cars"
sourceAnchor: "7. Brazilian ID"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/london-stock-exchange-integration/brazil"
---

# Brazil: Verifik public API
**API path(s):** /v2/br/background-check?documenttype=cpf&documentnumber=019.166.586-01&dateofbirth=17/02/2002, /v2/br/cedula, /v2/br/cedula?documenttype=cpf&documentnumber=019.166.586-01&dateofbirth=17/02/2002, /v2/br/company?documenttype=cnpj&documentnumber=45990181000189, /v2/br/public/cedula, /v2/br/public/cedula?documenttype=cpf&documentnumber=019.166.58601&dateofbirth=17/02/2002, /v2/br/public/vehicle?plate=cdv2172, /v2/br/vehicle, /v2/br/vehicle/data-sheet-by-plate?plate=jiz5244, /v2/br/vehicle?plate=pzy7h82, /v2/vehicle/data-sheet, /v2/vehicle/data-sheet?brand=chevrolet&model=cruze&year=2011&version=lt&vehicletype=cars

## 7. Brazilian ID

**English** (this page) · [Versión en español](/verifik-es/london-stock-exchange-integration/brazil/)

# Brazil

## 7. Brazilian ID

**Location in the collection:** v2 › br › cedula › Brazilian Cedula

**What it does (summary):**

The Brazilian CPF Validation API allows users to verify the validity of Brazilian CPF (Cadastro de Pessoas Physiques) numbers. The API returns a JSON response that includes the document type, document number, full name, first name, last name, and an array with the individual's first and last name.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/br/cedula?documentType=CPF&documentNumber=019.166.586-01&dateOfBirth=17/02/2002
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
curl -X GET "https://api.verifik.co/v2/br/cedula?documentType=CPF&documentNumber=019.166.586-01&dateOfBirth=17/02/2002" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "RAISSA",

            "LARA",

            "ROCHA",

            "ALVES",

            "FERREIRA"

        ],

        "dateOfBirth": "2002-02-17",

        "documentNumber": "01916658601",

        "documentType": "CPF",

        "firstName": "RAISSA LARA ROCHA",

        "fullName": "RAISSA LARA ROCHA ALVES FERREIRA",

        "lastName": "ALVES FERREIRA"

    },

    "signature": {

        "dateTime": "April 9, 2026 9:46 AM",

        "message": "Certified by Verifik.co"

    },

    "id": "BQG7M"

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
