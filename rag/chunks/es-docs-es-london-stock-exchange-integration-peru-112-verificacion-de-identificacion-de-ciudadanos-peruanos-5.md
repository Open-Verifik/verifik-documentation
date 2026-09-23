---
id: "es-docs-es-london-stock-exchange-integration-peru-112-verificacion-de-identificacion-de-ciudadanos-peruanos-5"
title: "Perú — API pública Verifik — 112. Verificación de Identificación de Ciudadanos Peruanos"
sourcePath: "docs-es/london-stock-exchange-integration/peru.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/pe/cedula"
  - "/v2/pe/cedula/extra"
  - "/v2/pe/empresa"
  - "/v2/pe/foreigner-id/ce"
  - "/v2/pe/vehiculo/placa"
  - "/v2/pe/vehiculo/soat"
sourceAnchor: "112. Verificación de Identificación de Ciudadanos Peruanos"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/peru"
---

# Perú — API pública Verifik
**API path(s):** /v2/pe/cedula, /v2/pe/cedula/extra, /v2/pe/empresa, /v2/pe/foreigner-id/ce, /v2/pe/vehiculo/placa, /v2/pe/vehiculo/soat

## 112. Verificación de Identificación de Ciudadanos Peruanos

**Ubicación en la colección:** v2 › pe › cedula › Verificación de Identificación de Ciudadanos Peruanos

**Qué hace (resumen):**

El API de Verificación de Identificación de Ciudadanos Peruanos permite verificar la identidad de una persona en Perú mediante su número de DNI (Documento Nacional de Identidad). El API devuelve el nombre completo y otra información relacionada de la persona, junto con una firma para certificar la autenticidad de la respuesta.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/pe/cedula?documentType=DNI&documentNumber=01028795
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | DNI |  |
| documentNumber | 01028795 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/cedula?documentType=DNI&documentNumber=01028795" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "MANUEL",

            "FELICIANO",

            "MERLO",

            "ROMERO"

        ],

        "documentNumber": "01028795",

        "documentType": "DNI",

        "firstName": "MANUEL FELICIANO",

        "fullName": "MANUEL FELICIANO MERLO ROMERO",

        "lastName": "MERLO ROMERO",

        "maternalLastName": "ROMERO",

        "paternalLastName": "MERLO"

    },

    "signature": {

        "dateTime": "April 10, 2026 4:54 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "5MNYA"

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
