---
id: "en-docs-getting-started-lite-paper-2-architecture-6"
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

Zelf’s architecture is designed for simplicity and security, with three core functions that make encryption intuitive for end users:

#### **Encryption**:

![Encryption Process](https://1734807472-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FpZcqM4Fiw6bW4Zvc28S3%2Fuploads%2FXUHzsIA78nHdmua5rYah%2Fimage.png?alt=media&token=1725fe5e-c3ea-417d-9536-8a24dc6c77b2)

* Users create a ZelfProof in two formats: a raw ZelfProof or a QR code containing its binary representation.
* Inputs include an optional password, an Application Auth Key (for B2B use), and a required FaceBase64 (biometric data). Users can customize settings, such as requiring a live face scan or adjusting tolerance levels (Soft, Regular, Hard).
* The ZelfProof contains public data (e.g., wallet addresses, viewable via preview) and private metadata (encrypted, accessible only with your face).

Zelf’s encryption technology addresses a critical limitation in current biometric-based identity verification systems offered by providers such as FaceTec, Jumio, Onfido, Sumsub, Shufti Pro, Trulioo, ComplyCube, Fractal ID, AuthenticID, and iProov. These systems are built web2 centric, typically requiring storing biometric data in data bases, which introduces privacy and security risks. In contrast, Zelf is a prioneer in biometric encryption without retaining biometric data, a capability that distinguishes it from competitors. While the former providers deliver robust services and hold significant market share in web2, their technologies often lack the same level of innovation needed in decentralized solutions and operate at costs magnitudes higher than Zelf’s solution.

#### Inputs

PropertyTypeDescriptionidentifierString * identifier that will be saved into the ZK-Face ProoffaceBase64Base64 Blob *The selfie in base64 format that will be used to encrypt the ZK-Face ProofrequireLivenessBoolean *when set as true, we perform all the liveness validations so we make sure it's not AI, deep fakes or any other form of hack.livenessLevelString *We have different levels of tolerance when it comes to the liveness detection: SOFT, REGULAR, HARD.livenessDetectionPriorCreationBooleanIf set as true then the liveness detection happens before the encryption. if this is set as false, it will be done during the encryption process.publicDataObject Public information you want to be added to the ZK-Face Proof and anyone can preview it without the face that encrypted it.metadataObject *Private information that you want to be encrypted inside the ZK-Face Proof and only you can see/decrypt it.osString [DESKTOP, ANDROID, IOS]Origin of the request, we save this just to know if this was generated from the SDK in Mobile devices or the Docker Container.passwordString (optional)the password is used to enforce the encryption even more, it works as the second layer of security.referenceFaceBase64Base64 Blob (optional)When systems or applications have the selfies stored somewhere, we can help them to do a 1:1 comparison of two selfies prior the encryption of the ZK-Face Proof.verifierKeyString (optional)This is a custodial password, it works as a third layer of security where the server or SDK has control over certain ZK-Face Proofs so it cannot be decrypted without the verifier authorization.

#### Output:

Once the encryption is done properly and the liveness detection passes the required filters, the ZK-Face Proofs are given in two formats: the raw-format and the QR Code. In the case of the QR code, this works best for Zelf Name Service because it can be saved easily in any decentralized storage system (ie. blockchain, IPFS, Nostr coming soon) and also provides users a distributed backup solution by enabling them to store and safe-guard it locally or in physical form.
