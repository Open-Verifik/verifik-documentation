---
id: "en-docs-resources-biometric-validations-list-all-biometric-validations-response-2"
title: "List All Biometric Validations — Response"
sourcePath: "docs/resources/biometric-validations/list-all-biometric-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "biometric-validations?page=1&perpage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdat"
  - "resources"
endpoints:
  - "/v2/biometric-validations"
  - "/v2/biometric-validations?page=1&perpage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdat"
sourceAnchor: "Response"
slug: "/resources/list-all-biometric-validations"
url: "https://docs.verifik.co/resources/list-all-biometric-validations"
---

# List All Biometric Validations
**API path(s):** /v2/biometric-validations, /v2/biometric-validations?page=1&perpage=10&populates[]=client&populates[]=project&where_status=validated&where_type=login&sort=-createdat

## Response

```json
{
  "success": true,
  "data": [
    {
      "_id": "biometric_validation_123456789",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "project": {
        "_id": "project_123456789",
        "name": "Example Project",
        "description": "Example project description"
      },
      "status": "completed",
      "identifier": "user@example.com",
      "type": "login",
      "expiresAt": "2024-01-15T11:30:00Z",
      "requires2FA": false,
      "ipAddress": "192.168.1.1",
      "biometricData": {
        "quality": "good",
        "livenessScore": 0.95
      },
      "verificationResults": {
        "livenessDetection": "passed",
        "identityMatch": "passed",
        "qualityScore": 0.95,
        "antiSpoofing": "passed"
      },
      "riskScore": 0.05,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z",
      "completedAt": "2024-01-15T10:32:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 10,
    "total": 1,
    "pages": 1
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Invalid query parameters",
  "code": "INVALID_PARAMETERS"
}
```
