---
id: "en-docs-resources-phone-validations-phone-validations-what-is-a-phone-validation"
title: "Phone Validations — What is a Phone Validation?"
sourcePath: "docs/resources/phone-validations/phone-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations"
  - "/v2/phone-validations/app-registration"
  - "/v2/phone-validations/manual"
  - "/v2/phone-validations/{id}"
sourceAnchor: "What is a Phone Validation?"
slug: "/resources/phone-validations"
url: "https://docs.verifik.co/resources/phone-validations"
---

# Phone Validations
**API path(s):** /v2/phone-validations, /v2/phone-validations/app-registration, /v2/phone-validations/manual, /v2/phone-validations/{id}

## What is a Phone Validation?

A **Phone Validation** is one OTP session for a phone number. Verifik sends a one-time code over **SMS** or **WhatsApp**, then you confirm the code the user enters.

Typical lifecycle:

1. **Send** — create a Phone Validation and deliver the OTP  
2. **Verify** — submit the same phone + OTP to mark the session as validated  

See the full field list in [The Phone Validation Object](/resources/the-phone-validation-object).

### Timing rules

| Rule | Default |
| --- | --- |
| OTP valid for | **10 minutes** (`expiresAt` on the send response) |
| Resend cooldown | **~2 minutes** between sends for the same phone + gateway (`409` `otp_recently_sent`) |
| Bypass cooldown | Manual create with `"force": true` |

Always send and display **`countryCode`** with the national **`phone`** (e.g. `+57 3001234567`) so users know which destination received the message.

---

### Choose your integration path

Pick the path that matches how you call the API.

#### Path A — Standalone / Smart Tools (no project)

Use this when you send OTPs from your backend or from **Smart Tools → WhatsApp / SMS Messages**, without a Smart Enroll or Smart Access project.

| Step | Endpoint |
| --- | --- |
| 1. Send OTP | [`POST /v2/phone-validations/manual`](/resources/create-a-manual-phone-validation) |
| 2. Verify OTP | [`PUT /v2/phone-validations`](/resources/validate-a-phone-validation) |

- No `project` / `projectFlow` required  
- Record `source` is `"manual"`  
- Charged with **metered communication credits** after a successful send  
- Optional `title` (max 15 chars) sets the company name in the WhatsApp/SMS template  

```text
Your app                    Verifik API
────────                    ───────────
POST /manual  ───────────►  OTP sent (SMS / WhatsApp)
                            status: sent

PUT  /phone-validations ─►  OTP checked
  { phone, countryCode, otp }   status: validated
```

#### Path B — Project / App Registration (Smart Enroll & Access)

Use this when the OTP is part of an enrollment or login flow tied to a project.

| Step | Endpoint |
| --- | --- |
| 1. Send OTP | [`POST /v2/phone-validations/app-registration`](/resources/phone-validations/create-an-app-registration-phone-validation) |
| 2. Verify OTP | [`PUT /v2/phone-validations`](/resources/validate-a-phone-validation) |

- Requires project / app registration context  
- Record `source` defaults to `"flow"`  
- Billing may use Smart Enroll / Smart Access plan counters depending on the flow  

---
