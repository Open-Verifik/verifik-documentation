---
id: "en-docs-smartenroll-smartenroll-api-companion-related-product-docs-4"
title: "SmartEnroll API Companion — Related product docs"
sourcePath: "docs/smartenroll/smartenroll-api-companion.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}"
sourceAnchor: "Related product docs"
slug: "/smartenroll/api-companion"
url: "https://docs.verifik.co/smartenroll/api-companion"
---

# SmartEnroll API Companion
**API path(s):** /v2/app-registrations/{id}

After a user completes **hosted SmartEnroll** KYC, use this guide to pull results into your backend: face-match scores, liveness, webhooks, and the endpoints that matter. This is a companion to the product docs—not a full rewrite of the [self-hosted SmartEnroll API](/smart-enroll-self-hosted).

## Related product docs

- [SmartEnroll](/smartenroll) — project configuration
- [SmartEnroll KYC Flow](/smartenroll/smartenroll-kyc-flow) — end-user experience
- [Resume an Incomplete Enrollment](/smartenroll/resume) — continue hosted KYC after the user leaves mid-flow
- [SmartEnroll Admin KYC Review](/smartenroll/smartenroll-admin-kyc-review) — reviewer UI and score interpretation
- [SmartEnroll: Self Hosted](/smart-enroll-self-hosted) — programmatic project/flow APIs

## Quick recipe

1. Complete (or wait for) the hosted enrollment.
2. Listen for `{type}_face_verification_compare` **or** call `GET /v2/app-registrations/{id}?populates[]=compareFaceVerification`.
3. Read `result.score`, `result.passed`, and `result.compare_min_score`.
4. Apply your approve / review / reject rules (remember FaceVerification TTL).
