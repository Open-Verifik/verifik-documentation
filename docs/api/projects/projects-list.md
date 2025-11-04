---
id: projects-list
title: List Projects
description: Retrieve all projects for the authenticated user
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List Projects

Retrieve a paginated list of all projects associated with the authenticated user.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method get">GET</div>
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

## Query Parameters

| Parameter         | Type    | Required | Description                                            |
| ----------------- | ------- | -------- | ------------------------------------------------------ |
| `page`            | integer | No       | Page number (default: 1)                               |
| `limit`           | integer | No       | Number of items per page (default: 10, max: 100)       |
| `like_name`       | string  | No       | Search term for project name                           |
| `where_status`    | string  | No       | Filter by project status (`draft`, `active`, `paused`) |
| `where_target`    | string  | No       | Filter by project target (`personal`, `business`)      |
| `where_createdAt` | string  | No       | Filter by creation date (ISO 8601 format)              |
| `in_status`       | array   | No       | Filter by multiple statuses (`["active", "paused"]`)   |

## Example Request

<CodeExamples
url="/v3/projects"
method="GET"
query={{
    page: 1,
    limit: 10,
    where_status: "active"
  }}
/>

## Response Format

### <CheckCircle size={18} style={{display: 'inline', marginRight: '6px'}} />Success Response (200 OK)

```json
{
    "data": [
        {
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
                    }
                }
            ],
            "version": 2,
            "createdAt": "2023-07-01T10:00:00.000Z",
            "updatedAt": "2023-07-01T15:30:00.000Z"
        }
    ],
    "total": 1,
    "limit": 10,
    "page": 1,
    "pages": 1
}
```

## Response Fields

### Project Object

| Field                   | Type    | Description                                  |
| ----------------------- | ------- | -------------------------------------------- |
| `_id`                   | string  | Unique project identifier                    |
| `name`                  | string  | Project name                                 |
| `identifier`            | string  | Project identifier (optional)                |
| `contactEmail`          | string  | Contact email for the project                |
| `privacyUrl`            | string  | URL to privacy policy                        |
| `termsAndConditionsUrl` | string  | URL to terms and conditions                  |
| `status`                | string  | Project status (`draft`, `active`, `paused`) |
| `currentStep`           | number  | Current configuration step                   |
| `lastStep`              | number  | Last completed step                          |
| `demoMode`              | boolean | Whether project is in demo mode              |
| `allowedCountries`      | array   | List of allowed countries                    |
| `dataProtection`        | object  | Data protection officer information          |
| `branding`              | object  | Project branding configuration               |
| `projectFlows`          | array   | Associated project flows                     |
| `version`               | number  | API version                                  |
| `createdAt`             | string  | Creation timestamp (ISO 8601)                |
| `updatedAt`             | string  | Last update timestamp (ISO 8601)             |

### Data Protection Object

| Field        | Type   | Description                  |
| ------------ | ------ | ---------------------------- |
| `name`       | string | DPO name                     |
| `email`      | string | DPO email                    |
| `address`    | string | Primary address              |
| `address2`   | string | Secondary address (optional) |
| `city`       | string | City                         |
| `country`    | string | Country                      |
| `postalCode` | string | Postal code                  |

### Branding Object

| Field                  | Type   | Description                     |
| ---------------------- | ------ | ------------------------------- |
| `backgroundColor`      | string | Background color (hex)          |
| `buttonColor`          | string | Button color (hex)              |
| `buttonTextColor`      | string | Button text color (hex)         |
| `textColor`            | string | Text color (hex)                |
| `titleColor`           | string | Title color (hex)               |
| `logo`                 | string | Logo URL (optional)             |
| `image`                | string | Main image URL (optional)       |
| `imageBackgroundColor` | string | Image background color          |
| `backgroundImage`      | string | Background image URL (optional) |
| `backgroundImageColor` | string | Background image color          |

## Error Responses

<Tabs>
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
<TabItem value="409" label="409 Bad Request">

```json
{
    "message": "Invalid parameter: limit must be between 1 and 100",
    "code": "MissingParameter"
}
```

</TabItem>
</Tabs>

## Examples

### Filter by Status

<CodeExamples
url="/v3/projects"
method="GET"
query={{
    where_status: "active"
  }}
/>

### Search Projects

<CodeExamples
url="/v3/projects"
method="GET"
query={{
    like_name: "kyc"
  }}
/>

### Pagination

<CodeExamples
url="/v3/projects"
method="GET"
query={{
    page: 2,
    limit: 5
  }}
/>

## Rate Limits

-   **100 requests per minute** per user

:::tip Pagination
Use pagination to improve performance when dealing with large numbers of projects. The default limit is 10 items per page.
:::

:::warning Rate Limits
If you exceed the rate limit, you'll receive a 429 Too Many Requests response. Implement exponential backoff for retries.
:::
