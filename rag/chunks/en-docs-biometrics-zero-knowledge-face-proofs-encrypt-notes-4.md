---
id: "en-docs-biometrics-zero-knowledge-face-proofs-encrypt-notes-4"
title: "Encrypt HumanID — Notes"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-encrypt.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt"
sourceAnchor: "Notes"
slug: "/biometrics/humanID-encrypt"
url: "https://docs.verifik.co/biometrics/humanID-encrypt"
---

# Encrypt HumanID
**API path(s):** /v2/human-id/encrypt

## Notes

- The `humanID` token contains encrypted HumanData, raw metadata only accessible to the owner of the HumanID.
- IPFS data includes metadata about the stored HumanID and public data keys
- Credits are deducted for HumanID creation (typically 0.84 credits)
- The `identifier` must be alphanumeric only (no spaces or special characters)
- `publicData` and `metadata` must contain only string key-value pairs
- Liveness detection can be enabled for biometric security
- Password protection adds an extra layer and is an option that can be included in the security of the HumanID
