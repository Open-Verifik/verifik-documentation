---
id: humanauthn-vs-ur-codes
title: HumanAuthn vs UR Codes
description: Comparison between HumanAuthn and UR Codes - a new generation of privacy-preserving identity
slug: /biometrics/humanauthn-vs-ur-codes
---

# HumanAuthn vs UR Codes

## A New Generation of Privacy-Preserving Identity

Biometric identity systems have evolved over the last two decades. The first large-scale implementation appeared in **biometric e-passports (2005)**, which stored facial data inside NFC chips signed by issuing authorities. While secure, these systems were costly, hardware-dependent, and difficult to deploy widely.

To address these limitations, **UR Codes** introduced digitally signed QR-based identity containers that store facial data and identity attributes in a portable barcode. This reduced hardware requirements and enabled offline verification.

**HumanAuthn represents the next evolution.** Instead of storing biometric data at all, HumanAuthn uses biometric-conditioned cryptography to regenerate keys in real time, enabling identity verification without storing biometrics, templates, or private keys.

---

## What Is HumanAuthn?

HumanAuthn is a biometric-conditioned cryptographic primitive that generates **HumanData-based identity containers** without storing biometric data.

Instead of storing face templates, HumanAuthn:

- Generates high-entropy randomness
- Uses live biometric input
- Reconstructs ephemeral keys
- Decrypts encrypted metadata
- Authenticates via successful decryption

Authentication becomes:

```
human presence → key regeneration → decryption → identity proof
```

No biometric data is stored. No templates. No persistent keys.

This is **human-anchored cryptographic identity**.

---

## How Identity Proof Differs

| | **UR Codes** | **HumanAuthn** |
|---|---|---|
| **Model** | Face matching | Key regeneration |
| **Biometric storage** | Stored in QR | Never stored |
| **Trust anchor** | Issuer | Human presence |
| **Authentication** | Compare face | Decrypt with regenerated key |
| **Keys** | Issuer-signed | Ephemeral |
| **Matching database** | Not required | Not required |
| **Identity proof** | Signature + match | Successful decryption |

---

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

### Unlinkable Identities

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
