---
id: "en-docs-getting-started-lite-paper-4-related-work-13"
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

* **Technology:** NGrave Zero is a premium hardware wallet featuring air-gapped operation and fingerprint authentication. It uses a secure element chip and QR code-based signing to ensure transactions remain offline.
* **Key Features:**
  * Air-gapped with no internet connectivity.
  * Fingerprint biometric authentication.
  * EAL7-certified secure element (highest industry standard).
  * Supports multiple cryptocurrencies and NFTs.
* **Comparison to Zelf:** NGrave Zero offers robust security and biometric access, but its hardware-centric design contrasts with Zelf’s device-agnostic approach. Additionally, NGrave stores biometric data on the device, while ZelfProofs prioritize privacy by not retaining such information.

#### **ELLIPAL Titan 2.0**

* **Technology:** ELLIPAL Titan 2.0 is an air-gapped hardware wallet that uses QR codes for transaction signing, ensuring complete isolation from the internet. It supports a broad ecosystem of cryptocurrencies and decentralized applications (dApps).
* **Key Features:**
  * Fully air-gapped with QR code signing.
  * Supports over 10,000 cryptocurrencies and dApps.
  * Tamper-proof with self-destruct mechanism.
* **Comparison to Zelf:** ELLIPAL Titan 2.0 excels in offline security but lacks biometric authentication. Zelf integrates facial recognition with ZK-Face Proofss, providing a user-friendly alternative that doesn’t require physical hardware, making it more accessible and versatile.

#### **SafePal S1**

* **Technology:** SafePal S1 is an air-gapped hardware wallet that uses QR codes for transaction signing and supports a wide range of cryptocurrencies. It integrates with the SafePal app for asset management and dApp interaction.
* **Key Features:**
  * Air-gapped with no Bluetooth, Wi-Fi, or USB connectivity.
  * Supports over 10,000 cryptocurrencies.
  * Self-destruct mechanism for tampering attempts.
* **Comparison to Zelf:** SafePal S1 prioritizes security through isolation but does not offer biometric features. Zelf’s combination of biometric key regeneration and decentralized operation provides a distinct advantage in usability and privacy without hardware constraints.

#### Emerging Projects and Trends

Several nascent projects are exploring the intersection of biometrics, ZKPs, and decentralized wallets, though *they fall short* of Zelf’s specific implementation:

* Polygon ID: Utilizes ZKPs for decentralized identity verification but focuses on credentials rather than biometric wallet authentication.
* zkSafe Wallet: Employs ZKPs and account abstraction for confidential multisig wallets, targeting institutional users like DAOs, without biometric integration.

#### PassKeys (WebAuthn) vs. Zero Knowledge Face Proofs

PassKeys, built on the WebAuthn standard, is a passwordless authentication protocol developed by the FIDO Alliance to enhance security and user experience. It enables biometric (e.g., facial or fingerprint recognition) or device-based authentication (e.g., security keys) to generate public-private key pairs for secure login to websites and applications. PassKeys relies on a trusted authenticator (e.g., a smartphone or hardware token) t**o store private keys and biometric templates**, often **syncing** them across devices via **cloud services like iCloud or Google**. While PassKeys improves security over passwords, it **depends on centralized or semi-centralized infrastructure**, such as relying parties (servers) and cloud storage, which introduces potential vulnerabilities and privacy concerns.\
\
While PassKeys enhances web authentication, its reliance on centralized infrastructure and stored biometrics limits its privacy and autonomy. Zelf’s decentralized, serverless design and Zero Knowledge Face Proofs deliver unmatched security, making seed phrase loss impossible and empowering users with true financial sovereignty.

#### How Zelf Surpasses PassKeys

*Zelf’s Zero Knowledge Face Proofs (ZelfProofs) redefine secure authentication for cryptocurrency wallets by offering a fully decentralized, privacy-first alternative:*
