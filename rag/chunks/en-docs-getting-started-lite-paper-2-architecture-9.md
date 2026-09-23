---
id: "en-docs-getting-started-lite-paper-2-architecture-9"
title: "Lite Paper — 2. Architecture"
sourcePath: "docs/getting-started/lite-paper.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "2. Architecture"
---

# Lite Paper

## 2. Architecture

The preview function is very helpful for many reasons, one of those is that we can retrieve the publicData stored inside the ZK-Face Proof without really going to the process of decryption for the metadata that has been stored safely with your face and an optional password.

Each ZelfProof looks different even thought they contain the exact same content, public data, meta data, face authentication and password. To identify unique ZK-Face Proofs without centralized databases or servers, Zelf leverages decentralized storage solutions like Arweave, IPFS, and Walrus. We upload ZK-Face Proofs as QR codes, each under 70kb, with key-value pairs serving as identifiers. One key, the `ZelfName`, enables efficient querying across these decentralized networks.

***

Zelf’s technology unlocks a world of possibilities for secure, decentralized applications:

1. **Secure Seed Phrase Management:** Encrypt seed phrases with Zelf Name Service and access them using only your face, eliminating the need for hardware wallets or third-party custodians.
2. **Offline Resilience:** Operate in low-resource environments, such as during power outages, as long as your device has power.
3. **Privacy and Control:** Store ZelfProofs locally or on decentralized networks like Arweave or IPFS, ensuring you retain full ownership of your data.
4. **Cross-Chain Compatibility:** Manage assets across multiple blockchains with a single, user-friendly solution.

By removing intermediaries, reducing costs, and prioritizing user control, Zelf delivers a truly decentralized experience that empowers individuals to take charge of their digital lives.
