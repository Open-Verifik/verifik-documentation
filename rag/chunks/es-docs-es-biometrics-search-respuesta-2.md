---
id: "es-docs-es-biometrics-search-respuesta-2"
title: "Búsqueda Facial (1:N) — Respuesta"
sourcePath: "docs-es/biometrics/search.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search"
sourceAnchor: "Respuesta"
slug: "/buscar"
url: "https://docs.verifik.co/verifik-es/buscar"
---

# Búsqueda Facial (1:N)
**API path(s):** /v2/face-recognition/search

## Respuesta

```json
{
  "id": "SRCH1",
  "data": [
    {
      "id": "person_id",
      "name": "John Doe",
      "score": 0.93,
      "thumbnails": [{ "id": "thumb_id", "thumbnail": "" }]
    }
  ],
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "token_expired",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "\"min_score\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```

### Notas

- Proporciona 1–3 imágenes de la misma persona en `images` para mejor recuperación.
- Usa `ACCURATE` para mayor precisión a costa de latencia; usa `FAST` para velocidad.
