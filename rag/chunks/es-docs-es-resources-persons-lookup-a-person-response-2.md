---
id: "es-docs-es-resources-persons-lookup-a-person-response-2"
title: "Buscar una Persona por Nombre — Response"
sourcePath: "docs-es/resources/persons/lookup-a-person.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons"
  - "/v2/face-recognition/persons/lookup"
sourceAnchor: "Response"
slug: "/resources/lookup-a-person"
url: "https://docs.verifik.co/verifik-es/resources/lookup-a-person"
---

# Buscar una Persona por Nombre
**API path(s):** /v2/face-recognition/persons, /v2/face-recognition/persons/lookup

## Response

```json
{
  "data": [
    {
      "_id": "693c646dfd68b59e4e8d1d58",
      "name": "Maria Perez",
      "date_of_birth": "1994-02-07",
      "gender": "F",
      "thumbnails": [
        {
          "id": "thumb-1",
          "thumbnail": ""
        }
      ],
      "collections": [
        {
          "_id": "6612a020a55c329bfb3f62e6",
          "code": "ed27d231-b437-42c5-94c5-a2130c447d1e",
          "name": "CholloApp"
        }
      ]
    }
  ],
  "total": 1
}
```

Un nombre desconocido devuelve `200` con `"data": []` y `"total": 0`. No es un 404.

  
  

```json
{
  "message": "name is required",
  "code": "MissingParameter"
}
```

o `"message": "name_too_short"` cuando el nombre tiene menos de 3 caracteres después de quitar dígitos.

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

### Notas

- Prefiere este helper (o el objeto `data` de `412 person_already_set`) sobre una búsqueda 1:N cuando conoces parte del nombre y, opcionalmente, la fecha de nacimiento. Ambos incluyen `thumbnails` para mostrar la cara enrolada junto a la captura nueva.
- Un solo nombre de pila basta (`name=Maria`). Agrega `date_of_birth` si muchas personas comparten ese nombre.
- La unicidad de `POST /v2/face-recognition/persons` también es **nombre + fecha de nacimiento** en una colección, no similitud facial.
- `collections[].code` es el valor que la búsqueda facial espera como `collection_id`.
