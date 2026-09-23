---
id: "es-docs-es-resources-personas-recuperar-una-persona-respuesta-2"
title: "Recuperar una Persona — Respuesta"
sourcePath: "docs-es/resources/personas/recuperar-una-persona.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons/person_123456789"
  - "/v2/face-recognition/persons/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/recuperar-una-persona"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-una-persona"
---

# Recuperar una Persona
**API path(s):** /v2/face-recognition/persons/person_123456789, /v2/face-recognition/persons/{id}

## Respuesta

```json
{
  "success": true,
  "data": {
    "_id": "person_123456789",
    "name": "John Doe",
    "gender": "M",
    "date_of_birth": {
      "year": 1990,
      "month": 1,
      "day": 15
    },
    "nationality": "US",
    "images": [
      "base64_encoded_image_1",
      "base64_encoded_image_2"
    ],
    "collections": ["collection_123456789"],
    "notes": "Cliente VIP",
    "client": "client_123456789",
    "status": "active",
    "faceEncodings": [
      "face_encoding_1",
      "face_encoding_2"
    ],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

  
  

```json
{
  "error": "Persona no encontrada",
  "message": "PERSON_NOT_FOUND"
}
```

  
  

```json
{
  "error": "No autorizado",
  "message": "UNAUTHORIZED"
}
```

## Características

-   **Recuperación de Persona**: Recupera registros específicos de personas por identificador único
-   **Información Completa**: Detalles completos de la persona incluyendo imágenes y codificaciones
-   **Respuesta Estructurada**: Formato de datos organizado para fácil integración
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de Errores**: Respuestas de error completas para varios escenarios
