---
id: "es-docs-es-london-stock-exchange-integration-colombia-33-api-de-verificacion-de-abogados-11"
title: "Colombia — API pública Verifik — 33. API de Verificación de Abogados"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "33. API de Verificación de Abogados"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 33. API de Verificación de Abogados

**Ubicación en la colección:** v2 › co › rama › expedientes › API de Verificación de Abogados

**Qué hace (resumen):**

La API de Verificación de Abogados proporciona una solución integral para verificar las credenciales profesionales de los abogados en Colombia. Este punto de acceso te permite validar el número y tipo de documento de un abogado y obtener información esencial sobre su estado profesional.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/rama/juzgado/expedientes?documentType=CC&documentNumber=16452888&city=CALI
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, NIT, CE. |
| documentNumber | 16452888 | (Required) Número de documento de la persona de la cual se quiere buscar procesos judiciales. |
| city | CALI |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/juzgado/expedientes?documentType=CC&documentNumber=16452888&city=CALI" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "appeal": "00",

        "city": "CALI",

        "codeRoom": "04",

        "consOffice": "002",

        "corporation": "40",

        "court": "8021",

        "courtOfepms": "002",

        "documentNumber": "16452888",

        "documentType": "CC",

        "filingNumber": "76892400400220030002100",

        "municipality": "76892",

        "name": "MARCOS - HERNANDEZ",

        "receiptDate": "27/8/2010",

        "representative": "JOSE  ALBEIRO PARRA  PARRA",

        "year": "2003"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:14 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "YG6AF"

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
