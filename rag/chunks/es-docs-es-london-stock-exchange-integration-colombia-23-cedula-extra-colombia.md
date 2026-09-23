---
id: "es-docs-es-london-stock-exchange-integration-colombia-23-cedula-extra-colombia"
title: "Colombia — API pública Verifik — 23. Cedula extra Colombia"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "23. Cedula extra Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 23. Cedula extra Colombia

[English version](/london-stock-exchange-integration/colombia/) · **Español** (esta página)

# Colombia

## 23. Cedula extra Colombia

**Ubicación en la colección:** v2 › co › cedula › extra › Cedula extra Colombia

**Qué hace (resumen):**

El endpoint "Información de Identificación del Ciudadano Colombiano con Datos Adicionales" te permite obtener información adicional sobre el documento de identificación de un ciudadano colombiano más allá de su información básica de identificación. Este endpoint proporciona datos como la fecha de nacimiento, género y si la persona está viva, entre otros.

Para utilizar este endpoint, deberás proporcionar el número de identificación y el tipo de documento de identificación del ciudadano colombiano. Tras una verificación exitosa, la respuesta contendrá no solo el nombre completo, primer nombre, apellido y número de identificación del ciudadano colombiano, sino también su fecha de nacimiento, género y otros datos relevantes.

Nota: Ten en cuenta que este endpoint está diseñado exclusivamente para documentos de identificación de ciudadanos colombianos. Para otros países y tipos de documentos de identificación, consulta la documentación correspondiente al endpoint apropiado.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=1121329663&date=16/07/2007
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Único valor permitido: CC. |
| documentNumber | 1121329663 |  |
| date | 16/07/2007 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=1121329663&date=16/07/2007" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "LAURA",

            "VANESSA",

            "ESCUDERO",

            "POVEDA"

        ],

        "dateOfBirth": "1989-07-05",

        "documentNumber": "1121329663",

        "documentType": "CC",

        "expeditionDate": "2007-07-16",

        "expeditionPlace": {

            "municipio": null,

            "departamento": null

        },

        "firstName": "LAURA VANESSA",

        "fullName": "LAURA VANESSA ESCUDERO POVEDA",

        "gender": "MUJER",

        "isAlive": true,

        "lastName": "ESCUDERO POVEDA"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:03 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "NEHJG"

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
