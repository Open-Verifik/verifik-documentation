---
id: "en-docs-resources-webhooks-smart-enroll-kyc-webhooks-manual-verification-vs-completed-3"
title: "Smart Enroll (KYC) webhooks — Manual verification vs. `COMPLETED`"
sourcePath: "docs/resources/webhooks/smart-enroll-kyc-webhooks.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Manual verification vs. `COMPLETED`"
slug: "/resources/smart-enroll-kyc-webhooks"
url: "https://docs.verifik.co/resources/smart-enroll-kyc-webhooks"
---

# Smart Enroll (KYC) webhooks

## Manual verification vs. `COMPLETED`

:::warning Key behavior

- **`NEEDS_MANUAL_VERIFICATION`** means the registration is **blocked** from completing until ops resolve outstanding checks (e.g. document manual verification).
- Do **not** assume every **`sync` `end`** with `status: "COMPLETED"` in the request yields `app_registration_completed`. The server sets status from **completeness and flow rules** and may emit `app_registration_needs_manual_verification` instead.
- After blockers are cleared, a subsequent **sync** or **adminOverride** can move the registration to `COMPLETED` and emit `app_registration_completed`.
- Real delivery order over the network can differ by milliseconds — design for idempotency.

:::

---

### Related resources

- [Supported Events](/resources/supported-events) — full event catalog with reference tables
- [Webhook integration](/resources/webhook-integration) — sample receiver server
- [Webhooks overview](/resources/webhooks)
