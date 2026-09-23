---
id: "es-docs-es-london-stock-exchange-integration-argentina-2-empresas-argentina-2"
title: "Argentina — API pública Verifik — 2. Empresas Argentina"
sourcePath: "docs-es/london-stock-exchange-integration/argentina.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ar"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ar/cedula?documenttype=dniar&documentnumber=33016244"
  - "/v2/ar/company?documenttype=cuit&documentnumber=30703088534"
  - "/v2/ar/vehicle?plate=aa123bb"
sourceAnchor: "2. Empresas Argentina"
slug: "/london-stock-exchange-integration/argentina"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/argentina"
---

# Argentina — API pública Verifik
**API path(s):** /v2/ar/cedula?documenttype=dniar&documentnumber=33016244, /v2/ar/company?documenttype=cuit&documentnumber=30703088534, /v2/ar/vehicle?plate=aa123bb

## 2. Empresas Argentina

**Ubicación en la colección:** v2 › ar › company › Empresas Argentina

**Qué hace (resumen):**

La API de CURP te permite verificar fácilmente la identidad de ciudadanos mexicanos a través de su número de CURP. Con esta API, puedes obtener información personal importante como el nombre completo, fecha de nacimiento, nacionalidad y documento probatorio asociado a un número de CURP específico.

Los datos devueltos también incluyen detalles sobre el lugar de registro y otra información relevante, lo que la convierte en una herramienta esencial para la verificación de identidad y la prevención de fraudes.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ar/company?documentType=CUIT&documentNumber=30703088534
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CUIT | (Required) Tipo de documento. Parámetro valido: CUIT. |
| documentNumber | 30703088534 | (Required) Documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ar/company?documentType=CUIT&documentNumber=30703088534" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "businessName": "MERCADOLIBRE S.R.L.",

        "contractDate": "15-07-1999",

        "documentNumber": "30703088534",

        "documentType": "CUIT",

        "economicActivities": {

            "mainActivity": [

                {

                    "code": "620900 (F-883)",

                    "description": "SERVICIOS DE INFORMÁTICA N.C.P.",

                    "startDate": "04/2015"

                }

            ],

            "secondaryActivity": [

                {

                    "code": "731009 (F-883)",

                    "description": "SERVICIOS DE PUBLICIDAD N.C.P.",

                    "startDate": "12/2014"

                },

                {

                    "code": "649999 (F-883)",

                    "description": "SERVICIOS DE FINANCIACIÓN Y ACTIVIDADES FINANCIERAS N.C.P.",

                    "startDate": "12/2014"

                },

                {

                    "code": "829900 (F-883)",

                    "description": "SERVICIOS EMPRESARIALES N.C.P.",

                    "startDate": "12/2014"

                },

                {

                    "code": "523090 (F-883)",

                    "description": "SERVICIOS DE GESTIÓN Y LOGÍSTICA PARA EL TRANSPORTE DE MERCADERÍAS N.C.P.",

                    "startDate": "08/2017"

                }

            ]

        },

        "legalForm": "S.R.L."

    },

    "signature": {

        "dateTime": "April 8, 2026 11:36 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "JES91"

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

    "message": "documentNumber invalid format for CUIT."

}
```

---
