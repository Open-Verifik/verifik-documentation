---
id: "es-docs-es-london-stock-exchange-integration-misc-138-api-rues-completo-v3-17"
title: "Otros — API pública Verifik — 138. API RUES Completo V3"
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
sourceAnchor: "138. API RUES Completo V3"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/dea, /v2/europol, /v2/fbi, /v2/interpol, /v2/ip-lookup, /v2/ofac, /v2/tin/validate, /v2/usa/company, /v2/usa/florida/driver-license, /v2/usa/ssn, /v2/usa/vehicle, /v2/usa/vehicle-by-vin, /v3/co/ministerio-de-trabajo/certificados, /v3/co/rues, /v3/co/rues-complete, /v3/pe/cedula, /v3/pe/cedula/extra, /v3/pe/company

## 138. API RUES Completo V3

**Ubicación en la colección:** v3 › rues › API RUES Completo V3

**Qué hace (resumen):**

El API RUES proporciona una forma de buscar información sobre empresas registradas en la Cámara de Comercio de Colombia. Al enviar una solicitud con el NIT (Número de Identificación Tributaria) de la empresa, el API devolverá información como el nombre de la empresa, dirección, número de teléfono, estado, ciudad, actividad principal y categoría de la licencia.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v3/co/rues-complete?documentType=NIT&documentNumber=52993862&category=RNT
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIT |  |
| documentNumber | 52993862 |  |
| category | RNT |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v3/co/rues-complete?documentType=NIT&documentNumber=52993862&category=RNT" \
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

        "documentNumber": "52993862",

        "documentType": "NIT",

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
