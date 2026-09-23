---
id: "es-docs-es-london-stock-exchange-integration-colombia-32-api-de-verificacion-de-vigencia-abogados-10"
title: "Colombia — API pública Verifik — 32. API de Verificación de vigencia  Abogados"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "32. API de Verificación de vigencia  Abogados"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 32. API de Verificación de vigencia  Abogados

**Ubicación en la colección:** v2 › co › rama › abogados › API de Verificación de vigencia  Abogados

**Qué hace (resumen):**

La API de Verificación de Abogados proporciona una solución integral para verificar las credenciales profesionales de los abogados en Colombia. Este punto de acceso te permite validar el número y tipo de documento de un abogado y obtener información esencial sobre su estado profesional.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=72257968&quality=ABG
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, NIT, CE. |
| documentNumber | 72257968 | (Required) Número de documento de la persona de la cual se quiere buscar procesos judiciales. |
| quality | ABG |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/certificado/vigencia?documentType=CC&documentNumber=72257968&quality=ABG" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "certificado": "",

        "documentNumber": "72257968",

        "documentType": "CC",

        "encalidad": "Abogado",

        "estado": "Vigente",

        "fechaCreacion": "02/06/2009",

        "fechaExpedicion": "2009/06/02",

        "idHojaDeVida": "9d36050d-2e73-e511-80f1-005056b16b17",

        "motivoNoVigencia": " - ",

        "numeroTarCarLice": "180331",

        "observacionesPenaAccesoria": null,

        "quality": "ABG"

    },

    "signature": {

        "dateTime": "April 9, 2026 3:14 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "LA1NG"

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
