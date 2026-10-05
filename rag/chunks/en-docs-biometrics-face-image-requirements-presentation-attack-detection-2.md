---
id: "en-docs-biometrics-face-image-requirements-presentation-attack-detection-2"
title: "Face Image Requirements — Presentation attack detection"
sourcePath: "docs/biometrics/face-image-requirements.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Presentation attack detection"
---

# Face Image Requirements

## Presentation attack detection

Verifik's face liveness uses presentation attack detection (PAD) and is **iBeta Level 2 certified**, aligned with **ISO 30107-3**. The underlying engine reports an Attack Presentation Classification Error Rate (APCER) of 0% against the iBeta Level 2 attack set, covering printed photos, screen and video replay, and 3D masks.

### Thresholds

Verifik enforces its own thresholds on top of the recognition engine, so the values below are the ones that actually govern your requests.

#### Liveness

| Behaviour | Value |
| --- | --- |
| Parameter | `liveness_min_score` |
| Default | `0.6` |
| Accepted range | `0.5` – `1.0` |
| Pass rule | `liveness_score > liveness_min_score` (strictly greater than) |
| SmartEnroll default | `0.65`, configurable per project flow |

Note that the pass rule is a strict comparison. A score of exactly `0.6` against a threshold of `0.6` is a failure, not a pass.

The underlying engine treats `>= 0.5` as live. Verifik's default of `0.6` is deliberately stricter, and the floor of `0.5` means you cannot configure a threshold looser than the engine's own. One exception: [`/compare-live`](/biometrics/compare-live) raises that floor to `0.52`.

#### Face search

| Parameter | Required | Default | Range |
| --- | --- | --- | --- |
| `min_score` | Yes | None — you must send it | `0.2` – `1.0` on `/search`, `0.5` – `1.0` on the live-face variants |
| `search_mode` | Yes | None — you must send it | `FAST` or `ACCURATE` |
| `max_results` | No | `10` | Up to `100` |

Results come back ordered by descending similarity score, and only entries above `min_score` are returned. A score is a number between 0 and 1, where 1 is a perfect match and 0 is a perfect mismatch.

Two Verifik specifics are easy to miss. First, `min_score` has **no default** — the request is rejected with `409 MissingParameter` if you omit it, whereas the underlying engine would have applied `0.81`. Second, `search_mode` is required and has no engine equivalent: use `ACCURATE` for higher precision at the cost of latency, and `FAST` when responsiveness matters more.
