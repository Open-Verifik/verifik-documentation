---
id: "es-docs-es-resources-personas-crear-una-persona-con-deteccion-de-vida-respuesta-2"
title: "Crear una Persona con Detección de Vida — Respuesta"
sourcePath: "docs-es/resources/personas/crear-una-persona-con-deteccion-de-vida.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons/search-live-face"
sourceAnchor: "Respuesta"
slug: "/resources/personas/crear-una-persona-con-deteccion-de-vida"
url: "https://docs.verifik.co/verifik-es/resources/personas/crear-una-persona-con-deteccion-de-vida"
---

# Crear una Persona con Detección de Vida
**API path(s):** /v2/face-recognition/persons/search-live-face

## Respuesta

```json
{
  "data": {
    "_id": "65175da13e81e4fabc12345",
    "name": "Jane Doe",
    "gender": "F",
    "date_of_birth": "1990-01-15T00:00:00.000Z",
    "collections": ["65b9592267cc4f096dbe743d"],
    "deleted": false,
    "createdAt": "2024-01-30T20:16:34.841Z",
    "updatedAt": "2024-01-30T20:16:34.841Z"
  },
  "signature": "…"
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
  "message": "409:duplicated_person",
  "code": "ERROR"
}
```

  
  

```json
{
  "error": "Invalid request"
}
```

### Notas

- **No** uses `POST .../persons/liveness`: la ruta correcta es **`search-live-face`** bajo **`persons`**.
- **`collection_id`**: un solo `_id` de colección (este flujo **no** acepta un arreglo `collections` en el cuerpo).
- **Fallo de liveness**: puede devolverse `409` con mensaje que contiene `liveness_failed`.
- **Firma**: las respuestas correctas pueden incluir `signature` según la configuración del middleware.
