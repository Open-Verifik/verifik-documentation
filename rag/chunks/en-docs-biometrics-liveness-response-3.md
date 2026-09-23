---
id: "en-docs-biometrics-liveness-response-3"
title: "Liveness Detection — Response"
sourcePath: "docs/biometrics/liveness.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoints:
  - "/v2/face-recognition/liveness"
  - "/v2/face-recognition/liveness-score"
sourceAnchor: "Response"
---

# Liveness Detection
**API path(s):** /v2/face-recognition/liveness, /v2/face-recognition/liveness-score

## Response

```json
{
  "id": "JQ4RM",
  "data": {
    "passed": true,
    "min_score": 0.6,
    "liveness_score": 0.98
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
  "message": "\"os\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```

### Notes

- Ensure `Authorization: Bearer ` is present; otherwise you will receive 401/403.
- `image` may be base64 or an `https` URL. If URL, the service fetches and converts it internally.
- Pass/fail is determined by `liveness_score > min_score` (default `min_score` is 0.6, configurable via `liveness_min_score`).
- Optional `collection_id` is validated for the authenticated client.
