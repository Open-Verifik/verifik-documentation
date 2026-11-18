---
id: "en-docs-biometrics-zero-knowledge-face-proofs-overview-overview"
title: "HumanAuthn Overview"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-overview.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
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
