---
id: "en-docs-resources-project-flows-create-a-project-flow-smart-enroll-project-flow-response-2"
title: "Smart Enroll Project Flow — Response"
sourcePath: "docs/resources/project-flows/create-a-project-flow/smart-enroll-project-flow.mdx"
locale: "en"
category: "resources"
tags:
  - "project-flows"
  - "resources"
endpoint: "/v2/project-flows"
sourceAnchor: "Response"
slug: "/resources/project-flows/create-a-project-flow/smart-enroll-project-flow"
url: "https://docs.verifik.co/resources/project-flows/create-a-project-flow/smart-enroll-project-flow"
---

# Smart Enroll Project Flow
**API path(s):** /v2/project-flows

Create a project flow specifically configured for Smart Enroll onboarding. This flow is optimized for the Smart Enroll system and includes all necessary configurations for a complete onboarding experience.

## Response

```json
{
  "data": {
    "_id": "64a1b2c3d4e5f6789012346",
    "project": "64a1b2c3d4e5f6789012345",
    "type": "onboarding",
    "name": "Smart Enroll Project Flow",
    "target": "personal",
    "status": "draft",
    "version": 1,
    "signUpForm": {
      "fullName": true,
      "fullNameStyle": "separate",
      "email": true,
      "emailGateway": "mailgun",
      "phone": true,
      "phoneGateway": "whatsapp",
      "countryCode": "US",
      "showTermsAndConditions": true,
      "showPrivacyNotice": true
    },
    "documents": {
      "attemptLimit": 3,
      "criminalHistoryVerification": true,
      "informationVerification": true,
      "screening": true,
      "verificationMethods": ["SCAN_PROMPT"],
      "documentTypes": [
        {
          "country": "United States",
          "configurations": [
            {
              "active": true,
              "documentCategory": "government_id",
              "documentTemplates": []
            }
          ]
        }
      ]
    },
    "liveness": {
      "attemptLimit": 3,
      "minScore": 0.65,
      "searchMinScore": 0.8,
      "searchMode": "FAST"
    },
    "steps": {
      "document": "mandatory",
      "liveness": "mandatory"
    },
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

  
  

```json
{
  "message": "Invalid project ID format",
  "code": "BadRequest"
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "Forbidden"
}
```

## Features

- **Smart Enroll Optimized**: Pre-configured for Smart Enroll onboarding flows
- **Complete Configuration**: Includes sign-up form, documents, and liveness settings
- **Flexible Setup**: Customize document types and verification methods
- **Security Features**: Criminal history and information verification included
- **Multiple Countries**: Support for various country configurations
