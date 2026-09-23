---
id: "es-docs-es-london-stock-exchange-integration-colombia-64-verificar-facturador-legal-en-la-dian-para-empresas-colombianas-40"
title: "Colombia — API pública Verifik — 64. Verificar Facturador Legal en la DIAN para Empresas Colombianas"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "64. Verificar Facturador Legal en la DIAN para Empresas Colombianas"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 64. Verificar Facturador Legal en la DIAN para Empresas Colombianas

**Ubicación en la colección:** v2 › co › company › dian › invoicer › Verificar Facturador Legal en la DIAN para Empresas Colombianas

**Qué hace (resumen):**

Esta API te permite verificar si una empresa está registrada en la DIAN (Dirección de Impuestos y Aduanas Nacionales) como facturador legal. Una respuesta exitosa indica que la empresa está registrada como tal.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/company/dian/invoicer?documentType=NIT&documentNumber=901708460
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIT | (Required) Parámetro válido: NIT |
| documentNumber | 901708460 | (Required) NIT de la empresa, sin espacios, puntos y sin Número de verificación. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/company/dian/invoicer?documentType=NIT&documentNumber=901708460" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "NIT",

        "documentNumber": "901708460",

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
