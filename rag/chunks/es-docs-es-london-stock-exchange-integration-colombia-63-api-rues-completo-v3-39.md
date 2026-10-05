---
id: "es-docs-es-london-stock-exchange-integration-colombia-63-api-rues-completo-v3-39"
title: "Colombia — API pública Verifik — 63. API RUES Completo V3"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "63. API RUES Completo V3"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 63. API RUES Completo V3

**Ubicación en la colección:** v2 › co › rues › API RUES Completo V3

**Qué hace (resumen):**

El API RUES proporciona una forma de buscar información sobre empresas registradas en la Cámara de Comercio de Colombia. Al enviar una solicitud con el NIT (Número de Identificación Tributaria) de la empresa, el API devolverá información como el nombre de la empresa, dirección, número de teléfono, estado, ciudad, actividad principal y categoría de la licencia.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v3/co/rues-complete?documentType=NIT&documentNumber=900265177&category=RM
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIT |  |
| documentNumber | 900265177 |  |
| category | RM |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v3/co/rues-complete?documentType=NIT&documentNumber=900265177&category=RM" \
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

        "documentNumber": "900265177",

        "documentType": "NIT",

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
