---
id: "en-docs-smart-enroll-self-hosted-smart-enroll-self-hosted-document-categories-5"
title: "SmartEnroll: Self Hosted — Document Categories"
sourcePath: "docs/smart-enroll-self-hosted/smart-enroll-self-hosted.md"
locale: "en"
category: "smart-enroll-self-hosted"
tags:
  - "smart-enroll-self-hosted"
sourceAnchor: "Document Categories"
slug: "/smart-enroll-self-hosted"
url: "https://docs.verifik.co/smart-enroll-self-hosted"
---

# SmartEnroll: Self Hosted

The **SmartEnroll API** provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## Document Categories

For personal KYC, you can configure these document types:

-   **government_id** - Government-issued identification cards
-   **passport** - International passports
-   **license** - Driver's licenses

### Example: Configure Document Verification

:::warning Document Types Per Country
Each country must have at least one active document configuration when the document step is not skipped. Configure document types based on what's commonly used in each country. `"All"` in `allowedCountries` does **not** auto-create `documentTypes` rows—add one country block at a time.
:::

:::info Empty catalog vs incomplete configuration
An empty catalog message means there are no approved prompt templates for that **country + category** (including global `World` templates). For example, **United States** often has no `government_id` templates but many state driver licenses under `license`. Incomplete configuration errors mean a country row has an empty `country` value or an active category with no valid templates—pick a country on every row and leave empty categories inactive.
:::

:::tip Languages and OTP emails
Set `defaultLanguage` on the project (for example `"es"`) so new enrollees and OTP emails use that locale when `language` is omitted. When creating an app registration or email validation via API, you can still pass `language: "es"` explicitly. The hosted SmartEnroll SDK uses project default language, then sends the enrollee’s active UI language on OTP requests. Customizing Spanish copy in the email template editor only stores overrides.
:::

### Step Requirements

-   **mandatory** - Users must complete document verification to proceed
-   **optional** - Users can choose to skip document verification
-   **skip** - Document verification is not included in the flow

---
