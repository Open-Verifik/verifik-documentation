---
id: app-registrations
title: App Registrations
description: Manage user registration sessions and onboarding flows
---

# App Registrations

App Registrations are individual user sessions within Verifik's system that allow people to go through the **onboarding and verification process** you've configured in your Project Flow. Think of them as the actual user journey through your new user registration system.

## How App Registrations Work

Every App Registration represents a single user's attempt to **create an account and verify their identity** using your configured Project Flow. When someone wants to **enroll in your system for the first time**, Verifik creates an App Registration to track their progress through the verification steps.

Currently, App Registrations are designed for:

* **onboarding** - For new users to enroll and create accounts

## What App Registrations Track

App Registrations are comprehensive tracking systems for new user verification processes:

### User Progress:
* Registration form completion
* Document verification status (ID, passport, license)
* Biometric verification results (selfie + liveness)
* Basic information collection progress
* Custom forms and signatures
* Criminal history verification outcomes

### Security Monitoring:
* Red flags and security concerns
* Failed validation attempts
* Access control and attempt tracking
* Fraud detection and prevention

## API Endpoints

### Create an App Registration
```http
POST https://api.verifik.co/v2/app-registrations
```

### List All App Registrations
```http
GET https://api.verifik.co/v2/app-registrations
```

### Retrieve an App Registration
```http
GET https://api.verifik.co/v2/app-registrations/{registrationId}
```

### Sync App Registration Status
```http
POST https://api.verifik.co/v2/app-registrations/{registrationId}/sync
```

## App Registration Object Structure

```json
{
  "id": "reg_123456789",
  "userId": "user_123456789",
  "projectId": "proj_123456789",
  "flowId": "flow_123456789",
  "status": "completed",
  "steps": [
    {
      "type": "personal_info",
      "status": "completed",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "type": "document_verification",
      "status": "completed",
      "timestamp": "2024-01-15T10:32:00Z"
    },
    {
      "type": "biometric_verification",
      "status": "completed",
      "timestamp": "2024-01-15T10:35:00Z"
    }
  ],
  "verificationResults": {
    "documentVerification": "passed",
    "biometricVerification": "passed",
    "livenessDetection": "passed"
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:35:00Z"
}
```

## Use Cases

- **User Onboarding**: Complete new user registration and verification
- **Identity Verification**: Verify user identity through multiple methods
- **Compliance**: Meet regulatory requirements for user verification
- **Fraud Prevention**: Detect and prevent fraudulent registrations
