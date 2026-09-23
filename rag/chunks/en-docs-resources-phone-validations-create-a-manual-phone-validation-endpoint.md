---
id: "en-docs-resources-phone-validations-create-a-manual-phone-validation-endpoint"
title: "Create a Manual Phone Validation — Endpoint"
sourcePath: "docs/resources/phone-validations/create-a-manual-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations"
  - "/v2/phone-validations/manual"
sourceAnchor: "Endpoint"
slug: "/resources/create-a-manual-phone-validation"
url: "https://docs.verifik.co/resources/create-a-manual-phone-validation"
---

# Create a Manual Phone Validation
**API path(s):** /v2/phone-validations, /v2/phone-validations/manual

## Endpoint

```
POST https://api.verifik.co/v2/phone-validations/manual
```

Creates a **standalone** Phone Validation and sends an OTP by SMS or WhatsApp. No `project` or `projectFlow` is required. This is the same endpoint used by **Smart Tools → WhatsApp / SMS Messages**.

After a successful send, continue with [Validate a Phone Validation](/resources/validate-a-phone-validation).

:::info Billing
Credits are checked **before** the message is sent, using country SMS/WhatsApp pricing. You are charged only when the OTP is actually delivered (`sent: true`).
:::

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Body parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `phone` | string | Yes | National number only (spaces are stripped). Do not include the dial code here. |
| `countryCode` | string | Yes | Dial code starting with `+` (e.g. `+57`). Always send this; show it to the user with the phone (e.g. `+57 3001234567`). |
| `phoneGateway` | string | Yes | `sms` or `whatsapp`. |
| `title` | string | No | Company / sender name in the template (1–15 characters). Defaults to your client name. Used by WhatsApp `flow2` and SMS copy. |
| `language` | string | No | Template language (`en`, `es`, …). Selects `flow2_en` / `flow2_es` when `whatsappTemplate` is `flow2`. |
| `whatsappTemplate` | string | No | WhatsApp only. `authentication` (**default**) or `flow2`. Ignored for SMS. |
| `force` | boolean | No | When `true`, bypasses the ~2 minute resend cooldown for the same phone + gateway. Use for an explicit “Resend” action. |
| `ipAddress` | string | No | Optional client IP for auditing. |
