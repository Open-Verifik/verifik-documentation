---
id: "es-docs-es-london-stock-exchange-integration-colombia-31-api-de-verificacion-de-abogados-9"
title: "Colombia — API pública Verifik — 31. API de Verificación de Abogados"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "31. API de Verificación de Abogados"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 31. API de Verificación de Abogados

**Ubicación en la colección:** v2 › co › rama › abogados › API de Verificación de Abogados

**Qué hace (resumen):**

La API de Verificación de Abogados proporciona una solución integral para verificar las credenciales profesionales de los abogados en Colombia. Este punto de acceso te permite validar el número y tipo de documento de un abogado y obtener información esencial sobre su estado profesional.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/rama/abogados?documentType=CC&documentNumber=7570624
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento. Parámetros válidos: CC, NIT, CE. |
| documentNumber | 7570624 | (Required) Número de documento de la persona de la cual se quiere buscar procesos judiciales. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/rama/abogados?documentType=CC&documentNumber=7570624" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "FABIAN",

            "ENRIQUE",

            "DAZA",

            "MORALES"

        ],

        "documentNumber": "7570624",

        "documentType": "CC",

        "firstName": "FABIAN ENRIQUE",

        "fullName": "FABIAN ENRIQUE DAZA MORALES",

        "lastName": "DAZA MORALES",

        "results": [

            {

                "contactId": "df541c14-ed72-e511-80f1-005056b16b17",

                "documentNumber": "7570624",

                "documentTypeId": "1",

                "documentTypeName": "Cédula de ciudadanía",

                "firstName": "FABIAN ENRIQUE",

                "lastName": "DAZA MORALES",

                "nonValidityReason": " - ",

                "numberOfRecords": "1",

                "personalEmail": "-",

                "statusName": "Vigente",

                "tarcarliceNumber": "152806"

            }

        ]

    },

    "signature": {

        "dateTime": "April 9, 2026 3:13 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "AJ6NP"

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
