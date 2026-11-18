---
id: "en-docs-biometrics-search-response-2"
title: "Face Search (1:N) — Response"
sourcePath: "docs/biometrics/search.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search"
sourceAnchor: "Response"
---

# Face Search (1:N)
**API path(s):** /v2/face-recognition/search

## Response

```json
{
  "id": "SRCH1",
  "data": [
    {
      "id": "person_id",
      "name": "John Doe",
      "score": 0.93,
      "thumbnails": [{ "id": "thumb_id", "thumbnail": "" }]
    }
  ],
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

  
  

```json
{
  "message": "token_expired",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "\"min_score\" is required",
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

- Provide 1–3 images of the same person in `images` for better recall.
- Use `ACCURATE` for higher precision at the cost of latency; use `FAST` for speed.
