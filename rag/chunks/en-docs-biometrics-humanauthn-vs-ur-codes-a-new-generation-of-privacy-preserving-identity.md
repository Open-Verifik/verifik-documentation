---
id: "en-docs-biometrics-humanauthn-vs-ur-codes-a-new-generation-of-privacy-preserving-identity"
title: "HumanAuthn vs UR Codes — A New Generation of Privacy-Preserving Identity"
sourcePath: "docs/biometrics/humanauthn-vs-ur-codes.md"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "A New Generation of Privacy-Preserving Identity"
slug: "/biometrics/humanauthn-vs-ur-codes"
url: "https://docs.verifik.co/biometrics/humanauthn-vs-ur-codes"
---

# HumanAuthn vs UR Codes

## A New Generation of Privacy-Preserving Identity

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
