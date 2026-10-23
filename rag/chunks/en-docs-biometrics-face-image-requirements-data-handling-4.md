---
id: "en-docs-biometrics-face-image-requirements-data-handling-4"
title: "Face Image Requirements — Data handling"
sourcePath: "docs/biometrics/face-image-requirements.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
sourceAnchor: "Data handling"
---

# Face Image Requirements

## Data handling

A liveness or search call is a one-time classification. It does **not** enrol the face into a collection, so a face you only ever send to `/liveness` or `/search` will never turn up in a later search result. To make a face searchable, register it explicitly with [`/person`](/resources/create-a-person-with-liveness).

Verifik does keep an audit record of every call — the score, the outcome, the threshold applied and request metadata — so that results remain verifiable and billable after the fact. Whether the submitted image itself is retained depends on the product: images captured through SmartEnroll are stored as part of the enrolment record, while images sent directly to the public liveness and search endpoints are not retained after the request is served.

### Notes

- Quality rejections and score rejections are worth separating in your UI. A quality rejection should invite an immediate retry with specific guidance; a score rejection is a genuine negative result.
- The requirements are expressed in pixels of the face box, not of the image. A 4K photo of a face 100 pixels wide still fails the `224x224` rule.
- Sending a larger image does not improve the outcome once the face box clears the minimum. Favour good lighting and a centred, front-facing pose over raw resolution.
- If your users are on desktop webcams, expect more quality rejections than on mobile: low-resolution webcams frequently produce face boxes below the minimum.
