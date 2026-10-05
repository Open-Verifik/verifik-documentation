---
id: "en-docs-resources-phone-validations-phone-validations-api-endpoint-index-2"
title: "Phone Validations — API endpoint index"
sourcePath: "docs/resources/phone-validations/phone-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "API endpoint index"
slug: "/resources/phone-validations"
url: "https://docs.verifik.co/resources/phone-validations"
---

# Phone Validations

## API endpoint index

| Action | Method & path | Docs |
| --- | --- | --- |
| Send standalone OTP | `POST /v2/phone-validations/manual` | [Create a Manual Phone Validation](/resources/create-a-manual-phone-validation) |
| Verify OTP | `PUT /v2/phone-validations` | [Validate a Phone Validation](/resources/validate-a-phone-validation) |
| Send OTP in app registration | `POST /v2/phone-validations/app-registration` | [Create an App Registration Phone Validation](/resources/phone-validations/create-an-app-registration-phone-validation) |
| List | `GET /v2/phone-validations` | [List All Phone Validations](/resources/list-all-phone-validations) |
| Retrieve one | `GET /v2/phone-validations/{id}` | [Retrieve a Phone Validation](/resources/retrieve-a-phone-validation) |
| SMS & WhatsApp prices | — | [SMS & WhatsApp Prices](/phone-validations/sms-and-whatsapp-prices) |

:::tip Authentication
All endpoints require `Authorization: Bearer {YOUR_ACCESS_TOKEN}` and `Content-Type: application/json`.
:::

---

### Status values

| Status | Meaning |
| --- | --- |
| `sent` | OTP was delivered (or accepted by the provider) |
| `validated` | User OTP matched |
| `failed` | Expired, rejected, or send failed |
| `new` | Created but not yet successfully sent |

---

### Related pages

- [The Phone Validation Object](/resources/the-phone-validation-object)  
- [Create a Manual Phone Validation](/resources/create-a-manual-phone-validation)  
- [Validate a Phone Validation](/resources/validate-a-phone-validation)  
- [SMS & WhatsApp Prices](/phone-validations/sms-and-whatsapp-prices)
