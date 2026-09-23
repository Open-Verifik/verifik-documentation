---
id: "es-docs-es-london-stock-exchange-integration-canada-17-licencia-conductor-british-columbia-3"
title: "Canadá — API pública Verifik — 17. Licencia Conductor British Columbia"
sourcePath: "docs-es/london-stock-exchange-integration/canada.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ca"
  - "london-stock-exchange-integration"
endpoint: "/v2/ca/ontario/driver-license"
sourceAnchor: "17. Licencia Conductor British Columbia"
slug: "/london-stock-exchange-integration/canada"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/canada"
---

# Canadá — API pública Verifik
**API path(s):** /v2/ca/ontario/driver-license

## 17. Licencia Conductor British Columbia

**Ubicación en la colección:** v2 › ca › british-columbia › driver-license › Licencia Conductor British Columbia

**Qué hace (resumen):**

The British Columbia Driver License Verification API offers a straightforward method to verify the authenticity and validity of a driver's license in the province of British Columbia, Canada. By utilizing this API, you can quickly validate a driver's license based on the provided document number and last name.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=7793458&lastName=JIWA
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 7793458 | (Required) Driver's license to consult, all data must be entered exactly as found in this document, additionally keep in mind that it only applies to Quebec licenses, another license will fail for this service. |
| lastName | JIWA | (Required) Last name that appears in the Dribver License |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=7793458&lastName=JIWA" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "7793458",

        "lastName": "JIWA",

        "valid": true

    },

    "signature": {

        "dateTime": "April 9, 2026 2:56 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VLEVD"

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
