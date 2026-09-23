---
id: "es-docs-es-london-stock-exchange-integration-chile-18-cedula-chilena"
title: "Chile — API pública Verifik — 18. Cedula Chilena"
sourcePath: "docs-es/london-stock-exchange-integration/chile.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/cedula?documenttype=run&documentnumber=18.562.530-3"
  - "/v2/cl/company?documenttype=rut&documentnumber=77398220"
  - "/v2/cl/driver-license"
  - "/v2/cl/driver-license?documentnumber=06230840"
  - "/v2/cl/taxpayer?documenttype=rut&documentnumber=263007905"
  - "/v2/cl/vehicle?plate=bb985"
sourceAnchor: "18. Cedula Chilena"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/chile"
---

# Chile — API pública Verifik
**API path(s):** /v2/cl/cedula, /v2/cl/cedula?documenttype=run&documentnumber=18.562.530-3, /v2/cl/company?documenttype=rut&documentnumber=77398220, /v2/cl/driver-license, /v2/cl/driver-license?documentnumber=06230840, /v2/cl/taxpayer?documenttype=rut&documentnumber=263007905, /v2/cl/vehicle?plate=bb985

## 18. Cedula Chilena

[English version](/london-stock-exchange-integration/chile/) · **Español** (esta página)

# Chile

## 18. Cedula Chilena

**Ubicación en la colección:** v2 › cl › cedula › Cedula Chilena

**Qué hace (resumen):**

Esta API le permite verificar la autenticidad de las cédulas de identidad chilenas (RUT). Simplemente ingrese el número de RUT y recibirá una respuesta con el nombre completo, primer nombre, apellido y arreglo de nombres del titular de la tarjeta, junto con la firma de verificación.

Esta API puede ser utilizada por empresas o particulares para garantizar la validez de las cédulas de identidad chilenas para diversos fines, como empleo, transacciones financieras o requisitos legales.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/cl/cedula?documentType=RUN&documentNumber=18.562.530-3
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | RUN |  |
| documentNumber | 18.562.530-3 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/cedula?documentType=RUN&documentNumber=18.562.530-3" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "VERONICA",

            "ANDREA",

            "BAEZ",

            "MALDINI"

        ],

        "documentNumber": "185625303",

        "documentType": "RUN",

        "firstName": "VERONICA ANDREA",

        "fullName": "VERONICA ANDREA BAEZ MALDINI",

        "lastName": "BAEZ MALDINI"

    },

    "signature": {

        "dateTime": "April 9, 2026 2:57 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "HN1W5"

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
