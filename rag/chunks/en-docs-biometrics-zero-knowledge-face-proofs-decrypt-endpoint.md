---
id: "en-docs-biometrics-zero-knowledge-face-proofs-decrypt-endpoint"
title: "Decrypt HumanID — Endpoint"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-decrypt.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/decrypt"
sourceAnchor: "Endpoint"
slug: "/biometrics/humanID-decrypt"
url: "https://docs.verifik.co/biometrics/humanID-decrypt"
---

# Decrypt HumanID
**API path(s):** /v2/human-id/decrypt

## Endpoint

```
POST https://api.verifik.co/v2/human-id/decrypt
```

Verifies a HumanID by comparing it against a new facial image. This endpoint performs the actual biometric verification without exposing the original facial data.

HumanAuthn uses encryption from [zelf.world](https://zelf.world). The Verifik product field is `humanID`.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `faceBase64` | string | Yes | Base64 encoded facial image of the HumanID owner |
| `os` | string | Yes | Operating system (`DESKTOP`, `ANDROID`, `IOS`) |
| `humanID` | string | Yes | HumanID token returned by encrypt |
| `password` | string | No | Password if one was set at encrypt time |
| `verifierKey` | string | No | Optional verifier key |
| `livenessLevel` | string | No | Ignored. Decrypt does not accept or forward `livenessLevel` |
