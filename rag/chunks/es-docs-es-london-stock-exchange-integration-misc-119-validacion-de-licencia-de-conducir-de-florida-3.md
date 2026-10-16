---
id: "es-docs-es-london-stock-exchange-integration-misc-119-validacion-de-licencia-de-conducir-de-florida-3"
title: "Otros — API pública Verifik — 119. Validación de Licencia de Conducir de Florida"
sourcePath: "docs-es/london-stock-exchange-integration/misc.mdx"
locale: "es"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "119. Validación de Licencia de Conducir de Florida"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/verifik-es/london-stock-exchange-integration/misc"
---

# Otros — API pública Verifik
**API path(s):** /v2/usa/vehicle

## 119. Validación de Licencia de Conducir de Florida

**Ubicación en la colección:** v2 › usa › florida › driver-license › Validación de Licencia de Conducir de Florida

**Qué hace (resumen):**

La API de Validación de Licencia de Conducir de Florida permite a los desarrolladores validar de forma programática el estado, restricciones, endosos y designaciones de las licencias de conducir de Florida. La API acepta como entrada un número válido de licencia de conducir de Florida y devuelve una respuesta en formato JSON que contiene el estado de la licencia, fecha de vencimiento, restricciones, endosos y designaciones.

**Tipo de consulta:** `GET`

**Ejemplo de dirección completa** (con valores de ejemplo):

```
https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=S514-172-80-844-0
```

**Parámetros en la dirección (después del `?`):**

| Nombre | Valor de ejemplo | Notas |
| --- | --- | --- |
| documentNumber | S514-172-80-844-0 | (Required) Licencia de conduccion a consultar, se deben ingresar todos los datos excatamente igual como se encuentra en este documento, adicional tener en cuenta que solo aplica para licencias de Florida, una licencia de New York fallara para este servicio. |

**Cabeceras habituales:**

| Nombre | Valor de ejemplo |
| --- | --- |
| Accept | application/json |

**Ejemplo con la herramienta `curl` (para quien lo pida tu equipo técnico):**

```bash
curl -X GET "https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=S514-172-80-844-0" \
  -H "Accept: application/json"
```

**Ejemplos de respuesta que guarda Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "S514-172-80-844-0"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

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
