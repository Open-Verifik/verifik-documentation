---
id: "es-docs-es-smartenroll-smartenroll-guia-api-populates-utiles-2"
title: "SmartEnroll — Guía de API — Populates útiles"
sourcePath: "docs-es/smartenroll/smartenroll-guia-api.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}"
sourceAnchor: "Populates útiles"
slug: "/smartenroll/guia-api"
url: "https://docs.verifik.co/verifik-es/smartenroll/guia-api"
---

# SmartEnroll — Guía de API
**API path(s):** /v2/app-registrations/{id}

Tras completar el KYC de **SmartEnroll hospedado**, usa esta guía para integrar resultados en tu backend: scores de comparación facial, vitalidad, webhooks y los endpoints relevantes. Es un complemento a la documentación de producto—no sustituye la [API de SmartEnroll autoalojado](/verifik-es/smart-enroll-auto-alojado).

## Populates útiles

Conjunto habitual para un snapshot completo del enrollment:

`project`, `projectFlow`, `emailValidation`, `phoneValidation`, `biometricValidation`, `documentValidation`, `person`, `face`, `documentFace`, `compareFaceVerification`, `informationValidation`

## Endpoints clave

| Endpoint | Propósito |
| --- | --- |
| [`POST /v2/face-recognition/liveness`](/verifik-es/deteccion-vitalidad) | Detección de vitalidad estándar |
| [`POST /v2/face-recognition/liveness-score`](/verifik-es/puntaje-vitalidad) | Vitalidad enfocada en el puntaje (misma facturación que `/liveness`) |
| [`POST /v2/face-recognition/compare`](/verifik-es/comparar) | Comparación facial 1:1 (API directa) |
| [`POST /v2/face-recognition/compare-with-liveness`](/verifik-es/comparar-con-deteccion-vitalidad) | Comparar y luego vitalidad (secuencial) |
| `POST /v2/face-recognition/compare/app-registration` | Comparación del flujo hospedado: usa `appRegistrationId` de la sesión; gallery/probe desde caras guardadas; cuerpo vacío `{}` válido; umbral del project flow |
| `GET /v2/app-registrations/:id` | Leer el enrollment + popular scores |
| [`POST /v2/app-registrations/:id/resend-link`](/verifik-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion) | Generar una URL hospedada de continuación para un enrollment incompleto |
| `POST /v2/biometric-validations/app-registration` | Paso biométrico / vitalidad en la sesión hospedada |
| `POST /v2/document-validations/app-registration` | Captura / validación de documento en la sesión hospedada |
| `POST /v2/identity-images/appRegistration` | Guardar imágenes de identidad (`face`, `documentFace`, …) |

Para una UI totalmente personalizada, empieza por [SmartEnroll autoalojado](/verifik-es/smart-enroll-auto-alojado).
