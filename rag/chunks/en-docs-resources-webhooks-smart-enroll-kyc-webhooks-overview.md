---
id: "en-docs-resources-webhooks-smart-enroll-kyc-webhooks-overview"
title: "Smart Enroll (KYC) webhooks — Overview"
sourcePath: "docs/resources/webhooks/smart-enroll-kyc-webhooks.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/smart-enroll-kyc-webhooks"
url: "https://docs.verifik.co/resources/smart-enroll-kyc-webhooks"
---

# Smart Enroll (KYC) webhooks

## Overview

Smart Enroll (onboarding) uses the **webhook** attached to the **ProjectFlow**. When the flow has an active webhook, Verifik enqueues delivery for lifecycle events on app registration, email/phone OTP, documents, biometrics, and related modules.

For the full event catalog see [Supported Events](/resources/supported-events). This page focuses on **typical Smart Enroll order**, **payload shape**, and **manual verification vs. completed** behavior.

**Also available:** [Versión en español](/verifik-es/resources/smart-enroll-kyc-webhooks).

:::info Payload shape

Every delivery is JSON with a top-level **`type`** and **`object`**:

```json
{
  "type": "onboarding_app_registration_completed",
  "object": { }
}
```

- **`type`** = `${projectFlow.type}_${suffix}` — for Smart Enroll the prefix is always **`onboarding`**.
- **`object`** = primary entity snapshot (`appRegistration`, `emailValidation`, `documentValidation`, etc.). **OTP values are stripped.**
- `app_registration_*` events from **sync** also include the `webhook` reference when the flow is linked to one.

Your integration should tolerate new optional fields.

:::

:::tip Event name rules

| Pattern | Suffix shape | Example |
| --- | --- | --- |
| **Sync** while status stays **`ONGOING`** | `app_registration_sync_` (snake_case) | `app_registration_sync_sign_up_form` |
| **Sync** when status **changes** (`end`, `skipKYC`) | `app_registration_` | `app_registration_completed` |
| **Admin override** (staff auth) | `app_registration_` | `app_registration_completed` |
| **Email / Phone** OTP | `email_validation_` or `phone_validation_` | `email_validation_validated` |

All suffixes become full `type` with the `onboarding_` prefix, e.g. `onboarding_email_validation_created`. Match on the **full type** in your code.

:::

---
