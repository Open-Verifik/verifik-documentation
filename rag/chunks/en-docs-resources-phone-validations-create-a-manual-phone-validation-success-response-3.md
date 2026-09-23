---
id: "en-docs-resources-phone-validations-create-a-manual-phone-validation-success-response-3"
title: "Create a Manual Phone Validation — Success response"
sourcePath: "docs/resources/phone-validations/create-a-manual-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations"
  - "/v2/phone-validations/manual"
sourceAnchor: "Success response"
slug: "/resources/create-a-manual-phone-validation"
url: "https://docs.verifik.co/resources/create-a-manual-phone-validation"
---

# Create a Manual Phone Validation
**API path(s):** /v2/phone-validations, /v2/phone-validations/manual

## Success response

```json
{
  "data": {
    "_id": "66f0a1b2c3d4e5f678901234",
    "client": "66f0a1b2c3d4e5f678900000",
    "source": "manual",
    "type": "validation",
    "status": "sent",
    "countryCode": "+57",
    "phone": "3001234567",
    "phoneGateway": "whatsapp",
    "phoneData": {
      "title": "Company ABC"
    },
    "language": "en",
    "expiresAt": "2026-07-29T22:50:00.000Z",
    "sent": true,
    "new": true
  },
  "signature": "...",
  "id": "a1b2c"
}
```

### OTP lifetime and resend

| Rule | Default | Notes |
| --- | --- | --- |
| OTP TTL | **10 minutes** | Returned as `data.expiresAt` on a successful send. After this time, verify returns `412` `phoneValidation_has_expired`. |
| Resend cooldown | **~2 minutes** | A second send for the same client + phone + `phoneGateway` within ~2 minutes returns `409` `otp_recently_sent` (no new message). |
| Force resend | `"force": true` | Bypasses the 2-minute cooldown so you can send a new code immediately (e.g. UI “Resend”). Each successful send/resend resets `expiresAt` to +10 minutes. |

:::tip UI guidance
Show the destination as **`countryCode` + national `phone`** (e.g. `+57 3001234567`). Drive an expiry countdown from `expiresAt`, and enable “Resend” after the 2-minute cooldown (or always with `force: true`).
:::

### Common errors

| Status | Message / code | When |
| --- | --- | --- |
| 403 | `insufficient_credits` | Prepaid balance is below the country price for SMS/WhatsApp. Nothing is sent. |
| 409 | `otp_recently_sent` | Cooldown: an OTP was already sent for this phone + gateway within ~2 minutes (and `force` was not `true`). |
| 409 | `otp_not_sent` | Provider send failed (message was not accepted). Distinct from cooldown. |
| 409 | `MissingParameter` | Required body fields missing or `countryCode` not in `+digits` form. |
| 403 | Forbidden | Communication SMS/WhatsApp feature not available on the account. |
