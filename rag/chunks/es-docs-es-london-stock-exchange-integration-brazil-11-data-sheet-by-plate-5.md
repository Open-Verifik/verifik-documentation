---
id: "es-docs-es-london-stock-exchange-integration-brazil-11-data-sheet-by-plate-5"
title: "Brasil: API pública Verifik — 11. data sheet by plate"
sourcePath: "docs-es/london-stock-exchange-integration/brazil.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "br"
  - "london-stock-exchange-integration"
endpoint: "/v2/br/cedula"
sourceAnchor: "11. data sheet by plate"
slug: "/london-stock-exchange-integration/brazil"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/brazil"
---

# Brasil: API pública Verifik
**API path(s):** /v2/br/cedula

## 11. data sheet by plate

**Ubicación en la colección:** v2 › br › data sheet › data sheet by plate

**Qué hace (resumen):**

**Brasil**, **ficha técnica ampliada por placa**: devuelve un payload más completo que la consulta básica `v2/br/vehicle` cuando el producto está habilitado en tu cuenta.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/br/vehicle/data-sheet-by-plate?plate=JIZ5244
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| plate | JIZ5244 | (Requerido) Placa. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/br/vehicle/data-sheet-by-plate?plate=JIZ5244" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "plate": "JIZ5244",

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

## 12. Antecedentes  Brasileño

**Ubicación en la colección:** v2 › br › antecedentes › Antecedentes  Brasileño

**Qué hace (resumen):**

**Verificación de antecedentes** en **Brasil** por **CPF** y **fecha de nacimiento**. La respuesta incluye campos de identidad y, cuando el proveedor lo entrega, un **informe en PDF en base64**. No confundir con la validación liviana de identidad (`v2/br/cedula`).

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=019.166.586-01&dateOfBirth=17/02/2002
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CPF | (Required) Tipo de documento. Valor permitido: CPF. |
| documentNumber | 019.166.586-01 | (Required) Número de documento de la persona a consultar. |
| dateOfBirth | 17/02/2002 | (Required) Fecha de nacimiento de la persona a consultar, formato correcto: dd/mm/yyyy |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/br/background-check?documentType=CPF&documentNumber=019.166.586-01&dateOfBirth=17/02/2002" \
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

        "documentNumber": "019.166.586-01",

        "documentType": "CPF",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO",

        "dateOfBirth": "17/02/2002"

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
