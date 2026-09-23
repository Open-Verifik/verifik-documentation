---
id: "es-docs-es-london-stock-exchange-integration-misc-135-peruanos-v3-14"
title: "Otros — API pública Verifik — 135. Peruanos v3"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "135. Peruanos v3"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/usa/vehicle

## 135. Peruanos v3

**Ubicación en la colección:** v3 › pe › cedula › Peruanos v3

**Qué hace (resumen):**

El API de Verificación de Identificación de Ciudadanos Peruanos permite verificar la identidad de una persona en Perú mediante su número de DNI (Documento Nacional de Identidad). El API devuelve el nombre completo y otra información relacionada de la persona, junto con una firma para certificar la autenticidad de la respuesta.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=43451826
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | DNI |  |
| documentNumber | 43451826 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=43451826" \
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

        "documentNumber": "43451826",

        "documentType": "DNI",

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
