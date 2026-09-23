---
id: "en-docs-resources-app-registrations-resend-an-app-registration-link-endpoint"
title: "Resend an App Registration Link — Endpoint"
sourcePath: "docs/resources/app-registrations/resend-an-app-registration-link.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations"
  - "/v2/app-registrations/${appregistrationid}/resend-link"
  - "/v2/app-registrations/%s/resend-link"
  - "/v2/app-registrations/{app_registration_id}/resend-link"
  - "/v2/app-registrations/{id}"
  - "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "Endpoint"
---

# Resend an App Registration Link
**API path(s):** /v2/app-registrations, /v2/app-registrations/${appregistrationid}/resend-link, /v2/app-registrations/%s/resend-link, /v2/app-registrations/{app_registration_id}/resend-link, /v2/app-registrations/{id}, /v2/app-registrations/{id}/resend-link

## Endpoint

```
POST https://api.verifik.co/v2/app-registrations/{id}/resend-link
```

Mint a new hosted SmartEnroll continuation URL for an existing, incomplete App Registration. Redirect the end user to `data.link` so they resume from the current step instead of starting a new sign-up.

This is the partner API behind the Verifik admin **Resend link** action (copy link or send email). Product walkthrough: [Resume an Incomplete Enrollment](/smartenroll/resume).

Authenticate with the **project owner's client API token**. Do not use the enrollee session JWT from create or from a previous `link`.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Params

| Name             | Type    | Required | Description                                                                                                                                 |
| ---------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | string  | Yes      | App Registration `_id` to resume. Path parameter.                                                                                           |
| `sendEmail`      | boolean | No       | If `true` (or `"true"`), email the continuation link to the enrollee. If omitted or `false`, only return `token` and `link`.                |
| `recipientEmail` | string  | No       | Override the email recipient. **Super-admin only.** Client tokens must omit this field; the enrollee email on the registration is used.     |

The continuation JWT expires in **30 minutes**. `expiresInMinutes` is not a client-facing parameter on this endpoint.
