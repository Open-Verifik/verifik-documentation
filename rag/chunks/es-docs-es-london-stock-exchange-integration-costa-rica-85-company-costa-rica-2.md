---
id: "es-docs-es-london-stock-exchange-integration-costa-rica-85-company-costa-rica-2"
title: "Costa Rica — API pública Verifik — 85. company Costa Rica"
sourcePath: "docs-es/london-stock-exchange-integration/costa-rica.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "cr"
  - "london-stock-exchange-integration"
endpoint: "/v2/cr/cedula"
sourceAnchor: "85. company Costa Rica"
slug: "/london-stock-exchange-integration/costa-rica"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/costa-rica"
---

# Costa Rica — API pública Verifik
**API path(s):** /v2/cr/cedula

## 85. company Costa Rica

**Ubicación en la colección:** v2 › cr › company › company Costa Rica

**Qué hace (resumen):**

Esta API le permite verificar la autenticidad de una Cédula de Identidad Nacional costarricense al proporcionar el número de documento. La respuesta incluye el nombre completo del titular de la tarjeta, así como sus nombres y apellidos por separado.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/cr/company?documentType=NITE&documentNumber=3101122876
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NITE | (Required) Tipo de documento. Parametro permitido: CCCR. |
| documentNumber | 3101122876 | (Required) Número de documento a consultar, sin espacios ni puntos. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/cr/company?documentType=NITE&documentNumber=3101122876" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "NITE",

        "documentNumber": "3101122876",

        "legalName": "EMPRESA EJEMPLO SA",

        "status": "ACTIVO"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "CMPY1"

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

    "message": "documentNumber invalid format."

}
```

---
