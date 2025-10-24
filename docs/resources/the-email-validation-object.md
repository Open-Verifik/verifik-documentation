---
id: the-email-validation-object
title: The Email Validation Object
description: The Email Validation object represents the process of verifying email addresses within your Verifik projects
---

# The Email Validation Object

The Email Validation object represents the process of verifying email addresses within your Verifik projects. This object contains all the information needed to track and manage email validation requests.

## Attributes

**`client`** - ObjectId - Optional

The client account that owns this email validation. This is automatically set based on your authentication token.

**`project`** - ObjectId - Optional

The project where this email validation is being performed. This is the `_id` generated when creating a project.

**`projectFlow`** - ObjectId - Required

The project flow where this email validation is being performed. This is the `_id` generated when creating a project flow.

**`status`** - String - Required

The current status of the email validation process. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"sent"` - Verification email has been sent to the user
* `"validated"` - Email validation completed successfully
* `"expired"` - Validation code has expired
* `"failed"` - Validation failed or was rejected

**`email`** - String - Required

The email address being validated. Spaces are automatically removed and converted to lowercase.

**`type`** - String - Required

The type of email validation being performed:

* `"validation"` - Standard email verification
* `"login"` - Email verification for login
* `"onboarding"` - Email verification for new user registration
* `"oneTimeLink"` - Single-use access link verification

**`validationMethod`** - String - Required

The method used for email validation:

* `"verificationCode"` - OTP code sent via email
* `"oneTimeLink"` - Single-use link sent via email

**`verificationCode`** - String - Optional

The OTP code generated for email verification (only present when `validationMethod` is `"verificationCode"`).

**`expiresAt`** - Date - Optional

The expiration date and time for the validation code.

**`redirectUrl`** - String - Optional

URL to redirect to after successful validation.

**`webhookUrl`** - String - Optional

Webhook URL for validation status notifications.

**`identityUrl`** - String - Optional

Identity verification URL for additional verification steps.

**`requires2FA`** - Boolean - Optional

Flag indicating if two-factor authentication is required.

**`ipAddress`** - String - Optional

IP address of the user performing the validation.

**`attempts`** - Number - Optional

Number of validation attempts made.

**`maxAttempts`** - Number - Optional

Maximum number of validation attempts allowed.

**`createdAt`** - Date - Required

Timestamp when the email validation was created.

**`updatedAt`** - Date - Required

Timestamp when the email validation was last updated.

**`validatedAt`** - Date - Optional

Timestamp when the email validation was completed successfully.

## Example Object

```json
{
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
  "redirectUrl": "https://example.com/success",
  "webhookUrl": "https://example.com/webhook",
  "requires2FA": false,
  "ipAddress": "192.168.1.1",
  "attempts": 1,
  "maxAttempts": 3,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
  "validatedAt": "2024-01-15T10:32:00Z"
}
```

### Characteristics

- **Unique Identification**: Each validation has a unique ID for reference
- **Multiple States**: Support for different states in the validation process
- **Validation Methods**: OTP codes and single-use links
- **Flexible Configuration**: Redirect URLs, webhooks and security configurations
- **Attempt Control**: Attempt limits and tracking of attempts made
- **Complete Timestamps**: Recording of creation, update and validation
- **Context Information**: Client, project and project flow data