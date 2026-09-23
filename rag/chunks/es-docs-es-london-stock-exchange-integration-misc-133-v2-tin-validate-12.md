---
id: "es-docs-es-london-stock-exchange-integration-misc-133-v2-tin-validate-12"
title: "Otros — API pública Verifik — 133. /v2/tin/validate"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "133. /v2/tin/validate"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/usa/vehicle

## 133. /v2/tin/validate

**Ubicación en la colección:** v2 › /v2/tin/validate › /v2/tin/validate

**Qué hace (resumen):**

La API de verificación de Documento Nacional de Identidad (DNI) Argentino permite a los desarrolladores verificar la autenticidad de un documento de identidad argentino (Documento Nacional de Identidad, o DNI) al proporcionar el número de DNI. La API devuelve información como el nombre completo de la persona, el nombre y apellido por separado, y el número de DNI.

Esta información se puede utilizar para diversos fines, como verificar la identidad de un cliente o validar la información proporcionada por un usuario.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/tin/validate?msCode=ES&tinNumber=819128Y
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| msCode | ES |  |
| tinNumber | 819128Y |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/tin/validate?msCode=ES&tinNumber=819128Y" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "CC",

        "documentNumber": "00000000",

        "valid": true,

        "message": "Document images processed successfully."

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VLD1"

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

    "message": "Invalid or missing image payload."

}
```

---
