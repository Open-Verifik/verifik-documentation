---
id: "es-docs-es-empezar-documento-tecnico-3-technical-overview-11"
title: "Documento Técnico — 3. Technical overview"
sourcePath: "docs-es/empezar/documento-tecnico.md"
locale: "es"
category: "empezar"
tags:
  - "empezar"
sourceAnchor: "3. Technical overview"
---

# Documento Técnico

## 3. Technical overview

Biometric authentication, exemplified by Zelf’s Zero Knowledge Face Proofs (ZelfProofs), is revolutionizing cryptocurrency wallet security, offering a seamless alternative to traditional seed phrase management. While this technology enhances usability and protects digital assets, it raises privacy concerns, as biometric data are classified as sensitive personal information under regulations like the GDPR (General Data Protection Regulation). This is especially critical in systems where biometric references are centrally stored, exposing users to risks if compromised. Should an attacker access a subject’s biometric signal representation, the associated reference becomes vulnerable to impersonation, jeopardizing wallet security.

Zelf tackles these risks effectively by regenerating private keys on-device using facial recognition, without storing biometric data. This serverless, offline approach ensures seed phrases remain secure and with permanent access, eliminating the need for centralized databases. By leveraging zero-knowledge proofs, Zelf ensures unlinkability and irreversibility, protecting users from impersonation and advancing its mission of decentralized financial sovereignty.

Zelf’s Zero Knowledge Face Proofs (ZelfProofs) represent a groundbreaking advancement in cryptocurrency wallet security, leveraging cutting-edge biometric authentication to eliminate the vulnerabilities of traditional self-custody wallets and seed phrase management architectures. At the core of this system is the integration of IDLive Face, a passive facial liveness detection technology developed by ID R\&D. IDLive Face employs a single selfie to perform real-time spoofing detection, countering threats such as deepfakes, digitally manipulated images, and AI-generated content without requiring user interaction (e.g., no blinking or head-turning). This is achieved through two synergistic components:

* **IDLive Face Presentation Attack Detection:** Identifies and mitigates physical spoofing attempts, ensuring the authenticity of the facial input.
* **IDLive Face Deepfake Detection:** Protects against advanced digital manipulations, including AI faceswaps, synthetics (e.g., Midjourney, Stable Diffusion), and altered images (e.g., watermarks, screenshots), enhancing resilience against fraudulent access.

Zelf enhances this foundation by combining IDLive Face’s liveness verification with zero-knowledge proofs (ZKPs) to regenerate private keys on-device using facial biometrics. Unlike conventional systems, ZelfProofs do not store biometric data, relying instead on a serverless, offline architecture to encrypt seed phrases into secure, in permanent access formats (e.g., QR codes for storage on Arweave/IPFS).  This technical synergy not only fortifies security against impersonation but also aligns with Zelf’s mission to deliver financial sovereignty, offering a robust, privacy-preserving alternative to hardware wallets and cloud-dependent authentication systems.

IDLive Face’s superiority is further evidenced by its iBeta Level 1 and 2 ISO 30107-3 compliance, achieving a 0% Attack Presentation Classification Error Rate (APCER) in testing, outperforming many rivals like OCR Labs or Facia, which rely on similar certifications but lack the same passive precision. Its ability to detect deepfakes, AI synthetics, and manipulated images using a single selfie, without specialized hardware, surpasses solutions like FaceTec’s 3D FaceMaps, which require complex 3D modeling, or Oz Forensics, which focuses on active challenges. Additionally, IDLive Face’s on-device option reduces latency and enhances privacy, aligning with Zelf’s serverless, offline design and eliminating biometric storage risks inherent in cloud-dependent competitors like Sumsub.

Our liveness detection middleware robustly safeguards users by securing each ZK-Face Proof, ensuring it is uniquely linked to an individual's face and protected against targeted attacks. With IDLive Face integrated into the encryption/decryption process we can safely say that each ZK-Face Proof is highly protected. This ensures that only genuine facial inputs are used to generate/regenerate private keys, protecting seed phrases from spoofing attempts.&#x20;

When we perform a liveness check we get the following criteria considered in the process:
