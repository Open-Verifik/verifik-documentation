---
id: "en-docs-getting-started-lite-paper-introducing-zero-knowledge-face-proofs-4"
title: "Lite Paper — **Introducing Zero Knowledge Face Proofs**"
sourcePath: "docs/getting-started/lite-paper.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "**Introducing Zero Knowledge Face Proofs**"
---

# Lite Paper

## **Introducing Zero Knowledge Face Proofs**

We have seen how two privacy-preserving data structures generated from the same data cannot be compared to determine any kind of similarity. But, given a Biometric Sample (such as a facial image), can it be determined that the privacy-preserving data structure was generated from a similar biometric sample? This is where Zelf's algorithm comes in. It makes possible the verification of privacy-preserving data structures without compromising user privacy.  Although ZelfProofs, the data structures produced by the ZelfEncrypt algorithm, are non-biometric in nature, they can still be used for Biometric Verification.

#### **Unlinkable**

Unlinkability is a core cryptographic property ensuring that two or more data structures—such as Zelf’s Zero Knowledge Face Proofs (ZelfProofs)—cannot be correlated to determine whether they were generated from the same input data (e.g., a user’s facial biometric and associated metadata) or distinct inputs. This property guarantees that each ZelfProof is cryptographically independent, preserving user privacy by preventing external observers from linking multiple proofs to a single user or dataset.

\
In Zelf’s architecture, unlinkability is achieved through advanced zero-knowledge cryptographic techniques. When a user generates a ZelfProof, the system employs a unique combination of biometric data (the user’s face) and metadata (e.g., seed phrases or private keys) to create an encrypted output. Each ZelfProof is generated with fresh cryptographic parameters, ensuring that no identifiable patterns or shared elements exist between proofs, even if derived from the same biometric input. This process eliminates the possibility of cross-referencing ZelfProofs to infer user identity or activity, providing a robust defense against tracking or profiling.\
\
In the context of cryptocurrency wallets, unlinkability is critical for enhancing user privacy and security. Zelf enables users to generate distinct ZelfProofs for multiple wallets or services, each tied to the same facial biometric as the private key. Despite using the same face, each ZelfProof remains cryptographically unique, making it computationally infeasible to link proofs across different wallets or transactions. For example, a user managing assets on Ethereum and Solana can create separate ZelfProofs for each blockchain, and no observer—whether a malicious actor or a service provider—can correlate these proofs to trace the user’s activity across chains. This ensures that user transactions remain private and untraceable, aligning with the ethos of decentralized finance.\
\
Unlinkability is a cornerstone of Zelf’s mission to deliver true financial sovereignty. By ensuring that user interactions with crypto wallets remain private and unlinkable, Zelf addresses a critical pain point in decentralized finance: *the vulnerability of user data to tracking and exploitation*. Combined with Zelf’s offline-capable, zero-cost architecture and integration with decentralized storage solutions like Arweave and IPFS, unlinkability empowers users to control their digital assets with unmatched security and autonomy. This property positions Zelf as a transformative solution for individuals seeking to navigate the decentralized economy without compromising privacy.

#### Irreversibility

Irreversibility is a fundamental cryptographic property ensuring that a Zero Knowledge Face Proof (ZelfProof) cannot be reverse-engineered to reconstruct the original facial biometric used to generate it. Unlike traditional face verification systems, which rely on similarity scores between stored biometric templates and are vulnerable to hill climbing attacks; Zelf’s architecture eliminates such risks by never storing facial data or exposing comparable metrics.\
\
In cryptocurrency wallets, irreversibility safeguards user privacy and security. Even if an attacker intercepts a ZelfProof (public key), they cannot extract the user’s facial biometric or related metadata, such as seed phrases. This ensures that wallet access remains secure, protecting users from identity theft or unauthorized transactions. By generating and destroying the private key (derived from the user’s face) per session, Zelf prevents biometric leakage, reinforcing its decentralized, serverless design.
