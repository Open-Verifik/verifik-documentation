---
id: "es-docs-es-london-stock-exchange-integration-colombia-57-certificado-de-registraduria-34"
title: "Colombia — API pública Verifik — 57. Certificado de Registraduria"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "57. Certificado de Registraduria"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 57. Certificado de Registraduria

**Ubicación en la colección:** v2 › co › registraduría › certificado › Certificado de Registraduria

**Qué hace (resumen):**

El API Certificado de Registro proporciona una forma programática de verificar la validez de un documento de identidad colombiano y obtener el estado del certificado. Esta API utiliza el número de documento y la fecha para consultar la base de datos de la Registraduría Nacional del Estado Civil y devuelve una respuesta en formato JSON con el estado del certificado, cualquier notificación o excepción posible, y el archivo PDF del certificado codificado en base64.

Este API puede ser utilizado por instituciones, empresas o personas en Colombia que necesiten verificar la autenticidad de un documento de identidad colombiano o certificado.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/registraduria/certificado?documentNumber=112132966&date=16/07/2007
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 112132966 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |
| date | 16/07/2007 | (Required) Fecha de expedición de la cedula a consultar. Formato válido: DD/MM/YYYY |
| date | 12/05/1977 |  |
| documentNumber | 77006438 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/registraduria/certificado?documentNumber=112132966&date=16/07/2007" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "112132966",

        "date": "16/07/2007"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

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
