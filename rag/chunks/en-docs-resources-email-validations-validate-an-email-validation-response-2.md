---
id: "en-docs-resources-email-validations-validate-an-email-validation-response-2"
title: "Validate an Email Validation — Response"
sourcePath: "docs/resources/email-validations/validate-an-email-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/api/email-validations/validate"
  - "/v2/email-validations/validate"
  - "/v2/email-validations/{id}/validate"
sourceAnchor: "Response"
slug: "/resources/validate-an-email-validation"
url: "https://docs.verifik.co/resources/validate-an-email-validation"
---

# Validate an Email Validation
**API path(s):** /api/email-validations/validate, /v2/email-validations/validate, /v2/email-validations/{id}/validate

## Response

```json
{
  "success": true,
  "data": {
    "_id": "email_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "validated",
    "email": "user@example.com",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
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
  "error": "Invalid verification code",
  "code": "INVALID_CODE"
}
```

  
  

```json
{
  "success": false,
  "error": "Verification code expired",
  "code": "CODE_EXPIRED"
}
```

  
  

```json
{
  "success": false,
  "error": "Maximum attempts exceeded",
  "code": "MAX_ATTEMPTS_EXCEEDED"
}
```

### Characteristics

- **Code Validation**: Validates 6-digit OTP codes sent via email
- **Attempt Control**: Tracks validation attempts and maximum limits
- **Expiration**: Handles expired codes with appropriate responses
- **Status Update**: Updates validation status after successful verification
- **Timestamps**: Records when validation was completed
- **Multiple Languages**: Support for JavaScript, Python, PHP and Swift
- **Error Handling**: Detailed error responses for different scenarios
