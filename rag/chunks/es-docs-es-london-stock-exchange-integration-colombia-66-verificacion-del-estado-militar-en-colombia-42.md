---
id: "es-docs-es-london-stock-exchange-integration-colombia-66-verificacion-del-estado-militar-en-colombia-42"
title: "Colombia — API pública Verifik — 66. Verificación del Estado Militar en Colombia"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "66. Verificación del Estado Militar en Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 66. Verificación del Estado Militar en Colombia

**Ubicación en la colección:** v2 › co › situacion-militar › Verificación del Estado Militar en Colombia

**Qué hace (resumen):**

El API de Verificación del Estado Militar en Colombia permite a los desarrolladores integrar la verificación del estado militar en sus aplicaciones. Con esta API, los usuarios pueden proporcionar un número de identificación nacional colombiano y su tipo, y recibir una respuesta que indique el estado militar actual de la persona, incluyendo su rango y la oficina militar de distrito.

Esta API puede ser útil para agencias gubernamentales, empleadores u cualquier organización que necesite verificar el estado militar de una persona en Colombia.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/situacion-militar?documentType=CC&documentNumber=1121329661
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetro permitido: CC, . |
| documentNumber | 1121329661 | (Required) Número de documento a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/situacion-militar?documentType=CC&documentNumber=1121329661" \
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

        "documentNumber": "1121329661",

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
