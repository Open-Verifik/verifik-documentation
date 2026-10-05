---
id: "en-docs-resources-app-registrations-create-an-app-registration-params-2"
title: "Create an App Registration — Params"
sourcePath: "docs/resources/app-registrations/create-an-app-registration.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/api/app-registrations"
  - "/v2/app-registrations"
sourceAnchor: "Params"
---

# Create an App Registration
**API path(s):** /api/app-registrations, /v2/app-registrations

## Params

| Name          | Type   | Required | Description                                                                                                    |
| ------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| `project`     | string | Yes      | The unique ID of the project associated with this registration                                                 |
| `projectFlow` | string | Yes      | The unique ID of the project flow that defines the registration and validation process                         |
| `email`       | string | No       | The email address for the user to be registered. Either `email` or `phone` is required                         |
| `phone`       | string | No       | The phone number for the user to be registered (digits only, no spaces). Either `email` or `phone` is required |
| `countryCode` | string | No       | The country code associated with the phone number. Required if `phone` is provided. Format: `+123`             |
| `fullName`    | string | No       | The full name of the person being registered                                                                   |
| `firstName`   | string | No       | The first name of the person being registered                                                                  |
| `lastName`    | string | No       | The last name of the person being registered                                                                   |
| `language`    | string | No       | Locale for OTP and related emails during registration (for example `en`, `es`). The hosted SmartEnroll SDK sends the enrollee’s active UI language. This is **not** controlled by which language tab you last edited in the project-flow email template editor. Default: `"en"` |
