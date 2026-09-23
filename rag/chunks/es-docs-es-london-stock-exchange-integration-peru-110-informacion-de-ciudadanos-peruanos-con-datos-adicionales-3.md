---
id: "es-docs-es-london-stock-exchange-integration-peru-110-informacion-de-ciudadanos-peruanos-con-datos-adicionales-3"
title: "Perú — API pública Verifik — 110. Información de Ciudadanos Peruanos con Datos Adicionales"
sourcePath: "docs-es/london-stock-exchange-integration/peru.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pe/cedula"
  - "/v2/pe/cedula/extra"
  - "/v2/pe/empresa"
  - "/v2/pe/foreigner-id/ce"
  - "/v2/pe/vehiculo/placa"
  - "/v2/pe/vehiculo/soat"
sourceAnchor: "110. Información de Ciudadanos Peruanos con Datos Adicionales"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/peru"
---

# Perú — API pública Verifik
**API path(s):** /v2/pe/cedula, /v2/pe/cedula/extra, /v2/pe/empresa, /v2/pe/foreigner-id/ce, /v2/pe/vehiculo/placa, /v2/pe/vehiculo/soat

## 110. Información de Ciudadanos Peruanos con Datos Adicionales

**Ubicación en la colección:** v2 › pe › cedula › extra › Información de Ciudadanos Peruanos con Datos Adicionales

**Qué hace (resumen):**

Este API permite a los usuarios obtener información detallada sobre las cédulas de identidad peruanas (DNI). El API devuelve una respuesta en formato JSON que incluye el tipo de documento, número de documento, nombre completo, primer nombre, apellido, dígito de verificación, fecha de nacimiento, fecha de expedición, fecha de vencimiento, fecha de fallecimiento (si corresponde), edad, género, estado civil, provincia, área, distrito de residencia, estado de donante, ubigeo, código postal, área de defunción (si corresponde), provincia de defunción (si corresponde) y distrito de defunción (si corresponde).

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/pe/cedula/extra?documentType=DNI&documentNumber=70904000
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | DNI |  |
| documentNumber | 70904000 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |
| source | 5 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/cedula/extra?documentType=DNI&documentNumber=70904000" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "age": "22",

        "area": "-",

        "arrayName": [

            "JOAQUIN",

            "ISMAEL",

            "PURUGUAY",

            "TORRES"

        ],

        "civilStatus": "not_available",

        "dateOfBirth": "27-02-2004",

        "dateOfDeath": null,

        "documentNumber": "70904000",

        "documentType": "DNI",

        "donor": null,

        "expeditionDate": "22-09-2025",

        "expirationDate": "22-09-2035",

        "firstName": "JOAQUIN ISMAEL",

        "fullName": "JOAQUIN ISMAEL PURUGUAY TORRES",

        "gender": "HOMBRE",

        "paternalLastName": "PURUGUAY",

        "maternalLastName": "TORRES",

        "homeDistrict": "",

        "lastName": "PURUGUAY TORRES",

        "postalCode": "-",

        "province": "-",

        "ubigeous": "not_available",

        "verificationDigit": "not_available"

    },

    "signature": {

        "dateTime": "April 10, 2026 4:04 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "S0TWW"

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
