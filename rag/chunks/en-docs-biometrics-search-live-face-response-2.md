---
id: "en-docs-biometrics-search-live-face-response-2"
title: "Face Search 1:N (Live) — Response"
sourcePath: "docs/biometrics/search-live-face.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search-live-face"
sourceAnchor: "Response"
---

# Face Search 1:N (Live)
**API path(s):** /v2/face-recognition/search-live-face

## Response

```json
{
  "id": "SLF01",
  "data": {
    "persons": [{ "id": "person_id", "score": 0.97 }],
    "liveness_score": 0.92
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

  
  

```json
{
  "message": "\"os\" is required",
  "code": "MissingParameter"
}
```

### Notes

- Liveness and search thresholds must be provided and within the allowed ranges.
