---
id: "es-docs-es-london-stock-exchange-integration-colombia-83-rethus-medicos-colombiano-57"
title: "Colombia — API pública Verifik — 83. RETHUS  Medicos Colombiano"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "83. RETHUS  Medicos Colombiano"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 83. RETHUS  Medicos Colombiano

**Ubicación en la colección:** v2 › co › rethus › RETHUS  Medicos Colombiano

**Qué hace (resumen):**

Esta API te permite verificar la autenticidad de una cédula colombiana (ID) y obtener información de la base de datos del Registro Único Nacional del Talento Humano en Salud (RETHUS). Con el tipo y número de documento proporcionados, se obtiene el nombre completo, estado RETHUS y datos académicos y de SSO si están disponibles. Los datos del RETHUS incluyen información sobre los títulos académicos del profesional de la salud y la afiliación a la Seguridad Social, incluyendo beneficios y modalidades.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/cedula/rethus?documentType=CC&documentNumber=1032386359
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetro válido: CC. |
| documentNumber | 1032386359 | 1032386359 |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/cedula/rethus?documentType=CC&documentNumber=1032386359" \
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

        "documentNumber": "1032386359",

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
