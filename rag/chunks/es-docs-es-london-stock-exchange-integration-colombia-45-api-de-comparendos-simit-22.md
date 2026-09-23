---
id: "es-docs-es-london-stock-exchange-integration-colombia-45-api-de-comparendos-simit-22"
title: "Colombia — API pública Verifik — 45. API de Comparendos SIMIT"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "45. API de Comparendos SIMIT"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 45. API de Comparendos SIMIT

**Ubicación en la colección:** v2 › co › simit › comparendos › API de Comparendos SIMIT

**Qué hace (resumen):**

Con este API, puedes obtener información sobre los comparendos de tráfico, incluyendo el estado, la fecha, la placa del vehículo, la ubicación y el tipo de infracción cometida. Estos datos pueden ser útiles para crear informes de análisis de tráfico, identificar patrones de violaciones de tráfico y monitorear el cumplimiento de los conductores con las leyes de tránsito en Colombia.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/simit/comparendos?documentType=CC&documentNumber=123456789
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, PA, CE, , RC,NIT. |
| documentNumber | 123456789 | (Required)  Número de documento a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/simit/comparendos?documentType=CC&documentNumber=123456789" \
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
