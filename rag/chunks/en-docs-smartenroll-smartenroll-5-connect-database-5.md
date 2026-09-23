---
id: "en-docs-smartenroll-smartenroll-5-connect-database-5"
title: "SmartEnroll — 5. Connect Database"
sourcePath: "docs/smartenroll/smartenroll.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "5. Connect Database"
slug: "/smartenroll"
url: "https://docs.verifik.co/smartenroll"
---

# SmartEnroll

**SmartEnroll** is a no-code solution designed to provide secure and seamless onboardings for users. This platform enables businesses to offer various onboarding checks, including email, phone, and biometric verification, document validations, AML checks, tempering checks and more. All those features are integrated into our project ensuring a user-friendly and secure experience. With SmartEnroll, companies can easily integrate these KYC solutions without the need for complex coding or infrastructure development.

## 5. Connect Database

This step is critical for integrating your KYC process with external databases or using CSV files for lists, such as blacklists. This step offers flexibility based on the size, type, and frequency of updates to your data.

#### Blacklist Management: Uploading a CSV or Connecting via API

##### 1. Upload a Blacklist (CSV)

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

**Webhook Integration:**

-   Users can also configure a **Webhook** to receive notifications every time a new entry is added, or someone attempts to access the system who is on the blacklist. This enhances the system's capability for real-time alerts and monitoring.

**Redirection URL:**

-   After completing the KYC process, users will be redirected to a specific URL that you configure. This URL can be customized based on your flow (e.g., redirection to a dashboard, further actions, or simply a thank-you page).

---
