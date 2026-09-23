---
id: "en-docs-resources-app-registrations-app-registrations-app-registration-object-structure-2"
title: "App Registrations — App Registration Object Structure"
sourcePath: "docs/resources/app-registrations/app-registrations.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "App Registration Object Structure"
---

# App Registrations
**API path(s):** /v2/app-registrations

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

### Use Cases

- **User Onboarding**: Complete new user registration and verification
- **Identity Verification**: Verify user identity through multiple methods
- **Compliance**: Meet regulatory requirements for user verification
- **Fraud Prevention**: Detect and prevent fraudulent registrations
