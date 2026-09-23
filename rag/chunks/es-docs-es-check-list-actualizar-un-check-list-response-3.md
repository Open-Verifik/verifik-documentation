---
id: "es-docs-es-check-list-actualizar-un-check-list-response-3"
title: "Actualizar una checklist — Response"
sourcePath: "docs-es/check-list/actualizar-un-check-list.mdx"
locale: "es"
category: "check-list"
tags:
  - "check-lists"
  - "check-list"
endpoints:
  - "/v2/check-lists"
  - "/v2/check-lists/{id}"
sourceAnchor: "Response"
slug: "/check-list/actualizar-un-check-list"
url: "https://docs.verifik.co/verifik-es/check-list/actualizar-un-check-list"
---

# Actualizar una checklist
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

- Los campos omitidos conservan su valor. Enviar `featureCodes` reemplaza todo el arreglo — no es un merge de códigos.
- Después de la fusión, Joi sigue exigiendo `name`. Vaciar el nombre falla con `ValidationError`.
- Los `featureCodes` desconocidos responden `409` (`check_list_invalid_feature`).
- Una feature cuyo país queda fuera de los `countries` fusionados responde `409` (`check_list_feature_country_mismatch`), salvo que sea mundial o `countries` esté vacío.
- Actualizar no gasta créditos. Ejecutar un código guardado es una llamada al catálogo. SmartBatch es un producto aparte.
- Recorrido de producto: [Check List](/verifik-es/check-list).
