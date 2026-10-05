---
id: "en-docs-biometrics-compare-with-liveness-response-2"
title: "Compare with Liveness (Sequential) — Response"
sourcePath: "docs/biometrics/compare-with-liveness.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/compare-with-liveness"
sourceAnchor: "Response"
---

# Compare with Liveness (Sequential)
**API path(s):** /v2/face-recognition/compare-with-liveness

## Response

```json
{
  "id": "CWL01",
  "data": {
    "comparison": {
      "score": 0.88
    },
    "liveness": {
      "liveness_score": 0.91,
      "min_score": 0.6,
      "passed": true
    }
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
| Hosted SmartEnroll / project flow default | **`0.85`** |
| Direct API (`compare_min_score`) | **`0.67`–`0.95`** |

Printed document faces vs live selfies often score lower than live-vs-live. Values near the API minimum (`0.67`) can be appropriate for printed-CC galleries after you validate false-accept risk. Server-side `cropFace` is **not supported** on this endpoint (ignored if sent); send face-focused images.

### Notes

- Comparison is executed first. Only if `compare_min_score` is not provided or met, liveness is executed on `probe`.
- `liveness_min_score` defaults to 0.6 if not provided.
- Gallery supports `https` URLs and will be downloaded and converted to base64 internally.
- There is **no** `GET /v2/face-verifications/:id`. For SmartEnroll history, populate `compareFaceVerification` on the app registration (records TTL ~**90 days** in production).
