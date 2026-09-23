---
id: "es-docs-es-validacion-empresarial-bolivia-respuesta-2"
title: "Verificación Empresarial Boliviana — Respuesta"
sourcePath: "docs-es/validacion-empresarial/bolivia.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "bo"
  - "validacion-empresarial"
endpoints:
  - "/v2/bo/company"
  - "/v2/bo/company?"
  - "/v2/bo/company?documentnumber=1234567"
sourceAnchor: "Respuesta"
---

# Verificación Empresarial Boliviana
**API path(s):** /v2/bo/company, /v2/bo/company?, /v2/bo/company?documentnumber=1234567

## Respuesta

```json
{
    "data": {
        "businessName": "INETYF AUTOMATIZACION",
        "dateLastState": "",
        "documentNumber": "5287278014",
        "documentType": "NIT",
        "status": "ACTIVO"
    },
    "signature": {
        "dateTime": "October 10, 2025 10:47 AM",
        "message": "Certified by Verifik.co"
    },
    "id": "80NJ4"
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
