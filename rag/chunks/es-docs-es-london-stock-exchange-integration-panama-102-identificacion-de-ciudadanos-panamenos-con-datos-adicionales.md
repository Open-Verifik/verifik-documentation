---
id: "es-docs-es-london-stock-exchange-integration-panama-102-identificacion-de-ciudadanos-panamenos-con-datos-adicionales"
title: "Panamá — API pública Verifik — 102. Identificación de Ciudadanos Panameños con Datos Adicionales"
sourcePath: "docs-es/london-stock-exchange-integration/panama.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "pa"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pa/cedula"
  - "/v2/pa/company"
  - "/v2/pa/vehiculo/placa"
sourceAnchor: "102. Identificación de Ciudadanos Panameños con Datos Adicionales"
slug: "/london-stock-exchange-integration/panama"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/panama"
---

# Panamá — API pública Verifik
**API path(s):** /v2/pa/cedula, /v2/pa/company, /v2/pa/vehiculo/placa

## 102. Identificación de Ciudadanos Panameños con Datos Adicionales

[English version](/london-stock-exchange-integration/panama/) · **Español** (esta página)

# Panamá

## 102. Identificación de Ciudadanos Panameños con Datos Adicionales

**Ubicación en la colección:** v2 › pa › cedula › Identificación de Ciudadanos Panameños con Datos Adicionales

**Qué hace (resumen):**

La API de Verifik.co para la información de identificación de ciudadanos panameños proporciona datos precisos y confiables para individuos en Panamá. Esta API ofrece detalles personales como nombre completo, género, correo electrónico, número de teléfono y fecha de nacimiento asociados con un número de documento CCPA proporcionado.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/pa/cedula?documentType=CCPA&documentNumber=9-718-196&dateOfBirth=25/06/1983
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CCPA | (Required) Tipo de documento. Parámetro permitido: CCPA. |
| documentNumber | 9-718-196 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |
| dateOfBirth | 25/06/1983 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/pa/cedula?documentType=CCPA&documentNumber=9-718-196&dateOfBirth=25/06/1983" \
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

        "documentNumber": "9-718-196",

        "documentType": "CCPA",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO",

        "dateOfBirth": "25/06/1983"

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
