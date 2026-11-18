---
id: "es-docs-es-validacion-empresarial-peru-respuesta-2"
title: "Verificación Empresarial Peruana v3 — Respuesta"
sourcePath: "docs-es/validacion-empresarial/peru.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "pe"
  - "validacion-empresarial"
sourceAnchor: "Respuesta"
---

# Verificación Empresarial Peruana v3

## Respuesta

```json
{
  "data": {
    "address": "AV. VICTOR ANDRES BELAUNDE NRO. 332 INT. 702 URB. EL ROSARIO - LIMA LIMA SAN ISIDRO",
    "businessName": "MERCADOLIBRE PERU S.R.L.",
    "conditionTaxpayer": "HABIDO",
    "district": "SAN ISIDRO",
    "documentNumber": "20605980008",
    "documentType": "RUC",
    "nameVia": "VICTOR ANDRES BELAUNDE",
    "province": "LIMA",
    "simpleaddress": "AV. VICTOR ANDRES BELAUNDE NRO. 332 INT. 702 URB. EL ROSARIO",
    "state": "LIMA",
    "stateTaxpayer": "ACTIVO",
    "zoneCode": "URB.",
    "zoneType": "EL ROSARIO"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:35 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "RLS8G"
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
  "message": "documentType must be one of: [RUC]"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```

### Notas

- Contacta al soporte para campos completos del dataset.
