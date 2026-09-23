---
id: "en-docs-smartenroll-smartenroll-2-signup-form-3"
title: "SmartEnroll — 2. Signup Form"
sourcePath: "docs/smartenroll/smartenroll.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "2. Signup Form"
slug: "/smartenroll"
url: "https://docs.verifik.co/smartenroll"
---

# SmartEnroll
**API path(s):** /v2/app-registrations/{id}/resend-link

**SmartEnroll** is a no-code solution designed to provide secure and seamless onboardings for users. This platform enables businesses to offer various onboarding checks, including email, phone, and biometric verification, document validations, AML checks, tempering checks and more. All those features are integrated into our project ensuring a user-friendly and secure experience. With SmartEnroll, companies can easily integrate these KYC solutions without the need for complex coding or infrastructure development.

## 2. Signup Form

In this step, users configure the fields they want to collect from end-users during the signup process.

-   **Full Name**: The system allows for flexibility in how names are captured. Users can choose between:
    -   First and last names together (a single input field).
    -   First and last names separated (two distinct input fields for each part of the name).
-   **Email**: You can opt to validate the email address by toggling between "Validate" or "Don't validate."
-   **Phone**: Users can decide if phone verification will be done via:
    -   WhatsApp
    -   SMS
    -   Both (WhatsApp and SMS)
    -   Don't validate (skip phone number validation).
-   **Show Terms and Conditions**: A toggle to display Terms and Conditions to the end-users during the signup process.
-   **Show Privacy Policies**: Similar to the Terms and Conditions, this toggle will show privacy policies at the signup stage.
-   **Role and Company**: The platform allows users to ask for additional optional fields like Role and Company information. These fields are toggled on or off based on the business's needs.

:::tip Key Note
This step provides flexibility in data collection while ensuring necessary legal agreements (Terms & Privacy Policies) are presented to the user.
:::

---

### 3. Document Scanning

In this step, the user can configure document verification for identity validation.

-   **Valid Documents**: The platform supports scanning and verifying various government-issued documents. Users can select which types of documents are acceptable for their KYC process. Options typically include:
    -   Government Identity Document
    -   Passport
    -   Driving License
-   **Set an Attempt Limit**: This allows users to define how many failed document scans are permitted before the process is locked. The range is customizable, from 3 up to 10 attempts. This is critical for controlling potential fraudulent attempts and ensuring efficient resource use.

-   **ID Verification Methods**:
    -   **Option 1**: Upload a digital copy of an ID document.
    -   **Option 2**: Use the device's camera to scan the physical ID for real-time verification.
-   **Data Base Screening**: Additional checks can be done against government databases. Users can add:
    -   **ID Verification with Government Sources**: Compares the extracted information with official records to verify the authenticity of the document.
    -   **Criminal Record Check**: Queries databases to see if the individual has a criminal record.

:::tip Key Note
This step is where the user sets up verification methods to authenticate documents with an additional layer of security via external checks.
:::

:::info Allowed countries vs document countries
**Allowed countries** (Basic setup) control who can enroll. **Document countries** (this step) control which countries and document categories you accept. There is no single toggle that auto-creates document configurations for every country—add one country block at a time and enable only categories that have catalog templates.
:::

:::warning Empty catalog is per category
“No documents found for this country in the catalog” applies to a **specific category** (Government ID, License, or Passport), not necessarily the whole country. For example, the **United States** may show no Government ID templates while many **state driver licenses** are available under **License**. Leave empty categories inactive; enable License (or Passport) when those templates appear. If a country row is incomplete or the country dropdown is blank, the setup form will block save until you pick a country and keep at least one valid active category.
:::

---
