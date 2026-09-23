---
id: "es-docs-es-biometrics-compare-respuesta-2"
title: "Comparación Facial — Respuesta"
sourcePath: "docs-es/biometrics/compare.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "app-registrations"
  - "face-recognition"
  - "face-verifications"
endpoints:
  - "/v2/app-registrations/:id"
  - "/v2/face-recognition/compare"
  - "/v2/face-verifications/:id"
sourceAnchor: "Respuesta"
slug: "/comparar"
url: "https://docs.verifik.co/verifik-es/comparar"
---

# Comparación Facial
**API path(s):** /v2/app-registrations/:id, /v2/face-recognition/compare, /v2/face-verifications/:id

## Respuesta

```json
{
  "id": "AB12C",
  "data": {
    "score": 0.91
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
| SmartEnroll hospedado / project flow (por defecto) | **`0.85`** (`compareMinScore`) |
| SmartEnroll hospedado / project flow (rango permitido) | **`0.65`–`0.95`** |
| API directa (`compare_min_score`) | **`0.67`–`0.95`** (por defecto `0.85` si se omite) |

Los retratos impresos en documentos suelen estar desgastados, rayados o a baja resolución. Algunas cédulas colombianas son especialmente pobres, y el mismo problema de calidad puede aparecer en otros países. Un selfie en vivo vs una foto impresa puntúa **más bajo** que en vivo vs en vivo. Un score alrededor de **0.65–0.75** puede ser una coincidencia válida para galerías de documentos impresos. Bajar el umbral hospedado hacia **`0.65`** aumenta la aceptación de coincidencias genuinas y puede subir falsos aceptados. Conserva `0.85` salvo que veas fallos reales. Prefiere imágenes enfocadas en el rostro; `cropFace` en servidor **no está soportado** en los endpoints de face-recognition compare (omite el campo; prepara recortes en el cliente si hace falta).
