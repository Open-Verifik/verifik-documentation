---
id: "es-docs-es-london-stock-exchange-integration-colombia-75-personas-expuestas-politicamente-en-colombia-51"
title: "Colombia — API pública Verifik — 75. Personas Expuestas Políticamente en Colombia"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "75. Personas Expuestas Políticamente en Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 75. Personas Expuestas Políticamente en Colombia

**Ubicación en la colección:** v2 › co › politically-exposed-persons › Personas Expuestas Políticamente en Colombia

**Qué hace (resumen):**

La API de Verificación de Personas Expuestas Políticamente (PEP) en Colombia permite verificar si una persona está designada como una persona expuesta políticamente en Colombia.

Las PEP son individuos que ocupan o han ocupado cargos o funciones públicas destacadas y pueden representar un mayor riesgo de corrupción o lavado de dinero.

Esta API proporciona información como el nombre completo de la persona, número de documento, nombre de la entidad, cargo designado y fechas de desvinculación y vinculación. Ten en cuenta que este servicio solo está disponible para personas colombianas.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/politically-exposed-persons?documentType=CC&documentNumber=208079
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC |  |
| documentNumber | 208079 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/politically-exposed-persons?documentType=CC&documentNumber=208079" \
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

        "documentNumber": "208079",

        "documentType": "CC",

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
