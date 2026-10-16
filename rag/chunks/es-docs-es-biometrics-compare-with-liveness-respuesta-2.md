---
id: "es-docs-es-biometrics-compare-with-liveness-respuesta-2"
title: "Comparar con Detección de Vitalidad (Secuencial) — Respuesta"
sourcePath: "docs-es/biometrics/compare-with-liveness.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/compare-with-liveness"
sourceAnchor: "Respuesta"
slug: "/comparar-con-deteccion-vitalidad"
url: "https://docs.verifik.co/verifik-es/comparar-con-deteccion-vitalidad"
---

# Comparar con Detección de Vitalidad (Secuencial)
**API path(s):** /v2/face-recognition/compare-with-liveness

## Respuesta

```json
{
  "id": "CWL01",
  "data": {
    "comparison": {
      "score": 0.88
    },
    "liveness": {
      "liveness_score": 0.91,
      "min_score": 0.6,
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
  "message": "\"search_mode\" is required",
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

### Umbrales de comparación facial

| Contexto | Valores típicos / permitidos |
| --- | --- |
| SmartEnroll hospedado / project flow (por defecto) | **`0.85`** |
| API directa (`compare_min_score`) | **`0.67`–`0.95`** |

Las caras de documentos impresos vs selfies en vivo suelen puntuar más bajo que en vivo vs en vivo. Valores cerca del mínimo de la API (`0.67`) pueden ser apropiados para galerías de CC impresa tras validar el riesgo de falsos aceptados. `cropFace` en servidor **no está soportado** en este endpoint (se ignora si se envía); envía imágenes enfocadas en el rostro.

### Notas

- La comparación se ejecuta primero. Solo si `compare_min_score` no se proporciona o se cumple, se ejecuta la detección de vitalidad en `probe`.
- `liveness_min_score` por defecto es 0.6 si no se proporciona.
- La galería admite URLs `https` y serán descargadas y convertidas a base64 internamente.
- **No existe** `GET /v2/face-verifications/:id`. Para historial SmartEnroll, popula `compareFaceVerification` en el app registration (TTL ~**90 días** en producción).
