---
id: "en-docs-resources-app-registrations-create-an-app-registration-email-validation-endpoint"
title: "Create an App Registration Email Validation — Endpoint"
sourcePath: "docs/resources/app-registrations/create-an-app-registration-email-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations/app-registration"
sourceAnchor: "Endpoint"
---

# Create an App Registration Email Validation
**API path(s):** /v2/email-validations/app-registration

## Endpoint

```
POST https://api.verifik.co/v2/email-validations/app-registration
```

This endpoint creates an email validation process specifically for users who are in the middle of an app registration flow. It automatically links the email validation to the user's app registration and handles credit charging for your SmartEnroll plan. A successful response (200) indicates that Verifik has sent an email with an OTP that will be used to complete the email verification process.

:::warning
The JWT Token you should use when creating `App Registration Email Validations` is provided from the `App Registration` in creation. You must use the token returned when creating an [App Registration](/resources/app-registrations/create-an-app-registration) to authenticate this request.
:::

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `project` | string | Yes | The project ID where this email validation will be performed. This is the `_id` generated when creating a project |
| `validationMethod` | string | Yes | Defines how the email will be validated. Must be either `manual` or `verificationCode` |
| `email` | string | Yes | The email address that will be validated. This field is required and will be automatically converted to lowercase and whitespace removed |
| `type` | string | Yes | The type of process this email validation is for. Must be one of: `validation`, `login`, `onboarding`, or `oneTimeLink` |
| `expiresAt` | string | No | Optional timestamp when the OTP code expires. If not provided, a default expiration time will be set. Format: ISO 8601 (e.g., `2024-12-31T23:59:59.000Z`) |
| `redirectUrl` | string | No | Optional URL where users will be redirected after completing the email validation process |
| `webhookUrl` | string | No | Optional external webhook URL for receiving real-time notifications about validation status changes |
| `requires2FA` | boolean | No | Optional boolean indicating whether two-factor authentication is required. Defaults to `false` |
| `ipAddress` | string | No | Optional IP address of the user requesting the email validation |
| `language` | string | No | OTP email locale for this send (for example `en`, `es`). Source of truth for which language the OTP email uses. Defaults to `en` if omitted. Not controlled by which language tab was last edited in the project-flow email template editor. |

#### Validation Method Values

| Value | Description |
| --- | --- |
| `verificationCode` | Send OTP code via email for user verification |
| `manual` | Manual verification process without OTP |

#### Type Values

| Value | Description |
| --- | --- |
| `onboarding` | User registration process (recommended for app registrations) |
| `validation` | General email validation process |
| `login` | User authentication process |
| `oneTimeLink` | One-time link validation |
