---
id: "en-docs-biometrics-zero-knowledge-face-proofs-preview-response-4"
title: "Preview HumanID — Response"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-preview.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoints:
  - "/api/human-id/preview"
  - "/v2/human-id/preview"
sourceAnchor: "Response"
slug: "/biometrics/humanID-preview"
url: "https://docs.verifik.co/biometrics/humanID-preview"
---

# Preview HumanID
**API path(s):** /api/human-id/preview, /v2/human-id/preview

## Response

```json
{
  "data": {
    "passwordLayer": "WithPassword",
    "publicData": {
      "a": "1",
      "vida": "true",
      "b": "2"
    },
    "requireLiveness": true
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
  "message": "Access Forbidden",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "\"humanID\" is required",
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

- The `passwordLayer` field indicates whether the HumanID is password-protected (`WithPassword` or `WithoutPassword`)
- `publicData` contains the public data that was stored with the HumanID (this is visible to anyone with the proof)
- `requireLiveness` indicates whether liveness detection was required when the HumanID was created
- This endpoint does not perform biometric verification - it only examines the HumanID public metadata
- No credits are charged for preview operations
- The `os` parameter is required but doesn't affect the preview functionality
- This is useful for debugging, inspection, and understanding HumanID configuration before attempting verification
- Private metadata is securely stored within the HumanID since it is encrypted by the owner.
