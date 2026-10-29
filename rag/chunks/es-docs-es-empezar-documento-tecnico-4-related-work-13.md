---
id: "es-docs-es-empezar-documento-tecnico-4-related-work-13"
title: "Documento Técnico — 4. Related work"
sourcePath: "docs-es/empezar/documento-tecnico.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "4. Related work"
---

# Documento Técnico

## 4. Related work

The convergence of biometric authentication and decentralized cold wallet technology represents a transformative frontier in cryptocurrency security and user experience. **Zelf pioneers** this space by integrating Zero Knowledge Face Proofs (**ZelfProofs**)—a privacy-preserving, serverless solution that leverages *facial recognition* to regenerate *private keys on-device without storing sensitive biometric data*. This approach ensures true decentralization, enhances security, and eliminates reliance on external systems or hardware. To contextualize Zelf’s position, this section examines competitors in two key areas: *biometric authentication for cryptocurrency wallets* and *decentralized cold wallets with advanced security features*. Each competitor is evaluated based on its technology, features, and differentiation from Zelf.\
\
The demand for secure, user-friendly cryptocurrency wallets has spurred innovation in biometric authentication and cold storage solutions. While traditional wallets rely on storing seed phrases or hardware devices, emerging projects are exploring biometrics and zero-knowledge proofs (ZKPs) to streamline access and enhance privacy. Zelf’s unique combination of facial biometrics and ZKPs positions it as a leader in this niche, though several competitors offer comparable features or overlapping technologies. The following analysis highlights the most relevant players in the field.

#### Zengo

* **Technology:** Zengo is a mobile-first cryptocurrency wallet that employs multi-party computation (MPC) and facial recognition (FaceTec is their biometrics provider) for secure key management. It replaces seed phrases by distributing private keys across multiple devices, using biometrics for access authentication. However, this centralized approach stores biometric data as face vectors for decryption comparisons, risking fund loss if hacked. Additionally, if the service provider ceases operations, users could lose access to their recovery method for seed phrases.
* **Key Features:**
  * Facial recognition for user authentication (Provided by Facetec > KYC Biometric provider).
  * MPC-based key distribution, removing the need for seed phrases.
  * Supports major cryptocurrencies
  * *Cloud-based* recovery tied to biometric data.
* **Comparison to Zelf:** Zengo shares Zelf’s use of biometrics but diverges in its reliance on MPC and **cloud infrastructure**. While Zengo offers a seamless experience, its dependence on external systems contrasts with Zelf’s fully decentralized, serverless approach. ZelfProofs regenerate keys offline and locally on-device without storing biometric data, providing superior privacy and autonomy.

#### Dfns

* **Technology:** Dfns provides a decentralized wallet solution with biometric authentication and zero-knowledge credentials. It leverages the **WebAuthn** protocol (supporting facial or fingerprint recognition) and delegated signing to secure transactions without requiring users to manage private keys directly. WebAuthn now is known as **PassKeys.**
* **Key Features:**
  * WebAuthn-based biometric authentication.
  * Zero-knowledge credentials for identity verification.
  * Delegated signing for transaction security.
* **Comparison to Zelf**: Dfns incorporates ZKPs and biometrics, aligning with Zelf’s privacy focus. However, it relies on external protocols and services, whereas ZelfProofs operate entirely offline on the user’s device. This makes Zelf censorship resistance, more decentralized and less vulnerable to third-party risks.\\

#### **AuthenTrend AT.Wallet**

* **Technology:** AuthenTrend’s AT.Wallet is a hardware-based cold wallet that uses fingerprint authentication for access. It remains offline, employing Bluetooth Low Energy for secure pairing with mobile devices.
* **Key Features:**
  * Fingerprint biometric authentication.
  * Air-gapped cold storage.
  * Multi-currency support (e.g., Bitcoin, Ethereum).
* **Comparison to Zelf:** AT.Wallet uses biometrics for security but requires a physical device and stores fingerprint data on the hardware. Zelf’s software-based solution avoids hardware dependencies and regenerates keys per session without retaining biometric data, offering greater flexibility and privacy.

#### **NGrave Zero**
