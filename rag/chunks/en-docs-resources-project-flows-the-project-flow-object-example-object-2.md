---
id: "en-docs-resources-project-flows-the-project-flow-object-example-object-2"
title: "The Project Flow Object — Example Object"
sourcePath: "docs/resources/project-flows/the-project-flow-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Example Object"
slug: "/resources/project-flows/the-project-flow-object"
url: "https://docs.verifik.co/resources/project-flows/the-project-flow-object"
---

# The Project Flow Object

## Example Object

```json
{
  "_id": "project_flow_123456789",
  "project": "project_123456789",
  "type": "onboarding",
  "status": "active",
  "version": 1,
  "name": "Complete Onboarding Flow",
  "description": "Full onboarding flow with email, phone, and biometric verification",
  "configuration": {
    "emailVerification": {
      "enabled": true,
      "required": true,
      "method": "verificationCode"
    },
    "phoneVerification": {
      "enabled": true,
      "required": true,
      "method": "sms",
      "countryCode": "+1"
    },
    "biometricVerification": {
      "enabled": true,
      "required": true,
      "livenessDetection": true,
      "antiSpoofing": true
    },
    "documentVerification": {
      "enabled": true,
      "required": true,
      "documentTypes": ["id", "passport", "driver_license"]
    },
    "securityThresholds": {
      "livenessScore": 0.8,
      "biometricScore": 0.85,
      "documentScore": 0.9
    }
  },
  "steps": [
    {
      "stepType": "email",
      "order": 1,
      "required": true,
      "config": {
        "verificationMethod": "verificationCode"
      }
    },
    {
      "stepType": "phone",
      "order": 2,
      "required": true,
      "config": {
        "verificationMethod": "sms"
      }
    },
    {
      "stepType": "biometric",
      "order": 3,
      "required": true,
      "config": {
        "livenessDetection": true
      }
    },
    {
      "stepType": "document",
      "order": 4,
      "required": true,
      "config": {
        "documentTypes": ["id", "passport"]
      }
    }
  ],
  "client": "client_123456789",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```
