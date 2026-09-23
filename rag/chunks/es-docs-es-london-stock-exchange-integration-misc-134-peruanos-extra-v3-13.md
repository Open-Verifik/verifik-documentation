---
id: "es-docs-es-london-stock-exchange-integration-misc-134-peruanos-extra-v3-13"
title: "Otros — API pública Verifik — 134. Peruanos  extra v3"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "dea"
  - "europol"
  - "fbi"
  - "interpol"
  - "ip-lookup"
  - "ofac"
  - "tin"
  - "usa"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/dea"
  - "/v2/europol"
  - "/v2/fbi"
  - "/v2/interpol"
  - "/v2/ip-lookup"
  - "/v2/ofac"
  - "/v2/tin/validate"
  - "/v2/usa/company"
  - "/v2/usa/florida/driver-license"
  - "/v2/usa/ssn"
  - "/v2/usa/vehicle"
  - "/v2/usa/vehicle-by-vin"
  - "/v3/co/ministerio-de-trabajo/certificados"
  - "/v3/co/rues"
  - "/v3/co/rues-complete"
  - "/v3/pe/cedula"
  - "/v3/pe/cedula/extra"
  - "/v3/pe/company"
sourceAnchor: "134. Peruanos  extra v3"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/dea, /v2/europol, /v2/fbi, /v2/interpol, /v2/ip-lookup, /v2/ofac, /v2/tin/validate, /v2/usa/company, /v2/usa/florida/driver-license, /v2/usa/ssn, /v2/usa/vehicle, /v2/usa/vehicle-by-vin, /v3/co/ministerio-de-trabajo/certificados, /v3/co/rues, /v3/co/rues-complete, /v3/pe/cedula, /v3/pe/cedula/extra, /v3/pe/company

## 134. Peruanos  extra v3

**Ubicación en la colección:** v3 › pe › cedula › extra › Peruanos  extra v3

**Qué hace (resumen):**

Este API permite a los usuarios obtener información detallada sobre las cédulas de identidad peruanas (DNI). El API devuelve una respuesta en formato JSON que incluye el tipo de documento, número de documento, nombre completo, primer nombre, apellido, dígito de verificación, fecha de nacimiento, fecha de expedición, fecha de vencimiento, fecha de fallecimiento (si corresponde), edad, género, estado civil, provincia, área, distrito de residencia, estado de donante, ubigeo, código postal, área de defunción (si corresponde), provincia de defunción (si corresponde) y distrito de defunción (si corresponde).

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=43451826
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | DNI | (Required) Tipo de documento. Parámetro válido: DNI. |
| documentNumber | 43451826 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=43451826" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "APELLIDO",

            "NOMBRE",

            "SEGUNDO"

        ],

        "documentNumber": "43451826",

        "documentType": "DNI",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "IDNT1"

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
