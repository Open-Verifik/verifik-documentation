---
id: "en-docs-smart-enroll-self-hosted-smart-enroll-self-hosted-example-create-a-basic-project-4"
title: "SmartEnroll: Self Hosted — Example: Create a Basic Project"
sourcePath: "docs/smart-enroll-self-hosted/smart-enroll-self-hosted.md"
locale: "en"
category: "smart-enroll-self-hosted"
tags:
  - "smart-enroll-self-hosted"
sourceAnchor: "Example: Create a Basic Project"
slug: "/smart-enroll-self-hosted"
url: "https://docs.verifik.co/smart-enroll-self-hosted"
---

# SmartEnroll: Self Hosted

The **SmartEnroll API** provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## Example: Create a Basic Project

:::tip Data Protection Information
The `dataProtection` field is required for compliance with privacy regulations like GDPR. Ensure you provide accurate information about your Data Protection Officer or privacy contact.
:::

---

## Step 2: Sign-Up Form

Configure what information to collect from users when they begin the onboarding process. This step determines the initial data collection before document verification.

### What You'll Configure

-   **Full Name Collection** - Whether to collect user's full name (required)
-   **Name Format** - Collect name as one field or separate first/last name fields
-   **Email Collection** - Whether to collect and verify email addresses
-   **Email Gateway** - How to send verification emails (Mailgun or none)
-   **Phone Collection** - Whether to collect and verify phone numbers
-   **Phone Gateway** - How to send verification codes (SMS, WhatsApp, both, or none)
-   **Additional Fields** - Custom fields specific to your business needs
-   **Privacy & Terms Display** - Whether to show consent checkboxes

### Example: Configure Sign-Up Form

:::info Name Format Options

-   **together** - Single field for full name (e.g., "John Doe")
-   **separate** - Separate fields for first and last name

Choose based on your regional requirements and user experience preferences.
:::

---

## Step 3: Document Verification

Configure how users will verify their identity documents. This step is crucial for KYC compliance and identity verification.

### What You'll Configure

-   **Document Step Requirement** - Whether document verification is mandatory, optional, or skipped
-   **Attempt Limit** - Maximum number of upload attempts (1-5)
-   **Document Types** - Which documents to accept per country (government ID, passport, driver's license)
-   **Verification Methods** - How documents will be validated (scanning, upload, or both)
-   **Advanced Verification** - Additional checks like information verification, screening, or criminal history
