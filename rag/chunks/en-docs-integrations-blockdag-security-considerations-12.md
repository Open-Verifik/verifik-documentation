---
id: "en-docs-integrations-blockdag-security-considerations-12"
title: "BlockDAG — Security Considerations"
sourcePath: "docs/integrations/blockdag.md"
locale: "en"
category: "integrations"
tags:
  - "integrations"
sourceAnchor: "Security Considerations"
---

# BlockDAG

## Security Considerations

#### Online Architecture Security

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          ONLINE SECURITY LAYERS                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. TRANSPORT SECURITY
   ┌──────────────────┐    ┌──────────────────┐    ┌─────────────────┐
   │ TLS 1.3 Encrypt  │───▶│ Certificate Pin  │───▶│ Request Signing │
   └──────────────────┘    └──────────────────┘    └─────────────────┘

2. BACKEND SECURITY
   ┌──────────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Rate Limiting    │───▶│ Input Validation │───▶│ Process Isolation│
   └──────────────────┘    └──────────────────┘    └─────────────────-┘

3. STORAGE SECURITY
   ┌──────────────────┐    ┌──────────────────┐    ┌─────────────────┐
   │ Encryption at    │───▶│ Access Control   │───▶│ Audit Logging   │
   │ Rest             │    │ Lists            │    │                 │
   └──────────────────┘    └──────────────────┘    └─────────────────┘
```

#### Offline Architecture Security

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                         OFFLINE SECURITY LAYERS                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. LOCAL PROCESSING
   ┌──────────────────┐    ┌──────────────────┐    ┌─────────────────┐
   │ Memory Only      │───▶│ No Disk Storage  │───▶│ Auto Cleanup    │
   └──────────────────┘    └──────────────────┘    └─────────────────┘

2. BIOMETRIC PROTECTION
   ┌──────────────────┐    ┌──────────────────┐    ┌─────────────────┐
   │ Liveness         │───▶│ Template         │───▶│ Mathematical    │
   │ Detection        │    │ Extraction       │    │ Hash Only       │
   └──────────────────┘    └──────────────────┘    └─────────────────┘

3. CRYPTOGRAPHIC SECURITY
   ┌──────────────────┐    ┌──────────────────┐    ┌─────────────────┐
   │ ZK Proof         │───▶│ Local Key        │───▶│ No Key          │
   │ Generation       │    │ Derivation       │    │ Transmission    │
   └──────────────────┘    └──────────────────┘    └─────────────────┘
```

***
