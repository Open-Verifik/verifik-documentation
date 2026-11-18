---
id: "en-docs-biometrics-verify-face-response-2"
title: "Verify Face (1:1 vs enrolled person) — Response"
sourcePath: "docs/biometrics/verify-face.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/verify"
sourceAnchor: "Response"
slug: "/biometrics/verify-face"
url: "https://docs.verifik.co/biometrics/verify-face"
---

# Verify Face (1:1 vs enrolled person)
**API path(s):** /v2/face-recognition/verify

## Response

```json
{
  "id": "9DVKW",
  "data": {
    "match": {
      "id": "68defec6a9a7b4933d5652f3",
      "name": "Jane Doe",
      "score": 0.9132,
      "gender": "F",
      "date_of_birth": "1990-01-15",
      "thumbnails": [
        { "id": "thumb-uuid", "thumbnail": "" }
      ],
      "collections": []
    }
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "April 9, 2026 12:12 AM"
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

- **1:1 vs enrollment**: Unlike **Face Search (1:N)**, you already know **which person** to test; this endpoint scores probe images against that record.
- **Images**: Use one or more captures of the same subject; raw base64 without a `data:` prefix unless your client adds it consistently.
- **Related flows**: For comparing two arbitrary image sets without an enrolled `id`, use **Face Comparison**; for gallery search, use **Face Search**.
