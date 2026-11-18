---
id: "es-docs-es-london-stock-exchange-integration-misc-129-ofac-8"
title: "Otros — API pública Verifik — 129. OFAC"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "129. OFAC"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/usa/vehicle

## 129. OFAC

**Ubicación en la colección:** v2 › ofac › OFAC

**Qué hace (resumen):**

La API de OFAC proporciona una forma sencilla de verificar si una persona o entidad aparece en la lista de Individuos Especialmente Designados (SDN) y Personas Bloqueadas de la Oficina de Control de Activos Extranjeros (OFAC) del Departamento del Tesoro de los Estados Unidos.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/ofac?documentType=NIT&documentNumber=1121329661
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | NIT | (Required) Tipo de documento a consultar. Parámetros válidos: CC, NIT. |
| documentNumber | VILJ580411HSLLRN09 |  |
| documentNumber | 1121329661 |  |
| fullName | JUAN CARLOS VILLEGAS LOERA  |  |
| fullName | FIGUERA VALDEZ JOSE RAMON | 11448109 |
| documentNumber | 1057352 |  |
| fullName | FIGUERA VALDEZ  jose ramon |  |
| fullName | ANUAR DE JESUS HERNANDEZ GARCIA |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/ofac?documentType=NIT&documentNumber=1121329661" \
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

        "documentNumber": "1121329661",

        "documentType": "NIT",

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
