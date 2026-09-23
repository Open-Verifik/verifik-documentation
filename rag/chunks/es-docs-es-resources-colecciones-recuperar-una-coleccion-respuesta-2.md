---
id: "es-docs-es-resources-colecciones-recuperar-una-coleccion-respuesta-2"
title: "Recuperar una Colección — Respuesta"
sourcePath: "docs-es/resources/colecciones/recuperar-una-coleccion.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/collections/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/recuperar-una-coleccion"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-coleccion"
---

# Recuperar una Colección
**API path(s):** /v2/face-recognition/collections/{id}

## Respuesta

```json
{
    "data": {
        "_id": "65b9592267cc4f096dbe743d",
        "deleted": false,
        "name": "Ejemplo Ene 30",
        "project": "65b955fe0577440932c77481",
        "description": "default collection for project 65b955fe0577440932c77481",
        "client": "6158e492dd0767a2b8b3f829",
        "code": "d96db430-27d2-4f43-bcff-c4b239ac6d2e",
        "updatedAt": "2024-01-30T20:16:34.841Z",
        "createdAt": "2024-01-30T20:16:34.841Z",
        "__v": 0
    }
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

  
  

```json
{
  "message": "invalid_collection",
  "code": "ERROR"
}
```

  
  

```json
{
  "error": "Invalid request"
}
```

### Notas

- **`id` vs `code`**: esta ruta usa el `_id` del documento de colección, no el campo `code`.
- **Objeto único**: la respuesta envuelve una colección en `data`.
