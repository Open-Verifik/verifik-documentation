---
id: "en-docs-smartenroll-smartenroll-api-companion-useful-populates-2"
title: "SmartEnroll API Companion — Useful populates"
sourcePath: "docs/smartenroll/smartenroll-api-companion.md"
locale: "en"
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
  - "/v2/app-registrations/{id}?populates[]=comparefaceverification"
  - "/v2/biometric-validations/app-registration"
  - "/v2/document-validations/app-registration"
  - "/v2/face-recognition/compare"
  - "/v2/face-recognition/compare-with-liveness"
  - "/v2/face-recognition/compare/app-registration"
  - "/v2/face-recognition/liveness"
  - "/v2/face-recognition/liveness-score"
  - "/v2/face-verifications/:id"
  - "/v2/identity-images/appregistration"
sourceAnchor: "Useful populates"
slug: "/smartenroll/api-companion"
url: "https://docs.verifik.co/smartenroll/api-companion"
---

# SmartEnroll API Companion
**API path(s):** /v2/app-registrations/:id, /v2/app-registrations/:id/resend-link, /v2/app-registrations/{id}?populates[]=comparefaceverification, /v2/biometric-validations/app-registration, /v2/document-validations/app-registration, /v2/face-recognition/compare, /v2/face-recognition/compare-with-liveness, /v2/face-recognition/compare/app-registration, /v2/face-recognition/liveness, /v2/face-recognition/liveness-score, /v2/face-verifications/:id, /v2/identity-images/appregistration

After a user completes **hosted SmartEnroll** KYC, use this guide to pull results into your backend: face-match scores, liveness, webhooks, and the endpoints that matter. This is a companion to the product docs—not a full rewrite of the [self-hosted SmartEnroll API](/smart-enroll-self-hosted).

## Useful populates

Common set for a full enrollment snapshot:

`project`, `projectFlow`, `emailValidation`, `phoneValidation`, `biometricValidation`, `documentValidation`, `person`, `face`, `documentFace`, `compareFaceVerification`, `informationValidation`

## Key endpoints

| Endpoint | Purpose |
| --- | --- |
| [`POST /v2/face-recognition/liveness`](/biometrics/liveness) | Standard liveness detection |
| [`POST /v2/face-recognition/liveness-score`](/biometrics/liveness-score) | Score-focused liveness (same billing as `/liveness`) |
| [`POST /v2/face-recognition/compare`](/biometrics/compare) | 1:1 face compare (direct API) |
| [`POST /v2/face-recognition/compare-with-liveness`](/biometrics/compare-with-liveness) | Compare then liveness (sequential) |
| `POST /v2/face-recognition/compare/app-registration` | Hosted-path compare: uses session `appRegistrationId`; gallery/probe from stored faces; empty body `{}` is valid; threshold from project flow |
| [`GET /v2/app-registrations/:id`](/resources/app-registrations/retrieve-an-app-registration) | Read enrollment + populate scores |
| [`POST /v2/app-registrations/:id/resend-link`](/resources/app-registrations/resend-an-app-registration-link) | Mint a hosted continuation URL for an incomplete enrollment |
| `POST /v2/biometric-validations/app-registration` | SmartEnroll biometric / liveness step in the hosted session |
| `POST /v2/document-validations/app-registration` | Document capture / validation in the hosted session |
| `POST /v2/identity-images/appRegistration` | Store identity images (`face`, `documentFace`, …) |

For building a fully custom UI, start with [SmartEnroll: Self Hosted](/smart-enroll-self-hosted).
