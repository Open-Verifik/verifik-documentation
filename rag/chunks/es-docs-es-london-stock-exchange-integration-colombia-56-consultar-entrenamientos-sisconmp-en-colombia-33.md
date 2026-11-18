---
id: "es-docs-es-london-stock-exchange-integration-colombia-56-consultar-entrenamientos-sisconmp-en-colombia-33"
title: "Colombia — API pública Verifik — 56. Consultar Entrenamientos SISCONMP en Colombia"
sourcePath: "docs-es/london-stock-exchange-integration/colombia.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "56. Consultar Entrenamientos SISCONMP en Colombia"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/colombia"
---

# Colombia — API pública Verifik
**API path(s):** /v2/co/cedula/extra

## 56. Consultar Entrenamientos SISCONMP en Colombia

**Ubicación en la colección:** v2 › co › sisconmp › trainings › Consultar Entrenamientos SISCONMP en Colombia

**Qué hace (resumen):**

Esta API te permite consultar los entrenamientos registrados en el SISCONMP (Sistema de Control y Monitoreo de Personal) en Colombia. Simplemente proporciona el número y tipo de documento del participante para obtener información detallada sobre el entrenamiento realizado. La respuesta incluirá datos como el número de documento, tipo de documento, nombres y apellidos del participante, nombre de la institución educativa, nombre del entrenamiento, fechas de expedición y vencimiento, estado de la licencia, entre otros detalles relevantes. 

Utiliza esta API para obtener información actualizada y verificada sobre los entrenamientos realizados en Colombia a través del SISCONMP.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/co/sisconmp/trainings?documentType=CC&documentNumber=3599676
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CC | (Required) Tipo de documento: Valores permitidos son: CC, , CE, PA, RC. |
| documentNumber | 3599676 | 79324123 |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/co/sisconmp/trainings?documentType=CC&documentNumber=3599676" \
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

        "documentNumber": "3599676",

        "documentType": "CC",

        "firstName": "NOMBRE SEGUNDO",

        "fullName": "NOMBRE SEGUNDO APELLIDO",

        "lastName": "APELLIDO"

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
