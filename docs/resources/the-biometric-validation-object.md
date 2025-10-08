---
id: the-biometric-validation-object
title: The Biometric Validation Object
description: The Biometric Validation object represents the process of verifying user identities through biometric data
---

# The Biometric Validation Object

The Biometric Validation object represents the process of verifying user identities through biometric data within your Verifik projects. This object contains all the information needed to track and manage biometric verification requests, including facial recognition and liveness detection.

## Attributes

**`client`** - ObjectId - Read-Only

The client account that owns this biometric validation. This is automatically set based on your authentication token.

**`project`** - ObjectId - Optional

The project where this biometric validation is being performed. This is the `_id` generated when creating a project.

**`projectFlow`** - ObjectId - Required

The project flow where this biometric validation is being performed. This is the `_id` generated when creating a project flow.

**`livenessSession`** - ObjectId - Optional

The liveness detection session associated with this biometric validation. This tracks the user's liveness verification process.

**`appRegistration`** - ObjectId - Optional

The app registration record linked to this biometric validation. This connects the validation to a specific user registration process.

**`status`** - String - Required

The current status of the biometric validation process. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"pending"` - Validation is in progress
* `"completed"` - Biometric validation completed successfully
* `"failed"` - Biometric validation failed
* `"expired"` - Validation session has expired

**`identifier`** - String - Required

A unique identifier for the user or session (e.g., email, phone, or custom ID).

**`type`** - String - Required

The type of biometric validation being performed:

* `"validation"` - General biometric identity validation
* `"login"` - Biometric verification during user authentication
* `"onboarding"` - Biometric verification during user registration

**`expiresAt`** - Date - Optional

The expiration date and time for the validation session.

**`redirectUrl`** - String - Optional

URL to redirect to after successful validation.

**`webhookUrl`** - String - Optional

Webhook URL for validation status notifications.

**`requires2FA`** - Boolean - Optional

Flag indicating if two-factor authentication is required.

**`ipAddress`** - String - Optional

IP address of the user performing the validation.

**`sendViaEmail`** - Boolean - Optional

Flag to send validation link via email.

**`email`** - String - Optional

Email address to send validation link to (required if sendViaEmail is true).

**`language`** - String - Optional

Language for email templates (en/es). Defaults to "en".

**`biometricData`** - Object - Optional

Contains the biometric data and verification results:

* `faceImage` - Base64 encoded face image
* `template` - Biometric template data
* `quality` - Image quality score
* `livenessScore` - Liveness detection score

**`verificationResults`** - Object - Optional

Contains the verification results:

* `livenessDetection` - Liveness detection result
* `identityMatch` - Identity matching result
* `qualityScore` - Overall quality score
* `antiSpoofing` - Anti-spoofing detection result

**`riskScore`** - Number - Optional

Risk assessment score for the validation.

**`createdAt`** - Date - Required

Timestamp when the biometric validation was created.

**`updatedAt`** - Date - Required

Timestamp when the biometric validation was last updated.

**`completedAt`** - Date - Optional

Timestamp when the biometric validation was completed successfully.

## Example Object

```json
{
  "_id": "biometric_validation_123456789",
  "client": "client_123456789",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
  "livenessSession": "liveness_123456789",
  "appRegistration": "reg_123456789",
  "status": "completed",
  "identifier": "user@example.com",
  "type": "validation",
  "expiresAt": "2024-01-15T11:30:00Z",
  "redirectUrl": "https://example.com/success",
  "webhookUrl": "https://example.com/webhook",
  "requires2FA": false,
  "ipAddress": "192.168.1.1",
  "sendViaEmail": true,
  "email": "user@example.com",
  "language": "en",
  "biometricData": {
    "faceImage": "base64_encoded_image",
    "template": "biometric_template_data",
    "quality": "good",
    "livenessScore": 0.95
  },
  "verificationResults": {
    "livenessDetection": "passed",
    "identityMatch": "passed",
    "qualityScore": 0.95,
    "antiSpoofing": "passed"
  },
  "riskScore": 0.05,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```
