---
id: the-project-flow-object
title: The Project Flow Object
description: The Project Flow object represents flow configurations for projects in Verifik
---

# The Project Flow Object

The Project Flow object represents flow configurations for projects in Verifik. Project Flows define various data points that Verifik will use to perform validations using passwordless and liveness detection technologies.

## Attributes

**`project`** - ObjectId - Required

The project is the `_id` generated when creating a project correctly.

**`type`** - String - Required

The type determines what type of service you want to generate in this project flow. Can be:

* `"login"` - For existing users to access your system
* `"onboarding"` - For new users to enroll and create accounts

**`status`** - String - Required

The current status of the project flow. Can be:

* `"draft"` - Project flow is in draft mode
* `"active"` - Project flow is active and can be used
* `"paused"` - Project flow is paused

Only "active" projects can be used.

**`version`** - Number - Optional

Version number of the project flow. Defaults to 1.

**`name`** - String - Required

Name of the project flow for identification purposes.

**`description`** - String - Optional

Description of the project flow and its purpose.

**`configuration`** - Object - Required

Configuration object containing flow-specific settings:

* `emailVerification` - Email verification settings
* `phoneVerification` - Phone verification settings
* `biometricVerification` - Biometric verification settings
* `documentVerification` - Document verification settings
* `securityThresholds` - Security threshold settings
* `searchModes` - Search mode configurations

**`steps`** - Array - Required

Array of steps that define the flow sequence:

* `stepType` - Type of step (e.g., "email", "phone", "biometric", "document")
* `order` - Order of the step in the flow
* `required` - Whether the step is required
* `config` - Step-specific configuration

**`client`** - ObjectId - Required

Reference to the client who owns this project flow.

**`createdAt`** - Date - Required

Timestamp when the project flow was created.

**`updatedAt`** - Date - Required

Timestamp when the project flow was last updated.

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
