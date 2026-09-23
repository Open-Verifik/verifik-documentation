---
id: "es-docs-es-smartenroll-smartenroll-guia-api-documentacion-de-producto-relacionada-4"
title: "SmartEnroll — Guía de API — Documentación de producto relacionada"
sourcePath: "docs-es/smartenroll/smartenroll-guia-api.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
  - "biometric-validations"
  - "document-validations"
  - "face-recognition"
  - "face-verifications"
  - "identity-images"
endpoints:
  - "/v2/app-registrations/:id"
  - "/v2/app-registrations/:id/resend-link"
  - "/v2/app-registrations/{id}"
  - "/v2/biometric-validations/app-registration"
  - "/v2/document-validations/app-registration"
  - "/v2/face-recognition/compare"
  - "/v2/face-recognition/compare-with-liveness"
  - "/v2/face-recognition/compare/app-registration"
  - "/v2/face-recognition/liveness"
  - "/v2/face-recognition/liveness-score"
  - "/v2/face-verifications/:id"
  - "/v2/identity-images/appregistration"
sourceAnchor: "Documentación de producto relacionada"
slug: "/smartenroll/guia-api"
url: "https://docs.verifik.co/verifik-es/smartenroll/guia-api"
---

# SmartEnroll — Guía de API
**API path(s):** /v2/app-registrations/:id, /v2/app-registrations/:id/resend-link, /v2/app-registrations/{id}, /v2/biometric-validations/app-registration, /v2/document-validations/app-registration, /v2/face-recognition/compare, /v2/face-recognition/compare-with-liveness, /v2/face-recognition/compare/app-registration, /v2/face-recognition/liveness, /v2/face-recognition/liveness-score, /v2/face-verifications/:id, /v2/identity-images/appregistration

Tras completar el KYC de **SmartEnroll hospedado**, usa esta guía para integrar resultados en tu backend: scores de comparación facial, vitalidad, webhooks y los endpoints relevantes. Es un complemento a la documentación de producto—no sustituye la [API de SmartEnroll autoalojado](/verifik-es/smart-enroll-auto-alojado).

## Documentación de producto relacionada

- [SmartEnroll](/verifik-es/smartenroll) — configuración del proyecto
- [Flujo KYC SmartEnroll](/verifik-es/smartenroll/smartenroll-flujo-kyc) — experiencia del usuario final
- [Reanudar un enrollment incompleto](/verifik-es/smartenroll/reanudar) — continuar el KYC hospedado si el usuario abandonó el flujo
- [Revisión KYC admin](/verifik-es/smartenroll/smartenroll-admin-revision-kyc) — UI de revisión e interpretación de scores
- [SmartEnroll autoalojado](/verifik-es/smart-enroll-auto-alojado) — APIs programáticas de proyecto/flujo

## Receta rápida

1. Completa (o espera) el enrollment hospedado.
2. Escucha `{type}_face_verification_compare` **o** llama `GET /v2/app-registrations/{id}?populates[]=compareFaceVerification`.
3. Lee `result.score`, `result.passed` y `result.compare_min_score`.
4. Aplica tus reglas de aprobar / revisar / rechazar (recuerda el TTL de FaceVerification).
