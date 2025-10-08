---
id: project-flows
title: Project Flows
description: Project Flows are the blueprints that define how users will verify their identity in your system
---

# Project Flows

Project Flows are the blueprints that define how users will verify their identity in your system. Think of them as the instruction manual that tells Verifik exactly what steps to follow, what information to collect, and how strict to be during the verification process.

## How Project Flows Work

Every Project Flow is a configuration template that defines the complete user verification journey. When someone wants to use your system, Verifik follows your Project Flow step-by-step to ensure they meet your security and compliance requirements.

Currently, Project Flows support these types:

* **onboarding** - For new users to enroll and create accounts
* **login** - For existing users to access your system

## What Project Flows Configure

Project Flows are comprehensive configuration systems that define every aspect of your verification process:

### User Experience:
* Which forms to show and in what order
* What information is required vs. optional
* How users can submit documents
* Whether signatures are needed

### Security Settings:
* Who can access your system (whitelist/blacklist)
* How strict to be with identity verification
* What security checks to perform
* How to handle suspicious activity

### Integration Options:
* Which databases to check against
* What external services to use
* How to handle verification failures
* Custom business logic and rules

## API Endpoints

### Create a Project Flow
```http
POST https://api.verifik.co/v2/project-flows
```

### List All Project Flows
```http
GET https://api.verifik.co/v2/project-flows
```

### Retrieve a Project Flow
```http
GET https://api.verifik.co/v2/project-flows/{flowId}
```

### Update a Project Flow
```http
PUT https://api.verifik.co/v2/project-flows/{flowId}
```

## Project Flow Object Structure

```json
{
  "id": "flow_123456789",
  "name": "Standard Onboarding Flow",
  "type": "onboarding",
  "projectId": "proj_123456789",
  "steps": [
    {
      "type": "form",
      "name": "personal_info",
      "required": true,
      "fields": ["firstName", "lastName", "email", "phone"]
    },
    {
      "type": "document_verification",
      "name": "id_verification",
      "required": true,
      "documentTypes": ["passport", "drivers_license"]
    },
    {
      "type": "biometric_verification",
      "name": "selfie_verification",
      "required": true,
      "livenessDetection": true
    }
  ],
  "securitySettings": {
    "whitelistEnabled": false,
    "blacklistEnabled": true,
    "strictMode": true
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

## Use Cases

- **Custom Onboarding**: Define specific verification steps for new users
- **Compliance Requirements**: Meet regulatory requirements for identity verification
- **Risk Management**: Configure different security levels based on user type
- **Integration Flexibility**: Customize verification flows for different business needs
