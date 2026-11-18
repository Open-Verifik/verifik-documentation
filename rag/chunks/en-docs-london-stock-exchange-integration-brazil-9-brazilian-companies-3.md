---
id: "en-docs-london-stock-exchange-integration-brazil-9-brazilian-companies-3"
title: "Brazil: Verifik public API — 9. Brazilian Companies"
sourcePath: "docs/london-stock-exchange-integration/brazil.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "london-stock-exchange-integration"
endpoint: "/v2/br/cedula"
sourceAnchor: "9. Brazilian Companies"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/london-stock-exchange-integration/brazil"
---

# Brazil: Verifik public API
**API path(s):** /v2/br/cedula

## 9. Brazilian Companies

**Location in the collection:** v2 › br › company › Brazilian Companies

**What it does (summary):**

The Brazilian Company Information API provides information on Brazilian companies, including their legal nature, main and secondary activities, share capital, shareholders, status and more. The API returns responses in JSON format that include the company name, tax ID, address, phone number, email, and other details. The information comes from the official database of the Brazilian government and is certified by Verifik.co.

This API is useful for companies that want to verify information about potential partners or clients in Brazil, or for researchers who want to study the Brazilian business landscape.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/br/company?documentType=CNPJ&documentNumber=45990181000189
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CNPJ | (Required) Document type. Allowed value: CNPJ. |
| documentNumber | 45990181000189 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/br/company?documentType=CNPJ&documentNumber=45990181000189" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "address": {

            "city": "CAMPINAS",

            "complement": "KM 98",

            "district": "JARDIM EULINA",

            "state": "SP",

            "street": "ROD ANHANGUERA KM 98",

            "zipCode": "SN"

        },

        "businessName": "ROBERT BOSCH LIMITADA",

        "documentNumber": "45990181000189",

        "documentType": "CNPJ",

        "legalNature": "206-2 - Sociedade Empresária Limitada",

        "mainActivity": [

            {

                "code": "29.41-7-00",

                "description": "Fabricação de peças e acessórios para o sistema motor de veículos automotores"

            }

        ],

        "openingDate": "21/07/1966",

        "secondaryActivities": [

            {

                "code": "18.30-0-03",

                "description": "Reprodução de software em qualquer suporte"

            },

            {

                "code": "23.99-1-02",

                "description": "Fabricação de abrasivos"

            },

            {

                "code": "25.39-0-02",

                "description": "Serviços de tratamento e revestimento em metais"

            },

            {

                "code": "26.10-8-00",

                "description": "Fabricação de componentes eletrônicos"

            },

            {

                "code": "26.40-0-00",

                "description": "Fabricação de aparelhos de recepção, reprodução, gravação e amplificação de áudio e vídeo"

            },

            {

                "code": "26.51-5-00",

                "description": "Fabricação de aparelhos e equipamentos de medida, teste e controle"

            },

            {

                "code": "27.90-2-99",

                "description": "Fabricação de outros equipamentos e aparelhos elétricos não especificados anteriormente"

            },

            {

                "code": "28.21-6-01",

                "description": "Fabricação de fornos industriais, ap
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

    "message": "documentNumber invalid format."

}
```

---
