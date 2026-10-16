---
id: "en-docs-resources-document-liveness-the-documentliveness-object-example-object-2"
title: "The Document Liveness Object — Example Object"
sourcePath: "docs/resources/document-liveness/the-documentliveness-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Example Object"
slug: "/resources/document-liveness/the-documentliveness-object"
url: "https://docs.verifik.co/resources/document-liveness/the-documentliveness-object"
---

# The Document Liveness Object

## Example Object

```json
{
  "_id": "document_liveness_123456789",
  "client": "client_123456789",
  "appRegistration": "app_registration_123456789",
  "imageSaved": true,
  "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
  "status": "completed",
  "validationResults": {
    "screenReplay": {
      "passed": true,
      "score": 0.95,
      "details": "No screen replay detected"
    },
    "printedCopy": {
      "passed": true,
      "score": 0.90,
      "details": "No printed copy detected"
    },
    "portraitSubstitution": {
      "passed": true,
      "score": 0.88,
      "details": "No portrait substitution detected"
    },
    "digitalManipulation": {
      "passed": true,
      "score": 0.92,
      "details": "No digital manipulation detected"
    }
  },
  "calibrationSettings": {
    "screenReplayCalibration": "REGULAR",
    "printedCopyCalibration": "REGULAR",
    "portraitSubstitutionCalibration": "REGULAR"
  },
  "validationFlags": {
    "ignoreDocumentCroppedValidation": false,
    "ignoreColourLessValidation": false
  },
  "riskScore": 0.05,
  "confidence": 0.91,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
}
```
}
```

### Features

- **Unique Identification**: Each validation has a unique ID for reference
- **Multiple States**: Support for different validation process states
- **Anti-Spoofing Validations**: Four types of attack detection
- **Calibration Configuration**: SOFT, REGULAR, and HARD levels
- **Validation Flags**: Settings to ignore cropping and lack of color
- **Detailed Scores**: Confidence scores for each validation
- **Image Storage**: Option to save images to CDN
- **Risk Assessment**: Overall document risk score
- **Complete Timestamps**: Record of creation, update, and completion
- **Context Information**: Client and application registration data
