---
id: "es-docs-es-london-stock-exchange-integration-colombia-48-api-de-resoluciones-simit-25"
title: "Colombia — API pública Verifik — 48. API de Resoluciones SIMIT"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "48. API de Resoluciones SIMIT"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 48. API de Resoluciones SIMIT

**Ubicación en la colección:** v2 › co › simit › resoluciones › API de Resoluciones SIMIT

**Qué hace (resumen):**

La API de Resoluciones SIMIT brinda acceso a información sobre las resoluciones de infracciones de tráfico para una persona o empresa específica. Esta API devuelve datos como el nombre del infractor, el estado de la resolución, la fecha de la resolución y el monto adeudado. La API está impulsada por Verifik.co y se actualiza regularmente para garantizar la precisión de los datos.

Los desarrolladores pueden utilizar esta API para construir aplicaciones que ayuden a las personas a realizar un seguimiento de sus infracciones de tráfico y multas.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/simit/resoluciones?documentType=CC&documentNumber=123456789
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, PA, CE, , RC, NIT. |
| documentNumber | 123456789 | (Required)  Número de documento a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/resoluciones?documentType=CC&documentNumber=123456789" \
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

        "documentNumber": "123456789",

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
