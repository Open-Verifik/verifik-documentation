---
id: "en-docs-getting-started-how-it-works-1-non-biometric-encryption-4"
title: "How it works — 1. *Non-Biometric* Encryption"
sourcePath: "docs/getting-started/how-it-works.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "1. *Non-Biometric* Encryption"
---

# How it works

## 1. *Non-Biometric* Encryption

* **No Storage of Biometric Data**: One of the **critical aspects** of the **ZelfProof** system is that it does **not store** the actual biometric data (i.e., the face). Instead, the face is used to generate a non-biometric, privacy-preserving binary representation that is used for encryption. This means that even if the ZelfProof is compromised, it does not expose the original biometric data, maintaining the user's privacy.
* **Secure Data Transmission**: When the face is used as an encryption key, the data is encrypted in such a way that it can only be decrypted with the same biometric input. This ensures that the data remains secure both at rest and during transmission, providing end-to-end security that is tightly coupled with the user’s biometric identity.
