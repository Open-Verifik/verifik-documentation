---
id: smart-enroll-self-hosted
title: "SmartEnroll: Self Hosted"
description: Programmatic access to SmartEnroll functionality for custom KYC and onboarding flows
---

import { ClipboardList, Workflow, Palette, Link as LinkIcon, BarChart3, Shield } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';
import ThemeToggle from '@site/src/components/ThemeToggle';

# SmartEnroll: Self-Hosted

The **SmartEnroll API** provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## Overview

The SmartEnroll API enables you to create and manage KYC (Know Your Customer) projects programmatically, offering the same powerful verification capabilities as the SmartEnroll interface but with complete API control. Version 3 introduces a streamlined, step-by-step configuration process that makes it easier to build custom onboarding flows while maintaining flexibility and control.

Whether you're onboarding individuals (personal KYC) or businesses (business KYB), the SmartEnroll API provides a structured approach to collecting user information, verifying documents, performing biometric checks, and integrating with your existing systems.

## Key Features

<div className="features-grid">
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><ClipboardList size={20} style={{display: 'inline', marginRight: '8px'}} />Project Management</h3>
      </div>
      <div className="card__body">
        <p>Create and manage KYC projects with full control over configuration, branding, and verification steps.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><Workflow size={20} style={{display: 'inline', marginRight: '8px'}} />Project Flows</h3>
      </div>
      <div className="card__body">
        <p>Configure verification flows with document scanning, biometric verification, and background checks.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><Palette size={20} style={{display: 'inline', marginRight: '8px'}} />Custom Branding</h3>
      </div>
      <div className="card__body">
        <p>Fully customizable project branding to match your brand identity and user experience requirements.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><LinkIcon size={20} style={{display: 'inline', marginRight: '8px'}} />API Integration</h3>
      </div>
      <div className="card__body">
        <p>Seamless integration with your existing systems through RESTful APIs and webhook notifications.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><BarChart3 size={20} style={{display: 'inline', marginRight: '8px'}} />Real-time Updates</h3>
      </div>
      <div className="card__body">
        <p>Step-by-step project configuration with real-time updates and validation feedback.</p>
      </div>
    </div>
  </div>
  <div className="feature-card">
    <div className="card">
      <div className="card__header">
        <h3><Shield size={20} style={{display: 'inline', marginRight: '8px'}} />Security First</h3>
      </div>
      <div className="card__body">
        <p>Enterprise-grade security with JWT authentication and comprehensive data protection compliance.</p>
      </div>
    </div>
  </div>
</div>

---

## Getting Started

### Authentication

All API requests require a valid JWT token. Include the token in the Authorization header:

```http
Authorization: Bearer <your_jwt_token>
```

### Base URLs

-   **Production**: `https://api.verifik.co`
-   **Staging**: `https://staging-api.verifik.co`
-   **Development**: `https://dev-api.verifik.co`

:::tip Environment Selection
Use the appropriate base URL based on your environment. All examples in this documentation use the production URL.
:::

### Quick Start Example

Here's a simple example of how to list all projects using the API:

<CodeExamples
url="/projects"
method="GET"
query={{
  page: 1,
  limit: 10
}}
/>

### API Resources

The SmartEnroll API provides two main resources:

#### Projects

Manage your KYC projects with complete control over configuration, branding, and verification settings.

-   **[List Projects](/resources/projects/list-all-projects)** - Retrieve all projects
-   **[Get Project](/resources/projects/retrieve-a-project)** - Get project details
-   **[Create Project](/resources/projects/projects-create)** - Create new projects
-   **[Update Project](/resources/projects/update-a-project)** - Update project configuration
-   **[Delete Project](/resources/projects/projects-delete)** - Remove projects

#### Project Flows

Configure verification flows and manage project-specific settings.

-   **[Update Project Flow](../resources/project-flows/project-flows-update)** - Update verification flow settings
-   **[Delete Project Flow](../resources/project-flows/project-flows-delete)** - Remove project flows

---

## Response Format

All API responses follow a consistent format:

### Success Response

```json
{
    "data": {
        // Response data
    },
    "total": 0,
    "limit": 0,
    "page": 0,
    "pages": 0
}
```

### Error Response

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
-   **Allowed Countries** - Countries where users can complete onboarding
-   **Contact Email** - Email address for project-related communications
-   **Privacy & Terms URLs** - Links to your privacy policy and terms of service
-   **Data Protection Information** - Details about your Data Protection Officer (required for GDPR compliance)

### Example: Create a Basic Project

<CodeExamples
url="/projects"
method="POST"
body={{
    name: "Customer Onboarding - North America",
    allowedCountries: ["United States", "Canada", "Mexico"],
    contactEmail: "compliance@example.com",
    privacyUrl: "https://example.com/privacy",
    termsAndConditionsUrl: "https://example.com/terms",
    dataProtection: {
      name: "Jane Smith",
      email: "dpo@example.com",
      address: "123 Business Plaza",
      city: "New York",
      country: "United States",
      postalCode: "10001"
    },
    target: "personal"
  }}
/>

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

<CodeExamples
url="/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    projectFlow: {
      target: "personal",
      type: "onboarding",
      signUpForm: {
        fullName: true,
        fullNameStyle: "together",
        email: true,
        emailGateway: "mailgun",
        phone: true,
        phoneGateway: "sms",
        allowAdditionalFields: false,
        additionalFields: [],
        showPrivacyNotice: true,
        showTermsAndConditions: true
      }
    },
    projectFlowType: "onboarding"
  }}
/>

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

### Document Categories

For personal KYC, you can configure these document types:

-   **government_id** - Government-issued identification cards
-   **passport** - International passports
-   **license** - Driver's licenses

### Example: Configure Document Verification

<CodeExamples
url="/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    projectFlow: {
      target: "personal",
      type: "onboarding",
      steps: {
        document: "mandatory"
      },
      documents: {
        attemptLimit: 3,
        verificationMethods: ["scan", "upload"],
        documentTypes: [
          {
            country: "United States",
            configurations: [
              {
                active: true,
                documentCategory: "government_id",
                documentTemplates: []
              },
              {
                active: true,
                documentCategory: "license",
                documentTemplates: []
              }
            ]
          },
          {
            country: "Canada",
            configurations: [
              {
                active: true,
                documentCategory: "government_id",
                documentTemplates: []
              }
            ]
          }
        ],
        screening: false,
        informationVerification: false,
        criminalHistoryVerification: false
      }
    },
    projectFlowType: "onboarding"
  }}
/>

:::warning Document Types Per Country
Each country must have at least one active document configuration when the document step is not skipped. Configure document types based on what's commonly used in each country.
:::

### Step Requirements

-   **mandatory** - Users must complete document verification to proceed
-   **optional** - Users can choose to skip document verification
-   **skip** - Document verification is not included in the flow

---

## Step 4: Liveness Detection

Configure biometric verification to ensure users are physically present during onboarding. This step uses facial recognition and liveness detection to prevent fraud.

### What You'll Configure

-   **Liveness Step Requirement** - Whether biometric verification is mandatory, optional, or skipped
-   **Attempt Limit** - Maximum number of liveness verification attempts (1-5)
-   **Liveness Score** - Minimum score to confirm the user is live (0.52 - 0.90)
-   **Comparison Score** - Minimum score to match face with document photo (0.70 - 0.95)
-   **Search Mode** - Speed vs accuracy trade-off (FAST or ACCURATE)

### Example: Configure Liveness Detection

<CodeExamples
url="/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    projectFlow: {
      target: "personal",
      type: "onboarding",
      steps: {
        liveness: "mandatory"
      },
      liveness: {
        attemptLimit: 3,
        minScore: 0.65,
        searchMinScore: 0.80,
        searchMode: "FAST"
      }
    },
    projectFlowType: "onboarding"
  }}
/>

:::tip Liveness Scores

-   **minScore (0.65 recommended)** - Lower scores work with low-quality cameras but may increase false positives
-   **searchMinScore (0.80 recommended)** - Higher scores provide better face-to-document matching but require better image quality

Start with recommended values and adjust based on your security requirements and user experience feedback.
:::

### Search Modes

-   **FAST** - Optimized for speed, suitable for most use cases
-   **ACCURATE** - Slower but more precise, recommended for high-security applications

---

## Step 5: Integrations

Connect your KYC project to external systems, configure webhooks for real-time notifications, and set up post-onboarding redirects.

### What You'll Configure

-   **Redirect URL** - Where to send users after completing onboarding (required)
-   **Webhook** - Endpoint to receive real-time onboarding events
-   **Blacklist Integration** - Connect to external databases to prevent enrollment
-   **API Integration** - Link to your customer database for data validation

### Example: Configure Integrations

<CodeExamples
url="/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    projectFlow: {
      target: "personal",
      type: "onboarding",
      integrations: {
        redirectUrl: "https://example.com/onboarding-complete",
        webhook: "64b2c3d4e5f678901234567",
        source: "NONE",
        strategy: "none",
        apiUrl: "",
        apiTestType: "email",
        apiTestValue: ""
      }
    },
    projectFlowType: "onboarding"
  }}
/>

:::info Blacklist Integration
The blacklist feature allows you to connect an external database. Users found in this database will be prevented from completing onboarding. Set `source` to "API" or "CSV" and configure the appropriate connection details.
:::

### Integration Sources

-   **NONE** - No external integration
-   **API** - Connect to a RESTful API endpoint
-   **CSV** - Upload a CSV file (coming soon)

### Integration Strategies

-   **none** - Allow all users to enroll
-   **blacklist** - Prevent users found in external database from enrolling

---

## Step 6: User Interface Customization

Customize the visual appearance of your onboarding flow to match your brand identity. This step is optional but recommended for a seamless user experience.

### What You'll Configure

-   **Logo** - Your company logo (displayed at the top)
-   **Background Color** - Main background color
-   **Button Color** - Primary button color
-   **Button Text Color** - Text color for buttons
-   **Title Color** - Color for headings and titles
-   **Text Color** - Color for body text
-   **Image** - Background or decorative image
-   **Image Background Color** - Background color for the image area

### Example: Configure Branding

<CodeExamples
url="/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    branding: {
      backgroundColor: "#ffffff",
      buttonColor: "#2563eb",
      buttonTextColor: "#ffffff",
      titleColor: "#1e293b",
      textColor: "#475569",
      imageBackgroundColor: "#f1f5f9",
      logo: "https://example.com/logo.png",
      image: "https://example.com/background.jpg"
    }
  }}
/>

:::tip Color Guidelines

-   Use high contrast between text and backgrounds for accessibility
-   Test your color scheme on both desktop and mobile devices
-   Ensure button colors stand out from the background
-   Consider your brand guidelines when choosing colors
    :::

---

## Complete Project Example

Here's a complete example showing how to create a fully configured KYC project in a single request:

<CodeExamples
url="/projects"
method="POST"
body={{
    name: "Customer Onboarding - North America",
    allowedCountries: ["United States", "Canada"],
    contactEmail: "compliance@example.com",
    privacyUrl: "https://example.com/privacy",
    termsAndConditionsUrl: "https://example.com/terms",
    target: "personal",
    dataProtection: {
      name: "Jane Smith",
      email: "dpo@example.com",
      address: "123 Business Plaza",
      city: "New York",
      country: "United States",
      postalCode: "10001"
    },
    branding: {
      backgroundColor: "#ffffff",
      buttonColor: "#2563eb",
      buttonTextColor: "#ffffff",
      titleColor: "#1e293b",
      textColor: "#475569",
      imageBackgroundColor: "#f1f5f9",
      logo: "https://example.com/logo.png",
      image: ""
    },
    projectFlow: {
      target: "personal",
      type: "onboarding",
      status: "draft",
      version: 3,
      signUpForm: {
        fullName: true,
        fullNameStyle: "together",
        email: true,
        emailGateway: "mailgun",
        phone: true,
        phoneGateway: "sms",
        allowAdditionalFields: false,
        additionalFields: [],
        showPrivacyNotice: true,
        showTermsAndConditions: true
      },
      steps: {
        document: "mandatory",
        liveness: "mandatory"
      },
      documents: {
        attemptLimit: 3,
        verificationMethods: ["scan", "upload"],
        documentTypes: [
          {
            country: "United States",
            configurations: [
              {
                active: true,
                documentCategory: "government_id",
                documentTemplates: []
              }
            ]
          }
        ],
        screening: false,
        informationVerification: false,
        criminalHistoryVerification: false
      },
      liveness: {
        attemptLimit: 3,
        minScore: 0.65,
        searchMinScore: 0.80,
        searchMode: "FAST"
      },
      integrations: {
        redirectUrl: "https://example.com/onboarding-complete",
        webhook: null,
        source: "NONE",
        strategy: "none",
        apiUrl: "",
        apiTestType: "email",
        apiTestValue: ""
      }
    },
    projectFlowType: "onboarding"
  }}
/>

---

## Project Lifecycle Management

### Activating Your Project

Once you've configured all steps, change the project status to make it live:

<CodeExamples
url="/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    status: "active",
    projectFlow: {
      status: "active"
    }
  }}
/>

### Project Status Values

-   **draft** - Project is being configured, not accessible to end users
-   **active** - Project is live and accepting user enrollments
-   **paused** - Project is temporarily disabled, no new enrollments accepted

:::warning Before Activating
Ensure all required steps are properly configured and tested before setting status to "active". Users will not be able to complete onboarding if required steps are missing or misconfigured.
:::

---

## Integration Patterns

### Progressive Configuration

Build your project step-by-step, matching the SmartEnroll interface workflow:

1. **Create** the project with basic information
2. **Configure** sign-up form fields
3. **Set up** document verification
4. **Enable** liveness detection
5. **Connect** integrations and webhooks
6. **Customize** branding and appearance
7. **Activate** the project

This approach provides better error handling and validation at each step.

### Single-Request Configuration

Create a complete project in one API call if you have all configuration details prepared. This is ideal for:

-   Automated project creation
-   Template-based deployments
-   Migration from other systems

:::tip Best Practice
Use the progressive approach when building projects manually or through a user interface. Use the single-request approach for automation and templates.
:::

---

## Support

For technical support and API documentation assistance:

-   **Documentation**: Visit our [developer portal](https://docs.verifik.co)
-   **Support**: Contact our support team
-   **Status**: Check our [API status page](https://status.verifik.co)

:::tip Getting Help
When contacting support, include your project ID, API endpoint, and request/response details for faster assistance.
:::

:::warning Important
Always test your integration thoroughly in the development environment before deploying to production.
:::
