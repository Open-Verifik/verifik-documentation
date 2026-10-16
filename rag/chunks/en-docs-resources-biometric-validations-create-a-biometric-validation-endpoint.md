---
id: "en-docs-resources-biometric-validations-create-a-biometric-validation-endpoint"
title: "Create a Biometric Validation — Endpoint"
sourcePath: "docs/resources/biometric-validations/create-a-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations"
sourceAnchor: "Endpoint"
slug: "/resources/create-a-biometric-validation"
url: "https://docs.verifik.co/resources/create-a-biometric-validation"
---

# Create a Biometric Validation
**API path(s):** /v2/biometric-validations

## Endpoint

**POST** `https://api.verifik.co/v2/biometric-validations`

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection. This process ensures the authenticity of users by verifying their unique biometric characteristics through advanced security technology.

### Headers

#### Content-Type
Type: String  
Required: Yes

`application/json`

#### Authorization
Type: String  
Required: Yes

`Bearer {YOUR_ACCESS_TOKEN}`

### Parameters

#### `project`
Type: String  
Required: Yes

The unique identifier for the project where this biometric validation will be used.

#### `projectFlow`
Type: String  
Required: Yes

The unique identifier for the project flow configuration.

#### `identifier`
Type: String  
Required: Yes

A unique identifier for the user or session (e.g., email, phone, or custom ID).

#### `type`
Type: String  
Required: Yes

Type of validation: `validation`, `login`, `onboarding`, or `oneTimeLink`.

#### `expiresAt`
Type: String  
Required: No

Optional expiration date for the validation session.

#### `redirectUrl`
Type: String  
Required: No

Optional URL for redirect after validation.

#### `webhookUrl`
Type: String  
Required: No

Optional webhook URL for validation notifications.

#### `requires2FA`
Type: Boolean  
Required: No

Optional flag indicating if two-factor authentication is required.

#### `ipAddress`
Type: String  
Required: No

Optional IP address of the user.

#### `sendViaEmail`
Type: Boolean  
Required: No

Optional flag to send validation link via email.

#### `email`
Type: String  
Required: No

Email address to send validation link to (required if sendViaEmail is true).

#### `language`
Type: String  
Required: No

Language for email templates (en/es). Defaults to "en".
