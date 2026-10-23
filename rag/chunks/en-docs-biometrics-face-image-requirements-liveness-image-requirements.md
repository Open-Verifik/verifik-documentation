---
id: "en-docs-biometrics-face-image-requirements-liveness-image-requirements"
title: "Face Image Requirements — Liveness image requirements"
sourcePath: "docs/biometrics/face-image-requirements.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Liveness image requirements"
---

# Face Image Requirements

## Liveness image requirements

Every liveness and face search call is only as good as the image you send. This page collects the capture rules, the score thresholds Verifik enforces, and the exact rejection reasons you can expect back, so you can tune your capture UI before you go live.

It applies to the liveness endpoints ([`/liveness`](/biometrics/liveness), [`/liveness-score`](/biometrics/liveness-score)), the face search endpoints ([`/search`](/biometrics/search), [`/search-live-face`](/biometrics/search-live-face), [`/search-active-user`](/biometrics/search-active-user), [`/search-crops`](/biometrics/search-crops)) and the face comparison endpoints ([`/compare`](/biometrics/compare), [`/compare-live`](/biometrics/compare-live), [`/compare-with-liveness`](/biometrics/compare-with-liveness)). SmartEnroll applies the same rules internally, so the same guidance improves onboarding completion rates.

### Liveness image requirements

Liveness is stricter than plain face matching. To make sure high-resolution printouts, masks and video playbacks cannot spoof the check, the submitted frame must satisfy all of the following:

- There should only be one main face in the image. It must be fully visible within the frame and fully open, without any occlusions. No crop is allowed. Small faces in the background are not taken into account.
- The minimum size of a face box that can be processed is **224x224 pixels**.
- The padding between the face box and the image borders should be at least **25 pixels**.
- The distance between the pupils should be at least **80 pixels**.
- The out-of-plane rotation angle (face pitch and yaw) should be no more than **±30 degrees**.
- Fish-eye lenses and sunglasses are not supported.

A frame that breaks any of these rules is rejected on quality grounds before it is ever scored. That is a different outcome from a low score, and it is worth handling differently in your UI: the user can fix a quality problem by recapturing, whereas a low score means the frame was usable but did not look live.
