---
id: "en-docs-api-tags-preview-zelfproof-notes-2"
title: "Preview ZelfProof — Notes"
sourcePath: "docs/api/tags/preview-zelfproof.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/preview-zelfproof"
sourceAnchor: "Notes"
---

# Preview ZelfProof
**API path(s):** /api/tags/preview-zelfproof

Preview a ZelfProof before decryption to see its public data and requirements.

## Notes

- The `zelfProof` parameter should contain the complete base64-encoded ZelfProof data
- The `verifierKey` parameter is optional and only required if the ZelfProof was created with a verifier key
- The `passwordLayer` field indicates whether the ZelfProof requires a password for decryption
- The `publicData` field contains wallet addresses for supported blockchains
- The `requireLiveness` field indicates whether liveness verification is required
