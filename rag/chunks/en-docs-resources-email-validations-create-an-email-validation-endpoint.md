---
id: "en-docs-resources-email-validations-create-an-email-validation-endpoint"
title: "Create an Email Validation — Endpoint"
sourcePath: "docs/resources/email-validations/create-an-email-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Endpoint"
slug: "/resources/create-an-email-validation"
url: "https://docs.verifik.co/resources/create-an-email-validation"
---

# Create an Email Validation
**API path(s):** /v2/email-validations

## Endpoint

```
POST https://api.verifik.co/v2/email-validations
```

An Email Validation is an instance within Verifik's system that allows you to process and validate email addresses during authentication and registration processes. This process ensures the authenticity of user email addresses and provides secure verification through email delivery methods.

#### Headers

#### `Content-Type`

**Type:** String  
**Required:** Required  
**Value:** `application/json`

#### `Authorization`

**Type:** String  
**Required:** Required  
**Value:** `Bearer {YOUR_ACCESS_TOKEN}`

#### Body Parameters

#### `project`

**Type:** String  
**Required:** Yes

The unique identifier for the project where this email validation will be used.

#### `validationMethod`

**Type:** String  
**Required:** Yes

The validation method, set to `verificationCode` or `oneTimeLink`.

#### `email`

**Type:** String  
**Required:** Yes

The email address that will be validated (spaces will be automatically removed and converted to lowercase).

#### `type`

**Type:** String  
**Required:** Yes

Type of validation: `validation`, `login`, `onboarding`, or `oneTimeLink`.

#### `expiresAt`

**Type:** String  
**Required:** No

Optional expiration date for the validation code.

#### `redirectUrl`

**Type:** String  
**Required:** No

Optional URL for redirect after validation.

#### `webhookUrl`

**Type:** String  
**Required:** No

Optional webhook URL for validation notifications.

#### `identityUrl`

**Type:** String  
**Required:** No

Optional identity verification URL.

#### `requires2FA`

**Type:** Boolean  
**Required:** No

Optional flag indicating if two-factor authentication is required.

#### `ipAddress`

**Type:** String  
**Required:** No

Optional IP address of the user.
