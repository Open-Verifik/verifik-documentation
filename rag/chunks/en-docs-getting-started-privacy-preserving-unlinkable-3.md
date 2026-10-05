---
id: "en-docs-getting-started-privacy-preserving-unlinkable-3"
title: "Privacy Preserving — **Unlinkable**"
sourcePath: "docs/getting-started/privacy-preserving.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "**Unlinkable**"
---

# Privacy Preserving

## **Unlinkable**

**Definition:** Given two data structures (e.g., **ZelfProofs**), it should be impossible to tell whether they were generated from the same data (face + metadata) or from different data.

**Application in Crypto Wallets:** In the context of crypto wallets, **unlinkability** ensures that two **ZelfProofs** generated for different wallets or services cannot be correlated. Even if a user accesses multiple wallets using the same facial image, each generated **ZelfProof** is unique. This guarantees that user activity across wallets cannot be tracked or linked together, providing enhanced privacy and security for crypto transactions.

### Irreversibility

**Definition:** Given a **ZelfProof**, it should be impossible to reconstruct or reverse-engineer the original face used to generate it. Traditional face verification systems do not satisfy this property, as they rely on a similarity score between two biometric templates, which exposes them to **Hill Climbing Attacks**.

**Application in Crypto Wallets:** For crypto wallets, irreversibility means that even if an attacker gains access to the **ZelfProof**, they cannot extract the user's facial data. The facial image is never stored, and no similarity score is exposed, preventing the system from being compromised through biometric leakage or reverse engineering. This ensures that wallet access remains secure, and users are protected from identity theft.

### Revocability and Renewability in Zelf

**Definition:** In traditional biometric systems, only a single template or feature vector can be generated from one image. However, with **ZelfEncrypt**, multiple unique **ZelfProofs** can be generated from the same facial image. While a person cannot change their face, they can generate new **ZelfProofs** as needed.

**Application in Crypto Wallets:** The ability to generate multiple **ZelfProofs** from the same face provides an additional layer of security for crypto wallets. If a **ZelfProof** becomes compromised or a user wishes to update their wallet credentials, a new **ZelfProof** can be generated from the same face without any loss of functionality or privacy. This revocability ensures that users can update their wallet access keys without the risk of being permanently compromised.
