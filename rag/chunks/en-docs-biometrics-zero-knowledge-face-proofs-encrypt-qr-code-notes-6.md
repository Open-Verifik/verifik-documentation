---
id: "en-docs-biometrics-zero-knowledge-face-proofs-encrypt-qr-code-notes-6"
title: "Encrypt HumanID QR Code — Notes"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-encrypt-qr-code.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoints:
  - "/api/human-id/encrypt-qr-code"
  - "/v2/human-id/encrypt-qr-code"
sourceAnchor: "Notes"
slug: "/biometrics/humanID-encrypt-qr-code"
url: "https://docs.verifik.co/biometrics/humanID-encrypt-qr-code"
---

# Encrypt HumanID QR Code
**API path(s):** /api/human-id/encrypt-qr-code, /v2/human-id/encrypt-qr-code

## Notes

- The `humanIDQR` field contains a base64-encoded PNG QR code image
- The QR code can be displayed directly in applications or saved as an image file
- IPFS data includes metadata about the stored HumanID and public data keys
- Credits are deducted for HumanID creation (typically 0.84 credits)
- The `identifier` must be alphanumeric only (no spaces or special characters)
- `publicData` and `metadata` must contain only string key-value pairs
- QR codes are ideal for offline sharing and mobile applications
- The QR code contains the same encrypted HumanData as the regular Encrypt HumanID endpoint
