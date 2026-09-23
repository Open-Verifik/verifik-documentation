---
id: "en-docs-biometrics-zero-knowledge-face-proofs-overview-differences-between-webauthn-and-humanauthn-2"
title: "HumanAuthn Overview — Differences between WebAuthn and HumanAuthn"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-overview.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Differences between WebAuthn and HumanAuthn"
slug: "/biometrics/humanauthn"
url: "https://docs.verifik.co/biometrics/humanauthn"
---

# HumanAuthn Overview

HumanAuthn represents a step forward from authentication standards like WebAuthn, created by the FIDO Alliance.
As its name implies, HumanAuthn is dependent on human presence, a revolutionary approach to the old standard of hardware-root-of trust, based on authenticating users by verifying the device they previously enrolled.
HumanAuthn is both an authentication and cryptographic primitive that combines Biometrics + Cryptography + Randomness (stored entropy), that enables the creation of IDs, and privacy-preserving data structures, that works as verifiable credentials. Rather than storing biometric templates, feature vectors, or keys, HumanAuthn relies on stored random entropy and face-conditioned cryptographic operations to perform authentication.
A core property of HumanAuthn is **zero-knowledge disclosure at the system level**: the system reveals no biometric information beyond a binary authentication outcome. This is a system property, not a cryptographic zero-knowledge proof primitive. As a result, users can be authenticated using face recognition without their biometric data ever being stored, reconstructed, or exposed to verifiers.
---
| Layer | FIDO Alliance | Verifik |
| --- | --- | --- |
| Framework | FIDO Framework | Proprietary Framework |
| Primitive | WebAuthn | HumanAuthn |
| Type of Primitive | Authentication | Authentication + Encryption |
| Implementations | PassKeys | smartENROLL smartACCESS Access Control |
| Consumer Product | Products built on Passkeys (Apple, Google, Microsoft integrations) | Products built on Verifik's implementations |
---

## Differences between WebAuthn and HumanAuthn

### WebAuthn

-   User proves possession of a **device, where private key resides**
-   Biometric / PIN unlocks the device authenticator
-   Signature proves authenticity
-   Device-centric trust or Hardware RoT

### HumanAuthn

-   User proves **live biometric presence = key reconstruction**
-   Biometric + stored randomness reconstructs an **ephemeral key**
-   Successful decryption proves authenticity
-   Human-centric trust or Biometric RoT

---

## Contract Architecture Comparison

  
    
      WebAuthn contract
      {'Browser → Authenticator → Yes / No'}
      
        Developer never handles private keys
        Browser abstracts hardware &amp; crypto
        Output is a cryptographic assertion
      
    
    
      HumanAuthn contract
      {'System → Human → Yes / No'}
      
        Developer never handles biometric data
        System abstracts face recognition &amp; crypto
        Output is successful decryption (or failure)
      
    
  
  
    &#x1F4CC;
    
      In both cases:
      
        The secret never leaves its boundary
        The developer only gets a verifiable outcome
      
    
  

---

## Comparison Table

| Security | WebAuthn | HumanAuthn |
| --- | --- | --- |
| Anchor Trust | Hardware | Biometric/Human |
| Stored element | Private Keys | Randomness |
| Private Key lifetime | Long-term | Ephemeral |
| Private Key storage | Secure Enclave / TPM | Never stored |
| Private Key Reuse | Yes | No |
| Biometric data stored | No | No |
| Biometric templates | No | No |
| Encrypted metadata | No | ✅ |
| Credentials correlation | Sometimes (per RP ID) | No (structurally unlinkable) |
| Offline verification | Limited | Native |

---
