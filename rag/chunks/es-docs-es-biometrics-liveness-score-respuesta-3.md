---
id: "es-docs-es-biometrics-liveness-score-respuesta-3"
title: "Puntaje de Vitalidad — Respuesta"
sourcePath: "docs-es/biometrics/liveness-score.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/liveness-score"
sourceAnchor: "Respuesta"
slug: "/puntaje-vitalidad"
url: "https://docs.verifik.co/verifik-es/puntaje-vitalidad"
---

# Puntaje de Vitalidad
**API path(s):** /v2/face-recognition/liveness-score

## Respuesta

```json
{
  "id": "JQ4RM",
  "data": {
    "passed": true,
    "min_score": 0.6,
    "liveness_score": 0.98
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
  "message": "\"os\" is required",
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

- Asegura `Authorization: Bearer `; de lo contrario recibirás 401/403.
- `image` puede ser base64 o una URL `https`. Si es URL, el servicio la descarga y convierte internamente.
- Aprobado/rechazado se determina con `liveness_score > min_score` (por defecto `min_score` es 0.6, configurable con `liveness_min_score`).
- Los créditos se cobran contra el mismo feature que [`/liveness`](/verifik-es/deteccion-vitalidad).
- El `collection_id` opcional se valida para el cliente autenticado.
