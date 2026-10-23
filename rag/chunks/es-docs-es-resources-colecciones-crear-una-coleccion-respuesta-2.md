---
id: "es-docs-es-resources-colecciones-crear-una-coleccion-respuesta-2"
title: "Crear una Colección — Respuesta"
sourcePath: "docs-es/resources/colecciones/crear-una-coleccion.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/collections"
sourceAnchor: "Respuesta"
slug: "/resources/crear-una-coleccion"
url: "https://docs.verifik.co/verifik-es/resources/crear-una-coleccion"
---

# Crear una Colección
**API path(s):** /v2/face-recognition/collections

## Respuesta

```json
{
  "data": {
    "__v": 0,
    "_id": "65175da13e81e4fabc12345",
    "code": "dac2c81b-96a6-4f19-ab54-d1a72d55b64b",
    "name": "Ejemplo de prueba",
    "client": "65175da13e81e4fabc12345",
    "deleted": false,
    "createdAt": "2023-09-29T23:28:33.894Z",
    "updatedAt": "2023-09-29T23:28:33.894Z",
    "description": "Ejemplo de cómo crear una colección"
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
  "message": "Validation message from server",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "error": "Invalid request"
}
```

### Notas

- **Autenticación**: envía un token válido; la colección queda asociada a tu cliente.
- **Nombre**: `name` es obligatorio; `description` es opcional pero recomendable.
- **Errores**: `409` / `MissingParameter` suele indicar cuerpo incompleto o inválido según la validación de la API.
