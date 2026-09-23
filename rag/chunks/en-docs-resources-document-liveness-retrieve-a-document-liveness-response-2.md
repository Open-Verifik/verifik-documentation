---
id: "en-docs-resources-document-liveness-retrieve-a-document-liveness-response-2"
title: "Retrieve a Document Liveness Validation — Response"
sourcePath: "docs/resources/document-liveness/retrieve-a-document-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoints:
  - "/v2/document-liveness/document_liveness_123456789"
  - "/v2/document-liveness/{id}"
sourceAnchor: "Response"
slug: "/resources/retrieve-a-document-liveness"
url: "https://docs.verifik.co/resources/retrieve-a-document-liveness"
---

# Retrieve a Document Liveness Validation
**API path(s):** /v2/document-liveness/document_liveness_123456789, /v2/document-liveness/{id}

## Response

```json
{
  "success": true,
  "data": {
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
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "error": "Document liveness not found",
  "message": "DOCUMENT_LIVENESS_NOT_FOUND"
}
```

```

### Features

- **Retrieval by ID**: Get a specific liveness validation using its unique ID
- **Detailed Results**: Complete information of all anti-spoofing validations
- **Calibration Settings**: SOFT, REGULAR, and HARD settings used
- **Validation Flags**: Settings to ignore cropping and lack of color
- **Confidence Scores**: Detailed scores for each validation type
- **Image Storage**: Information about images saved to CDN
- **Client Data**: Client and application registration information
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Detailed error responses for different scenarios
