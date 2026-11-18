---
id: "en-docs-biometrics-liveness-score-endpoint"
title: "Liveness Score — Endpoint"
sourcePath: "docs/biometrics/liveness-score.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/liveness-score"
sourceAnchor: "Endpoint"
---

# Liveness Score
**API path(s):** /v2/face-recognition/liveness-score

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/liveness-score
```

Returns a liveness score and pass/fail outcome for a single face image using Verifik’s presentation attack detection (PAD) stack. Use this when you need the score-focused liveness contract.

**API stability:** This is a **production public endpoint**. Request and response contracts follow Verifik’s standard API change and deprecation policy. Billing uses the same AppFeature as [`POST /v2/face-recognition/liveness`](/biometrics/liveness).

### vs `/liveness`

| | `POST .../liveness` | `POST .../liveness-score` |
| --- | --- | --- |
| Use | Standard liveness detection | Score-focused liveness response |
| Billing | Liveness AppFeature | Same liveness AppFeature (path rewritten for credits) |
| Body | `os`, `image`, optional `collection_id`, `liveness_min_score` | Same |

### Presentation attack detection (PAD)

Verifik’s face liveness (including this endpoint and [`/liveness`](/biometrics/liveness)) uses our biometric stack with presentation attack detection (PAD). Liveness is **iBeta Level 2 certified** and aligned with **ISO 30107 Level 1 and Level 2**. It is designed to detect common spoofing vectors such as **printed photos, video replay, and 3D masks**, using a single-image liveness check.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `os` | string | Yes | Origin of capture. Suggested: `DESKTOP`, `IOS`, `ANDROID`. |
| `image` | string | Yes | Base64 image data (data URI or raw base64). If an `https` URL is provided, it will be downloaded and converted internally. |
| `collection_id` | string | No | Optional collection to associate with the liveness attempt. |
| `liveness_min_score` | number | No | Threshold for pass/fail. Default: `0.6`. |
