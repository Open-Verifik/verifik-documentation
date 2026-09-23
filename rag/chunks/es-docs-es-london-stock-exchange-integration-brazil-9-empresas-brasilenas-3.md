---
id: "es-docs-es-london-stock-exchange-integration-brazil-9-empresas-brasilenas-3"
title: "Brasil: API pública Verifik — 9. Empresas Brasileñas"
sourcePath: "docs-es/london-stock-exchange-integration/brazil.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "vehicle"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/br/background-check"
  - "/v2/br/cedula"
  - "/v2/br/company"
  - "/v2/br/public/cedula"
  - "/v2/br/public/vehicle"
  - "/v2/br/vehicle"
  - "/v2/br/vehicle/data-sheet-by-plate"
  - "/v2/vehicle/data-sheet"
sourceAnchor: "9. Empresas Brasileñas"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/brazil"
---

# Brasil: API pública Verifik
**API path(s):** /v2/br/background-check, /v2/br/cedula, /v2/br/company, /v2/br/public/cedula, /v2/br/public/vehicle, /v2/br/vehicle, /v2/br/vehicle/data-sheet-by-plate, /v2/vehicle/data-sheet

## 9. Empresas Brasileñas

**Ubicación en la colección:** v2 › br › company › Empresas Brasileñas

**Qué hace (resumen):**

La API de Información de Empresas Brasileñas proporciona información sobre empresas brasileñas, incluyendo su naturaleza jurídica, actividades principales y secundarias, capital social, accionistas, estado y más. La API devuelve respuestas en formato JSON que incluyen el nombre de la empresa, identificación tributaria, dirección, número de teléfono, correo electrónico y otros detalles. La información proviene de la base de datos oficial del gobierno brasileño y está certificada por Verifik.co.

Esta API es útil para empresas que deseen verificar información sobre posibles socios o clientes en Brasil, o para investigadores que deseen estudiar el panorama empresarial brasileño.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/br/company?documentType=CNPJ&documentNumber=45990181000189
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CNPJ | (Required) Tipo de documento. Valor permitido: CNPJ. |
| documentNumber | 45990181000189 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/br/company?documentType=CNPJ&documentNumber=45990181000189" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

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
