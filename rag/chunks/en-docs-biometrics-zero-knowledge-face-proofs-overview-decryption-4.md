---
id: "en-docs-biometrics-zero-knowledge-face-proofs-overview-decryption-4"
title: "HumanAuthn Overview — Decryption"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-overview.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Decryption"
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

## Decryption

During decryption, also known as authentication phase, HumanAuthn receives a live biometric sample from the individual seeking access. The system combines the biometric input with the stored random entropy to reconstruct ephemeral cryptographic key material. If the biometric sample corresponds to the enrolled individual, the correct key is reconstructed and the HumanID is successfully decrypted, revealing authorized metadata. The act of successful decryption itself constitutes authentication. If the biometric sample does not match, key reconstruction fails and decryption is impossible.

**Summary:**

-   Present HumanID token with biometric input (facial image)
-   HumanAuthn reconstructs ephemeral key
-   Returns verification result with optional metadata

### Preview

At the preview phase, anyone, including user or developer, can visualize the public information of the HumanID (verifiable credential), that is any information made available to the public which is not sensitive and was configured by the developer.

**Summary:**

-   Examine HumanID contents without full verification
-   View public data and configuration settings
-   No biometric verification required

---

## HumanID

Foundational ID functionality in HumanAuthn.

In this section, we detail the main the components and characteristics of creating/verifying a HumanID:

-   **HumanAuthn** - authentication and encryption primitive with live biometric presence.
-   **HumanData** - raw bytes generated and encrypted through HumanAuthn which can be stored in a database, NFC card or HumanID-QR code. During decryption, the HumanID owner's face is used to unlock the private metadata contained in the HumanData.
-   **HumanID-QR** - Portability of a HumanID in the QR code format containing HumanData, public and private metadata.
-   **Encryption and Decryption**. HumanAuthn is the only software capable of encrypting raw bytes (private metadata) into HumanData and decrypting it revealing the contents with the live biometric presence of the HumanID owner.

---
