---
id: "en-docs-biometrics-liveness-endpoint"
title: "Liveness Detection — Endpoint"
sourcePath: "docs/biometrics/liveness.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoints:
  - "/v2/face-recognition/liveness"
  - "/v2/face-recognition/liveness-score"
sourceAnchor: "Endpoint"
---

# Liveness Detection
**API path(s):** /v2/face-recognition/liveness, /v2/face-recognition/liveness-score

## Endpoint

```
POST https://api.verifik.co/v2/face-recognition/liveness
```

Detects whether a submitted face image comes from a live person or a spoof (photo, screen replay, printed copy). Returns a liveness score and a pass/fail outcome based on a minimum score threshold.

For the score-focused endpoint, see [`POST /v2/face-recognition/liveness-score`](/biometrics/liveness-score).

### Presentation attack detection (PAD)

Verifik’s face liveness uses our biometric stack with presentation attack detection (PAD). Liveness is **iBeta Level 2 certified** and aligned with **ISO 30107 Level 1 and Level 2**. It is designed to detect common spoofing vectors such as **printed photos, video replay, and 3D masks**, using a single-image liveness check.

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

### Image requirements

Liveness rejects unusable frames before scoring them, so capture quality drives your pass rate. The frame must contain a single fully visible face with a face box of at least `224x224` pixels, at least 25 pixels of padding from the image borders, at least 80 pixels between the pupils, and no more than ±30 degrees of pitch or yaw. Sunglasses and fish-eye lenses are not supported.

See [Face Image Requirements](/biometrics/face-image-requirements) for the full rules, the rejection reason codes and the guidance to show users for each one.
