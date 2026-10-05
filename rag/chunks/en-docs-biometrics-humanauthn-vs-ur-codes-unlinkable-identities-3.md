---
id: "en-docs-biometrics-humanauthn-vs-ur-codes-unlinkable-identities-3"
title: "HumanAuthn vs UR Codes — Unlinkable Identities"
sourcePath: "docs/biometrics/humanauthn-vs-ur-codes.md"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Unlinkable Identities"
slug: "/biometrics/humanauthn-vs-ur-codes"
url: "https://docs.verifik.co/biometrics/humanauthn-vs-ur-codes"
---

# HumanAuthn vs UR Codes

## Unlinkable Identities

**UR Codes:**
- Same identity reused

**HumanAuthn:**
- Fresh cryptographic identity
- Unlinkable credentials

---

### Cryptographic Authentication vs Matching

UR Codes rely on **biometric comparison**. HumanAuthn uses **cryptographic key reconstruction**.

This removes:
- Matching thresholds
- False positives
- Template similarity attacks

---

## Evolution of Biometric Identity

```
2005 — Biometric e-Passports
Stored biometric templates in NFC chips
↓
UR Codes
Stored biometric templates in signed QR codes
↓
HumanAuthn
No biometric storage.
Identity derived from human presence.
```

---

## The Shift from Stored Identity to Human-Conditioned Cryptography

UR Codes improved identity portability. HumanAuthn removes stored identity entirely.

- UR Codes **store** identity.
- HumanAuthn **reconstructs** identity.
- UR Codes verify **who you are**.
- HumanAuthn proves **only you can decrypt**.

---

## Summary

UR Codes modernized biometric identity by moving it from NFC chips to QR containers. HumanAuthn goes further by removing biometric storage entirely and replacing matching with cryptographic key regeneration.

HumanAuthn introduces:
- Human-rooted trust
- No biometric storage
- Ephemeral keys
- Offline verification
- Unlinkable identities
- ECDSA secp256k1 cryptography
- SensePrint-based identity containers

This represents the next evolution of biometric identity — from stored templates to **human-conditioned cryptographic authentication**.
