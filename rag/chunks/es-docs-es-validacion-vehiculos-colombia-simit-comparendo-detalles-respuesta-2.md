---
id: "es-docs-es-validacion-vehiculos-colombia-simit-comparendo-detalles-respuesta-2"
title: "SIMIT - Detalles de comparendo — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/colombia/simit-comparendo-detalles.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/simit/comparendo"
  - "/v2/co/simit/comparendos"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/colombia/simit-comparendo-detalles"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/simit-comparendo-detalles"
---

# SIMIT - Detalles de comparendo
**API path(s):** /v2/co/simit/comparendo, /v2/co/simit/comparendos

## Respuesta

```json
{
  "data": {
    "numeroComparendo": "2561200100010000000001",
    "idOrganismoTransito": "25612100",
    "documentType": "CC",
    "documentNumber": "10000001",
    "direccionComparendo": "CARRERA 43A CON CALLE 10 EL POBLADO",
    "infractorComparendo": "ANDRES ACOSTA",
    "tipoVehiculo": "AUTOMOVIL",
    "servicioVehiculo": "Particular"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "\"numeroComparendo\" is required"
}
```

### Notas

- Para **listar** todos los comparendos de un documento, use **`GET /v2/co/simit/comparendos`** ([SIMIT - Multas](/verifik-es/validacion-vehiculos/colombia/multas-simit)).
- **Sandbox:** `documentNumber` **`10000001`**–**`10000010`** con comparendo/organismo coincidentes; **`90040401`** → **404**.
- La **disponibilidad** del portal SIMIT y el manejo de **captcha** dependen del entorno.
