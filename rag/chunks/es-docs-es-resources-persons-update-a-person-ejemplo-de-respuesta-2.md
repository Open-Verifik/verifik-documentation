---
id: "es-docs-es-resources-persons-update-a-person-ejemplo-de-respuesta-2"
title: "Actualizar una Persona — Ejemplo de Respuesta"
sourcePath: "docs-es/resources/persons/update-a-person.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons/person_123456789"
  - "/v2/face-recognition/persons/{id}"
sourceAnchor: "Ejemplo de Respuesta"
slug: "/resources/persons/update-a-person"
url: "https://docs.verifik.co/verifik-es/resources/persons/update-a-person"
---

# Actualizar una Persona
**API path(s):** /v2/face-recognition/persons/person_123456789, /v2/face-recognition/persons/{id}

## Ejemplo de Respuesta

```json
{
  "success": true,
  "data": {
    "_id": "person_123456789",
    "name": "John Doe Updated",
    "gender": "M",
    "date_of_birth": {
      "year": 1990,
      "month": 1,
      "day": 15
    },
    "nationality": "US",
    "collections": ["collection_123456789"],
    "notes": "Cliente VIP - Actualizado",
    "client": "client_123456789",
    "status": "active",
    "updatedAt": "2024-01-15T11:30:00Z"
  }
}
```

### Notas

- Si envías **`images`**, usa 1–3 strings en Base64. Ese conjunto **reemplaza** las caras enroladas; no se suma al recorte anterior. Payloads muy cortos pueden devolver **412** `only_images_in_base64`. Para conservar una pose antigua y agregar una nueva, envía ambas imágenes en la misma solicitud.
