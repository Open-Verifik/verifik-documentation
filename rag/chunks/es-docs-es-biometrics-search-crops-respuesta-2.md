---
id: "es-docs-es-biometrics-search-crops-respuesta-2"
title: "Búsqueda Facial 1:N (Recortes) — Respuesta"
sourcePath: "docs-es/biometrics/search-crops.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search/crops"
sourceAnchor: "Respuesta"
slug: "/buscar-recortes"
url: "https://docs.verifik.co/verifik-es/buscar-recortes"
---

# Búsqueda Facial 1:N (Recortes)
**API path(s):** /v2/face-recognition/search/crops

## Respuesta

```json
{
  "id": "SC01",
  "data": [
    { "id": "person_id", "score": 0.91 }
  ],
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

  
  

```json
{
  "message": "\"min_score\" is required",
  "code": "MissingParameter"
}
```

### Notas

- Proporciona caras fuertemente recortadas; las imágenes sobredimensionadas son menos efectivas aquí.
