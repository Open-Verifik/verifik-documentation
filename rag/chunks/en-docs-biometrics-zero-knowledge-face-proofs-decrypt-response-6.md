---
id: "en-docs-biometrics-zero-knowledge-face-proofs-decrypt-response-6"
title: "Decrypt HumanID — Response"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-decrypt.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/decrypt"
sourceAnchor: "Response"
slug: "/biometrics/humanID-decrypt"
url: "https://docs.verifik.co/biometrics/humanID-decrypt"
---

# Decrypt HumanID
**API path(s):** /v2/human-id/decrypt

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
