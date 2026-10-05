---
id: "en-docs-getting-started-lite-paper-4-related-work-14"
title: "Lite Paper — 4. Related work"
sourcePath: "docs/getting-started/lite-paper.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "4. Related work"
---

# Lite Paper

## 4. Related work

* **No Biometric Storage**: Unlike PassKeys, which stores biometric templates on devices or cloud services, ZelfProofs regenerate private keys on-device using facial biometrics and destroy them post-session, eliminating data leakage risks.
* **Serverless and Offline**: Zelf operates without servers, databases, or internet connectivity, unlike PassKeys’ reliance on relying parties and cloud syncing, ensuring true decentralization and offline functionality.
* **Unlosable Seed Phrases**: Zelf encrypts seed phrases into ZelfProofs, accessible solely via the user’s face, preventing loss without external recovery mechanisms, unlike PassKeys’ device-dependent model.
* **Enhanced Privacy with ZKPs:** Zelf’s zero-knowledge proofs ensure unlinkability and irreversibility, preventing tracking or reverse-engineering of biometric data, a vulnerability in PassKeys’ template-based approach.
