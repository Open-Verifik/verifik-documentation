---
id: "es-docs-es-check-list-eliminar-un-check-list-response-2"
title: "Eliminar una checklist — Response"
sourcePath: "docs-es/check-list/eliminar-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/{id}"
sourceAnchor: "Response"
slug: "/check-list/eliminar-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/eliminar-un-check-list"
---

# Eliminar una checklist
**API path(s):** /v2/check-lists, /v2/check-lists/{id}

## Response

```json
{
    "data": {
        "_id": "6aa224c87034a338385c28c0",
        "client": "507f1f77bcf86cd799439013",
        "name": "KYC Colombia",
        "countries": ["Colombia", "Chile"],
        "domains": ["people"],
        "featureCodes": ["co-cedula"],
        "status": "draft",
        "createdAt": "2026-09-10T03:32:00.000Z",
        "updatedAt": "2026-09-10T03:33:00.000Z"
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
    "message": "check_list_not_found",
    "code": "check_list_not_found"
}
```

### Notes

- El cuerpo `200` es el documento eliminado, no un objeto vacío.
- Los ObjectId inválidos y las listas de otros clientes responden `404` (`check_list_not_found`).
- Eliminar no gasta créditos y no cancela trabajo del catálogo ni de SmartBatch.
- No hay un endpoint para ejecutar la checklist. Ver [Check List](/verifik-es/check-list) y [SmartBatch](/verifik-es/smart-batch).
