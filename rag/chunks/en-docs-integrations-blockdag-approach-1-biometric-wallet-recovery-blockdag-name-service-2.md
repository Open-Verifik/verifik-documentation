---
id: "en-docs-integrations-blockdag-approach-1-biometric-wallet-recovery-blockdag-name-service-2"
title: "BlockDAG — Approach 1: Biometric Wallet Recovery + BlockDAG Name Service"
sourcePath: "docs/integrations/blockdag.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Approach 1: Biometric Wallet Recovery + BlockDAG Name Service"
---

# BlockDAG

## Approach 1: Biometric Wallet Recovery + BlockDAG Name Service

#### Technical Implementation

**Core Features:**

* Implement `john.blockdag` naming convention
* Generate BlockDAG-compatible wallet addresses
* Integrate with BlockDAG's native token economics
* Provide API endpoints for name resolution

**API Integration Points:**

```javascript
// Search for available names
POST /blockdag-name-service/search
{
  "name": "john.blockdag",
  "duration": "1" // years
}

// Register name with biometric recovery
POST /blockdag-name-service/lease-offline
{
  "name": "john.blockdag",
  "zelfProof": "encrypted_biometric_proof",
  "blockdagAddress": "bdag1234...5678"
}

// Recover wallet using biometrics
POST /blockdag-name-service/decrypt
{
  "name": "john.blockdag", 
  "faceBase64": "user_face_image",
  "password": "optional_password"
}
```

**Offline Workflow:**

1. User takes selfie + chooses name
2. System generates BlockDAG wallet locally
3. Creates encrypted ZK Face Proof containing seed phrase
4. Stores encrypted proof on IPFS with name metadata
5. User can recover anytime using face scan (offline)

**Value Proposition:**

* **$12-240 per name registration** revenue for BlockDAG ecosystem
* **Eliminate seed phrase storage** - users only need their face
* **Works offline** - perfect for areas with poor connectivity
* **Instant wallet recovery** in under a minute > ZelfProof + (Biometrics + Optional password) = seed phrase.

***

### Approach 2: Biometric 2FA Authentication

#### Technical Implementation

**Enhanced Security Layer:**

* Add biometric authentication to BlockDAG transactions
* Provide SDK for dApps to integrate biometric verification
* Create seamless 2FA without hardware dependencies

**Integration Features:**

```javascript
// Authenticate transaction with biometrics
POST /blockdag-auth/verify-transaction
{
  "transaction": "0x123...",
  "faceBase64": "user_face_image",
  "zelfProof": "stored_biometric_proof"
}

// Setup biometric 2FA for BlockDAG address
POST /blockdag-auth/setup-2fa
{
  "blockdagAddress": "bdag1234...5678",
  "faceBase64": "user_face_image",
  "authLevel": "REGULAR" // or HARDENED
}
```

**Security Benefits:**

* **Prevent unauthorized transactions** even with compromised private keys
* **Phishing protection** - attackers can't replicate user's face and we have a 2D liveness detection integrated that is extremely good.
* **Compliance ready** for institutional adoption and users worrying about privacy.
* **No additional hardware** required (uses phone camera) and it doesn't depend on iOS nor Android, it's OS agnostic and device agnostic.

***
