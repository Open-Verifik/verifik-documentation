---
id: "en-docs-smartenroll-smartenroll-otp-verifik-email-language-7"
title: "SmartEnroll — OTP / Verifik email language"
sourcePath: "docs/smartenroll/smartenroll.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "OTP / Verifik email language"
slug: "/smartenroll"
url: "https://docs.verifik.co/smartenroll"
---

# SmartEnroll
**API path(s):** /v2/app-registrations/{id}/resend-link

**SmartEnroll** is a no-code solution designed to provide secure and seamless onboardings for users. This platform enables businesses to offer various onboarding checks, including email, phone, and biometric verification, document validations, AML checks, tempering checks and more. All those features are integrated into our project ensuring a user-friendly and secure experience. With SmartEnroll, companies can easily integrate these KYC solutions without the need for complex coding or infrastructure development.

## OTP / Verifik email language

Selecting **Español** (or another language) in the email template editor lets you **customize copy for that locale**. It does **not** by itself force all emails to Spanish.

Live OTP emails use:

1. The `language` from the enrollee session / API request (SDK sends the active UI language), or
2. The project **Default language** when `language` is omitted, or
3. `en` as a last resort.

System Spanish defaults exist when the resolved language is `es`; custom Spanish copy under the Español tab is optional. Use **Send Test** on the Español tab to preview—that does not change production send language by itself.

:::note Client account language
Changing the client account language in the Verifik admin does **not** drive SmartEnroll OTP email language.
:::

---

## Resume an incomplete enrollment

If a user starts hosted SmartEnroll and leaves before finishing, store the App Registration `_id` and later call `POST /v2/app-registrations/{id}/resend-link`. Redirect them to `data.link`. Do not reuse an expired create token or submit the sign-up form again with the same email — that shows **already registered**.

Full guide: [Resume an Incomplete Enrollment](/smartenroll/resume). API: [Resend an App Registration Link](/resources/app-registrations/resend-an-app-registration-link).

---

## Best Practices

### Security Recommendations

1. **Set Appropriate Attempt Limits**: Configure attempt limits based on your security requirements and user experience needs.
2. **Use Recommended Scores**: Start with the recommended biometric scores and adjust based on your testing results.
3. **Regular Blacklist Updates**: Keep your blacklists current to maintain security effectiveness.
4. **Monitor Webhook Alerts**: Set up proper monitoring for webhook notifications to respond quickly to security events.
