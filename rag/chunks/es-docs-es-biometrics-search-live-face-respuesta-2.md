---
id: "es-docs-es-biometrics-search-live-face-respuesta-2"
title: "Búsqueda Facial 1:N (En Vivo) — Respuesta"
sourcePath: "docs-es/biometrics/search-live-face.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search-live-face"
sourceAnchor: "Respuesta"
slug: "/buscar-cara-en-vivo"
url: "https://docs.verifik.co/verifik-es/buscar-cara-en-vivo"
---

# Búsqueda Facial 1:N (En Vivo)
**API path(s):** /v2/face-recognition/search-live-face

## Respuesta

```json
{
  "id": "SLF01",
  "data": {
    "persons": [{ "id": "person_id", "score": 0.97 }],
    "liveness_score": 0.92
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

  
  

```json
{
  "message": "\"os\" is required",
  "code": "MissingParameter"
}
```

### Notas

- Los umbrales de vitalidad y búsqueda deben proporcionarse y estar dentro de los rangos permitidos.
