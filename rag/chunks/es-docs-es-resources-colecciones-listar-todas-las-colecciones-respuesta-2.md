---
id: "es-docs-es-resources-colecciones-listar-todas-las-colecciones-respuesta-2"
title: "Listar Todas las Colecciones — Respuesta"
sourcePath: "docs-es/resources/colecciones/listar-todas-las-colecciones.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/collections"
sourceAnchor: "Respuesta"
slug: "/resources/colecciones/listar-todas-las-colecciones"
url: "https://docs.verifik.co/verifik-es/resources/colecciones/listar-todas-las-colecciones"
---

# Listar Todas las Colecciones
**API path(s):** /v2/face-recognition/collections

## Respuesta

```json
{
    "data": [
        {
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
        },
        {
            "_id": "65c2a9364d8e8d3917eaf383",
            "deleted": false,
            "name": "Ejemplo Feb 6",
            "project": "65c2a9271ff6bd3955eececd",
            "description": "default collection for project 65c2a9271ff6bd3955eececd",
            "client": "6158e492dd0767a2b8b3f829",
            "code": "548574d7-748c-4a75-8838-aa9aa59b00d5",
            "updatedAt": "2024-02-06T21:48:39.240Z",
            "createdAt": "2024-02-06T21:48:39.240Z",
            "__v": 0
        }
    ]
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
  "error": "Invalid request"
}
```

### Notas

- **Autenticación**: el token Bearer determina qué colecciones de cliente se devuelven.
- **Formato**: las respuestas correctas envuelven el arreglo en `data`.
- **Filtros**: este endpoint no acepta query; devuelve las colecciones visibles para el cliente.
