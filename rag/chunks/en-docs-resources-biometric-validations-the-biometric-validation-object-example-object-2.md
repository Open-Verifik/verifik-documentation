---
id: "en-docs-resources-biometric-validations-the-biometric-validation-object-example-object-2"
title: "The Biometric Validation Object — Example Object"
sourcePath: "docs/resources/biometric-validations/the-biometric-validation-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Example Object"
slug: "/resources/the-biometric-validation-object"
url: "https://docs.verifik.co/resources/the-biometric-validation-object"
---

# The Biometric Validation Object

## Example Object

```json
{
  "_id": "biometric_validation_123456789",
  "client": "client_123456789",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
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
```
