---
id: "en-docs-smart-enroll-self-hosted-smart-enroll-self-hosted-error-response-3"
title: "SmartEnroll: Self Hosted — Error Response"
sourcePath: "docs/smart-enroll-self-hosted/smart-enroll-self-hosted.md"
locale: "en"
category: "smart-enroll-self-hosted"
tags:
  - "smart-enroll-self-hosted"
sourceAnchor: "Error Response"
slug: "/smart-enroll-self-hosted"
url: "https://docs.verifik.co/smart-enroll-self-hosted"
---

# SmartEnroll: Self Hosted

The **SmartEnroll API** provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## Error Response

```json
{
    "message": "Error description",
    "code": "ERROR_CODE"
}
```

---

## Rate Limits

-   **Project Operations**: 100 requests per minute per user
-   **Project Flow Operations**: 50 requests per minute per user
-   **Document Verification**: 20 requests per minute per user
-   **Biometric Verification**: 10 requests per minute per user
-   **Background Checks**: 5 requests per minute per user

---

## Building a KYC Project

SmartEnroll Version 3 provides a structured, 6-step workflow for creating personal KYC (Know Your Customer) projects. Each step builds upon the previous one, allowing you to configure your onboarding flow progressively.

### Understanding Project Targets

Before you begin, it's important to understand the two types of projects:

-   **Personal (KYC)** - For onboarding individual users
-   **Business (KYB)** - For onboarding companies and their legal representatives _(covered in separate documentation)_

This guide focuses on **Personal KYC projects**.

---

## Step 1: Basic Setup

The first step establishes the foundation of your KYC project. This includes basic project information, compliance details, and data protection settings required by privacy regulations.

### What You'll Configure

-   **Project Name** - A descriptive name for your KYC project
-   **Allowed Countries** - Countries where users can complete onboarding. Use specific country names or `"All"` to allow every country. This allow-list is separate from document acceptance (Step 3).
-   **Contact Email** - Email address for project-related communications
-   **Privacy & Terms URLs** - Links to your privacy policy and terms of service
-   **Data Protection Information** - Details about your Data Protection Officer (required for GDPR compliance)
