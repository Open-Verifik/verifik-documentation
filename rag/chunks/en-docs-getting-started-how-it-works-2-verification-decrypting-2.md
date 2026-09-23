---
id: "en-docs-getting-started-how-it-works-2-verification-decrypting-2"
title: "How it works — **2. Verification (Decrypting)**"
sourcePath: "docs/getting-started/how-it-works.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "**2. Verification (Decrypting)**"
---

# How it works

## **2. Verification (Decrypting)**

* **Live Face Scan**: During the encryption, the user performs a live face scan. This scan is not stored but is used as a cryptographic key to initiate the verification process. ***It’s important to note that the system doesn’t compare the face to any stored biometric data.*** Instead, the face scan acts as a dynamic input to *regenerate* the cryptographic structure (**ZelfProof**) that was created during registration.
* **ZelfProof Matching**: The ZelfProof generated during registration (when the user initially encrypted their data using their face) is dynamically recreated during the decryption process. However, since the ZelfProof is **non-biometric** and unique to each session, the system does not retrieve or store the user's face data. It merely checks that the cryptographic structure matches the one generated during the session without retaining biometric information.
* **Decryption of Private Information**: If the regenerated ZelfProof from the live scan matches the encrypted structure, any optional sensitive information (such as the mnemonic phrase) that was secured during registration is **decrypted**. This allows the user access to their wallet so they can either see the mnemonic phrase to back it up or to sign a transaction inside our Zelf Name Service App.
