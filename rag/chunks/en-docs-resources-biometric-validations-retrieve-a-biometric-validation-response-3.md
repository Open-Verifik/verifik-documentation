---
id: "en-docs-resources-biometric-validations-retrieve-a-biometric-validation-response-3"
title: "Retrieve a Biometric Validation — Response"
sourcePath: "docs/resources/biometric-validations/retrieve-a-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/{id}"
sourceAnchor: "Response"
slug: "/resources/retrieve-a-biometric-validation"
url: "https://docs.verifik.co/resources/retrieve-a-biometric-validation"
---

# Retrieve a Biometric Validation
**API path(s):** /v2/biometric-validations/{id}

## Response

```json
{
  "success": true,
  "data": {
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
    "projectFlow": {
      "_id": "flow_123456789",
      "name": "Example Flow",
      "type": "onboarding"
    },
    "livenessSession": "liveness_123456789",
    "appRegistration": "reg_123456789",
    "status": "completed",
    "identifier": "user@example.com",
    "type": "validation",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "sendViaEmail": true,
    "email": "user@example.com",
    "language": "en",
    "biometricData": {
      "faceImage": "base64_encoded_image",
      "template": "biometric_template_data",
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
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Biometric validation not found",
  "code": "BIOMETRIC_VALIDATION_NOT_FOUND"
}
```
