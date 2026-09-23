---
id: "es-docs-es-biometrics-liveness-respuesta-2"
title: "Detección de Vitalidad — Respuesta"
sourcePath: "docs-es/biometrics/liveness.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoints:
  - "/v2/face-recognition/liveness"
  - "/v2/face-recognition/liveness-score"
sourceAnchor: "Respuesta"
slug: "/deteccion-vitalidad"
url: "https://docs.verifik.co/verifik-es/deteccion-vitalidad"
---

# Detección de Vitalidad
**API path(s):** /v2/face-recognition/liveness, /v2/face-recognition/liveness-score

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

- Asegúrate de que `Authorization: Bearer ` esté presente; de lo contrario recibirás 401/403.
- `image` puede ser base64 o una URL `https`. Si es URL, el servicio la descarga y convierte internamente.
- Aprobado/rechazado se determina por `liveness_score > min_score` (el `min_score` por defecto es 0.6, configurable via `liveness_min_score`).
- El `collection_id` opcional se valida para el cliente autenticado.
