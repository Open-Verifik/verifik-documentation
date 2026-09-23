---
id: "en-docs-biometrics-zero-knowledge-face-proofs-encrypt-endpoint"
title: "Encrypt HumanID — Endpoint"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-encrypt.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt"
sourceAnchor: "Endpoint"
slug: "/biometrics/humanID-encrypt"
url: "https://docs.verifik.co/biometrics/humanID-encrypt"
---

# Encrypt HumanID
**API path(s):** /v2/human-id/encrypt

## Endpoint

```
POST https://api.verifik.co/v2/human-id/encrypt
```

Creates a HumanID (verifiable credential) by encrypting metadata of any kind and storing it in IPFS, a decentralized alternative to conventional cloud solutions (AWS, Azure, Google Cloud). Each HumanID can later be verified by the owner without storing the owner's biometric data.

HumanAuthn uses encryption from [zelf.world](https://zelf.world). The Verifik product field is `humanID`.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `publicData` | object | Yes | Public data stored with the HumanID (string key-value pairs) |
| `metadata` | object | Yes | Private metadata encrypted into the HumanID (string key-value pairs) |
| `faceBase64` | string | Yes | Base64 encoded facial image |
| `os` | string | Yes | Operating system (`DESKTOP`, `ANDROID`, `IOS`) |
| `identifier` | string | Yes | Unique identifier (alphanumeric only, no spaces or special characters) |
| `requireLiveness` | boolean | Yes | Require a live face when decrypting later |
| `livenessDetectionPriorCreation` | boolean | No | Require a live face when creating the HumanID |
| `tolerance` | string | No | Liveness anti-spoof strictness (`SOFT`, `REGULAR`, `HARDENED`, `REGULAR_HARD`, `REGULAR_SOFT`). Defaults to `HARDENED` when `requireLiveness` is true |
| `password` | string | No | Optional password for additional security |
| `referenceFaceBase64` | string | No | Optional reference face image |
| `verifierKey` | string | No | Optional verifier key |
| `storageProvider` | string | No | Store in IPFS or return without Verifik persistence (`ipfs`, `none`). Defaults to `ipfs` |
| `livenessLevel` | string | No | Ignored. This proxy does not forward `livenessLevel`; use `tolerance` |
