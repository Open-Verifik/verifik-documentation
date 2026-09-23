---
id: "en-docs-resources-email-validations-email-validations-api-endpoints-2"
title: "Email Validations — API Endpoints"
sourcePath: "docs/resources/email-validations/email-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "API Endpoints"
slug: "/resources/email-validations"
url: "https://docs.verifik.co/resources/email-validations"
---

# Email Validations
**API path(s):** /v2/email-validations

## API Endpoints

#### Create an Email Validation
```http
POST https://api.verifik.co/v2/email-validations
```

#### List All Email Validations
```http
GET https://api.verifik.co/v2/email-validations
```

#### Retrieve an Email Validation
```http
GET https://api.verifik.co/v2/email-validations/{validationId}
```

#### Validate an Email Validation
```http
POST https://api.verifik.co/v2/email-validations/{validationId}/validate
```

### Email Validation Object Structure

```json
{
  "id": "email_validation_123456789",
  "email": "user@example.com",
  "status": "completed",
  "type": "validation",
  "verificationCode": "123456",
  "attempts": 1,
  "maxAttempts": 3,
  "expiresAt": "2024-01-15T11:30:00Z",
  "deliveryStatus": "delivered",
  "validatedAt": "2024-01-15T10:32:00Z",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Use Cases

- **User Authentication**: Verify email ownership for secure login
- **Account Registration**: Confirm email addresses during signup
- **Password Reset**: Verify email ownership for password recovery
- **Security**: Enhance account security through email verification
