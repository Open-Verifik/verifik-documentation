---
id: "en-docs-resources-app-registrations-validate-an-app-registration-phone-validatio-endpoint"
title: "Validate an App Registration Phone Validation — Endpoint"
sourcePath: "docs/resources/app-registrations/validate-an-app-registration-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/api/phone-validations"
  - "/v2/phone-validations"
sourceAnchor: "Endpoint"
---

# Validate an App Registration Phone Validation
**API path(s):** /api/phone-validations, /v2/phone-validations

## Endpoint

```
PUT https://api.verifik.co/v2/phone-validations
```

This endpoint validates a one-time password (OTP) sent to a user's phone number during the app registration (onboarding) process. It ensures the user-provided OTP is correct and updates the verification status accordingly. This route is specifically designed for users who are in the middle of an app registration flow.

:::warning
The JWT Token you should use when validating `App Registration Phone Validations` is provided from the `App Registration` in creation. You must use the token returned when creating an [App Registration](/resources/app-registrations/create-an-app-registration) to authenticate this request.
:::

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `phone` | string | Yes | The phone number that was used to create the phone validation. Spaces will be automatically removed during processing |
| `countryCode` | string | Yes | The country code of the phone number in format `+XXX` (e.g., `+507` for Panama, `+1` for United States). Must match the format `+` followed by 1 to 3 digits |
| `otp` | number | Yes | The one-time password (OTP) that was sent to the user's phone number |
| `project` | string | No | The unique identifier for the project. Optional, helps narrow down the validation |
| `projectFlow` | string | No | The unique identifier for the project flow. Optional, helps narrow down the validation |
| `phoneGateway` | string | No | The delivery method used: `sms`, `whatsapp`, or `none` |
