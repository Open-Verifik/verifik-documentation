---
id: "es-docs-es-london-stock-exchange-integration-ecuador-90-cedula-ecuador"
title: "Ecuador — API pública Verifik — 90. Cedula Ecuador"
sourcePath: "docs-es/london-stock-exchange-integration/ecuador.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "ec"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/ec/cedula"
  - "/v2/ec/company"
  - "/v2/ec/vehiculo/placa"
  - "/v2/ec/vehiculo/placa/multas"
sourceAnchor: "90. Cedula Ecuador"
slug: "/london-stock-exchange-integration/ecuador"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/ecuador"
---

# Ecuador — API pública Verifik
**API path(s):** /v2/ec/cedula, /v2/ec/company, /v2/ec/vehiculo/placa, /v2/ec/vehiculo/placa/multas

## 90. Cedula Ecuador

[English version](/london-stock-exchange-integration/ecuador/) · **Español** (esta página)

# Ecuador

## 90. Cedula Ecuador

**Ubicación en la colección:** v2 › ec › cedula › Cedula Ecuador

**Qué hace (resumen):**

La API de Información de Identificación de Ciudadanos Ecuatorianos permite a los usuarios obtener información básica sobre una persona en función de su número de identificación ecuatoriano. Al proporcionar el tipo y número de documento como parámetros, la API devuelve el nombre completo de la persona, separando el nombre y apellido.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ec/cedula?documentType=CCEC&documentNumber=0102260098
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CCEC | (Required) Tipo de documento. Parámetro permitido: CCEC. |
| documentNumber | 0102260098 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ec/cedula?documentType=CCEC&documentNumber=0102260098" \
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

        "documentNumber": "0102260098",

        "documentType": "CCEC",

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
