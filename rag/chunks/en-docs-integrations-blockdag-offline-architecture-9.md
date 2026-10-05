---
id: "en-docs-integrations-blockdag-offline-architecture-9"
title: "BlockDAG — Offline Architecture"
sourcePath: "docs/integrations/blockdag.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Offline Architecture"
---

# BlockDAG

## Offline Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        USER DEVICE - LOCAL PROCESSING                               │
│                                                                                     │
│ ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│ │                            OFFLINE SDK                                          │ │
│ │                                                                                 │ │
│ │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐   │ │
│ │  │   Face      │  │ Biometric   │  │   Crypto    │  │    Wallet           │   │ │
│ │  │ Detection   │  │ Processing  │  │  Library    │  │   Generator         │   │ │
│ │  │             │  │             │  │ (o1js)      │  │                     │   │ │
│ │  │ • Liveness  │  │ • Template  │  │ • Poseidon  │  │ • Mnemonic Gen      │   │ │
│ │  │ • Quality   │  │   Extract   │  │ • ZK Proofs │  │ • Multi-chain       │   │ │
│ │  │ • Alignment │  │ • No Storage│  │ • Encrypt   │  │ • Key Derivation    │   │ │
│ │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────────────┘   │ │
│ │                                                                                 │ │
│ └─────────────────────────────────────────────────────────────────────────────────┘ │
│                                          │                                          │
│                                          ▼                                          │
│ ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│ │                      LOCAL STORAGE (TEMPORARY)                                  │ │
│ │                                                                                 │ │
│ │  • Encrypted ZelfProof (memory only)                                            │ │
│ │  • QR Code (temporary display)                                                  │ │
│ │  • No biometric data stored                                                     │ │
│ │  • Auto-cleanup after processing                                                │ │
│ └─────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

#### API Endpoints (Offline Mode)

```javascript
// Offline registration (device generates ZelfProof locally)
POST /zelf-name-service/v2/lease-offline
{
  "zelfName": "john.blockdag",
  "zelfProof": "locally_generated_encrypted_proof",
  "zelfProofQRCode": "base64_qr_image",
  "duration": "1"
}

// Local decryption (no backend needed)
// This happens entirely on device using stored ZelfProof

// Preview stored name (minimal backend query)
POST /zelf-name-service/v2/preview
{
  "zelfName": "john.blockdag",
  "environment": "both"
}
```
