---
id: "en-docs-resources-app-registrations-create-an-app-registration-phone-validation-endpoint"
title: "Create an App Registration Phone Validation — Endpoint"
sourcePath: "docs/resources/app-registrations/create-an-app-registration-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations/app-registration"
sourceAnchor: "Endpoint"
---

# Create an App Registration Phone Validation
**API path(s):** /v2/phone-validations/app-registration

## Endpoint

```
POST https://api.verifik.co/v2/phone-validations/app-registration
```

A Phone Validation is an instance within Verifik's system that allows you to process and validate phone numbers during the app registration process. This process ensures the authenticity of user phone numbers and provides secure verification through SMS or WhatsApp delivery methods.

:::warning
The JWT Token you should use when creating `App Registration Phone Validations` is provided from the `App Registration` in creation. You must use the token returned when creating an [App Registration](/resources/app-registrations/create-an-app-registration) to authenticate this request.
:::

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `project` | string | Yes | The unique identifier for the project where this phone validation will be used |
| `validationMethod` | string | Yes | The validation method. Must be `verificationCode` |
| `phone` | string | Yes | The phone number that will be validated. Spaces will be automatically removed during processing |
| `countryCode` | string | Yes | The country code of the phone number in format `+XXX` (e.g., `+507` for Panama, `+1` for United States). Must match the format `+` followed by 1 to 3 digits |
| `type` | string | Yes | Type of validation. Must be one of: `validation`, `login`, `onboarding`, or `oneTimeLink` |
| `expiresAt` | string | No | Optional expiration date for the validation code. If not provided, a default expiration time will be set. Format: ISO 8601 (e.g., `2024-12-31T23:59:59.000Z`) |
| `redirectUrl` | string | No | Optional URL for redirect after validation |
| `webhookUrl` | string | No | Optional webhook URL for validation notifications |
| `identityUrl` | string | No | Optional identity verification URL |
| `requires2FA` | boolean | No | Optional flag indicating if two-factor authentication is required. Defaults to `false` |
| `ipAddress` | string | No | Optional IP address of the user |

#### Validation Method Values

| Value | Description |
| --- | --- |
| `verificationCode` | Sends a one-time password (OTP) to the phone number for verification |

#### Type Values

| Value | Description |
| --- | --- |
| `onboarding` | Phone verification during user registration (recommended for app registrations) |
| `validation` | General phone number validation |
| `login` | Phone verification during user login |
| `oneTimeLink` | One-time link validation |
