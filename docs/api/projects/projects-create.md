---
id: projects-create
title: Create Project
description: Create a new KYC project with optional project flow configuration
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Project

Create a new KYC project with complete configuration. You can create a basic project with minimal fields or include a complete project flow configuration in a single request.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method post">POST</div>
  <div className="endpoint-url">/v3/projects</div>
</div>

## <Lock size={20} style={{display: 'inline', marginRight: '8px'}} />Authentication

<div className="auth-card">
  <div className="auth-header">
    <h4><Lock size={16} style={{display: 'inline', marginRight: '6px'}} />JWT Token Required</h4>
  </div>
  <div className="auth-body">
    <p>Include your JWT token in the Authorization header for all requests:</p>
    <div className="code-block">
      <code>Authorization: Bearer &lt;your_jwt_token&gt;</code>
    </div>
  </div>
</div>

## Request Body

### Basic Project (Minimal Required Fields)

```json
{
    "name": "My KYC Project",
    "allowedCountries": ["United States", "Canada"],
    "contactEmail": "admin@example.com",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "dataProtection": {
        "name": "John Doe",
        "email": "dpo@example.com",
        "address": "123 Main St",
        "city": "New York",
        "country": "United States",
        "postalCode": "10001"
    }
}
```

### Complete Project with ProjectFlow (Recommended)

```json
{
    "name": "My KYC Project",
    "allowedCountries": ["United States", "Canada"],
    "contactEmail": "admin@example.com",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "dataProtection": {
        "name": "John Doe",
        "email": "dpo@example.com",
        "address": "123 Main St",
        "city": "New York",
        "country": "United States",
        "postalCode": "10001"
    },
    "projectFlow": {
        "target": "personal",
        "type": "onboarding",
        "signUpForm": {
            "fullName": true,
            "fullNameStyle": "separate",
            "email": true,
            "emailGateway": "mailgun",
            "phone": true,
            "phoneGateway": "whatsapp",
            "showTermsAndConditions": true,
            "showPrivacyNotice": true,
            "additionalFields": [],
            "allowAdditionalFields": false
        },
        "documents": {
            "attemptLimit": 3,
            "criminalHistoryVerification": true,
            "informationVerification": true,
            "screening": true,
            "verificationMethods": ["SCAN_PROMPT"],
            "documentTypes": [
                {
                    "country": "United States",
                    "configurations": [
                        {
                            "active": true,
                            "documentCategory": "government_id",
                            "documentTemplates": []
                        },
                        {
                            "active": true,
                            "documentCategory": "passport",
                            "documentTemplates": []
                        }
                    ]
                }
            ]
        },
        "liveness": {
            "attemptLimit": 3,
            "minScore": 0.65,
            "searchMinScore": 0.8,
            "searchMode": "FAST"
        },
        "steps": {
            "document": "mandatory",
            "liveness": "mandatory"
        },
        "integrations": {
            "redirectUrl": "https://example.com/success",
            "source": "NONE",
            "strategy": "none"
        }
    },
    "projectFlowType": "onboarding"
}
```

## Request Schema

### Required Fields

| Field                   | Type   | Description                                 |
| ----------------------- | ------ | ------------------------------------------- |
| `name`                  | string | Project name (max 60 characters)            |
| `allowedCountries`      | array  | List of allowed countries                   |
| `contactEmail`          | string | Contact email (valid email format)          |
| `privacyUrl`            | string | Privacy policy URL (valid URL format)       |
| `termsAndConditionsUrl` | string | Terms and conditions URL (valid URL format) |
| `dataProtection`        | object | Data protection officer information         |

### Optional Fields

| Field             | Type    | Description                                                    |
| ----------------- | ------- | -------------------------------------------------------------- |
| `identifier`      | string  | Project identifier                                             |
| `currentStep`     | number  | Current configuration step                                     |
| `lastStep`        | number  | Last completed step                                            |
| `demoMode`        | boolean | Enable demo mode for testing                                   |
| `demoOTP`         | string  | Demo OTP (6 digits) - optional, auto-generated if not provided |
| `branding`        | object  | Project branding configuration                                 |
| `projectFlow`     | object  | Project flow configuration                                     |
| `projectFlowType` | string  | Project flow type (required if projectFlow provided)           |

### Data Protection Object

| Field        | Type   | Required | Description                                                         |
| ------------ | ------ | -------- | ------------------------------------------------------------------- |
| `name`       | string | Yes      | DPO name                                                            |
| `email`      | string | Yes      | DPO email (valid email format)                                      |
| `address`    | string | Yes      | Primary address                                                     |
| `address2`   | string | No       | Secondary address                                                   |
| `city`       | string | Yes      | City                                                                |
| `country`    | string | Yes      | Country                                                             |
| `postalCode` | string | Yes      | Postal code (3-12 characters, alphanumeric with spaces and hyphens) |

### Project Flow Object (Personal Target)

| Field          | Type   | Required | Description                     |
| -------------- | ------ | -------- | ------------------------------- |
| `target`       | string | Yes      | Target audience (`personal`)    |
| `type`         | string | Yes      | Flow type (`onboarding`)        |
| `signUpForm`   | object | No       | Sign-up form configuration      |
| `documents`    | object | No       | Document verification settings  |
| `liveness`     | object | No       | Biometric verification settings |
| `steps`        | object | No       | Step configuration              |
| `integrations` | object | No       | Integration settings            |

### Sign-up Form Configuration

| Field                    | Type    | Default    | Description                                                    |
| ------------------------ | ------- | ---------- | -------------------------------------------------------------- |
| `fullName`               | boolean | true       | Whether to collect full name                                   |
| `fullNameStyle`          | string  | "separate" | Name input style (`together`, `separate`)                      |
| `email`                  | boolean | false      | Whether to collect email                                       |
| `emailGateway`           | string  | "none"     | Email verification gateway (`mailgun`, `none`)                 |
| `phone`                  | boolean | false      | Whether to collect phone                                       |
| `phoneGateway`           | string  | "sms"      | Phone verification gateway (`sms`, `whatsapp`, `both`, `none`) |
| `showTermsAndConditions` | boolean | false      | Show terms and conditions                                      |
| `showPrivacyNotice`      | boolean | false      | Show privacy notice                                            |
| `additionalFields`       | array   | []         | Custom additional fields                                       |
| `allowAdditionalFields`  | boolean | false      | Allow custom fields                                            |

### Document Configuration

| Field                         | Type    | Default | Description                                                      |
| ----------------------------- | ------- | ------- | ---------------------------------------------------------------- |
| `attemptLimit`                | number  | 3       | Maximum verification attempts (1-5)                              |
| `criminalHistoryVerification` | boolean | false   | Enable criminal history check                                    |
| `informationVerification`     | boolean | false   | Enable information verification                                  |
| `screening`                   | boolean | false   | Enable database screening                                        |
| `verificationMethods`         | array   | []      | Verification methods (`SCAN_ZERO`, `SCAN_PROMPT`, `SCAN_STUDIO`) |
| `documentTypes`               | array   | []      | Supported document types by country                              |

### Document Type Configuration

| Field            | Type   | Required | Description                              |
| ---------------- | ------ | -------- | ---------------------------------------- |
| `country`        | string | Yes      | Country name                             |
| `configurations` | array  | Yes      | Document configurations for this country |

### Document Configuration Item

| Field               | Type    | Required | Description                                                |
| ------------------- | ------- | -------- | ---------------------------------------------------------- |
| `active`            | boolean | Yes      | Whether this document type is active                       |
| `documentCategory`  | string  | Yes      | Document category (`government_id`, `passport`, `license`) |
| `documentTemplates` | array   | No       | Associated document templates                              |

### Liveness Configuration

| Field            | Type   | Default | Description                       |
| ---------------- | ------ | ------- | --------------------------------- |
| `attemptLimit`   | number | 3       | Maximum liveness attempts (1-5)   |
| `minScore`       | number | 0.65    | Minimum liveness score (0.52-0.9) |
| `searchMinScore` | number | 0.8     | Minimum search score (0.7-0.95)   |
| `searchMode`     | string | "FAST"  | Search mode (`FAST`, `ACCURATE`)  |

### Steps Configuration

| Field      | Type   | Default | Description                                                 |
| ---------- | ------ | ------- | ----------------------------------------------------------- |
| `document` | string | "skip"  | Document step requirement (`mandatory`, `optional`, `skip`) |
| `liveness` | string | "skip"  | Liveness step requirement (`mandatory`, `optional`, `skip`) |

### Integrations Configuration

| Field          | Type   | Default | Description                                |
| -------------- | ------ | ------- | ------------------------------------------ |
| `redirectUrl`  | string | ""      | Success redirect URL                       |
| `webhook`      | string | null    | Webhook ID                                 |
| `source`       | string | "NONE"  | Integration source (`API`, `CSV`, `NONE`)  |
| `strategy`     | string | "none"  | Integration strategy (`blacklist`, `none`) |
| `apiUrl`       | string | ""      | API endpoint URL                           |
| `apiTestType`  | string | "email" | API test type (`email`, `phone`)           |
| `apiTestValue` | string | ""      | API test value                             |

## Demo Mode

Demo mode allows you to test the project creation and verification flow without using real verification services. This is particularly useful for development, testing, and demonstration purposes.

### Demo Mode Options

#### Option 1: Auto-Generated OTP

When you set `demoMode: true` without providing a `demoOTP`, the system will automatically generate a random 6-digit OTP for you:

```json
{
    "name": "Demo Project",
    "demoMode": true,
    "allowedCountries": ["United States"],
    "contactEmail": "demo@example.com",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "dataProtection": {
        "name": "Demo DPO",
        "email": "dpo@example.com",
        "address": "123 Demo St",
        "city": "Demo City",
        "country": "United States",
        "postalCode": "12345"
    }
}
```

**Response includes the generated OTP:**

```json
{
    "data": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "Demo Project",
        "demoMode": true,
        "demoOTP": "123456"
        // ... other fields
    }
}
```

#### Option 2: Custom OTP

You can provide your own 6-digit OTP by setting both `demoMode: true` and `demoOTP`:

```json
{
    "name": "Demo Project",
    "demoMode": true,
    "demoOTP": "999999",
    "allowedCountries": ["United States"],
    "contactEmail": "demo@example.com",
    "privacyUrl": "https://example.com/privacy",
    "termsAndConditionsUrl": "https://example.com/terms",
    "dataProtection": {
        "name": "Demo DPO",
        "email": "dpo@example.com",
        "address": "123 Demo St",
        "city": "Demo City",
        "country": "United States",
        "postalCode": "12345"
    }
}
```

### Demo Mode Behavior

-   **Development Environment**: Demo mode is automatically enabled in development environments
-   **OTP Generation**: If no `demoOTP` is provided, a random 6-digit OTP is generated
-   **Testing**: Use the returned OTP to test the verification flow
-   **No Real Verification**: Demo mode bypasses actual verification services
-   **Response**: The `demoOTP` is always returned in the response for testing purposes

:::tip Demo Mode Testing
Use the returned `demoOTP` to test your verification flow. This allows you to verify your integration without using real verification services.
:::

:::note Development Environment
In development environments, demo mode is automatically enabled even if you don't explicitly set `demoMode: true`.
:::

## Example Requests

<Tabs>
<TabItem value="basic" label="Basic Project">

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "Basic KYC Project",
    allowedCountries: ["United States"],
    contactEmail: "admin@example.com",
    privacyUrl: "https://example.com/privacy",
    termsAndConditionsUrl: "https://example.com/terms",
    dataProtection: {
      name: "Jane Smith",
      email: "dpo@example.com",
      address: "456 Oak St",
      city: "Los Angeles",
      country: "United States",
      postalCode: "90210"
    }
  }}
/>

</TabItem>
<TabItem value="complete" label="Complete Project with ProjectFlow">

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "Complete KYC Project",
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
        fullNameStyle: "separate",
        email: true,
        emailGateway: "mailgun",
        phone: true,
        phoneGateway: "whatsapp",
        showTermsAndConditions: true,
        showPrivacyNotice: true
      },
      documents: {
        attemptLimit: 3,
        criminalHistoryVerification: true,
        informationVerification: true,
        screening: true,
        verificationMethods: ["SCAN_PROMPT"],
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
      },
      liveness: {
        attemptLimit: 3,
        minScore: 0.65,
        searchMinScore: 0.8,
        searchMode: "FAST"
      },
      steps: {
        document: "mandatory",
        liveness: "mandatory"
      },
      integrations: {
        redirectUrl: "https://example.com/success",
        source: "NONE",
        strategy: "none"
      }
    },
    projectFlowType: "onboarding"
  }}
/>

</TabItem>
<TabItem value="demo" label="Demo Mode Project">

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "Demo KYC Project",
    demoMode: true,
    allowedCountries: ["United States"],
    contactEmail: "demo@example.com",
    privacyUrl: "https://example.com/privacy",
    termsAndConditionsUrl: "https://example.com/terms",
    dataProtection: {
      name: "Demo DPO",
      email: "dpo@example.com",
      address: "123 Demo St",
      city: "Demo City",
      country: "United States",
      postalCode: "12345"
    }
  }}
/>

</TabItem>
</Tabs>

## <CheckCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Response Format

### <CheckCircle size={18} style={{display: 'inline', marginRight: '6px'}} />Success Response (201 Created)

```json
{
    "data": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "My KYC Project",
        "identifier": null,
        "contactEmail": "admin@example.com",
        "privacyUrl": "https://example.com/privacy",
        "termsAndConditionsUrl": "https://example.com/terms",
        "status": "draft",
        "currentStep": 0,
        "lastStep": 0,
        "demoMode": false,
        "demoOTP": null,
        "allowedCountries": ["United States", "Canada"],
        "dataProtection": {
            "name": "John Doe",
            "email": "dpo@example.com",
            "address": "123 Main St",
            "address2": "",
            "city": "New York",
            "country": "United States",
            "postalCode": "10001"
        },
        "branding": {
            "bgColor": "#01236D",
            "tabColor": "#01236D",
            "borderColor": "#B2BDD3",
            "buttonColor": "#B2BDD3",
            "buttonTxtColor": "#FFFFFF",
            "secondaryButtonColor": "#B2BDD3",
            "secondaryButtonTextColor": "#FFFFFF",
            "txtColor": "#8091B6",
            "titleColor": "#000000",
            "logo": null,
            "rightImage": null,
            "rightImagePosition": "center center",
            "rightBackgroundColor": "white"
        },
        "projectFlows": "64a1b2c3d4e5f6789012346",
        "version": 2,
        "createdAt": "2023-07-01T10:00:00.000Z",
        "updatedAt": "2023-07-01T10:00:00.000Z"
    }
}
```

## Error Responses

<Tabs>
<TabItem value="400" label="400 Bad Request">

```json
{
    "message": "Invalid request body",
    "code": "BadRequest",
    "status": 400,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Missing required fields
-   Invalid JSON format
-   Invalid field types

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
    "message": "Access forbidden",
    "code": "Forbidden",
    "status": 401,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Missing or invalid JWT token
-   Expired authentication token

</TabItem>
<TabItem value="403" label="403 Forbidden">

```json
{
    "message": "Access forbidden",
    "code": "Forbidden",
    "status": 403,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Insufficient permissions
-   Invalid client access

</TabItem>
<TabItem value="409" label="409 Validation Error">

```json
{
    "message": "Country not supported. contact support to help you include your country to our list.",
    "code": "MissingParameter",
    "status": 409,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Unsupported country in allowedCountries
-   Invalid email format
-   Invalid URL format

</TabItem>
<TabItem value="422" label="422 Project Flow Validation">

```json
{
    "message": "Project flow validation failed",
    "code": "UnprocessableEntity",
    "status": 422,
    "timestamp": "2023-07-01T10:00:00.000Z",
    "details": [
        {
            "field": "projectFlow.documents.verificationMethods",
            "message": "verificationMethods is required when documents step is not skipped"
        }
    ]
}
```

**Common causes:**

-   Missing required projectFlow fields
-   Invalid verification methods
-   Inconsistent step configuration

</TabItem>
</Tabs>

## Validation Rules

### Project Validation

-   **name**: Required, maximum 60 characters
-   **allowedCountries**: Required array, must contain valid country names
-   **contactEmail**: Required, valid email format
-   **privacyUrl**: Required, valid URL format
-   **termsAndConditionsUrl**: Required, valid URL format
-   **dataProtection**: Required object with all required fields

### Data Protection Validation

-   **name**: Required string
-   **email**: Required, valid email format
-   **address**: Required string
-   **city**: Required string
-   **country**: Required string
-   **postalCode**: Required, 3-12 characters, alphanumeric with spaces and hyphens

### Project Flow Validation

-   **target**: Required, must be "personal" for personal flows
-   **type**: Required, must be "onboarding"
-   **verificationMethods**: Required when documents step is not "skip"
-   **documentTypes**: Required when documents step is not "skip"

## Rate Limits

-   **100 requests per minute** per user

:::tip Recommended Approach
For production use, create complete projects with projectFlow configuration in a single request to ensure consistency and reduce API calls.
:::

:::warning Validation
When creating a project with projectFlow, ensure all required fields are provided. Missing required fields will result in validation errors.
:::

:::note Demo Mode
Set `demoMode: true` for testing purposes. Demo projects may have different behavior and should not be used in production.
:::
