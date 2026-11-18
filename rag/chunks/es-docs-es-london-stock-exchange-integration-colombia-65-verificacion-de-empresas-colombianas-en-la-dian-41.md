---
id: "es-docs-es-london-stock-exchange-integration-colombia-65-verificacion-de-empresas-colombianas-en-la-dian-41"
title: "Colombia — API pública Verifik — 65. Verificación de Empresas Colombianas en la DIAN"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "65. Verificación de Empresas Colombianas en la DIAN"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 65. Verificación de Empresas Colombianas en la DIAN

**Ubicación en la colección:** v2 › co › company › dian › Verificación de Empresas Colombianas en la DIAN

**Qué hace (resumen):**

La API de Verificación de Empresas DIAN de Colombia te permite verificar el estado de registro e información de empresas colombianas registradas en la DIAN (Dirección de Impuestos y Aduanas Nacionales). Simplemente proporciona el NIT (Número de Identificación Tributaria) y el tipo de documento, y la API devolverá la fecha de registro, estado y nombre o razón social de la empresa.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/company/dian?documentType=NIT&documentNumber=80086615
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIT | (Required) Parámetro válido: NIT |
| documentNumber | 80086615 | (Required) NIT de la empresa, sin espacios, puntos y sin Número de verificación. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/company/dian?documentType=NIT&documentNumber=80086615" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "NIT",

        "documentNumber": "80086615",

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
