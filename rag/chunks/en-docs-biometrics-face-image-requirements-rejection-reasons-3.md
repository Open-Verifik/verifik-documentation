---
id: "en-docs-biometrics-face-image-requirements-rejection-reasons-3"
title: "Face Image Requirements — Rejection reasons"
sourcePath: "docs/biometrics/face-image-requirements.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Rejection reasons"
---

# Face Image Requirements

## Rejection reasons

When a capture is rejected on quality grounds, the response carries a stable reason code. Each one maps to a specific requirement above, which makes it straightforward to show the user a targeted correction instead of a generic failure message.

| Reason | Requirement violated | What to tell the user |
| --- | --- | --- |
| `no_face_detected` | One fully visible face | Position your face inside the frame in a well-lit area |
| `multiple_faces_detected` | Only one main face | Make sure you are the only person in the frame |
| `face_occluded` | Fully open, no occlusions | Remove anything covering your face, such as a mask, glasses or hat |
| `face_close_to_border` | 25 pixel border padding | Move back a little and centre your face in the frame |
| `face_not_centered` | 25 pixel border padding | Line your face up with the middle of the frame |
| `face_too_far` | 224x224 face box, 80 pixel pupil distance | Bring the camera closer so your face fills more of the frame |
| `face_too_close` | No crop, 25 pixel border padding | Hold the camera a little further away |
| `face_rotation_too_large` | ±30 degrees pitch and yaw | Look straight at the camera and keep your head upright |
| `poor_lighting` | Fully visible face | Move somewhere brighter and avoid strong light behind you |

Two further reasons are not capture problems:

- `liveness_failed` — the frame was usable and was scored, but the score did not clear the threshold. The score is included in the response so you can show it.
- `liveness_error` — the check could not be completed for a reason that cannot be attributed to the capture. Treat this as retryable.
