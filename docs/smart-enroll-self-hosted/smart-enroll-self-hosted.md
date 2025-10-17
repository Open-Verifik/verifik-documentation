---
id: smart-enroll-self-hosted
title: "SmartEnroll: Self Hosted"
description: Programmatic access to SmartEnroll functionality for custom KYC and onboarding flows
---

import { ClipboardList, Workflow, Palette, Link, BarChart3, Shield } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';
import ThemeToggle from '@site/src/components/ThemeToggle';

# SmartEnroll: Self-Hosted

The **SmartEnroll API** provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## Overview

The SmartEnroll API enables you to create and manage KYC projects programmatically, offering the same powerful verification capabilities as SmartEnroll but with complete API control. You can build custom user interfaces, integrate with your existing systems, and create tailored onboarding experiences while leveraging Verifik's robust verification infrastructure.

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
        <h3><Link size={20} style={{display: 'inline', marginRight: '8px'}} />API Integration</h3>
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

-   **Production**: `https://api.verifik.co/v3`
-   **Staging**: `https://staging-api.verifik.co/v3`
-   **Development**: `https://dev-api.verifik.co/v3`

:::tip Environment Selection
Use the appropriate base URL based on your environment. All examples in this documentation use the production URL.
:::

### Quick Start Example

Here's a simple example of how to list all projects using the API:

<CodeExamples
url="/v3/projects"
method="GET"
query={{
  page: 1,
  limit: 10
}}
/>

### API Resources

The Enroll API provides two main resources:

#### Projects

Manage your KYC projects with complete control over configuration, branding, and verification settings.

-   **[List Projects](/api/projects/projects-list)** - Retrieve all projects
-   **[Get Project](/api/projects/projects-show)** - Get project details
-   **[Create Project](/api/projects/projects-create)** - Create new projects
-   **[Update Project](/api/projects/projects-update)** - Update project configuration
-   **[Delete Project](/api/projects/projects-delete)** - Remove projects

#### Project Flows

Configure verification flows and manage project-specific settings.

-   **[Update Project Flow](/api/project-flows/project-flows-update)** - Update verification flow settings
-   **[Delete Project Flow](/api/project-flows/project-flows-delete)** - Remove project flows

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

## Integration Patterns

### Single Request Approach

For simple integrations, create complete projects with all configuration in a single API call:

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "My KYC Project",
    allowedCountries: ["United States", "Canada"],
    contactEmail: "admin@example.com",
    privacyUrl: "https://example.com/privacy",
    termsAndConditionsUrl: "https://example.com/terms",
    dataProtection: {
      name: "John Doe",
      email: "dpo@example.com",
      address: "123 Main St",
      city: "New York",
      country: "United States",
      postalCode: "10001"
    },
    projectFlow: {
      target: "personal",
      type: "onboarding",
      signUpForm: {
        fullName: true,
        email: true,
        phone: true
      },
      documents: {
        attemptLimit: 3,
        documentTypes: [
          {
            country: "United States",
            configurations: [
              {
                active: true,
                documentCategory: "government_id"
              }
            ]
          }
        ]
      }
    },
    projectFlowType: "onboarding"
  }}
/>

### Step-by-Step Approach

For complex integrations, build projects progressively using the update endpoint:

1. **Create Basic Project** - Start with minimal required fields
2. **Configure Data Protection** - Set up compliance information
3. **Setup Sign-up Form** - Configure user data collection
4. **Configure Documents** - Set up document verification
5. **Setup Biometrics** - Configure liveness detection
6. **Configure Integrations** - Set up webhooks and redirects
7. **Apply Branding** - Customize visual appearance

#### Example: Step 1 - Create Basic Project

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "My KYC Project",
    allowedCountries: ["United States"],
    contactEmail: "admin@example.com",
    privacyUrl: "https://example.com/privacy",
    termsAndConditionsUrl: "https://example.com/terms"
  }}
/>

#### Example: Step 2 - Update with Data Protection

<CodeExamples
url="/v3/projects/{id}"
method="PUT"
params={{ id: "64a1b2c3d4e5f6789012345" }}
body={{
    dataProtection: {
      name: "John Doe",
      email: "dpo@example.com",
      address: "123 Main St",
      city: "New York",
      country: "United States",
      postalCode: "10001"
    }
  }}
/>

:::tip Recommended Approach
The step-by-step approach matches the SmartEnroll frontend workflow and provides better error handling and validation feedback.
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
