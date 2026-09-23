---
id: "en-docs-biometrics-humanauthn-vs-ur-codes-privacy-preserving-architecture-2"
title: "HumanAuthn vs UR Codes — Privacy Preserving Architecture"
sourcePath: "docs/biometrics/humanauthn-vs-ur-codes.md"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Privacy Preserving Architecture"
slug: "/biometrics/humanauthn-vs-ur-codes"
url: "https://docs.verifik.co/biometrics/humanauthn-vs-ur-codes"
---

# HumanAuthn vs UR Codes

## Privacy Preserving Architecture

UR Codes improve over traditional KYC by moving identity verification offline, but they still **store biometric data inside the QR container**.

HumanAuthn eliminates biometric storage entirely.

### UR Codes
- Store face data
- Store identity attributes
- Issuer-signed
- Reusable identity artifact

### HumanAuthn
- No biometric storage
- No identity attributes required
- No issuer dependency
- Non-comparable identity artifacts

HumanAuthn minimizes data exposure and reduces identity leakage risks.

---

## Security Architecture Comparison

| **Feature** | **UR Codes** | **HumanAuthn** |
|---|---|---|
| Biometric Storage | Yes | No |
| Private Keys Stored | Issuer | No |
| Ephemeral Keys | No | Yes |
| Offline Verification | Yes | Yes |
| Device Independence | Yes | Yes |
| Credential Correlation | Possible | None |
| Central Authority | Required | Optional |
| Encrypted Metadata | Optional | Native |
| Zero Knowledge Property | No | System-level |
| Trust Anchor | Issuer | Human |
| Cryptography | Signature verification | ECDSA secp256k1 + entropy |
| Replay Risk | Possible | None |
| Matching Required | Yes | No |

---

## HumanAuthn Advantages over UR Codes

### No Biometric Storage

UR Codes store biometric data. HumanAuthn stores none.

This eliminates:
- Biometric database risks
- Template leakage
- Identity cloning

---

### No Issuer Dependency

UR Codes depend on identity issuers. HumanAuthn works without them.

This enables:
- Self-sovereign identity
- Decentralized authentication
- Permissionless identity creation

---

### Ephemeral Key Security

**UR Codes:**
- Static identity container
- Reusable artifact

**HumanAuthn:**
- Regenerates keys per session
- No keys at rest
- No persistent secrets

---
