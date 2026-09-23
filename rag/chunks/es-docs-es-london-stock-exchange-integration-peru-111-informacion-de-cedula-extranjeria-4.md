---
id: "es-docs-es-london-stock-exchange-integration-peru-111-informacion-de-cedula-extranjeria-4"
title: "Perú — API pública Verifik — 111. Información de Cedula Extranjeria"
sourcePath: "docs-es/london-stock-exchange-integration/peru.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "pe"
  - "london-stock-exchange-integration"
endpoint: "/v2/pe/vehiculo/placa"
sourceAnchor: "111. Información de Cedula Extranjeria"
slug: "/london-stock-exchange-integration/peru"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/peru"
---

# Perú — API pública Verifik
**API path(s):** /v2/pe/vehiculo/placa

## 111. Información de Cedula Extranjeria

**Ubicación en la colección:** v2 › pe › cedula › Cedula Extranjeria › Información de Cedula Extranjeria

**Qué hace (resumen):**

Este API permite a los usuarios obtener información detallada sobre las cédulas de identidad peruanas (DNI). El API devuelve una respuesta en formato JSON que incluye el tipo de documento, número de documento, nombre completo, primer nombre, apellido, dígito de verificación, fecha de nacimiento, fecha de expedición, fecha de vencimiento, fecha de fallecimiento (si corresponde), edad, género, estado civil, provincia, área, distrito de residencia, estado de donante, ubigeo, código postal, área de defunción (si corresponde), provincia de defunción (si corresponde) y distrito de defunción (si corresponde).

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005005393&dateOfBirth=16/08/1993
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | 005005393 | (Required) Número de documento de la persona a consultar, sin espacios ni puntos. |
| dateOfBirth | 16/08/1993 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005005393&dateOfBirth=16/08/1993" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "arrayName": [

            "CORDERO",

            "CAMPERO",

            "RENZO",

            "RENE"

        ],

        "dateOfBirth": "16/08/1993",

        "documentNumber": "005005393",

        "documentType": "DNI",

        "firstName": "RENZO RENE",

        "fullName": "RENZO RENE CORDERO CAMPERO",

        "lastName": "CORDERO CAMPERO"

    },

    "signature": {

        "dateTime": "April 10, 2026 4:10 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "IF43V"

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

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---
