---
id: "es-docs-es-check-list-crear-un-check-list-response-3"
title: "Crear una checklist — Response"
sourcePath: "docs-es/check-list/crear-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoint: "/v2/check-lists"
sourceAnchor: "Response"
slug: "/check-list/crear-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/crear-un-check-list"
---

# Crear una checklist
**API path(s):** /v2/check-lists

## Response

```json
{
    "data": {
        "_id": "6aa224c87034a338385c28c0",
        "client": "507f1f77bcf86cd799439013",
        "name": "KYC Colombia",
        "countries": ["Colombia"],
        "domains": [],
        "featureCodes": [],
        "status": "draft",
        "createdAt": "2026-09-10T03:32:00.000Z",
        "updatedAt": "2026-09-10T03:32:00.000Z"
    }
}
```

  
  

```json
{
    "message": "Client context required",
    "code": "Forbidden"
}
```

  
  

```json
{
    "message": "\"name\" is required",
    "code": "ValidationError"
}
```

  
  

```json
{
    "message": "check_list_invalid_feature",
    "code": "check_list_invalid_feature"
}
```

  
  

```json
{
    "message": "check_list_feature_country_mismatch",
    "code": "check_list_feature_country_mismatch"
}
```

### Notes

- `name` es el único campo obligatorio. Puedes crear una lista vacía y agregar `featureCodes` después.
- Los países se guardan como los envías (por ejemplo `Colombia`). No son códigos ISO.
- `status` no cambia el comportamiento del servidor. Las listas en borrador y activas funcionan igual.
- Valores de `domains` desconocidos fallan la validación. Permitidos: `people`, `vehicles`, `businesses`.
- Crear una lista no gasta créditos. Ejecutar un servicio guardado es una llamada normal al catálogo.
- No hay un endpoint para ejecutar la checklist. Ver [Check List](/verifik-es/check-list) y [SmartBatch](/verifik-es/smart-batch).
