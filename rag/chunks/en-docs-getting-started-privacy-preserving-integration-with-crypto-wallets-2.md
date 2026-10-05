---
id: "en-docs-getting-started-privacy-preserving-integration-with-crypto-wallets-2"
title: "Privacy Preserving — Integration with crypto wallets"
sourcePath: "docs/getting-started/privacy-preserving.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "Integration with crypto wallets"
---

# Privacy Preserving

## Integration with crypto wallets

In the context of crypto wallets, traditional biometric verification methods often rely on the storage and comparison of biometric templates, which expose users to privacy risks if the data is shared or stored across multiple platforms.

However, with **ZelfEncrypt** and **ZelfProofs**, crypto wallets can offer **Safeguarding of your assets** and **encryption/decryption** features while preserving user privacy. Each **ZelfProof** is unique, preventing correlation across different wallets or services. This ensures the privacy of user identity without compromising security.

Users can use their facial image to generate a **ZelfProof**, which can act as a secure authentication token or an encryption key without storing any biometric data. This enables a secure and decentralized way to manage crypto assets, encrypt sensitive data, and verify user identity without the risk of biometric leakage across platforms.

The **ZelfEncrypt** system aligns with the principles of Privacy by Design, ensuring users' private information remains unlikable and non-biometric across all wallet interactions.

### Principles of privacy-preserving face verification

In the previous section, we explored how **ZelfProofs** are data structures that are privacy-preserving. It is impossible to determine that two **ZelfProofs**, when compared to each other, were generated from the same person's face or data.

We also highlighted how **ZelfProofs** have the property of **Biometric Verifiability**. Given a person's face and a **ZelfProof**, it is possible to verify that the **ZelfProof** was indeed generated from that person's face, without storing or transmitting any biometric information.

In this section, we outline the **Privacy by Design** principles that should be embedded in any robust system, especially in contexts such as crypto wallets where privacy and security are paramount.
