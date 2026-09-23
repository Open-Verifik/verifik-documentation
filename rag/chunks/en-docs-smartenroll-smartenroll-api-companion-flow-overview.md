---
id: "en-docs-smartenroll-smartenroll-api-companion-flow-overview"
title: "SmartEnroll API Companion — Flow overview"
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
sourceAnchor: "Flow overview"
slug: "/smartenroll/api-companion"
url: "https://docs.verifik.co/smartenroll/api-companion"
---

# SmartEnroll API Companion
**API path(s):** /v2/app-registrations/:id, /v2/app-registrations/:id/resend-link, /v2/app-registrations/{id}, /v2/biometric-validations/app-registration, /v2/document-validations/app-registration, /v2/face-recognition/compare, /v2/face-recognition/compare-with-liveness, /v2/face-recognition/compare/app-registration, /v2/face-recognition/liveness, /v2/face-recognition/liveness-score, /v2/face-verifications/:id, /v2/identity-images/appregistration

## Flow overview

After a user completes **hosted SmartEnroll** KYC, use this guide to pull results into your backend: face-match scores, liveness, webhooks, and the endpoints that matter. This is a companion to the product docs—not a full rewrite of the [self-hosted SmartEnroll API](/smart-enroll-self-hosted).

## Flow overview

```mermaid
flowchart LR
  hosted[Hosted_SmartEnroll]
  compare[Face_compare]
  webhook[Webhook_face_verification_compare]
  getAR[GET_app_registrations_populate]
  hosted --> compare
  compare --> webhook
  compare --> getAR
  getAR --> scores[score_passed_threshold]
```

1. The end user finishes document + biometric steps in the hosted flow.
2. Verifik runs face comparison (selfie vs document face) using your project thresholds.
3. You receive a webhook (if configured) and/or poll the app registration with populates.
4. You apply your business rules using `score`, `passed`, and `compare_min_score`.

## Reading face-comparison scores

There is **no** public `GET /v2/face-verifications/:id`. Face scores live on the `FaceVerification` linked from the app registration.

```
GET https://api.verifik.co/v2/app-registrations/{id}?populates[]=compareFaceVerification
```

Useful fields on the populated object:

| Field | Meaning |
| --- | --- |
| `compareFaceVerification.result.score` | Similarity score (0–1) |
| `compareFaceVerification.result.passed` | Whether the score met the effective threshold |
| `compareFaceVerification.result.compare_min_score` | Threshold used for that compare |
| `compareFaceVerification.comparedAt` | When the compare ran |

**TTL:** FaceVerification records expire after about **90 days** in production (**10 days** in development). After expiry, `compareFaceVerification` may be empty even if the app registration remains.

Also see [Get App Registration](/resources/app-registrations/retrieve-an-app-registration).
