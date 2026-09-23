---
id: "es-docs-es-london-stock-exchange-integration-colombia-67-afiliaciones-colombianas-43"
title: "Colombia — API pública Verifik — 67. Afiliaciones Colombianas"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "67. Afiliaciones Colombianas"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 67. Afiliaciones Colombianas

**Ubicación en la colección:** v2 › co › afiliaciones › Afiliaciones Colombianas

**Qué hace (resumen):**

La API Verificar Afiliaciones Colombianas proporcionada por Verifik.co permite a los usuarios obtener información relacionada con las afiliaciones de una persona a diversas entidades en Colombia.

Esta API recibe parámetros como el tipo de documento, el número de documento y la fecha, y devuelve una respuesta en formato JSON que contiene datos sobre la información personal de la persona, sus afiliaciones a EPS (proveedor de servicios de salud), ARL (seguro de riesgos laborales), AP (fondo de pensiones), caja de compensación y cesantías (fondo de desempleo).

Esta API es especialmente útil para empresas y organizaciones que necesitan verificar las afiliaciones de una persona en Colombia para diversos fines, como empleo o elegibilidad para beneficios.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/afiliaciones?documentType=CC&documentNumber=1121329662&date=16/07/2007
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, PA, CE, PEP, . |
| documentNumber | 1121329662 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |
| date | 16/07/2007 | (Required) Fecha de expedición del documento, se debe ingresar de la siguiente manera: DD/MM/YYYY. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/afiliaciones?documentType=CC&documentNumber=1121329662&date=16/07/2007" \
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

        "documentNumber": "1121329662",

        "documentType": "CC",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO",

        "date": "16/07/2007"

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
