---
id: "en-docs-biometrics-compare-live-response-2"
title: "Face Comparison (Live) — Response"
sourcePath: "docs/biometrics/compare-live.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/compare-live"
sourceAnchor: "Response"
---

# Face Comparison (Live)
**API path(s):** /v2/face-recognition/compare-live

## Response

```json
{
  "id": "XYZ12",
  "data": {
    "score": 0.89,
    "liveness": {
      "liveness_score": 0.92,
      "min_score": 0.65,
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
  "message": "\"liveness_min_score\" must be greater than or equal to 0.52",
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

### Notes

- `probe` must be a single base64 string; `gallery` is an array of base64 strings.
- `liveness_min_score` required range: 0.52–1.0. Optional `compare_min_score`: 0.67–0.95.
- Response includes comparison score and liveness result; wrapped with `id`, `data`, `signature`.
