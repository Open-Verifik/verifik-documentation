---
id: "es-docs-es-validacion-empresarial-canada-respuesta-2"
title: "Verificación Empresarial Canadiense — Respuesta"
sourcePath: "docs-es/validacion-empresarial/canada.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "ca"
  - "validacion-empresarial"
endpoints:
  - "/v2/ca/company"
  - "/v2/ca/company?"
  - "/v2/ca/company?business=bai%20heng%20packaging%20supplies%20inc&province=on"
sourceAnchor: "Respuesta"
---

# Verificación Empresarial Canadiense
**API path(s):** /v2/ca/company, /v2/ca/company?, /v2/ca/company?business=bai%20heng%20packaging%20supplies%20inc&province=on

## Respuesta

```json
{
    "data": {
        "business": "BAI HENG PACKAGING SUPPLIES INC",
        "businessNumber": "783439201",
        "businessType": "ONTARIO BUSINESS CORP.",
        "compayName": "BAI HENG PACKAGING SUPPLIES INC.",
        "province": "ON",
        "regOfficeCity": "Richmond Hill",
        "regOfficeProvince": "Ontario",
        "registryId": "2859292",
        "status": "Active",
        "statusDate": "2021-08-10"
    },
    "signature": {
        "dateTime": "October 10, 2025 4:19 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "1J9CJ"
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
