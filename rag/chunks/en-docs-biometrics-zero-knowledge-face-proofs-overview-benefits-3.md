---
id: "en-docs-biometrics-zero-knowledge-face-proofs-overview-benefits-3"
title: "HumanAuthn Overview — Benefits"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-overview.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Benefits"
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

## Benefits

Private Encryption
    We use elliptic curve cryptography to encrypt metadata without storing facial biometric features.
  
  
    
      
    
    Facial authentication
    HumanAuthn authenticates the user without storing biometric data.
  
  
    
      
    
    Offline/Online Functionality
    HumanAuthn works with or without internet connection, providing flexibility and security.
  
  
    
      
    
    Decentralized
    HumanAuthn works P2P, allowing distributed verification without relying on central servers.
  

---

## Properties

  
    
      
    
    Irreversibility
    Biometric data cannot be reconstructed from stored information. No template, no biometric database risk.
  
  
    
      
    
    Unlinkability
    Authentication events cannot be correlated across services. Each interaction generates fresh cryptographic material.
  
  
    
      
    
    Renewability (Revocability)
    Compromised randomness? Generate new randomness. Your biometric identity remains intact.
  

Unlike static private keys, HumanAuthn generates ephemeral keys

---

## How It Works

### Encryption Phase

During encryption, also known as the enrollment phase, HumanAuthn receives a live biometric sample from the user and independently generates high-entropy random material that contains no biometric features, keys, or feature vectors. This random entropy is stored. Using the biometric sample and the stored entropy, HumanAuthn derives ephemeral cryptographic key material to encrypt identity metadata and generate a verifiable credential (VC) we named HumanID, often encoded as a QR code. All ephemeral keys are immediately discarded after HumanID creation.

**Summary:**

-   Capture biometric sample (face image) with optional liveness detection
-   Ephemeral key generation
-   Generation of HumanID (verifiable credential)
-   Storage of HumanID on cloud/IPFS
-   Return of HumanID token for future verification
