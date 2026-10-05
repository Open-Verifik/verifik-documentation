---
id: "es-docs-es-london-stock-exchange-integration-costa-rica-86-placas-costarica-3"
title: "Costa Rica — API pública Verifik — 86. PLACAS COSTARICA"
sourcePath: "docs-es/london-stock-exchange-integration/costa-rica.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "cr"
  - "london-stock-exchange-integration"
endpoint: "/v2/cr/cedula"
sourceAnchor: "86. PLACAS COSTARICA"
slug: "/london-stock-exchange-integration/costa-rica"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/costa-rica"
---

# Costa Rica — API pública Verifik
**API path(s):** /v2/cr/cedula

## 86. PLACAS COSTARICA

**Ubicación en la colección:** v2 › cr › Vehiculos › PLACAS COSTARICA

**Qué hace (resumen):**

Esta API le permite verificar la autenticidad de una Cédula de Identidad Nacional costarricense al proporcionar el número de documento. La respuesta incluye el nombre completo del titular de la tarjeta, así como sus nombres y apellidos por separado.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/cr/vehicle?plate=123456
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | 123456 | 221242  123456 |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/cr/vehicle?plate=123456" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "123456",

        "brand": "MAKE",

        "model": "MODEL",

        "year": "2020",

        "vehicleType": "SEDAN"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VHCL1"

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

    "message": "plate format invalid."

}
```

---
