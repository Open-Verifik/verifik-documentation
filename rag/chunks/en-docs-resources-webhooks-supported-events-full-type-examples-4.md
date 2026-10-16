---
id: "en-docs-resources-webhooks-supported-events-full-type-examples-4"
title: "Supported Events — Full `type` examples"
sourcePath: "docs/resources/webhooks/supported-events.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Full `type` examples"
slug: "/resources/supported-events"
url: "https://docs.verifik.co/resources/supported-events"
---

# Supported Events

## Full `type` examples

| Suffix (from tables) | Example full `type` |
| --- | --- |
| `email_validation_created` | `onboarding_email_validation_created` |
| `app_registration_sync_sign_up_form` | `onboarding_app_registration_sync_sign_up_form` |
| `app_registration_completed` | `onboarding_app_registration_completed` |

  
  

If `projectFlow.type` is **`login`**, the same suffix becomes e.g. `login_email_validation_created`.

### Related pages

- [Smart Enroll (KYC) webhooks](/resources/smart-enroll-kyc-webhooks) — narrative timeline and manual vs completed behavior
- [SmartFleet webhooks](/resources/smart-fleet-webhooks) — `fleet_alert_*` monitoring events (product webhooks, not project-flow prefixed)
- [Webhook integration](/resources/webhook-integration) — sample receiver server
- [Webhooks overview](/resources/webhooks)
