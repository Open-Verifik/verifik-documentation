---
id: "es-docs-es-london-stock-exchange-integration-colombia-28-informacion-de-ciudadano-colombiano-con-datos-adicionales-6"
title: "Colombia — API pública Verifik — 28. Información de Ciudadano Colombiano con Datos Adicionales"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "28. Información de Ciudadano Colombiano con Datos Adicionales"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 28. Información de Ciudadano Colombiano con Datos Adicionales

**Ubicación en la colección:** v2 › co › migracion › PPT › Información de Ciudadano Colombiano con Datos Adicionales

**Qué hace (resumen):**

El endpoint "Información de Identificación del Ciudadano Colombiano con Datos Adicionales" te permite obtener información adicional sobre el documento de identificación de un ciudadano colombiano más allá de su información básica de identificación. Este endpoint proporciona datos como la fecha de nacimiento, género y si la persona está viva, entre otros.

Para utilizar este endpoint, deberás proporcionar el número de identificación y el tipo de documento de identificación del ciudadano colombiano. Tras una verificación exitosa, la respuesta contendrá no solo el nombre completo, primer nombre, apellido y número de identificación del ciudadano colombiano, sino también su fecha de nacimiento, género y otros datos relevantes.

Nota: Ten en cuenta que este endpoint está diseñado exclusivamente para documentos de identificación de ciudadanos colombianos. Para otros países y tipos de documentos de identificación, consulta la documentación correspondiente al endpoint apropiado.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/foreigner-id/ppt?documentNumber=5519356&expeditionDate=01/12/2023
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 5519356 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |
| expeditionDate | 01/12/2023 | (Required) Fecha de expedición del documento. Formato válido: DD/MM/YYYY. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/foreigner-id/ppt?documentNumber=5519356&expeditionDate=01/12/2023" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "NORIS",

            "ESMERALDA",

            "RODRIGUEZ",

            "MEDINA"

        ],

        "documentNumber": "5519356",

        "documentType": "PPT",

        "expeditionDate": "2023-12-01T00:00:00.000Z",

        "expirationDate": "30/05/2031",

        "firstName": "NORIS ESMERALDA",

        "fullName": "NORIS ESMERALDA RODRIGUEZ MEDINA",

        "lastName": "RODRIGUEZ MEDINA",

        "status": "VIGENTE"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:09 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "ILQSK"

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
