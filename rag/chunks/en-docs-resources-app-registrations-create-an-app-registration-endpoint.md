---
id: "en-docs-resources-app-registrations-create-an-app-registration-endpoint"
title: "Create an App Registration — Endpoint"
sourcePath: "docs/resources/app-registrations/create-an-app-registration.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "Endpoint"
---

# Create an App Registration
**API path(s):** /v2/app-registrations

## Endpoint

```
POST https://api.verifik.co/v2/app-registrations
```

An App Registration is an instance within Verifik's system that allows a user to initiate the authentication and validation process using specified project flows, email, and/or phone details. This process ensures the identity of the user and provides secure validation through various verification steps.

:::warning
When creating an App Registration, a `token` is returned in the request. You must use this token to create [document validations](/resources/app-registrations/create-an-app-registration-document-validation), [email validations](/resources/app-registrations/create-an-app-registration-email-validation), [phone validations](/resources/app-registrations/create-an-app-registration-phone-validation) and [biometric validations](/resources/app-registrations/create-an-app-registration-biometric-validation) **for App Registrations**. This ensures the validations are related to the app registrant.

The create token is valid for **120 minutes**. Do **not** call this endpoint again with the same `email` or `phone` to "refresh" the session — that returns `409:email_is_registered_already` or `409:phone_is_registered_already`. To resume an incomplete hosted enrollment, call [Resend an App Registration Link](/resources/app-registrations/resend-an-app-registration-link) and redirect the user to `data.link`. Product guide: [Resume an Incomplete Enrollment](/smartenroll/resume).
:::

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |
