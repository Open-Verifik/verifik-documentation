---
id: "en-docs-api-tags-decrypt-tag-notes-4"
title: "Decrypt Tag — Notes"
sourcePath: "docs/api/tags/decrypt-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/decrypt"
sourceAnchor: "Notes"
---

# Decrypt Tag
**API path(s):** /api/tags/decrypt

Decrypt a ZelfProof to access wallet data and metadata using biometric face verification.

## Notes

- **Biometric Verification**: The `faceBase64` parameter must contain the same face image used during the original encryption
- **Password Security**: The `password` parameter must match the password used during the original encryption
- **Sensitive Data**: The `metadata` field contains sensitive information including mnemonic phrases - handle with care
- **IPFS Storage**: The decrypted data is stored on IPFS and accessible via the provided URLs
- **Domain Support**: Supports multiple domains including "zelf", "avax", "bdag", etc.
- **Expiration**: Tags may have expiration dates as shown in the `expiresAt` field
- **QR Code**: The `zelfProofQRCode` can be used for offline access to the ZelfProof

## Security Considerations

- Always use HTTPS when making requests
- Store JWT tokens securely and rotate them regularly
- Never log or expose sensitive data from the `metadata` field
- Ensure face images are captured securely and not stored insecurely
- Use strong passwords for ZelfProof encryption
