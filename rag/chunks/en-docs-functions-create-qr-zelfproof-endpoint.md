---
id: "en-docs-functions-create-qr-zelfproof-endpoint"
title: "Create a QR-Code ZelfProof — Endpoint"
sourcePath: "docs/functions/create-qr-zelfproof.md"
locale: "en"
category: "functions"
tags:
  - "functions"
endpoint: "/api/zelf-proof/encrypt"
sourceAnchor: "Endpoint"
---

# Create a QR-Code ZelfProof
**API path(s):** /api/zelf-proof/encrypt

## Endpoint

### Endpoint

```
https://api.zelf.world/api/zelf-proof/encrypt 
```

This endpoint allows the creation of a new Zero Knowledge Face Proof "**ZelfProof"** as raw bytes encoded in base64. These are the same bytes used to generate the ZelfQR code.

### Request

* **Endpoint**: `/api/zelf-proof/encrypt`
* **Method**: POST
* **Content-Type**: `application/json`

#### **Body**

The request body should be a JSON object containing the following fields:

```json
{
  "livenessDetectionPriorCreation": false,
  "publicData": {
    "ethAddress": "0x13901AE0F17E2875E86C86721f9943598601b0C4"
  },
  "faceBase64": "face_image_bytes_as_base64",
  "livenessLevel": "REGULAR",
  "metadata": {
    "mnemonic": "pistol cloth equal legend category dry wine enjoy rookie artwork portion december"
  },
  "os": "DESKTOP",
  "password": "optional",
  "identifier": "A0123453",
  "referenceFaceBase64": "optional_base64_encoded_reference_face_image",
  "requireLiveness": true,
  "tolerance": "REGULAR",
  "verifierKey": "optional_auth_key"
}
```

#### Fields:

* **livenessDetectionPriorCreation**: `Boolean` (Optional) - If true, the face must be live to create the ZelfProof.
* **publicData**: `object` (Optional) - Cleartext data associated with the record, such as `masked_id`.
* **faceBase64**: `string` (Required) - Base64 encoded face image data.
* **livenessLevel**: `string` (Optional) - Specifies the tolerance for face liveness checks. E.g., `"REGULAR"`.
* **metadata**: `object` (Optional) - Additional metadata in JSON format associated with the ZelfProof.
* **os**: `string` (Optional) - The operating system where the request originates, e.g., `"DESKTOP"`.
* **password**: `string` (Optional) - A password for additional security.
* **identifier**: `string` (Optional) - An ID associated with the record.
* **referenceFaceBase64**: `string` (Optional) - Base64 encoded reference face image. Used for matching with the `faceBase64`.
* **requireLiveness**: `Boolean` (Optional) - If true, the face must be live.
* **tolerance**: `string` (Optional) - Specifies the tolerance for face matching. E.g., `"REGULAR"`.
* **verifierKey**: `string` (Optional) - An authentication key required for decrypting the ZelfProof if specified.
