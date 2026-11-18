---
id: "en-docs-resources-phone-validations-the-phone-validation-object-overview"
title: "The Phone Validation Object — Overview"
sourcePath: "docs/resources/phone-validations/the-phone-validation-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/the-phone-validation-object"
url: "https://docs.verifik.co/resources/the-phone-validation-object"
---

# The Phone Validation Object

## Overview

The Phone Validation object represents the process of verifying phone numbers within your Verifik projects. This object contains all the information needed to track and manage phone verification requests.

### Attributes

#### `client`

**Type:** string (reference id)  
**Required:** Read-Only

The client account that owns this phone validation. This is automatically set based on your authentication token.

#### `project`

**Type:** string (reference id)  
**Required:** Optional

The project where this phone validation is being performed. Optional for **manual / Smart Tools** sends (`POST /phone-validations/manual`).

#### `projectFlow`

**Type:** string (reference id)  
**Required:** Optional

The project flow where this phone validation is being performed. Required for most project-based flows; omitted for standalone manual sends.

#### `source`

**Type:** String  
**Required:** Optional (defaults to `"flow"`)

How the OTP was created:

* `"manual"` — Standalone Smart Tools / `POST /phone-validations/manual`
* `"flow"` — Project or app-registration flow

#### `phoneGateway`

**Type:** String  
**Required:** Optional

Delivery channel: `"sms"`, `"whatsapp"`, or `"none"`.

#### `phoneData`

**Type:** Object  
**Required:** Optional

Template metadata. For WhatsApp/SMS OTPs, `phoneData.title` is the company / section name shown in the message (max 15 characters).

#### `status`

**Type:** String  
**Required:** Required

The current status of the phone validation process. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"sent"` - Verification code has been sent to the user
* `"validated"` - Phone has been successfully verified
* `"failed"` - Phone validation failed or expired

#### `countryCode`

**Type:** String  
**Required:** Required

The international dialing code for the phone number (e.g., "+1" for US, "+44" for UK, "+57" for Colombia).

#### `phone`

**Type:** String  
**Required:** Required

The phone number being validated (spaces are automatically removed).

#### `type`

**Type:** String  
**Required:** Required

The type of phone validation being performed:

* `"validation"` - General phone number validation
* `"login"` - Phone verification during user login
* `"onboarding"` - Phone verification during user registration

#### `validationMethod`

**Type:** String  
**Required:** Required

The method used for phone validation:

* `"verificationCode"` - OTP code sent via SMS
* `"manual"` - Manual verification process

#### `verificationCode`

**Type:** String  
**Required:** Optional

The OTP code generated for phone verification (only present when `validationMethod` is `"verificationCode"`).

#### `expiresAt`

**Type:** Date  
**Required:** Optional

The expiration date and time for the validation code. By default this is **10 minutes** after the OTP is sent or resent. Use it to show a countdown in your UI; after this time, verify fails with `phoneValidation_has_expired`.

#### `redirectUrl`

**Type:** String  
**Required:** Optional

URL to redirect to after successful validation.

#### `webhookUrl`

**Type:** String  
**Required:** Optional

Webhook URL for validation status notifications.

#### `identityUrl`

**Type:** String  
**Required:** Optional

Identity verification URL for additional verification steps.

#### `requires2FA`

**Type:** Boolean  
**Required:** Optional

Flag indicating if two-factor authentication is required.

#### `ipAddress`

**Type:** String  
**Required:** Optional

IP address of the user performing the validation.

#### `attempts`

**Type:** Number  
**Required:** Optional

Number of validation attempts made.

#### `maxAttempts`

**Type:** Number  
**Required:** Optional

Maximum number of validation attempts allowed.

#### `createdAt`

**Type:** Date  
**Required:** Required

Timestamp when the phone validation was created.

#### `updatedAt`

**Type:** Date  
**Required:** Required

Timestamp when the phone validation was last updated.

#### `validatedAt`

**Type:** Date  
**Required:** Optional

Timestamp when the phone validation was completed successfully.
