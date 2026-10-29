---
id: "en-docs-api-tags-decrypt-tag-endpoint"
title: "Decrypt Tag — Endpoint"
sourcePath: "docs/api/tags/decrypt-tag.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/decrypt"
sourceAnchor: "Endpoint"
---

# Decrypt Tag
**API path(s):** /api/tags/decrypt

## Endpoint

Decrypt a ZelfProof to access wallet data and metadata using biometric face verification.

### Endpoint

```
POST /api/tags/decrypt
```

## Description

This endpoint allows you to decrypt a ZelfProof using biometric face verification to access the original wallet data, including mnemonic phrases and private keys. The decryption process verifies the user's identity through face recognition before providing access to sensitive information.

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `tagName` | string | Yes | The name of the tag to decrypt (without domain suffix) |
| `domain` | string | Yes | The domain of the tag (e.g., "zelf", "avax", "bdag") |
| `faceBase64` | string | Yes | Base64-encoded face image for biometric verification |
| `password` | string | Yes | Password used during the original encryption |

### Response

```json
{
  "data": {
    "id": "0199819c-37b8-7e23-a6f7-3033156b356a",
    "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "ipfs_pin_hash": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "ipfsHash": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "cid": "bafkreicmi63avsxwn273fnc5vtzieqpo76snaiqj5bgfqpn5bu5o3lrwye",
    "size": 20238,
    "date_pinned": "2025-09-25T16:02:03.083Z",
    "publicData": {
      "btcAddress": "bc1q9x0zeau8sd05vs5zt5hyxc7tgahd028v2t695y",
      "domain": "zelf",
      "ethAddress": "0xb4296e8aFaE20242C1004Eb2c09Bf58A79C26bA5",
      "solanaAddress": "DnpBkSJiMNxok1TrQRufMryLysbj7Fhh1HEQ8h2hqZdb",
      "suiAddress": "0x6a67465417c8feca9d0787bd5aac77eced8f31f7d4aba664ec778b65e47526bd",
      "zelfName": "testcarlos35.zelf.hold",
      "hasPassword": "true",
      "type": "hold",
      "origin": "online",
      "registeredAt": "2025-09-25 11:02:02",
      "expiresAt": "2025-10-25 11:02:02"
    },
    "zelfProofQRCode": "data:image/png;base64,[QR_CODE_BASE64_DATA]",
    "zelfProof": "[ZELFPROOF_BASE64_DATA]",
    "domain": "zelf",
    "metadata": {
      "mnemonic": "street stairs earn fiscal impose sad document next tube word oblige print bitter home yellow allow between will fatal sorry ancient cushion frown dirt"
    }
  }
}
```

```json
{
  "validationError": "Missing required field: tagName"
}
```

```json
{
  "error": "Unauthorized access"
}
```

```json
{
  "error": "Decryption failed: Invalid credentials"
}
```
