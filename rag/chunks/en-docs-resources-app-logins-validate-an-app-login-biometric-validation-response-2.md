---
id: "en-docs-resources-app-logins-validate-an-app-login-biometric-validation-response-2"
title: "Validate an App Login Biometric Validation — Response"
sourcePath: "docs/resources/app-logins/validate-an-app-login-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoints:
  - "/api/biometric-validations/validate"
  - "/v2/biometric-validations/validate"
sourceAnchor: "Response"
slug: "/resources/validate-an-app-login-biometric-validation"
url: "https://docs.verifik.co/resources/validate-an-app-login-biometric-validation"
---

# Validate an App Login Biometric Validation
**API path(s):** /api/biometric-validations/validate, /v2/biometric-validations/validate

## Response

```json
{
  "success": true,
  "data": {
    "_id": "biometric_validation_123456789",
    "status": "completed",
    "verificationResults": {
      "livenessDetection": "passed",
      "identityMatch": "passed",
      "qualityScore": 0.95,
      "antiSpoofing": "passed"
    },
    "biometricData": {
      "faceImage": "base64_encoded_image",
      "template": "biometric_template_data",
      "quality": "good",
      "livenessScore": 0.95
    },
    "riskScore": 0.05,
    "completedAt": "2024-01-15T10:32:00Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

  
  

```json
{
  "error": "Invalid biometric data",
  "message": "INVALID_BIOMETRIC_DATA"
}
```

  
  

```json
{
  "error": "Liveness detection failed",
  "message": "LIVENESS_DETECTION_FAILED"
}
```

  
  

```json
{
  "error": "Identity verification failed",
  "message": "IDENTITY_VERIFICATION_FAILED"
}
```

### Features

- **Biometric Verification**: Process facial recognition and liveness detection
- **Quality Assessment**: Analyze image quality and biometric template quality
- **Anti-Spoofing Protection**: Advanced security against fake biometric attempts
- **Risk Scoring**: Calculate risk scores for authentication decisions
- **Authentication Token**: Generate secure tokens for application access
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Comprehensive Results**: Detailed verification results and biometric data
- **Security Features**: Liveness session validation and secure token generation
