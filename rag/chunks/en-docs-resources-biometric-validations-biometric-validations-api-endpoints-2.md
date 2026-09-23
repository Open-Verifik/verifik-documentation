---
id: "en-docs-resources-biometric-validations-biometric-validations-api-endpoints-2"
title: "Biometric Validations — API Endpoints"
sourcePath: "docs/resources/biometric-validations/biometric-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoints:
  - "/v2/biometric-validations"
  - "/v2/biometric-validations/{validationid}"
sourceAnchor: "API Endpoints"
slug: "/resources/biometric-validations"
url: "https://docs.verifik.co/resources/biometric-validations"
---

# Biometric Validations
**API path(s):** /v2/biometric-validations, /v2/biometric-validations/{validationid}

## API Endpoints

#### Create a Biometric Validation
```http
POST https://api.verifik.co/v2/biometric-validations
```

#### List All Biometric Validations
```http
GET https://api.verifik.co/v2/biometric-validations
```

#### Retrieve a Biometric Validation
```http
GET https://api.verifik.co/v2/biometric-validations/{validationId}
```

### Biometric Validation Object Structure

```json
{
  "id": "biometric_validation_123456789",
  "userId": "user_123456789",
  "status": "completed",
  "type": "validation",
  "biometricData": {
    "faceImage": "base64_encoded_image",
    "template": "biometric_template_data",
    "quality": "good"
  },
  "verificationResults": {
    "livenessDetection": "passed",
    "identityMatch": "passed",
    "qualityScore": 0.95,
    "antiSpoofing": "passed"
  },
  "riskScore": 0.05,
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

### Use Cases

- **User Authentication**: Verify identity through biometric verification
- **Account Registration**: Confirm user identity during signup
- **Fraud Prevention**: Detect and prevent biometric spoofing attacks
- **Security**: Enhance account security through biometric verification
