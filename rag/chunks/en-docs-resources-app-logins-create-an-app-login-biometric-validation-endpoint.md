---
id: "en-docs-resources-app-logins-create-an-app-login-biometric-validation-endpoint"
title: "Create an App Login Biometric Validation — Endpoint"
sourcePath: "docs/resources/app-logins/create-an-app-login-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/app-login"
sourceAnchor: "Endpoint"
slug: "/resources/create-an-app-login-biometric-validation"
url: "https://docs.verifik.co/resources/create-an-app-login-biometric-validation"
---

# Create an App Login Biometric Validation
**API path(s):** /v2/biometric-validations/app-login

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/app-login
```

### Overview

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection during the login process. This endpoint is specifically designed for users who are in the middle of an app login flow.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
The JWT Token you should use when creating `App Login Biometric Validations` is provided from the [`App Login`](https://docs.verifik.co/resources/app-logins/create-an-app-login) in creation.
:::

### Parameters

| Name           | Type    | Required | Description                                                                                                 |
| -------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `project`      | string  | Yes      | The unique identifier for the project where this biometric validation will be used.                         |
| `projectFlow`  | string  | Yes      | The unique identifier for the project flow configuration.                                                  |
| `identifier`   | string  | Yes      | A unique identifier for the user or session (e.g., email, phone, or custom ID).                             |
| `type`         | string  | Yes      | Must be set to `login` for this endpoint.                                                                   |
| `expiresAt`    | string  | No       | Optional expiration date for the validation session.                                                         |
| `redirectUrl`  | string  | No       | Optional URL for redirect after validation.                                                                 |
| `webhookUrl`   | string  | No       | Optional webhook URL for validation notifications.                                                          |
| `requires2FA`  | boolean | No       | Optional flag indicating if two-factor authentication is required.                                          |
| `ipAddress`    | string  | No       | Optional IP address of the user.                                                                            |
| `sendViaEmail` | boolean | No       | Optional flag to send validation link via email.                                                            |
| `email`        | string  | No       | Email address to send validation link to (required if sendViaEmail is true).                              |
| `language`     | string  | No       | Language for email templates (en/es). Defaults to "en".                                                   |
