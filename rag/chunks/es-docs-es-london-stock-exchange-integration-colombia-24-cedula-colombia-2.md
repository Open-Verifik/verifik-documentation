---
id: "es-docs-es-london-stock-exchange-integration-colombia-24-cedula-colombia-2"
title: "Colombia — API pública Verifik — 24. Cedula Colombia"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "24. Cedula Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 24. Cedula Colombia

**Ubicación en la colección:** v2 › co › cedula › Cedula › Cedula Colombia

**Qué hace (resumen):**

El endpoint de Identificación del Ciudadano Colombiano permite obtener información sobre el documento de identificación de un ciudadano colombiano, como su nombre completo y número de identificación. Esto puede ser útil para una variedad de propósitos, como verificación de identidad o verificación de antecedentes.

Para utilizar este servicio, deberás proporcionar el número de identificación y el tipo de documento de identificación del ciudadano colombiano. Tras una verificación exitosa, la respuesta contendrá el nombre completo, nombres, apellidos y número de identificación del ciudadano colombiano.

**Nota:** Ten en cuenta que este servicio está diseñado exclusivamente para documentos de identificación de ciudadanos colombianos. Para otros países y tipos de documentos de identificación, consulta la documentación correspondiente al servicio apropiado.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/cedula?documentType=cc&documentNumber=1121329662
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | cc | (Required) Tipo de documento. Parámetro válido: CC, CE, PEP, PPT. |
| documentNumber | 1121329662 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/cedula?documentType=cc&documentNumber=1121329662" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "JULIO",

            "CESAR",

            "CABANA",

            "CONTRERAS"

        ],

        "documentNumber": "1121329662",

        "documentType": "CC",

        "firstName": "JULIO CESAR",

        "fullName": "JULIO CESAR CABANA CONTRERAS",

        "lastName": "CABANA CONTRERAS"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:05 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "TFBWA"

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
