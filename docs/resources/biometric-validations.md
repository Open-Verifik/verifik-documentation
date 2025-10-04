---
id: biometric-validations
title: Biometric Validations
description: Core verification system that processes and validates user biometric data
---

# Biometric Validations

Biometric Validations are the core verification system within Verifik that processes and validates user biometric data during the authentication and registration process. Think of them as the security checkpoint that ensures users are who they claim to be by verifying their biometric identity through facial recognition and liveness detection.

## How Biometric Validations Work

Every Biometric Validation represents a single biometric verification session that processes user-submitted biometric data. When someone takes a selfie or provides biometric data during signup, login, or account verification, Verifik creates a Biometric Validation to analyze the biometric data and confirm the user's identity.

Currently, Biometric Validations support these types:

* **validation** - Standard biometric verification process
* **login** - Biometric verification for user authentication
* **onboarding** - Biometric verification for new user registration
* **liveness** - Liveness detection and anti-spoofing

## What Biometric Validations Track

Biometric Validations are comprehensive verification systems that process every aspect of biometric verification:

### Biometric Information:
* Facial recognition and identity matching
* Liveness detection and anti-spoofing
* Quality assessment and image analysis
* User identity verification

### Verification Process:
* Image capture and processing
* Biometric template generation
* Identity matching and comparison
* Liveness detection and validation

### Security Features:
* Anti-spoofing and fraud detection
* Quality assessment and validation
* Template matching and comparison
* Risk assessment and scoring

## API Endpoints

### Create a Biometric Validation
```http
POST https://api.verifik.co/v2/biometric-validations
```

### List All Biometric Validations
```http
GET https://api.verifik.co/v2/biometric-validations
```

### Retrieve a Biometric Validation
```http
GET https://api.verifik.co/v2/biometric-validations/{validationId}
```

## Biometric Validation Object Structure

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

## Use Cases

- **User Authentication**: Verify identity through biometric verification
- **Account Registration**: Confirm user identity during signup
- **Fraud Prevention**: Detect and prevent biometric spoofing attacks
- **Security**: Enhance account security through biometric verification
