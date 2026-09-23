---
id: "es-docs-es-resources-persons-personas-list-all-persons-listar-todas-las-personas-respuesta-2"
title: "Listar Todas las Personas — Respuesta"
sourcePath: "docs-es/resources/persons-personas/list-all-persons-listar-todas-las-personas.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons"
  - "/v2/face-recognition/persons?page=1&limit=10&status=active&populates[]=collections"
sourceAnchor: "Respuesta"
slug: "/resources/persons-personas/list-all-persons-listar-todas-las-personas"
url: "https://docs.verifik.co/verifik-es/resources/persons-personas/list-all-persons-listar-todas-las-personas"
---

# Listar Todas las Personas
**API path(s):** /v2/face-recognition/persons, /v2/face-recognition/persons?page=1&limit=10&status=active&populates[]=collections

## Respuesta

```json
{
  "success": true,
  "data": [
    {
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
      "collections": [
        {
          "_id": "collection_123456789",
          "name": "Clientes VIP",
          "description": "Clientes de alto valor"
        }
      ],
      "notes": "Cliente VIP",
      "client": "client_123456789",
      "status": "active",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  }
}
```

  
  

```json
{
  "success": false,
  "error": "Parámetros de consulta inválidos",
  "code": "INVALID_PARAMETERS"
}
```

## Características

-   **Recuperación de Lista de Personas**: Recupera todas las personas con información detallada
-   **Soporte de Paginación**: Navega a través de grandes conjuntos de datos con paginación basada en páginas
-   **Opciones de Filtrado**: Filtra por colección, estado y otros criterios
-   **Soporte de Población**: Incluye información de colección y cliente relacionada
-   **Respuesta Estructurada**: Formato de datos organizado para fácil integración
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de Errores**: Respuestas de error completas para varios escenarios
