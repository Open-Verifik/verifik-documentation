---
id: smartenroll
title: SmartEnroll
description: A no-code solution designed to provide secure and seamless onboardings for users
---

import { Mail, Phone, ScanFace, FileText, Database, Palette } from 'lucide-react';

# SmartEnroll

**SmartEnroll** is a no-code solution designed to provide secure and seamless onboardings for users. This platform enables businesses to offer various onboarding checks, including email, phone, and biometric verification, document validations, AML checks, tempering checks and more. All those features are integrated into our project ensuring a user-friendly and secure experience. With SmartEnroll, companies can easily integrate these KYC solutions without the need for complex coding or infrastructure development.

## Overview

SmartEnroll provides a comprehensive KYC (Know Your Customer) solution that streamlines the user onboarding process while maintaining the highest security standards. The platform offers a complete suite of verification tools that can be customized to meet your specific business requirements.

## Key Features

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Mail size={20} style={{display: 'inline', marginRight: '8px'}} />Email Verification</h3>
      </div>
      <div className="card__body">
        <p>Validate email addresses with OTP verification to ensure authentic user registration.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Phone size={20} style={{display: 'inline', marginRight: '8px'}} />Phone Verification</h3>
      </div>
      <div className="card__body">
        <p>Verify phone numbers via SMS and WhatsApp for secure user authentication.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><ScanFace size={20} style={{display: 'inline', marginRight: '8px'}} />Biometric Verification</h3>
      </div>
      <div className="card__body">
        <p>Advanced facial recognition and liveness detection for secure identity verification.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileText size={20} style={{display: 'inline', marginRight: '8px'}} />Document Scanning</h3>
      </div>
      <div className="card__body">
        <p>Scan and verify government-issued documents with tampering detection.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Database size={20} style={{display: 'inline', marginRight: '8px'}} />Database Screening</h3>
      </div>
      <div className="card__body">
        <p>Comprehensive background checks against government databases and blacklists.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Palette size={20} style={{display: 'inline', marginRight: '8px'}} />Custom Branding</h3>
      </div>
      <div className="card__body">
        <p>Fully customizable interface to match your brand identity and requirements.</p>
      </div>
    </div>
  </div>
</div>

---

## Setup Guide

Follow these 7 steps to configure your SmartEnroll project:

### 1. Basic Configuration

<img src="/img/smartenroll/smart-enroll-basic-setup.png" alt="Basic Configuration" />

#### Project Information

This section is where the core project settings are configured. Each field serves a specific purpose:

-   **Project Name**: This is a required field where the user enters the name of their project. It will be used across all references to the project within the Verifik ecosystem.
-   **Allowed Countries**: This is where users specify which countries their KYC process will be applicable to. They can select from a predefined list (Canada, Colombia, Mexico, Panama, and the United States). Additional countries can be added by typing the country name in the input field.
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

### 2. Signup Form

<img src="/img/smartenroll/smart-enroll-signup.png" alt="Signup Form Configuration" />

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

<img src="/img/smartenroll/smart-enroll-documents.png" alt="Document Scanning Configuration" />

In this step, the user can configure document verification for identity validation.

-   **Valid Documents**: The platform supports scanning and verifying various government-issued documents. Users can select which types of documents are acceptable for their KYC process. Options typically include:
    -   Government Identity Document
    -   Passport
    -   Driving License
-   **Set an Attempt Limit**: This allows users to define how many failed document scans are permitted before the process is locked. The range is customizable, from 3 up to 10 attempts. This is critical for controlling potential fraudulent attempts and ensuring efficient resource use.

<img src="/img/smartenroll/smart-enroll-documents-verification-methods.png" alt="Document Verification Methods" />

-   **ID Verification Methods**:
    -   **Option 1**: Upload a digital copy of an ID document.
    -   **Option 2**: Use the device's camera to scan the physical ID for real-time verification.
-   **Data Base Screening**: Additional checks can be done against government databases. Users can add:
    -   **ID Verification with Government Sources**: Compares the extracted information with official records to verify the authenticity of the document.
    -   **Criminal Record Check**: Queries databases to see if the individual has a criminal record.

:::tip Key Note
This step is where the user sets up verification methods to authenticate documents with an additional layer of security via external checks.
:::

---

### 4. Biometric Registration

<img src="/img/smartenroll/smart-enroll-liveness.png" alt="Biometric Registration Configuration" />

**Biometric Registration:** This is the biometric verification part of the flow, where a user's face is checked to confirm their presence during the onboarding process.

-   **Set an Attempt Limit**: Specifies how many times a user can fail liveness detection before being blocked from continuing. The allowed attempts can be customized from 3 to 10.
-   **Liveness Score:** Customize the threshold for liveness detection. This score determines how stringent the system is in verifying that the biometric input is from a live person, not a static image or video. The default recommendation is 50%, which ensures the liveness check works optimally on most devices.
-   **Compare Score:** This score sets the accuracy of comparing (1:1) the face of the end user to the document provided. A higher score means an more security, stricter matching criteria, and demands a higher resemblance to the user in order to gain access. The recommended score for optimal performance is 85%.

:::warning Security Notice
Higher scores provide better security but may increase false rejection rates. Test with your user base to find the optimal balance.
:::

---

### 5. Connect Database

This step is critical for integrating your KYC process with external databases or using CSV files for lists, such as blacklists. This step offers flexibility based on the size, type, and frequency of updates to your data.

#### Blacklist Management: Uploading a CSV or Connecting via API

##### 1. Upload a Blacklist (CSV)

<img src="/img/smartenroll/csv-blacklist.png" alt="CSV Blacklist Upload" />

-   **When to Use a CSV**:

    -   **Static or Small Lists**: CSV files are ideal when you have a fixed, smaller blacklist that doesn't change frequently. This can include cases where your blacklist is composed of a few hundred entries, such as known fraudulent individuals, or blocked entities, whose data will not change over time.
    -   **No Database or Simple System**: If your organization does not maintain a dynamic database or prefers not to deal with the complexity of database integration, a CSV upload provides an easy-to-use alternative. This is especially useful for small businesses or those with limited technical resources.
    -   **Offline Maintenance**: In environments where internet access may be limited, or for businesses that manually track their lists (e.g., using Excel or other offline tools), uploading a CSV allows for periodic updates without the need for a connected, always-online solution.

-   **How it Works**:

    -   Users can upload a CSV file containing up to **500 entries per load**. These entries represent the individuals or entities you want to block from accessing your system.
    -   Once uploaded, the platform uses this blacklist to **restrict access** to anyone on the list, preventing them from completing the KYC process.

-   **Key Benefits**:
    -   **Simplicity**: No need for API setup or a constantly updated database. Users can manage and upload CSVs as needed.
    -   **Low Maintenance**: Suitable for organizations that do not expect frequent changes or updates to their blacklists.
    -   **Cost-Effective**: No need for investing in additional infrastructure or services to manage databases dynamically.

##### 2. Connect with API: Dynamic Blacklist Management

<img src="/img/smartenroll/api-blacklist.png" alt="API Blacklist Connection" />

-   **When to Use an API**:

    -   **Dynamic and Frequently Updated Lists**: APIs are ideal for larger, dynamic blacklists that are constantly changing or need real-time updates. This could be the case for organizations that deal with a large volume of customer data or want to automatically sync with third-party systems to ensure their blacklist is always up to date.
    -   **Centralized Database**: For businesses that already maintain a centralized database or wish to connect their systems for real-time validation, API integration ensures that blacklist data is pulled and applied in real-time during the KYC process.
    -   **Multiple Sources**: If the blacklist needs to be compiled from multiple external sources or databases, an API allows you to integrate those systems seamlessly.

-   **How it Works**:

    -   Users provide an **API endpoint** that the system will use to dynamically pull blacklist data.
    -   This ensures that every time a user attempts to sign up or complete the KYC process, the system queries the API to check whether that individual is on the blacklist.
    -   The API connection ensures that any changes made to your blacklist (additions or removals) are immediately reflected in the KYC process without requiring manual intervention.

-   **Key Benefits**:
    -   **Real-Time Updates**: API connections ensure that your blacklist is always up to date, reflecting any changes or new entries as soon as they happen.
    -   **Efficiency**: For businesses that need to manage large-scale or frequently changing blacklists, APIs streamline the process, reducing manual work and potential errors.
    -   **Scalability**: As your business grows, the API connection can scale to accommodate larger datasets and integrate with other systems, making it ideal for more complex environments.

#### Integrations

<img src="/img/smartenroll/smart-enroll-integrations.png" alt="Project Connections Configuration" />

**Webhook Integration:**

-   Users can also configure a **Webhook** to receive notifications every time a new entry is added, or someone attempts to access the system who is on the blacklist. This enhances the system's capability for real-time alerts and monitoring.

**Redirection URL:**

-   After completing the KYC process, users will be redirected to a specific URL that you configure. This URL can be customized based on your flow (e.g., redirection to a dashboard, further actions, or simply a thank-you page).

---

### 6. Customize the Style

<img src="/img/smartenroll/smart-enroll-user-interface.png" alt="Style Customization" />

This section enables full customization of the KYC flow's visual elements:

-   **Logo**: Users can upload their company logo, which will be displayed throughout the KYC process.
-   **Image**: Users can upload additional images to accompany the KYC flow for a more personalized experience.
-   **Colors**: The interface allows users to select a color scheme to match their brand identity. Customizations include:
    -   Title Color
    -   Text Color
    -   Button Color
    -   Background Color
    -   Right Background Color (for specific UI components).

:::tip Key Note
Customization ensures that the Verifik Client App seamlessly aligns with the user's branding guidelines.
:::

---

### 7. Invite Your Staff

<img src="/img/smartenroll/smart-enroll-invite-members.png" alt="Staff Invitation" />

-   **Project Members**: Users can manage their team by inviting team members to collaborate on the project. Each member can be assigned a specific role, such as "editor," allowing them certain permissions within the project.
-   **Invite Members**: This field enables users to search and invite new members from their workspace to join the project.

:::tip Key Note
This feature provides team collaboration and role management to enhance project efficiency.
:::

---

## Best Practices

### Security Recommendations

1. **Set Appropriate Attempt Limits**: Configure attempt limits based on your security requirements and user experience needs.
2. **Use Recommended Scores**: Start with the recommended biometric scores and adjust based on your testing results.
3. **Regular Blacklist Updates**: Keep your blacklists current to maintain security effectiveness.
4. **Monitor Webhook Alerts**: Set up proper monitoring for webhook notifications to respond quickly to security events.

### User Experience Tips

1. **Clear Instructions**: Provide clear instructions to users about what documents are acceptable.
2. **Mobile Optimization**: Ensure your KYC flow works well on mobile devices since many users complete onboarding on their phones.
3. **Brand Consistency**: Use customization options to maintain your brand identity throughout the process.
4. **Test Thoroughly**: Test the complete flow with different user scenarios before going live.

### Compliance Considerations

1. **Data Protection**: Ensure your privacy policy and terms are comprehensive and compliant with local regulations.
2. **Documentation**: Keep records of your KYC process configuration for audit purposes.
3. **Regular Reviews**: Periodically review and update your KYC process to maintain compliance.

---

## Support

For technical support and implementation assistance, contact our support team or visit our developer portal.

:::tip Pro Tip
Start with the basic configuration and gradually add more verification steps as you become familiar with the platform.
:::

:::warning Important
Always test your KYC flow thoroughly in a sandbox environment before deploying to production.
:::
