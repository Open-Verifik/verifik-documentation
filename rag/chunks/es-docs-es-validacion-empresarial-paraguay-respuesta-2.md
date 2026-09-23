---
id: "es-docs-es-validacion-empresarial-paraguay-respuesta-2"
title: "Verificación Empresarial Paraguaya — Respuesta"
sourcePath: "docs-es/validacion-empresarial/paraguay.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "py"
  - "validacion-empresarial"
endpoints:
  - "/v2/py/company"
  - "/v2/py/company?"
  - "/v2/py/company?documenttype=ruc&documentnumber=80033331"
sourceAnchor: "Respuesta"
---

# Verificación Empresarial Paraguaya
**API path(s):** /v2/py/company, /v2/py/company?, /v2/py/company?documenttype=ruc&documentnumber=80033331

## Respuesta

```json
{
  "data": {
    "businessName": "CONDOMINIO MANUEL ADOLFO FERREIRA BRUSQUETTI Y OTRO",
    "documentNumber": "80033331",
    "documentType": "RUC",
    "fullRUC": "80033331-4"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:32 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "NI85Y"
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
