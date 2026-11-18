---
id: "es-docs-es-london-stock-exchange-integration-bolivia-6-empresa-boliviana-3"
title: "Bolivia — API pública Verifik — 6. Empresa Boliviana"
sourcePath: "docs-es/london-stock-exchange-integration/bolivia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "bo"
  - "london-stock-exchange-integration"
endpoint: "/v2/bo/cedula"
sourceAnchor: "6. Empresa Boliviana"
slug: "/london-stock-exchange-integration/bolivia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/bolivia"
---

# Bolivia — API pública Verifik
**API path(s):** /v2/bo/cedula

## 6. Empresa Boliviana

**Ubicación en la colección:** v2 › bo › company › Empresa Boliviana

**Qué hace (resumen):**

La API de Identificación de Ciudadano Boliviano le permite obtener información básica sobre un ciudadano boliviano basada en su número de identificación nacional y fecha de nacimiento.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/bo/company?documentType=NIT&documentNumber=5287278014
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIT |  |
| documentNumber | 5287278014 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/bo/company?documentType=NIT&documentNumber=5287278014" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "NIT": "5287278014",

        "businessName": "JIMMY WILSON ORELLANA CALVI",

        "dateLastState": "04/03/2016",

        "documentNumber": "5287278014",

        "documentType": "NIT",

        "status": "ACTIVO"

    },

    "signature": {

        "dateTime": "April 9, 2026 2:51 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "11PT4"

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
