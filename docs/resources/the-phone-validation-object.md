---
id: the-phone-validation-object
title: The Phone Validation Object
description: The Phone Validation object represents the process of verifying phone numbers within your Verifik projects
---

# The Phone Validation Object

The Phone Validation object represents the process of verifying phone numbers within your Verifik projects. This object contains all the information needed to track and manage phone verification requests.

## Attributes

**`client`** - ObjectId - Read-Only

The client account that owns this phone validation. This is automatically set based on your authentication token.

**`project`** - ObjectId - Optional

The project where this phone validation is being performed. This is the `_id` generated when creating a project.

**`projectFlow`** - ObjectId - Required

The project flow where this phone validation is being performed. This is the `_id` generated when creating a project flow.

**`status`** - String - Required

The current status of the phone validation process. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"sent"` - Verification code has been sent to the user
* `"validated"` - Phone has been successfully verified
* `"failed"` - Phone validation failed or expired

**`countryCode`** - String - Required

The international dialing code for the phone number (e.g., "+1" for US, "+44" for UK, "+57" for Colombia).

**`phone`** - String - Required

The phone number being validated (spaces are automatically removed).

**`type`** - String - Required

The type of phone validation being performed:

* `"validation"` - General phone number validation
* `"login"` - Phone verification during user login
* `"onboarding"` - Phone verification during user registration

**`validationMethod`** - String - Required

The method used for phone validation:

* `"verificationCode"` - OTP code sent via SMS
* `"manual"` - Manual verification process

**`verificationCode`** - String - Optional

The OTP code generated for phone verification (only present when `validationMethod` is `"verificationCode"`).

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

Timestamp when the phone validation was created.

**`updatedAt`** - Date - Required

Timestamp when the phone validation was last updated.

**`validatedAt`** - Date - Optional

Timestamp when the phone validation was completed successfully.

## Example Object

```json
{
  "_id": "phone_validation_123456789",
  "client": "client_123456789",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
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
}
```

## Features

- **Unique Identification**: Each validation has a unique ID for reference
- **Multiple States**: Support for different states of the validation process
- **Country Codes**: Full support for international country codes
- **Validation Methods**: OTP codes and manual verification
- **Flexible Configuration**: Redirect URLs, webhooks and security configurations
- **Attempt Control**: Attempt limits and tracking of attempts made
- **Complete Timestamps**: Recording of creation, update and validation
- **Context Information**: Client, project and project flow data