---
id: "en-docs-resources-document-liveness-list-all-document-liveness-response-2"
title: "List All Document Liveness Validations — Response"
sourcePath: "docs/resources/document-liveness/list-all-document-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoint: "/v2/document-liveness"
sourceAnchor: "Response"
slug: "/resources/list-all-document-liveness"
url: "https://docs.verifik.co/resources/list-all-document-liveness"
---

# List All Document Liveness Validations
**API path(s):** /v2/document-liveness

## Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "document_liveness_123456789",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "appRegistration": {
        "_id": "app_registration_123456789",
        "fullName": "John Doe",
        "email": "user@example.com",
        "status": "completed"
      },
      "imageSaved": true,
      "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
      "status": "completed",
      "validationResults": {
        "screenReplay": {
          "passed": true,
          "score": 0.95
        },
        "printedCopy": {
          "passed": true,
          "score": 0.90
        },
        "portraitSubstitution": {
          "passed": true,
          "score": 0.88
        },
        "digitalManipulation": {
          "passed": true,
          "score": 0.92
        }
      },
      "riskScore": 0.05,
      "confidence": 0.91,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z",
      "completedAt": "2024-01-15T10:32:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "success": false,
  "error": "Invalid query parameters",
  "code": "INVALID_PARAMETERS"
}
```

```

### Features

- **Complete Listing**: Retrieve all processed document liveness validations
- **Pagination**: Control page and record limit per page
- **Status Filtering**: Filter by status (new, processing, completed, failed)
- **Data Population**: Include client and application registration information
- **Validation Results**: Details of all anti-spoofing validations
- **Confidence Scores**: Detailed scores for each validation type
- **Image Storage**: Information about images saved to CDN
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Detailed Information**: Includes timestamps, risk scores, and configuration
