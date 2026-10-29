---
id: "es-docs-es-london-stock-exchange-integration-misc-120-verificacion-de-ssn-numero-de-seguro-social-4"
title: "Otros — API pública Verifik — 120. Verificación de SSN (Número de Seguro Social)"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "120. Verificación de SSN (Número de Seguro Social)"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/usa/vehicle

## 120. Verificación de SSN (Número de Seguro Social)

**Ubicación en la colección:** v2 › usa › ssn › Verificación de SSN (Número de Seguro Social)

**Qué hace (resumen):**

La API de Verificación de SSN (Número de Seguro Social) es una herramienta poderosa para verificar los Números de Seguro Social emitidos en los Estados Unidos. Esta API se puede utilizar para validar rápidamente el estado emisor y el primer año de emisión de un SSN. Devuelve una respuesta en formato JSON que incluye el primer año en que se emitió el SSN, el estado emisor, el propio SSN y si es válido o no.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/usa/ssn?documentNumber=769-82-2324
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 769-82-2324 | (Required) SSN a consultar, se debe escribir tal cual y como se encuentra en este documento. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/usa/ssn?documentNumber=769-82-2324" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "769-82-2324"

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
