---
id: "en-docs-resources-document-liveness-create-a-document-liveness-response-3"
title: "Create a Document Liveness Validation — Response"
sourcePath: "docs/resources/document-liveness/create-a-document-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoint: "/v2/document-liveness"
sourceAnchor: "Response"
slug: "/resources/create-a-document-liveness"
url: "https://docs.verifik.co/resources/create-a-document-liveness"
---

# Create a Document Liveness Validation
**API path(s):** /v2/document-liveness

## Response

```json
{
  "data": {
    "client": "68f18d25aafc7dbd2a0bd416",
    "imageSaved": true,
    "imageUrl": "https://cdn.verifik.co/document-liveness/document-liveness-1761614605009",
    "validateScreenReplay": true,
    "validatePrintedCopy": true,
    "validatePortraitSubstitution": false,
    "validateDigitalManipulation": false,
    "sreenReplayScore": 0.20818532,
    "printedCopyScore": 2.725058,
    "portraitSubstitutionScore": 0,
    "digitalManipulationScore": 0,
    "screenReplayProbability": 0.0008,
    "printedCopyProbability": 0.0001,
    "portraitSubstitutionProbability": 0,
    "digitalManipulationProbability": 0,
    "sreenReplayCalibration": "REGULAR",
    "printedCopyCalibration": "REGULAR",
    "portraitSubstitutionCalibration": "REGULAR",
    "digitalManipulationCalibration": "REGULAR",
    "ignoreDocumentCroppedValidation": false,
    "ignoreColourLessValidation": false,
    "screenReplayWarnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
    "printedCopyWarnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
    "portraitSubstitutionWarnings": [],
    "digitalManipulationWarnings": [],
    "screenReplayErrors": [],
    "printedCopyErrors": [],
    "portraitSubstitutionErrors": [],
    "digitalManipulationErrors": [],
    "aggregatedScore": 0.0004,
    "isLive": false,
    "aggregateWarnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
    "_id": "69001b0d3440483cbaae2d68",
    "updatedAt": "2025-10-28T01:23:59.928Z",
    "createdAt": "2025-10-28T01:23:59.928Z",
    "__v": 0,
    "chargesCount": 2,
    "rawResponse": {
      "pipeline_results": [
        {
          "pipeline_name": "screen-replay_2024-09",
          "liveness_score": 0.20818532,
          "liveness_probability": "0.0008",
          "is_live": false,
          "image_quality_warnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
          "status": "success"
        },
        {
          "pipeline_name": "printed-copy_2024-09",
          "liveness_score": 2.725058,
          "liveness_probability": "0.0001",
          "is_live": false,
          "image_quality_warnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"],
          "status": "success"
        }
      ],
      "charges_count": 2,
      "aggregate_liveness_probability": "0.0004",
      "aggregate_is_live": false,
      "aggregate_image_quality_warnings": ["GLARE_ON_IMAGE", "IMAGE_IS_TOO_COMPRESSED", "IMAGE_TOO_BLURRY"]
    }
  },
  "signature": {
    "dateTime": "October 28, 2025 1:24 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "8YISP"
}
```

```json
{
  "error": "Invalid image format",
  "message": "INVALID_IMAGE_FORMAT"
}
```

```json
{
  "error": "Image too large",
  "message": "IMAGE_TOO_LARGE"
}
```
