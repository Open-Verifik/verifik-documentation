---
id: "es-docs-es-london-stock-exchange-integration-misc-139-api-de-elegibilidad-para-trabajos-de-altura-18"
title: "Otros — API pública Verifik — 139. API de Elegibilidad para Trabajos de Altura"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "139. API de Elegibilidad para Trabajos de Altura"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/usa/vehicle

## 139. API de Elegibilidad para Trabajos de Altura

**Ubicación en la colección:** v3 › ministerio-de-trabajo › certificados › API de Elegibilidad para Trabajos de Altura

**Qué hace (resumen):**

La API de Elegibilidad para Trabajos de Altura te permite verificar si un ciudadano es elegible para trabajar en empleos que requieren estar en áreas de alta altitud. Esta API devuelve una lista de cursos que el ciudadano ha realizado relacionados con el trabajo en áreas de alta altitud, así como las instituciones que proporcionaron dichos cursos.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados?documentType=CC&documentNumber=1057582023
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, , CE. |
| documentNumber | 1057582023 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados?documentType=CC&documentNumber=1057582023" \
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

        "documentNumber": "1057582023",

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
