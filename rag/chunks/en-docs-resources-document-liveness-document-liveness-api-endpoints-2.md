---
id: "en-docs-resources-document-liveness-document-liveness-api-endpoints-2"
title: "Document Liveness — API Endpoints"
sourcePath: "docs/resources/document-liveness/document-liveness.mdx"
locale: "en"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoint: "/v2/document-liveness"
sourceAnchor: "API Endpoints"
slug: "/resources/document-liveness"
url: "https://docs.verifik.co/resources/document-liveness"
---

# Document Liveness
**API path(s):** /v2/document-liveness

## API Endpoints

#### Create a Document Liveness

`POST https://api.verifik.co/v2/document-liveness`

#### List All Document Liveness

`GET https://api.verifik.co/v2/document-liveness`

#### Retrieve a Document Liveness

`GET https://api.verifik.co/v2/document-liveness/{livenessId}`

### Document Liveness Object Structure

```json
{
  "id": "liveness_123456789",
  "documentId": "doc_123456789",
  "status": "completed",
  "results": {
    "screenReplay": {
      "detected": false,
      "confidence": 0.95,
      "score": 0.05
    },
    "printedCopy": {
      "detected": false,
      "confidence": 0.98,
      "score": 0.02
    },
    "portraitSubstitution": {
      "detected": false,
      "confidence": 0.97,
      "score": 0.03
    },
    "digitalManipulation": {
      "detected": false,
      "confidence": 0.96,
      "score": 0.04
    }
  },
  "overallScore": 0.96,
  "riskLevel": "low",
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

### Use Cases

* Fraud Prevention - Detect and prevent document fraud attempts
* Compliance - Meet regulatory requirements for document verification
* Risk Management - Assess document authenticity risk levels
* Security - Enhance overall system security through advanced detection
