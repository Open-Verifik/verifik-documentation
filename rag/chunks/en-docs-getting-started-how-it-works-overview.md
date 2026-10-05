---
id: "en-docs-getting-started-how-it-works-overview"
title: "How it works — Overview"
sourcePath: "docs/getting-started/how-it-works.md"
locale: "en"
category: "getting-started"
tags:
  - "getting-started"
sourceAnchor: "Overview"
---

# How it works

## Overview

## Overview

The Zero Knowledge Face Proof uses the user's face as the primary input, optionally combined with metadata and/or a password. A cryptographic AI algorithm generates a random ephemeral public key from the user's face, which is then used to encrypt metadata, producing encrypted bytes called **ZelfProof**. These **ZelfProofs**, which typically contain minimal encrypted metadata and are about 350 bytes in size, can be easily converted into QR codes for various identification mediums.

Instead of comparing facial templates, Zelf verification involves decrypting a given ZelfProof using the correct corresponding private key generated up on a live face scan. A successful decryption verifies the person, while failure indicates a mismatch.

## How does Zelf Name Service works

Zelf is built on a foundation of privacy-preserving cryptography. Here’s an in-depth look at the process:

### **1. Registration (Encrypting)**

* **Face & Metadata Capture**: The user provides a live face scan along with sensitive information like the mnemonic phrase.
* **Zelf Processing**: The captured face data is used as input to generate a private key through proprietary cryptographic algorithms. Importantly, the face data is not stored or used beyond this step, ensuring compliance with the most strict privacy regulations. The system only utilizes the face in the current session to generate a ZelfProof.
  * **ZelfProof Processing**: A **ZelfProof**, which is a privacy-preserving, non-biometric binary structure, is generated. Unlike a biometric template, ZelfProof is:
    * Encrypted
    * Unique to each session
    * Biometrically verifiable but **non-biometric** in **nature**
* **Output**: A new ZelfProof is created every time you encrypt metadata with your face & password (optional). This ZelfProof is later saved in IPFS, Arweave, Walrus, Nostr.
  * **No Reuse Risk**: Even if someone captures your face and password, without the correct ZelfProof for that session, they cannot retrieve the metadata encrypted initially. Similarly, without the right face or password, an old or different ZelfProof will not work.
