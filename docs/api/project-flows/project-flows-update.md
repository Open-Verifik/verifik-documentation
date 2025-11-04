---
id: project-flows-update
title: Update Project Flow
description: Update project flow configuration for personal target flows
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeExamples from '@site/src/components/CodeExamples';

# Update Project Flow

Update the configuration of an existing project flow. This endpoint supports partial updates and focuses on personal target flows.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method put">PUT</div>
  <div className="endpoint-url">/v3/project-flows/&#123;id&#125;</div>
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

| Parameter | Type   | Required | Description                                         |
| --------- | ------ | -------- | --------------------------------------------------- |
| `id`      | string | Yes      | The unique identifier of the project flow to update |

## Request Body

### Update Document Configuration

```json
{
	"documents": {
		"attemptLimit": 5,
		"criminalHistoryVerification": true,
		"informationVerification": true,
		"screening": true,
		"verificationMethods": ["SCAN_PROMPT", "SCAN_STUDIO"],
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
	}
}
```

### Update Liveness Configuration

```json
{
	"liveness": {
		"attemptLimit": 3,
		"minScore": 0.7,
		"searchMinScore": 0.85,
		"searchMode": "ACCURATE"
	}
}
```

### Update Sign-up Form

```json
{
	"signUpForm": {
		"fullName": true,
		"fullNameStyle": "separate",
		"email": true,
		"emailGateway": "mailgun",
		"phone": true,
		"phoneGateway": "whatsapp",
		"showTermsAndConditions": true,
		"showPrivacyNotice": true,
		"additionalFields": [
			{
				"name": "company",
				"label": "Company Name",
				"type": "text",
				"required": false
			}
		],
		"allowAdditionalFields": true
	}
}
```

### Update Steps Configuration

```json
{
	"steps": {
		"document": "mandatory",
		"liveness": "mandatory"
	}
}
```

### Update Integrations

```json
{
	"integrations": {
		"redirectUrl": "https://example.com/success",
		"webhook": "64a1b2c3d4e5f6789012347",
		"source": "API",
		"strategy": "blacklist",
		"apiUrl": "https://api.example.com/check",
		"apiTestType": "email",
		"apiTestValue": "test@example.com"
	}
}
```

### Complete Update Example

```json
{
	"status": "active",
	"signUpForm": {
		"fullName": true,
		"fullNameStyle": "separate",
		"email": true,
		"emailGateway": "mailgun",
		"phone": true,
		"phoneGateway": "whatsapp",
		"showTermsAndConditions": true,
		"showPrivacyNotice": true
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
		"source": "NONE",
		"strategy": "none"
	}
}
```

## Request Schema

### Allowed Update Fields

| Field          | Type   | Description                               |
| -------------- | ------ | ----------------------------------------- |
| `status`       | string | Flow status (`draft`, `active`, `paused`) |
| `target`       | string | Target audience (`personal`)              |
| `type`         | string | Flow type (`onboarding`)                  |
| `version`      | number | Flow version                              |
| `signUpForm`   | object | Sign-up form configuration                |
| `documents`    | object | Document verification settings            |
| `liveness`     | object | Biometric verification settings           |
| `steps`        | object | Step configuration                        |
| `integrations` | object | Integration settings                      |

### Sign-up Form Fields

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

### Document Configuration Fields

| Field                         | Type    | Default | Description                                                      |
| ----------------------------- | ------- | ------- | ---------------------------------------------------------------- |
| `attemptLimit`                | number  | 3       | Maximum verification attempts (1-5)                              |
| `criminalHistoryVerification` | boolean | false   | Enable criminal history check                                    |
| `informationVerification`     | boolean | false   | Enable information verification                                  |
| `screening`                   | boolean | false   | Enable database screening                                        |
| `verificationMethods`         | array   | []      | Verification methods (`SCAN_ZERO`, `SCAN_PROMPT`, `SCAN_STUDIO`) |
| `documentTypes`               | array   | []      | Supported document types by country                              |

### Liveness Configuration Fields

| Field            | Type   | Default | Description                       |
| ---------------- | ------ | ------- | --------------------------------- |
| `attemptLimit`   | number | 3       | Maximum liveness attempts (1-5)   |
| `minScore`       | number | 0.65    | Minimum liveness score (0.52-0.9) |
| `searchMinScore` | number | 0.8     | Minimum search score (0.7-0.95)   |
| `searchMode`     | string | "FAST"  | Search mode (`FAST`, `ACCURATE`)  |

### Steps Configuration Fields

| Field      | Type   | Default | Description                                                 |
| ---------- | ------ | ------- | ----------------------------------------------------------- |
| `document` | string | "skip"  | Document step requirement (`mandatory`, `optional`, `skip`) |
| `liveness` | string | "skip"  | Liveness step requirement (`mandatory`, `optional`, `skip`) |

### Integrations Configuration Fields

| Field          | Type   | Default | Description                                |
| -------------- | ------ | ------- | ------------------------------------------ |
| `redirectUrl`  | string | ""      | Success redirect URL                       |
| `webhook`      | string | null    | Webhook ID                                 |
| `source`       | string | "NONE"  | Integration source (`API`, `CSV`, `NONE`)  |
| `strategy`     | string | "none"  | Integration strategy (`blacklist`, `none`) |
| `apiUrl`       | string | ""      | API endpoint URL                           |
| `apiTestType`  | string | "email" | API test type (`email`, `phone`)           |
| `apiTestValue` | string | ""      | API test value                             |

## Example Requests

<Tabs>
<TabItem value="documents" label="Update Documents">

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
body={{
    documents: {
      attemptLimit: 5,
      criminalHistoryVerification: true,
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
    }
  }}
/>

</TabItem>
<TabItem value="liveness" label="Update Liveness">

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
body={{
    liveness: {
      attemptLimit: 3,
      minScore: 0.7,
      searchMinScore: 0.85,
      searchMode: "ACCURATE"
    }
  }}
/>

</TabItem>
<TabItem value="integrations" label="Update Integrations">

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
body={{
    integrations: {
      redirectUrl: "https://example.com/success",
      source: "API",
      strategy: "blacklist",
      apiUrl: "https://api.example.com/check",
      apiTestType: "email",
      apiTestValue: "test@example.com"
    }
  }}
/>

</TabItem>
</Tabs>

## Response Format

### Success Response (200 OK)

```json
{
	"data": {
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
			"showTermsAndConditions": true,
			"showPrivacyNotice": true,
			"additionalFields": [],
			"allowAdditionalFields": false
		},
		"documents": {
			"attemptLimit": 5,
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
			"minScore": 0.7,
			"searchMinScore": 0.85,
			"searchMode": "ACCURATE"
		},
		"steps": {
			"document": "mandatory",
			"liveness": "mandatory"
		},
		"integrations": {
			"redirectUrl": "https://example.com/success",
			"webhook": "64a1b2c3d4e5f6789012347",
			"source": "API",
			"strategy": "blacklist",
			"apiUrl": "https://api.example.com/check",
			"apiTestType": "email",
			"apiTestValue": "test@example.com"
		},
		"createdAt": "2023-07-01T10:00:00.000Z",
		"updatedAt": "2023-07-01T16:45:00.000Z"
	}
}
```

## Error Responses

<Tabs>
<TabItem value="400" label="400 Bad Request">

```json
{
	"message": "Invalid project flow ID format",
	"code": "BadRequest",
	"status": 400,
	"timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Invalid project flow ID format
-   Missing required fields
-   Invalid JSON format

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
<TabItem value="404" label="404 Not Found">

```json
{
	"message": "Project flow not found",
	"code": "NotFound",
	"status": 404,
	"timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Project flow ID doesn't exist
-   Project flow belongs to different client
-   Project flow has been deleted

</TabItem>
<TabItem value="409" label="409 Conflict">

```json
{
	"message": "Cannot update project flow with active users",
	"code": "Conflict",
	"status": 409,
	"timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Users are currently going through the verification process
-   Project flow is in active use
-   Cannot modify active flows

</TabItem>
<TabItem value="422" label="422 Validation Error">

```json
{
	"message": "Project flow validation failed",
	"code": "UnprocessableEntity",
	"status": 422,
	"timestamp": "2023-07-01T10:00:00.000Z",
	"details": [
		{
			"field": "documents.verificationMethods",
			"message": "verificationMethods is required when documents step is not skipped"
		}
	]
}
```

**Common causes:**

-   Missing required fields
-   Invalid verification methods
-   Inconsistent step configuration
-   Invalid field values

</TabItem>
</Tabs>

## Validation Rules

### Document Configuration

-   **verificationMethods**: Required when `steps.document` is not "skip"
-   **documentTypes**: Required when `steps.document` is not "skip"
-   **attemptLimit**: Must be between 1 and 5

### Liveness Configuration

-   **minScore**: Must be between 0.52 and 0.9
-   **searchMinScore**: Must be between 0.7 and 0.95
-   **attemptLimit**: Must be between 1 and 5

### Integration Configuration

-   **apiUrl**: Required when `source` is "API"
-   **apiTestType**: Required when `source` is "API"
-   **apiTestValue**: Required when `source` is "API"

## Rate Limits

-   **50 requests per minute** per user

:::tip Partial Updates
You can update any combination of fields. Only the fields you specify will be updated; others will remain unchanged.
:::

:::warning Active Flows
Be cautious when updating active project flows, as changes may affect users currently going through the process.
:::

:::note Validation
All updates are validated against the complete project flow configuration to ensure consistency and proper functionality.
:::
