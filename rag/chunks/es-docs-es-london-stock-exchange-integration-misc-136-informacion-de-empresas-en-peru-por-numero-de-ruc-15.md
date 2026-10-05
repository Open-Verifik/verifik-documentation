---
id: "es-docs-es-london-stock-exchange-integration-misc-136-informacion-de-empresas-en-peru-por-numero-de-ruc-15"
title: "Otros — API pública Verifik — 136. Información de Empresas en Perú por Número de RUC"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "136. Información de Empresas en Perú por Número de RUC"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/usa/vehicle

## 136. Información de Empresas en Perú por Número de RUC

**Ubicación en la colección:** v3 › pe › empresa  v3 › Información de Empresas en Perú por Número de RUC

**Qué hace (resumen):**

Este API permite a los usuarios obtener información de empresas en Perú proporcionando el número de RUC (Registro Único de Contribuyentes). El API devuelve datos como el nombre de la empresa, dirección, estado tributario y más. La información se obtiene de fuentes oficiales y está certificada por Verifik.co. El API puede ser utilizado por empresas, investigadores o cualquier persona que necesite verificar el estado o información de una empresa en Perú.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v3/pe/company?documentType=RUC&documentNumber=20605980008
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentType | RUC | (Required) Tipo de documento. Valor permitido: RUC. |
| documentNumber | 20605980008 |  |
| documentNumber | 10725480615 |  |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v3/pe/company?documentType=RUC&documentNumber=20605980008" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "RUC",

        "documentNumber": "20605980008",

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
