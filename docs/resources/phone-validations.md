---
id: phone-validations
title: Phone Validations
description: Core verification system that processes and validates user phone numbers
---

# Phone Validations

Phone Validations are the core verification system within Verifik that processes and validates user phone numbers during the authentication and registration process. Think of them as the security checkpoint that ensures users are who they claim to be by verifying their phone ownership through secure verification codes.

## How Phone Validations Work

Every Phone Validation represents a single phone verification session that processes user-submitted phone numbers. When someone enters their phone during signup, login, or account verification, Verifik creates a Phone Validation to send a secure verification code via SMS and confirm the user's phone ownership.

Currently, Phone Validations support these types:

* **validation** - Standard phone verification process
* **login** - Phone verification for user authentication
* **onboarding** - Phone verification for new user registration
* **twoFactor** - Two-factor authentication via SMS

## What Phone Validations Track

Phone Validations are comprehensive verification systems that process every aspect of phone verification:

### Phone Information:
* Phone number and ownership verification
* Country code and carrier information
* User name and contact details
* Project and client association

### Verification Process:
* One-time password (OTP) generation and delivery
* SMS sending status and delivery confirmation
* Code validation and verification attempts
* Expiration and security management

### Security Features:
* Rate limiting and abuse prevention
* Secure code generation and validation
* Delivery tracking and confirmation
* Fraud detection and prevention

## API Endpoints

### Create a Phone Validation
```http
POST https://api.verifik.co/v2/phone-validations
```

### List All Phone Validations
```http
GET https://api.verifik.co/v2/phone-validations
```

### Retrieve a Phone Validation
```http
GET https://api.verifik.co/v2/phone-validations/{validationId}
```

### Validate a Phone Validation
```http
POST https://api.verifik.co/v2/phone-validations/{validationId}/validate
```

## Phone Validation Object Structure

```json
{
  "id": "phone_validation_123456789",
  "phoneNumber": "+1234567890",
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

- **User Authentication**: Verify phone ownership for secure login
- **Account Registration**: Confirm phone numbers during signup
- **Two-Factor Authentication**: Enhance security with SMS verification
- **Security**: Strengthen account security through phone verification
