---
id: "en-docs-biometrics-search-active-user-response-2"
title: "Face Search 1:N (Active User) — Response"
sourcePath: "docs/biometrics/search-active-user.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search-active-user"
sourceAnchor: "Response"
---

# Face Search 1:N (Active User)
**API path(s):** /v2/face-recognition/search-active-user

## Response

```json
{
  "id": "SAU01",
  "data": [
    { "id": "person_id", "score": 0.93 }
  ],
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

- No liveness is performed; use when you already trust the capture context.
