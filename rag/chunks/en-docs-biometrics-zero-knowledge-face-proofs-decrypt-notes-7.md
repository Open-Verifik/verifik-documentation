---
id: "en-docs-biometrics-zero-knowledge-face-proofs-decrypt-notes-7"
title: "Decrypt HumanID — Notes"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-decrypt.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/decrypt"
sourceAnchor: "Notes"
slug: "/biometrics/humanID-decrypt"
url: "https://docs.verifik.co/biometrics/humanID-decrypt"
---

# Decrypt HumanID
**API path(s):** /v2/human-id/decrypt

## Notes

- The `identifier` field contains the unique identifier used when creating the proof
- `metadata` contains the private data that was stored with the HumanID
- `publicData` contains the public data that was stored with the HumanID
- `faceCropBase64` contains a cropped version of the verified face image
- `difficulty` indicates the verification difficulty level (`EASY`, `MEDIUM`, `HARD`)
- `charged` indicates whether credits were charged for this verification
- `requiredLiveness` indicates if liveness detection was required for this HumanID
- Credits are charged monthly for active users rather than per verification
- The verification process compares the new biometric sample (facial image) against the encrypted HumanID without accessing any biometric data, due to our zero biometric template innovation.
