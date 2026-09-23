---
id: "en-docs-biometrics-zero-knowledge-face-proofs-preview-endpoint"
title: "Preview HumanID — Endpoint"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-preview.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/preview"
sourceAnchor: "Endpoint"
slug: "/biometrics/humanID-preview"
url: "https://docs.verifik.co/biometrics/humanID-preview"
---

# Preview HumanID
**API path(s):** /v2/human-id/preview

## Endpoint

```
POST https://api.verifik.co/v2/human-id/preview
```

Examines any HumanID to view its metadata and configuration without performing actual biometric verification. This is useful for inspecting public information and settings attached to the HumanID without decrypting its content.

HumanAuthn uses encryption from [zelf.world](https://zelf.world). The Verifik product field is `humanID`.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `humanID` | string | Yes | The encrypted HumanID token to examine |
| `verifierKey` | string | No | Verifier key for additional validation |
