---
id: "en-docs-integrations-blockdag-detailed-technical-flows-11"
title: "BlockDAG — Detailed Technical Flows"
sourcePath: "docs/integrations/blockdag.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Detailed Technical Flows"
---

# BlockDAG

## Detailed Technical Flows

#### Online Mode: Complete Workflow

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                        ONLINE MODE - COMPLETE WORKFLOW                              │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. USER REGISTRATION
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Face Capture │───▶│ Upload to Backend│───▶│ Server Processing│
   └──────────────┘    └──────────────────┘    └─────────────────-┘
                                                        │
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────--┐
   │ Return Proof │◄───│ Store in IPFS    │◄───│ Generate ZelfProof│
   └──────────────┘    └──────────────────┘    └─────────────────--┘

2. USER RECOVERY
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Face Capture │───▶│ Send to Backend  │───▶│ Decrypt ZelfProof│
   └──────────────┘    └──────────────────┘    └─────────────────-┘
                                                        │
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Wallet Access│◄───│ Return Metadata  │◄───│ Verify & Extract │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
```

#### Offline Mode: Local Processing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                       OFFLINE MODE - LOCAL PROCESSING                               │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. USER REGISTRATION (LOCAL)
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────--┐
   │ Face Capture │───▶│ Local Processing │───▶│ Generate ZelfProof│
   └──────────────┘    └──────────────────┘    └─────────────────--┘
                                                        │
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Show QR Code │◄───│ Create QR Image  │◄───│ Local Encryption │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
                                                        │
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────┐
   │ Confirm Save │───▶│ Auth Request     │───▶│ Store in IPFS   │
   └──────────────┘    └──────────────────┘    └─────────────────┘

2. USER RECOVERY (LOCAL)
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Face Capture │───▶│ Load ZelfProof   │───▶│ Local Decryption │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
                                                        │
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────┐
   │ Wallet Access│◄───│ Extract Metadata │◄───│ Verify Locally  │
   └──────────────┘    └──────────────────┘    └─────────────────┘
```

***
