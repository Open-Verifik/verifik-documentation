---
id: "es-docs-es-biometrics-compare-notas-3"
title: "Comparación Facial — Notas"
sourcePath: "docs-es/biometrics/compare.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "app-registrations"
  - "face-recognition"
  - "face-verifications"
endpoints:
  - "/v2/app-registrations/:id?populates[]=comparefaceverification"
  - "/v2/face-recognition/compare"
  - "/v2/face-verifications/:id"
sourceAnchor: "Notas"
slug: "/comparar"
url: "https://docs.verifik.co/verifik-es/comparar"
---

# Comparación Facial
**API path(s):** /v2/app-registrations/:id?populates[]=comparefaceverification, /v2/face-recognition/compare, /v2/face-verifications/:id

## Notas

- `probe` y `gallery` deben ser cadenas base64; las imágenes más cortas que ~100 caracteres son rechazadas con `412:only_images_in_base64`.
- `search_mode` debe ser `FAST` o `ACCURATE` (requerido por validación).
- La respuesta está envuelta con `id`, `data`, y `signature` según el middleware estándar.
- **No existe** `GET /v2/face-verifications/:id`. Para leer el resultado de comparación en SmartEnroll, usa `GET /v2/app-registrations/:id?populates[]=compareFaceVerification`. Los registros FaceVerification expiran en unos **90 días** en producción (menos en desarrollo).
