---
id: "es-docs-es-london-stock-exchange-integration-guatemala-95-cedula-guatemala"
title: "Guatemala — API pública Verifik — 95. Cedula Guatemala"
sourcePath: "docs-es/london-stock-exchange-integration/guatemala.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "gt"
  - "london-stock-exchange-integration"
endpoints:
  - "/v2/gt/cedula"
  - "/v2/gt/cedula/extra"
sourceAnchor: "95. Cedula Guatemala"
slug: "/london-stock-exchange-integration/guatemala"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/guatemala"
---

# Guatemala — API pública Verifik
**API path(s):** /v2/gt/cedula, /v2/gt/cedula/extra

## 95. Cedula Guatemala

[English version](/london-stock-exchange-integration/guatemala/) · **Español** (esta página)

# Guatemala

## 95. Cedula Guatemala

**Ubicación en la colección:** v2 › gt › cedula › Cedula Guatemala

**Qué hace (resumen):**

La API de verificación de identidad guatemalteca valida el CUI de un ciudadano contra registros oficiales del SAT. Debes enviar **`documentType`**, **`documentNumber`** y **`dateOfBirth`** (`DD/MM/YYYY`). La API devuelve el nombre completo del titular, nombre y apellidos por separado, y metadatos del documento.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/gt/cedula?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | CUI | Valor permitido: `CUI`. |
| documentNumber | 2222624190903 | Número de documento a consultar, sin espacios ni puntos. |
| dateOfBirth | 12/03/1984 | **(Obligatorio)** Fecha de nacimiento en formato `DD/MM/YYYY`. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |
| Authorization | Bearer \ |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/gt/cedula?documentType=CUI&documentNumber=2222624190903&dateOfBirth=12/03/1984" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer TU_TOKEN"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{
    "data": {
        "arrayName": [
            "ERICK",
            "ROBERTO",
            "RAMIREZ",
            "MORALES"
        ],
        "documentNumber": "2222624190903",
        "documentType": "CUI",
        "firstName": "ERICK ROBERTO",
        "fullName": "ERICK ROBERTO RAMIREZ MORALES",
        "lastName": "RAMIREZ MORALES"
    },
    "signature": {
        "dateTime": "January 16, 2024 3:44 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "GT001"
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
    "message": "missing dateOfBirth\n"
}
```

---
