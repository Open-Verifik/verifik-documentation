---
id: "en-docs-smartenroll-smartenroll-setup-guide-2"
title: "SmartEnroll — Setup Guide"
sourcePath: "docs/smartenroll/smartenroll.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "Setup Guide"
slug: "/smartenroll"
url: "https://docs.verifik.co/smartenroll"
---

# SmartEnroll
**API path(s):** /v2/app-registrations/{id}/resend-link

**SmartEnroll** is a no-code solution designed to provide secure and seamless onboardings for users. This platform enables businesses to offer various onboarding checks, including email, phone, and biometric verification, document validations, AML checks, tempering checks and more. All those features are integrated into our project ensuring a user-friendly and secure experience. With SmartEnroll, companies can easily integrate these KYC solutions without the need for complex coding or infrastructure development.

## Setup Guide

Follow these 7 steps to configure your SmartEnroll project:

### 1. Basic Configuration

#### Project Information

This section is where the core project settings are configured. Each field serves a specific purpose:

-   **Project Name**: This is a required field where the user enters the name of their project. It will be used across all references to the project within the Verifik ecosystem.
-   **Allowed Countries**: This is where users specify which countries their KYC process will be applicable to. You can select specific countries or choose **All** (World) to allow enrollment from every country. This allow-list is separate from document acceptance (configured in the Documents step).
-   **Email**: The email address associated with the project. This is the contact point for all correspondence related to this project.
-   **Privacy Policy (URL)**: A mandatory field where users provide a link to their Privacy Policy document. This ensures compliance with local and international data protection laws.
-   **Terms and Conditions (URL)**: A field where the user provides a URL to their Terms and Conditions, which will be shown to the end users during the KYC process.

#### Data Protection Officer (DPO) Contact Information:

-   **Owner's Name**: The legal representative of the project or the designated Data Protection Officer's name.
-   **Email**: The email address of the person responsible for data protection and compliance.
-   **Address**: The primary address (optional).
-   **Country, City, Postal Code**: Location details for the Data Protection Officer, which might be required for regulatory purposes.

:::tip Key Note
This setup phase ensures all legal and basic configurations are aligned before the project can proceed to the next step.
:::

---
