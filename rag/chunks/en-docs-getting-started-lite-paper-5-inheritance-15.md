---
id: "en-docs-getting-started-lite-paper-5-inheritance-15"
title: "Lite Paper — 5. Inheritance"
sourcePath: "docs/getting-started/lite-paper.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "5. Inheritance"
---

# Lite Paper

## 5. Inheritance

Zelf Proofs offer a robust, privacy-centric solution for cryptocurrency inheritance, enabling family members to recover funds after a loved one’s passing without the risks associated with lost or inaccessible seed phrases. This innovative feature allows users to pre-authorize recovery by encrypting their seed phrases with the facial biometrics of trusted individuals, such as a spouse, children, or other designated heirs, at any point of time inside the Zelf Name Service app or via our SDKs or APIs. Unlike traditional methods that rely on physical seed phrase backups or *third-party custodians*, Zelf empowers users to embed these authorizations secretly within the Zelf Name record stored in the decentralized storage options we provide to the end user, ensuring a seamless and secure contingency plan.

#### **Encryption process: pre-authorizing family members**

The encryption process begins when the wallet owner uses the Zelf mobile app to generate a ZelfProof. During this phase, the owner can opt to include additional authorized faces beyond their own. Using the app’s multi-face encryption feature, the owner captures facial images of family members (e.g., a high-resolution selfie for each). These images are processed *without a liveness test*, allowing flexibility in setup—images can be taken at different times or locations. The ZelfProof encrypts the seed phrase and private key metadata, using the biometric data of all authorized individuals into the cryptographic structure using zero-knowledge proofs (ZKPs). The resulting encrypted data can be stored as a QR code and linked to a Zelf Name, securely archived on decentralized platforms like Arweave or IPFS, or kept locally on the owner’s device. *No biometric data is stored at all*; instead, ZKPs ensure the information is obfuscated and unusable without proper decryption. Your face is your private key, and in this case, your spouse/son/daughter/mother/father face is the private key as well!

#### Decryption and recovery process: ensuring authenticity

Upon the owner’s passing, family members initiate recovery by accessing the Zelf app with their own device. They present their face to the app, triggering the decryption process. Here, IDLive Face’s passive liveness detection is *activated*, requiring a live facial scan to verify the individual’s presence and prevent spoofing attempts (e.g., deepfakes, printed photos). The app generates a private key using the ZK-FaceProof as the public key. If the liveness detection passes successfully, indicated by a probability score ≥ 0.51 | 0.70 | 0.85 \[depending on the configuration in the calibration] from the liveness check, the system regenerates the private key on-device. This key unlocks the encrypted seed phrase, granting access to the wallet and its funds. The liveness check, configurable with settings like REGULAR or HARDENED calibration, balances security (low APCER) and usability (low BPCER), ensuring only authorized heirs can proceed.

Zelf’s serverless, offline architecture ensures the entire process occurs locally, *eliminating reliance on centralized servers or databases.* The use of ZKPs guarantees unlinkability; preventing correlation of authentication attempts, and irreversibility; prohibiting reverse-engineering of biometric data. This protects against unauthorized access even if the QR code is intercepted or seen by other people inspecting the blockchain transactions. Additionally, the one-time key regeneration per session prevents reuse, enhancing security. Family members can repeat the process as needed, with no stored biometric data retained, aligning with GDPR compliance and Zelf’s privacy-first ethos.

To prepare for inheritance, users should document the storage location of the ZelfProof (e.g., a physical QR code copy or purchase a life-time license for the Zelf Name record) and inform trusted family members of their authorized status. While Zelf simplifies recovery, users are encouraged to consult legal advisors to ensure compliance with local inheritance laws, as digital asset transfer rules vary by jurisdiction. This proactive approach ensures a smooth access of funds, preserving the owner’s digital legacy with confidence.
