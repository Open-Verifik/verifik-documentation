---
id: email-validations
title: Email Validations
description: Core verification system that processes and validates user email addresses
---

# Email Validations

Email Validations are the core verification system within Verifik that processes and validates user email addresses during the authentication and registration process. Think of them as the security checkpoint that ensures users are who they claim to be by verifying their email ownership through secure verification codes.

## How Email Validations Work

Every Email Validation represents a single email verification session that processes user-submitted email addresses. When someone enters their email during signup, login, or account verification, Verifik creates an Email Validation to send a secure verification code and confirm the user's email ownership.

Currently, Email Validations support these types:

* **validation** - Standard email verification process
* **login** - Email verification for user authentication
* **onboarding** - Email verification for new user registration
* **oneTimeLink** - Single-use access link verification

## What Email Validations Track

Email Validations are comprehensive verification systems that process every aspect of email verification:

### Email Information:
* Email address and ownership verification
* User name and contact details
* Project and client association
* Verification method and security settings

### Verification Process:
* One-time password (OTP) generation and delivery
* Email sending status and delivery confirmation
* Code validation and verification attempts
* Expiration and security management

### Security Features:
* Rate limiting and abuse prevention
* Secure code generation and validation
* Delivery tracking and confirmation
* Fraud detection and prevention

## API Endpoints

### Create an Email Validation
```http
POST https://api.verifik.co/v2/email-validations
```

### List All Email Validations
```http
GET https://api.verifik.co/v2/email-validations
```

### Retrieve an Email Validation
```http
GET https://api.verifik.co/v2/email-validations/{validationId}
```

### Validate an Email Validation
```http
POST https://api.verifik.co/v2/email-validations/{validationId}/validate
```

## Email Validation Object Structure

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

## Use Cases

- **User Authentication**: Verify email ownership for secure login
- **Account Registration**: Confirm email addresses during signup
- **Password Reset**: Verify email ownership for password recovery
- **Security**: Enhance account security through email verification
