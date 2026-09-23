---
id: "en-docs-getting-started-lite-paper-6-enterprise-solution-17"
title: "Lite Paper — 6. Enterprise solution"
sourcePath: "docs/getting-started/lite-paper.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "6. Enterprise solution"
---

# Lite Paper

## 6. Enterprise solution

Zelf adapts MPC to integrate multiple biometric faces within each ZelfProof, enabling collaborative signing without centralized dependencies. During setup, authorized individuals (e.g., a CEO and CFO) enroll their facial biometrics via the Zelf app, bypassing liveness checks to allow flexible registration. The system encrypts the wallet’s seed phrase and metadata, distributing biometric-derived key shares across the enrolled faces using ZKPs. These shares are embedded in the ZelfProof, stored securely as a QR code on Arweave/IPFS.

For signing transactions, all authorized faces must participate in a decentralized signing ceremony. Each user presents a live facial scan, verified by IDLive Face’s liveness detection, to regenerate their key share. The Zelf app orchestrates the MPC protocol on-device, combining shares via a threshold mechanism (e.g., 2-of-3 faces required) to reconstruct the private key temporarily for signing. The key is then destroyed, ensuring no persistent storage. This offline process, free from servers or internet reliance, guarantees privacy through unlinkability and irreversibility.

This multi-face MPC approach is critical for succession planning, allowing seamless key recovery if an authorized individual is unavailable. Enterprises can configure threshold policies (e.g., 50% of enrolled faces), enhancing resilience. Combined with Zelf’s serverless design, it mitigates risks of data breaches, aligning with GDPR compliance and offering a robust, privacy-preserving alternative to traditional MPC wallets.

#### P2P Identity validation with decentralized KYC using ZelfProofs

Zelf’s Zero Knowledge Face Proofs (ZelfProofs) introduces a transformative use case for Peer-to-Peer (P2P) transactions, offering a decentralized Know Your Customer (KYC) solution that validates identities without storing biometric data. In P2P ecosystems, such as cryptocurrency exchanges, NFT marketplaces, or decentralized lending platforms, trust between parties is paramount. Traditional KYC processes rely on centralized entities that collect and retain sensitive biometric or personal data, exposing users to privacy risks and data breaches. Zelf redefines this paradigm by enabling secure, privacy-preserving identity verification directly between peers.

The process begins when a user enrolls their facial biometric via the Zelf app. IDLive Face’s passive liveness detection verifies the authenticity of the input, countering spoofing attempts without requiring active user actions. The biometric data is then processed using zero-knowledge proofs (ZKPs) to generate a unique, anonymized identity token—embedded within a ZelfProof—without retaining raw biometric information. This token is shared with the P2P counterparty during a transaction, either via a secure QR code or peer-to-peer communication channel.

For validation, the receiving party uses their Zelf app to initiate a liveness check, prompting the sender to provide a live facial scan. The app compares the live scan against the ZKP-derived token, regenerating a temporary verification key on-device. If the liveness probability (e.g., ≥ 0.5) and quality score meet thresholds, the identity is confirmed, enabling the transaction. This process occurs offline, leveraging Zelf’s serverless architecture, with no data stored on centralized servers or databases.

This decentralized KYC approach ensures privacy through unlinkability, preventing correlation of transactions, and irreversibility, preventing reverse-engineering of biometric data. It eliminates the need for third-party KYC providers, reducing costs and compliance burdens while enhancing user trust. Enterprises can integrate this into P2P platforms, offering volume-based licenses, while individuals benefit from a seamless, secure experience. By avoiding biometric storage, Zelf complies with regulations like GDPR, positioning it as a leader in privacy-focused P2P ecosystems.
