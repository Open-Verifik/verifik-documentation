---
id: "es-docs-es-london-stock-exchange-integration-canada-16-empresas-canada-2"
title: "Canadá — API pública Verifik — 16. Empresas Canada"
sourcePath: "docs-es/london-stock-exchange-integration/canada.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ca"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ca/british-columbia/driver-license?documentnumber=7793458&lastname=jiwa"
  - "/v2/ca/company?business=bai"
  - "/v2/ca/ontario/driver-license?documentnumber=s62912794485721"
sourceAnchor: "16. Empresas Canada"
slug: "/london-stock-exchange-integration/canada"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/canada"
---

# Canadá — API pública Verifik
**API path(s):** /v2/ca/british-columbia/driver-license?documentnumber=7793458&lastname=jiwa, /v2/ca/company?business=bai, /v2/ca/ontario/driver-license?documentnumber=s62912794485721

## 16. Empresas Canada

**Ubicación en la colección:** v2 › ca › company › Empresas Canada

**Qué hace (resumen):**

The Ontario Driver's License API allows you to quickly obtain essential information about a driver's license issued in the province of Ontario, Canada. By providing the document number, you can access details such as the license status and the associated verification number.

Use this API to validate and verify the authenticity of Ontario driver's licenses efficiently. Whether you need to confirm the validity of a driver's license for identification or regulatory purposes, this API provides accurate and up-to-date license information.

Integrate this API seamlessly into your systems to enhance your verification processes and maintain compliance with Ontario's driver's license requirements. Empower your applications with the capability to verify Ontario driver's licenses with ease.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ca/company?business=BAI HENG PACKAGING SUPPLIES INC&province=ON
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| business | BAI HENG PACKAGING SUPPLIES INC |  |
| province | ON |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ca/company?business=BAI HENG PACKAGING SUPPLIES INC&province=ON" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "business": "BAI HENG PACKAGING SUPPLIES INC",

        "businessNumber": "783439201",

        "businessType": "ONTARIO BUSINESS CORP.",

        "compayName": "BAI HENG PACKAGING SUPPLIES INC.",

        "province": "ON",

        "regOfficeCity": "Richmond Hill",

        "regOfficeProvince": "Ontario",

        "registryId": "2859292",

        "status": "Active",

        "statusDate": "2021-08-10"

    },

    "signature": {

        "dateTime": "April 9, 2026 2:56 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "M38Z1"

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

    "message": "documentNumber invalid format."

}
```

---
