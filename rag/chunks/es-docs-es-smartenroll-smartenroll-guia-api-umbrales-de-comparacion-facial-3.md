---
id: "es-docs-es-smartenroll-smartenroll-guia-api-umbrales-de-comparacion-facial-3"
title: "SmartEnroll — Guía de API — Umbrales de comparación facial"
sourcePath: "docs-es/smartenroll/smartenroll-guia-api.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}"
sourceAnchor: "Umbrales de comparación facial"
slug: "/smartenroll/guia-api"
url: "https://docs.verifik.co/verifik-es/smartenroll/guia-api"
---

# SmartEnroll — Guía de API
**API path(s):** /v2/app-registrations/{id}

Tras completar el KYC de **SmartEnroll hospedado**, usa esta guía para integrar resultados en tu backend: scores de comparación facial, vitalidad, webhooks y los endpoints relevantes. Es un complemento a la documentación de producto—no sustituye la [API de SmartEnroll autoalojado](/verifik-es/smart-enroll-auto-alojado).

## Umbrales de comparación facial

| Contexto | Valores |
| --- | --- |
| SmartEnroll hospedado / project flow (por defecto) | **`0.85`** (`compareMinScore`) |
| SmartEnroll hospedado / project flow (rango permitido) | **`0.65`–`0.95`** |
| API directa de face-recognition (`compare_min_score`) | **`0.67`–`0.95`** (por defecto `0.85` si se omite) |

Los retratos impresos en documentos suelen estar desgastados, rayados o a baja resolución. Algunas cédulas colombianas son especialmente pobres, y el mismo problema de calidad puede aparecer en otros países. Un selfie en vivo vs una foto impresa puntúa **más bajo** que en vivo vs en vivo. Bajar el umbral del proyecto hacia **`0.65`** reduce rechazos falsos de usuarios genuinos con documentos de mala calidad; también sube el riesgo de falsos aceptados. Conserva `0.85` salvo que veas fallos reales.

## `cropFace`

`cropFace` en servidor **no está soportado** en los endpoints de face-recognition compare. Omite el campo (se ignora si se envía). Envía imágenes enfocadas en el rostro o recorta en el cliente antes de llamar a la API.

## Webhooks

Cuando el project flow tiene webhook, la comparación facial emite un evento con sufijo `face_verification_compare`. El `type` entregado es:

```
{projectFlow.type}_face_verification_compare
```

Ejemplo: `onboarding_face_verification_compare`.

El payload incluye campos del app registration más `compareResult` (resultado FaceVerification). Inventario completo: [Webhooks KYC de Smart Enroll](/verifik-es/resources/smart-enroll-kyc-webhooks).

## Vitalidad / PAD (resumen de producto)

La vitalidad facial de Verifik usa nuestro stack biométrico con detección de ataques de presentación (PAD). La vitalidad está **certificada iBeta Level 2** y alineada con **ISO 30107 Level 1 y Level 2**. Está diseñada para detectar vectores de spoofing comunes como **fotos impresas, reproducción de video y máscaras 3D**, mediante una verificación de una sola imagen. Detalles: [Detección de vitalidad](/verifik-es/deteccion-vitalidad) y [Puntaje de vitalidad](/verifik-es/puntaje-vitalidad).
