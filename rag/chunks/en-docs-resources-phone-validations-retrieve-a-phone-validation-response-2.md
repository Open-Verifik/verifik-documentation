---
id: "en-docs-resources-phone-validations-retrieve-a-phone-validation-response-2"
title: "Retrieve a Phone Validation — Response"
sourcePath: "docs/resources/phone-validations/retrieve-a-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations/phone_validation_123456789"
  - "/v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow"
  - "/v2/phone-validations/{id}"
sourceAnchor: "Response"
slug: "/resources/retrieve-a-phone-validation"
url: "https://docs.verifik.co/resources/retrieve-a-phone-validation"
---

# Retrieve a Phone Validation
**API path(s):** /v2/phone-validations/phone_validation_123456789, /v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow, /v2/phone-validations/{id}

## Response

```json
{
  "success": true,
  "data": {
    "_id": "phone_validation_123456789",
    "client": {
      "_id": "client_123456789",
      "name": "Example Client",
      "email": "client@example.com"
    },
    "project": {
      "_id": "project_123456789",
      "name": "Example Project",
      "description": "Example project description"
    },
    "projectFlow": {
      "_id": "flow_123456789",
      "name": "Example Flow",
      "type": "onboarding"
    },
    "status": "validated",
    "countryCode": "+1",
    "phone": "1234567890",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "attempts": 1,
    "maxAttempts": 3,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "validatedAt": "2024-01-15T10:32:00Z"
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "success": false,
  "error": "Phone validation not found",
  "code": "PHONE_VALIDATION_NOT_FOUND"
}
```

## Features

- **Retrieval by ID**: Get a specific phone validation using its unique ID
- **Complete Information**: Includes all details of the validation process
- **Related Data**: Client, project and project flow information
- **Detailed Status**: Current status, attempts, limits and timestamps
- **Configuration**: Redirect URLs, webhooks and security configurations
- **Country Codes**: Complete country code and number information
- **Multiple Languages**: Support for JavaScript, Python, PHP and Swift
- **Error Handling**: Detailed error responses for different scenarios
