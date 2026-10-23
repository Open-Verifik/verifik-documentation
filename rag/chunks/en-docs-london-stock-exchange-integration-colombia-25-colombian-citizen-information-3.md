---
id: "en-docs-london-stock-exchange-integration-colombia-25-colombian-citizen-information-3"
title: "Colombia — Verifik public API — 25. Colombian Citizen Information"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "25. Colombian Citizen Information"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 25. Colombian Citizen Information

**Location in the collection:** v2 › co › PEPolitically › Colombian Citizen Information

**What it does (summary):**

The Colombian Citizen Identification endpoint allows obtaining information about the identification document of a Colombian citizen, such as their full name and identification number. This can be useful for a variety of purposes, such as identity verification or background checks.

To use this service, you must provide the identification number and type of identification document of the Colombian citizen. After a successful verification, the response will contain the full name, first names, last names and identification number of the Colombian citizen.

**Note:** Please note that this service is designed exclusively for identification documents of Colombian citizens. For other countries and types of identification documents, please consult the documentation for the appropriate service.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/politically-exposed-persons?documentType=CC&documentNumber=34503110
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC |  |
| documentNumber | 34503110 | CC 208079, 39773381, 34503110, 1026566862, 7185863 |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/politically-exposed-persons?documentType=CC&documentNumber=34503110" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "detail": [

            {

                "declarant": "FRANCIA ELENA MARQUEZ MINA                                                                                                                CEDULA DE CIUDADANIA -                                        34503110",

                "declaration": "2946958-01                                                                                                                                                            Declaración inicial",

                "declarationStatus": "FINALIZADO",

                "entity": "DEPARTAMENTO ADMINISTRATIVO DE LA PRESIDENCIA DE LA REPUBLICA",

                "positionContractor": "VICEPRESIDENTE DE LA REPÚBLICA",

                "publicationDate": "2025-09-18 14:53",

                "publicationType": "PERIÓDICO"

            },

            {

                "declarant": "FRANCIA ELENA MARQUEZ MINA                                                                                                                CEDULA DE CIUDADANIA -                                        34503110",

                "declaration": "1943956-02                                                                                                                                                            Corrección de 1943956-01",

                "declarationStatus": "FINALIZADO",

                "entity": "MINISTERIO DE IGUALDAD Y EQUIDAD",

                "positionContractor": "MINISTRO",

                "publicationDate": "2024-08-21 18:18",

                "publicationType": "PERIÓDICO"

            },

            {

                "declarant": "FRANCIA ELENA MARQUEZ MINA                                                                                                                CEDULA DE CIUDADANIA -                                        34503110",

                "declaration": "1943814-02                                                                              
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
