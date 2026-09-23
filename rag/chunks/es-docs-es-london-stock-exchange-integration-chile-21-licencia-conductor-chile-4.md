---
id: "es-docs-es-london-stock-exchange-integration-chile-21-licencia-conductor-chile-4"
title: "Chile — API pública Verifik — 21. Licencia Conductor  Chile"
sourcePath: "docs-es/london-stock-exchange-integration/chile.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "cl"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/company"
  - "/v2/cl/driver-license"
  - "/v2/cl/taxpayer"
  - "/v2/cl/vehicle"
sourceAnchor: "21. Licencia Conductor  Chile"
slug: "/london-stock-exchange-integration/chile"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/chile"
---

# Chile — API pública Verifik
**API path(s):** /v2/cl/cedula, /v2/cl/company, /v2/cl/driver-license, /v2/cl/taxpayer, /v2/cl/vehicle

## 21. Licencia Conductor  Chile

**Ubicación en la colección:** v2 › cl › driver-license › Licencia Conductor  Chile

**Qué hace (resumen):**

Esta API devuelve datos de la **licencia de conducir** chilena a partir del **número de licencia** (`documentNumber`), no es la consulta de cédula/RUN. Suele incluir **RUT**, **clase**, **restricciones**, **fechas de control**, **comuna** y **domicilio**, según disponibilidad en el registro—útil para **flotas**, **cumplimiento laboral** y validación de **habilitación para conducir**.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/cl/driver-license?documentNumber=06230840
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 06230840 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/cl/driver-license?documentNumber=06230840" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "RUT": "7.896.377-8",

        "address": "SAN ISIDRO 311",

        "class": "B",

        "controlDate": "31/10/2013",

        "documentNumber": "06230840",

        "lastControlDate": "31/10/2007",

        "lastName": "SOLIS PLAZA",

        "license": "CA-6230840",

        "municipality": "SANTIAGO",

        "names": "LUIS EMILIO",

        "procedure": ".",

        "restrictions": ".USAR LENTES O DE CONTACTO. "

    },

    "signature": {

        "dateTime": "April 9, 2026 3:01 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "AIXZB"

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

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---
