---
id: "en-docs-biometrics-compare-response-2"
title: "Face Comparison — Response"
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
sourceAnchor: "Response"
slug: "/biometrics/compare"
url: "https://docs.verifik.co/biometrics/compare"
---

# Face Comparison
**API path(s):** /v2/app-registrations/:id?populates[]=comparefaceverification, /v2/face-recognition/compare, /v2/face-verifications/:id

## Response

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

or

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

### Face-match thresholds

| Context | Typical / allowed values |
| --- | --- |
| Hosted SmartEnroll / project flow default | **`0.85`** (`compareMinScore`) |
| Hosted SmartEnroll / project flow allowed range | **`0.65`–`0.95`** |
| Direct API (`compare_min_score`) | **`0.67`–`0.95`** (default `0.85` if omitted) |

Printed ID portraits are often faded, scratched, or low-resolution. Some Colombian cédulas are especially poor, and the same document-quality problem can appear in other countries. Live selfie vs printed photo scores **lower** than live-vs-live. A score around **0.65–0.75** can still be a valid match for printed-document gallery images. Lowering the hosted threshold toward **`0.65`** increases acceptance of genuine printed-doc matches and may raise false accepts. Keep `0.85` unless you see real users failing. Prefer face-focused gallery/probe images; server-side `cropFace` is **not supported** on face-recognition compare endpoints (omit the field; prepare crops client-side if needed).
