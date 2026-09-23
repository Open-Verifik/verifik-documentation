---
id: "en-docs-biometrics-compare-notes-3"
title: "Face Comparison — Notes"
sourcePath: "docs/biometrics/compare.mdx"
locale: "en"
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
sourceAnchor: "Notes"
slug: "/biometrics/compare"
url: "https://docs.verifik.co/biometrics/compare"
---

# Face Comparison
**API path(s):** /v2/app-registrations/:id?populates[]=comparefaceverification, /v2/face-recognition/compare, /v2/face-verifications/:id

## Notes

- `probe` and `gallery` must be base64 strings; images shorter than ~100 characters are rejected with `412:only_images_in_base64`.
- `search_mode` must be `FAST` or `ACCURATE` (required by validation).
- Response is wrapped with `id`, `data`, and `signature` per standard middleware.
- There is **no** `GET /v2/face-verifications/:id`. To read a SmartEnroll face-compare result, use [`GET /v2/app-registrations/:id?populates[]=compareFaceVerification`](/resources/app-registrations/retrieve-an-app-registration). FaceVerification records expire after about **90 days** in production (shorter in development).
