---
id: "en-docs-smartenroll-smartenroll-api-companion-face-match-thresholds-3"
title: "SmartEnroll API Companion — Face-match thresholds"
sourcePath: "docs/smartenroll/smartenroll-api-companion.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}"
sourceAnchor: "Face-match thresholds"
slug: "/smartenroll/api-companion"
url: "https://docs.verifik.co/smartenroll/api-companion"
---

# SmartEnroll API Companion
**API path(s):** /v2/app-registrations/{id}

After a user completes **hosted SmartEnroll** KYC, use this guide to pull results into your backend: face-match scores, liveness, webhooks, and the endpoints that matter. This is a companion to the product docs—not a full rewrite of the [self-hosted SmartEnroll API](/smart-enroll-self-hosted).

## Face-match thresholds

| Context | Values |
| --- | --- |
| Hosted SmartEnroll / project flow default | **`0.85`** (`compareMinScore`) |
| Hosted SmartEnroll / project flow allowed range | **`0.65`–`0.95`** |
| Direct face-recognition API (`compare_min_score`) | **`0.67`–`0.95`** (default `0.85` if omitted) |

Printed ID portraits are often faded, scratched, or low-resolution. Some Colombian cédulas are especially poor, and the same document-quality problem can appear in other countries. Live selfie vs printed photo scores **lower** than live-vs-live. Lowering the project threshold toward **`0.65`** reduces false rejects of genuine users with bad document photos; it also raises false-accept risk. Keep `0.85` unless you see real users failing.

## `cropFace`

Server-side `cropFace` is **not supported** on face-recognition compare endpoints. Omit the field (it is ignored if sent). Send face-focused images, or crop client-side before calling the API.

## Webhooks

When the project flow has a webhook configured, face compare emits an event with suffix `face_verification_compare`. The delivered `type` is:

```
{projectFlow.type}_face_verification_compare
```

Example: `onboarding_face_verification_compare`.

The payload includes app registration fields plus `compareResult` (the FaceVerification outcome). Full SmartEnroll webhook inventory: [Smart Enroll KYC Webhooks](/resources/smart-enroll-kyc-webhooks).

## Liveness / PAD (product summary)

Verifik’s face liveness uses our biometric stack with presentation attack detection (PAD). Liveness is **iBeta Level 2 certified** and aligned with **ISO 30107 Level 1 and Level 2**. It is designed to detect common spoofing vectors such as **printed photos, video replay, and 3D masks**, using a single-image liveness check. Details: [Liveness](/biometrics/liveness) and [Liveness Score](/biometrics/liveness-score).
