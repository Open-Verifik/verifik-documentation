---
id: "es-docs-es-check-list-obtener-un-check-list-response-2"
title: "Obtener una checklist — Response"
sourcePath: "docs-es/check-list/obtener-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/{id}"
sourceAnchor: "Response"
slug: "/check-list/obtener-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/obtener-un-check-list"
---

# Obtener una checklist
**API path(s):** /v2/check-lists, /v2/check-lists/{id}

## Response

```json
{
    "data": {
        "_id": "6aa224c87034a338385c28c0",
        "client": "507f1f77bcf86cd799439013",
        "name": "KYC Colombia",
        "countries": ["Colombia", "Chile"],
        "domains": ["people", "vehicles"],
        "featureCodes": ["co-cedula", "cl-rut"],
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

- Los ObjectId inválidos y las listas de otros clientes responden `404` (`check_list_not_found`).
- La respuesta no incluye una URL de reanudación ni una URL de lote. Check List solo guarda la mezcla.
- Para cambiar campos, usa [Actualizar una checklist](/verifik-es/check-list/actualizar-un-check-list). Para eliminarla, usa [Eliminar una checklist](/verifik-es/check-list/eliminar-un-check-list).
- Ejecutar un código de `featureCodes` es una llamada normal al catálogo y gasta créditos ahí. Ver [SmartCheck](/verifik-es/verificacion-inteligente).
