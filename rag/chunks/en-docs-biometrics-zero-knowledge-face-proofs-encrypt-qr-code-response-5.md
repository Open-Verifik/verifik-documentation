---
id: "en-docs-biometrics-zero-knowledge-face-proofs-encrypt-qr-code-response-5"
title: "Encrypt HumanID QR Code — Response"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-encrypt-qr-code.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoints:
  - "/api/human-id/encrypt-qr-code"
  - "/v2/human-id/encrypt-qr-code"
sourceAnchor: "Response"
slug: "/biometrics/humanID-encrypt-qr-code"
url: "https://docs.verifik.co/biometrics/humanID-encrypt-qr-code"
---

# Encrypt HumanID QR Code
**API path(s):** /api/human-id/encrypt-qr-code, /v2/human-id/encrypt-qr-code

## Response

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
  "message": "\"faceBase64\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```
