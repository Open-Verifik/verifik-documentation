---
id: "en-docs-integrations-blockdag-approach-3-decentralized-identity-did-system-3"
title: "BlockDAG — Approach 3: Decentralized Identity (DID) System"
sourcePath: "docs/integrations/blockdag.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Approach 3: Decentralized Identity (DID) System"
---

# BlockDAG

## Approach 3: Decentralized Identity (DID) System

#### Technical Implementation

**Comprehensive Identity Solution:**

* Create verifiable digital identities on BlockDAG
* Link biometric proofs to on-chain identity records
* Enable reputation systems and cross-platform verification

**DID Features:**

```javascript
// Create decentralized identity
POST /blockdag-did/create-identity
{
  "name": "john.blockdag",
  "faceBase64": "user_face_image",
  "attributes": {
    "email": "john@example.com",
    "verified": true
  }
}

// Verify identity claims
POST /blockdag-did/verify-claim
{
  "did": "did:blockdag:john",
  "claim": "identity_verification",
  "proof": "biometric_signature"
}
```

**Use Cases:**

* **KYC/AML compliance** for DeFi protocols
* **Social verification** for DAOs and communities
* **Cross-chain identity** portability
* **Reputation systems** for marketplaces

***

### Technical Architecture

#### System Components

1. **Biometric Encryption Engine**
   * Face detection and processing
   * ZK proof generation using o1js
   * Local encryption (never uploads biometric data)
2. **BlockDAG Integration Layer**
   * Wallet generation for BlockDAG addresses
   * Transaction signing and verification
   * Native token support
3. **Distributed Storage**
   * IPFS for encrypted proof storage
   * Optional Arweave for permanent archival
   * Metadata indexing for fast lookups
4. **API Gateway (Online version > Node instance : Docker container)**
   * RESTful endpoints for all operations for the online version
   * Rate limiting and security controls
   * SDK packages for easy integration

#### Security Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User Device   │    │   Zelf Backend   │    │   BlockDAG      │
│                 │    │                  │    │   Network       │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ Face Scan   │ │───▶│ │ ZK Proof Gen │ │───▶│ │ Name Record │ │
│ │ (Local)     │ │    │ │ (No Bio Data)│ │    │ │ Storage     │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│                 │    │                  │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ Encrypted   │ │◄───│ │ IPFS Storage │ │◄───│ │ Verification│ │
│ │ Recovery    │ │    │ │ & Retrieval  │ │    │ │ System      │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

***
