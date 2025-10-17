---
id: projects-show
title: Get Project
description: Retrieve a specific project by ID
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeExamples from '@site/src/components/CodeExamples';

# Get Project

Retrieve detailed information about a specific project by its ID.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method get">GET</div>
  <div className="endpoint-url">/v3/projects/&#123;id&#125;</div>
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

## Path Parameters

| Parameter | Type   | Required | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| `id`      | string | Yes      | The unique identifier of the project |

## Example Request

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

## Response Format

### Success Response (200 OK)

```json
{
    "data": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "My KYC Project",
        "identifier": "my-kyc-project",
        "contactEmail": "admin@example.com",
        "privacyUrl": "https://example.com/privacy",
        "termsAndConditionsUrl": "https://example.com/terms",
        "status": "active",
        "currentStep": 6,
        "lastStep": 6,
        "demoMode": false,
        "demoOTP": null,
        "allowedCountries": ["United States", "Canada"],
        "dataProtection": {
            "name": "John Doe",
            "email": "dpo@example.com",
            "address": "123 Main St",
            "address2": "Suite 100",
            "city": "New York",
            "country": "United States",
            "postalCode": "10001"
        },
        "branding": {
            "backgroundColor": "#01236D",
            "buttonColor": "#B2BDD3",
            "buttonTextColor": "#FFFFFF",
            "textColor": "#8091B6",
            "titleColor": "#000000",
            "logo": "https://example.com/logo.png",
            "image": "https://example.com/hero-image.png",
            "imageBackgroundColor": "white",
            "backgroundImage": null,
            "backgroundImageColor": ""
        },
        "projectFlows": [
            {
                "_id": "64a1b2c3d4e5f6789012346",
                "type": "onboarding",
                "target": "personal",
                "status": "active",
                "version": 3,
                "redirectUrl": "https://example.com/success",
                "webhookUrl": "https://example.com/webhook",
                "signUpForm": {
                    "fullName": true,
                    "fullNameStyle": "separate",
                    "email": true,
                    "emailGateway": "mailgun",
                    "phone": true,
                    "phoneGateway": "whatsapp",
                    "countryCode": "US",
                    "showTermsAndConditions": true,
                    "showPrivacyNotice": true,
                    "allowAdditionalFields": false,
                    "additionalFields": []
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
                        },
                        {
                            "country": "Canada",
                            "configurations": [
                                {
                                    "active": true,
                                    "documentCategory": "government_id",
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
                    "webhook": "64a1b2c3d4e5f6789012347",
                    "source": "NONE",
                    "strategy": "none",
                    "apiUrl": "",
                    "apiTestType": "email",
                    "apiTestValue": ""
                },
                "createdAt": "2023-07-01T10:00:00.000Z",
                "updatedAt": "2023-07-01T15:30:00.000Z"
            }
        ],
        "version": 2,
        "createdAt": "2023-07-01T10:00:00.000Z",
        "updatedAt": "2023-07-01T15:30:00.000Z"
    }
}
```

## Response Fields

### Project Object

| Field                   | Type         | Description                                    |
| ----------------------- | ------------ | ---------------------------------------------- |
| `_id`                   | string       | Unique project identifier                      |
| `name`                  | string       | Project name                                   |
| `identifier`            | string       | Project identifier (optional)                  |
| `contactEmail`          | string       | Contact email for the project                  |
| `privacyUrl`            | string       | URL to privacy policy                          |
| `termsAndConditionsUrl` | string       | URL to terms and conditions                    |
| `status`                | string       | Project status (`draft`, `active`, `paused`)   |
| `currentStep`           | number       | Current configuration step                     |
| `lastStep`              | number       | Last completed step                            |
| `demoMode`              | boolean      | Whether project is in demo mode                |
| `demoOTP`               | string\|null | Demo OTP (encrypted, null if not in demo mode) |
| `allowedCountries`      | array        | List of allowed countries                      |
| `dataProtection`        | object       | Data protection officer information            |
| `branding`              | object       | Project branding configuration                 |
| `projectFlows`          | array        | Associated project flows                       |
| `version`               | number       | API version                                    |
| `createdAt`             | string       | Creation timestamp (ISO 8601)                  |
| `updatedAt`             | string       | Last update timestamp (ISO 8601)               |

### Project Flow Object (Personal Target)

| Field          | Type   | Description                               |
| -------------- | ------ | ----------------------------------------- |
| `_id`          | string | Unique project flow identifier            |
| `type`         | string | Flow type (`onboarding`)                  |
| `target`       | string | Target audience (`personal`)              |
| `status`       | string | Flow status (`draft`, `active`, `paused`) |
| `version`      | number | Flow version                              |
| `redirectUrl`  | string | Success redirect URL                      |
| `webhookUrl`   | string | Webhook URL for notifications             |
| `signUpForm`   | object | Sign-up form configuration                |
| `documents`    | object | Document verification settings            |
| `liveness`     | object | Biometric verification settings           |
| `steps`        | object | Step configuration                        |
| `integrations` | object | Integration settings                      |

### Sign-up Form Configuration

| Field                    | Type    | Description                                                    |
| ------------------------ | ------- | -------------------------------------------------------------- |
| `fullName`               | boolean | Whether to collect full name                                   |
| `fullNameStyle`          | string  | Name input style (`together`, `separate`)                      |
| `email`                  | boolean | Whether to collect email                                       |
| `emailGateway`           | string  | Email verification gateway (`mailgun`, `none`)                 |
| `phone`                  | boolean | Whether to collect phone                                       |
| `phoneGateway`           | string  | Phone verification gateway (`sms`, `whatsapp`, `both`, `none`) |
| `showTermsAndConditions` | boolean | Show terms and conditions                                      |
| `showPrivacyNotice`      | boolean | Show privacy notice                                            |
| `additionalFields`       | array   | Custom additional fields                                       |
| `allowAdditionalFields`  | boolean | Allow custom fields                                            |

### Document Configuration

| Field                         | Type    | Description                                                      |
| ----------------------------- | ------- | ---------------------------------------------------------------- |
| `attemptLimit`                | number  | Maximum verification attempts (1-5)                              |
| `criminalHistoryVerification` | boolean | Enable criminal history check                                    |
| `informationVerification`     | boolean | Enable information verification                                  |
| `screening`                   | boolean | Enable database screening                                        |
| `verificationMethods`         | array   | Verification methods (`SCAN_ZERO`, `SCAN_PROMPT`, `SCAN_STUDIO`) |
| `documentTypes`               | array   | Supported document types by country                              |

### Document Type Configuration

| Field            | Type   | Description                              |
| ---------------- | ------ | ---------------------------------------- |
| `country`        | string | Country name                             |
| `configurations` | array  | Document configurations for this country |

### Document Configuration Item

| Field               | Type    | Description                                                |
| ------------------- | ------- | ---------------------------------------------------------- |
| `active`            | boolean | Whether this document type is active                       |
| `documentCategory`  | string  | Document category (`government_id`, `passport`, `license`) |
| `documentTemplates` | array   | Associated document templates                              |

### Liveness Configuration

| Field            | Type   | Description                       |
| ---------------- | ------ | --------------------------------- |
| `attemptLimit`   | number | Maximum liveness attempts (1-5)   |
| `minScore`       | number | Minimum liveness score (0.52-0.9) |
| `searchMinScore` | number | Minimum search score (0.7-0.95)   |
| `searchMode`     | string | Search mode (`FAST`, `ACCURATE`)  |

### Steps Configuration

| Field      | Type   | Description                                                 |
| ---------- | ------ | ----------------------------------------------------------- |
| `document` | string | Document step requirement (`mandatory`, `optional`, `skip`) |
| `liveness` | string | Liveness step requirement (`mandatory`, `optional`, `skip`) |

### Integrations Configuration

| Field          | Type   | Description                                |
| -------------- | ------ | ------------------------------------------ |
| `redirectUrl`  | string | Success redirect URL                       |
| `webhook`      | string | Webhook ID                                 |
| `source`       | string | Integration source (`API`, `CSV`, `NONE`)  |
| `strategy`     | string | Integration strategy (`blacklist`, `none`) |
| `apiUrl`       | string | API endpoint URL                           |
| `apiTestType`  | string | API test type (`email`, `phone`)           |
| `apiTestValue` | string | API test value                             |

## Error Responses

<Tabs>
<TabItem value="400" label="400 Bad Request">

```json
{
    "message": "Invalid project ID format",
    "code": "InvalidParameter"
}
```

</TabItem>
<TabItem value="401" label="401 Unauthorized">

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

</TabItem>
<TabItem value="403" label="403 Forbidden">

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

</TabItem>
<TabItem value="404" label="404 Not Found">

```json
{
    "message": "Project not found",
    "code": "NotFound"
}
```

</TabItem>
</Tabs>

## Examples

### Get Project with Personal Flow

<CodeExamples
url="/v3/projects/{id}"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

### Get Project with Business Flow

<CodeExamples
url="/v3/projects/{id}"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

## Rate Limits

-   **100 requests per minute** per user

:::tip Project Flows
The `projectFlows` array contains all associated flows for the project. For personal targets, you'll typically see one onboarding flow.
:::

:::warning Demo Mode
When `demoMode` is true, the project is configured for testing purposes and may have different behavior in production.
:::
