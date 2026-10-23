---
id: "es-docs-es-biometrics-compare-live-respuesta-2"
title: "Comparación Facial (En Vivo) — Respuesta"
sourcePath: "docs-es/biometrics/compare-live.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/compare-live"
sourceAnchor: "Respuesta"
slug: "/comparar-en-vivo"
url: "https://docs.verifik.co/verifik-es/comparar-en-vivo"
---

# Comparación Facial (En Vivo)
**API path(s):** /v2/face-recognition/compare-live

## Respuesta

```json
{
  "id": "XYZ12",
  "data": {
    "score": 0.89,
    "liveness": {
      "liveness_score": 0.92,
      "min_score": 0.65,
      "passed": true
    }
  },
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

o

```json
{
  "message": "token_expired",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "\"liveness_min_score\" must be greater than or equal to 0.52",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "only_images_in_base64",
  "code": "ERROR"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```

### Notas

- `probe` debe ser una sola cadena base64; `gallery` es un array de cadenas base64.
- Rango requerido de `liveness_min_score`: 0.52–1.0. `compare_min_score` opcional: 0.67–0.95.
- La respuesta incluye puntaje de comparación y resultado de vitalidad; envuelto con `id`, `data`, `signature`.
