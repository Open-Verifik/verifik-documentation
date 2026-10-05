---
id: "es-docs-es-london-stock-exchange-integration-colombia-49-api-de-verificacion-de-licencia-de-conducir-en-colombia-26"
title: "Colombia — API pública Verifik — 49. API de Verificación de Licencia de Conducir en Colombia"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "49. API de Verificación de Licencia de Conducir en Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 49. API de Verificación de Licencia de Conducir en Colombia

**Ubicación en la colección:** v2 › co › runt › conductor › API de Verificación de Licencia de Conducir en Colombia

**Qué hace (resumen):**

La API de Verificación de Licencia de Conducir proporciona información sobre los titulares de licencias de conducir en Colombia. Mediante esta API, puedes obtener información como el tipo y número de documento, nombre completo, fecha de vencimiento, estado y categoría de la licencia. También puedes verificar si la licencia está activa, suspendida o cancelada, además de obtener detalles sobre impuestos de tránsito y otra información relacionada.

Esta API es útil para organizaciones que necesitan verificar información de licencias de conducir para diversos propósitos, incluyendo seguros, empleo y otros requisitos regulatorios.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/runt/conductor?documentType=CC&documentNumber=53911355
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC |  |
| documentNumber | 53911355 | (Required) Número de documento del conductor, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/runt/conductor?documentType=CC&documentNumber=53911355" \
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

        "documentNumber": "53911355",

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
