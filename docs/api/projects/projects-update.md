---
id: projects-update
title: Update Project
description: Update project configuration with step-by-step approach matching the frontend wizard
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeExamples from '@site/src/components/CodeExamples';

# Update Project

Update project configuration using a step-by-step approach that matches the SmartEnroll frontend wizard. This endpoint supports partial updates, allowing you to modify specific sections without affecting others.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method put">PUT</div>
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

## Step-by-Step Update Approach

The update endpoint supports the same 6-step configuration process used in the SmartEnroll frontend:

<Tabs>
<TabItem value="step1" label="Step 1: Data Protection">

Update data protection officer information:

```json
{
	"dataProtection": {
		"name": "Updated DPO Name",
		"email": "updated-dpo@example.com",
		"address": "456 New Address St",
		"address2": "Suite 200",
		"city": "San Francisco",
		"country": "United States",
		"postalCode": "94105"
	}
}
```

</TabItem>
<TabItem value="step2" label="Step 2: Sign-up Form">

Configure user data collection:

```json
{
	"projectFlow": {
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
}
```

</TabItem>
<TabItem value="step3" label="Step 3: Document Verification">

Configure document verification for personal targets:

```json
{
	"projectFlow": {
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
		"steps": {
			"document": "mandatory"
		}
	}
}
```

</TabItem>
<TabItem value="step4" label="Step 4: Biometric Verification">

Configure liveness detection:

```json
{
	"projectFlow": {
		"liveness": {
			"attemptLimit": 3,
			"minScore": 0.7,
			"searchMinScore": 0.85,
			"searchMode": "ACCURATE"
		},
		"steps": {
			"liveness": "mandatory"
		}
	}
}
```

</TabItem>
<TabItem value="step5" label="Step 5: Integration">

Configure webhooks and redirects:

```json
{
	"projectFlow": {
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
}
```

</TabItem>
<TabItem value="step6" label="Step 6: Branding">

Apply custom branding:

```json
{
	"branding": {
		"bgColor": "#1a365d",
		"tabColor": "#2d3748",
		"borderColor": "#e2e8f0",
		"buttonColor": "#3182ce",
		"buttonTxtColor": "#ffffff",
		"secondaryButtonColor": "#edf2f7",
		"secondaryButtonTextColor": "#2d3748",
		"txtColor": "#4a5568",
		"titleColor": "#1a202c",
		"logo": "https://example.com/logo.png",
		"rightImage": "https://example.com/hero-image.png",
		"rightImagePosition": "center center",
		"rightBackgroundColor": "#f7fafc"
	}
}
```

</TabItem>
</Tabs>

## Complete Update Example

You can also update multiple sections in a single request:

```json
{
	"name": "Updated Project Name",
	"allowedCountries": ["United States", "Canada", "Mexico"],
	"contactEmail": "new-admin@example.com",
	"dataProtection": {
		"name": "Updated DPO",
		"email": "updated-dpo@example.com",
		"address": "789 New St",
		"city": "Toronto",
		"country": "Canada",
		"postalCode": "M5H 2N2"
	},
	"projectFlow": {
		"signUpForm": {
			"fullName": true,
			"email": true,
			"phone": true,
			"showTermsAndConditions": true
		},
		"documents": {
			"attemptLimit": 3,
			"verificationMethods": ["SCAN_PROMPT"],
			"documentTypes": [
				{
					"country": "United States",
					"configurations": [
						{
							"active": true,
							"documentCategory": "government_id"
						}
					]
				}
			]
		},
		"liveness": {
			"attemptLimit": 3,
			"minScore": 0.65,
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
	"branding": {
		"bgColor": "#1a365d",
		"buttonColor": "#3182ce",
		"logo": "https://example.com/logo.png"
	}
}
```

## Request Schema

### Project Fields

| Field                   | Type    | Description                                                    |
| ----------------------- | ------- | -------------------------------------------------------------- |
| `name`                  | string  | Project name (max 60 characters)                               |
| `allowedCountries`      | array   | List of allowed countries                                      |
| `contactEmail`          | string  | Contact email (valid email format)                             |
| `privacyUrl`            | string  | Privacy policy URL (valid URL format)                          |
| `termsAndConditionsUrl` | string  | Terms and conditions URL (valid URL format)                    |
| `currentStep`           | number  | Current configuration step                                     |
| `lastStep`              | number  | Last completed step                                            |
| `demoMode`              | boolean | Enable demo mode for testing                                   |
| `demoOTP`               | string  | Demo OTP (6 digits) - optional, auto-generated if not provided |
| `dataProtection`        | object  | Data protection officer information                            |
| `branding`              | object  | Project branding configuration                                 |
| `projectFlow`           | object  | Project flow configuration                                     |
| `projectFlowType`       | string  | Project flow type                                              |

### Project Flow Update Fields

The following fields can be updated in the projectFlow object:

| Field          | Type   | Description                               |
| -------------- | ------ | ----------------------------------------- |
| `target`       | string | Target audience (`personal`)              |
| `type`         | string | Flow type (`onboarding`)                  |
| `status`       | string | Flow status (`draft`, `active`, `paused`) |
| `version`      | number | Flow version                              |
| `signUpForm`   | object | Sign-up form configuration                |
| `documents`    | object | Document verification settings            |
| `liveness`     | object | Biometric verification settings           |
| `steps`        | object | Step configuration                        |
| `integrations` | object | Integration settings                      |

## Demo Mode

Demo mode can be enabled or updated for existing projects to facilitate testing and development.

### Enabling Demo Mode

To enable demo mode on an existing project:

```json
{
	"demoMode": true
}
```

The system will automatically generate a 6-digit OTP and return it in the response.

### Setting Custom Demo OTP

To set a specific demo OTP:

```json
{
	"demoMode": true,
	"demoOTP": "123456"
}
```

### Disabling Demo Mode

To disable demo mode:

```json
{
	"demoMode": false
}
```

:::tip Demo Mode Updates
When updating demo mode, the `demoOTP` will be returned in the response if demo mode is enabled, allowing you to test the verification flow.
:::

## Example Requests

### Update Data Protection Only

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
body={{
    dataProtection: {
      name: "Updated DPO Name",
      email: "updated-dpo@example.com",
      address: "456 New Address St",
      city: "San Francisco",
      country: "United States",
      postalCode: "94105"
    }
  }}
/>

### Update Document Configuration

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
body={{
    projectFlow: {
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
      },
      steps: {
        document: "mandatory"
      }
    }
  }}
/>

### Update Branding

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
body={{
    branding: {
      backgroundColor: "#1a365d",
      buttonColor: "#3182ce",
      buttonTextColor: "#ffffff",
      logo: "https://example.com/logo.png"
    }
  }}
/>

## Response Format

### Success Response (200 OK)

```json
{
	"data": {
		"_id": "64a1b2c3d4e5f6789012345",
		"name": "Updated Project Name",
		"identifier": null,
		"contactEmail": "new-admin@example.com",
		"privacyUrl": "https://example.com/privacy",
		"termsAndConditionsUrl": "https://example.com/terms",
		"status": "draft",
		"currentStep": 6,
		"lastStep": 6,
		"demoMode": false,
		"demoOTP": null,
		"allowedCountries": ["United States", "Canada", "Mexico"],
		"dataProtection": {
			"name": "Updated DPO",
			"email": "updated-dpo@example.com",
			"address": "789 New St",
			"address2": "",
			"city": "Toronto",
			"country": "Canada",
			"postalCode": "M5H 2N2"
		},
		"branding": {
			"bgColor": "#1a365d",
			"tabColor": "#01236D",
			"borderColor": "#B2BDD3",
			"buttonColor": "#3182ce",
			"buttonTxtColor": "#ffffff",
			"secondaryButtonColor": "#B2BDD3",
			"secondaryButtonTextColor": "#FFFFFF",
			"txtColor": "#8091B6",
			"titleColor": "#1a202c",
			"logo": "https://example.com/logo.png",
			"rightImage": null,
			"rightImagePosition": "center center",
			"rightBackgroundColor": "white"
		},
		"projectFlows": "64a1b2c3d4e5f6789012346",
		"version": 2,
		"createdAt": "2023-07-01T10:00:00.000Z",
		"updatedAt": "2023-07-01T16:45:00.000Z"
	},
	"status": "completed"
}
```

## Error Responses

<Tabs>
<TabItem value="400" label="400 Bad Request">

```json
{
	"message": "Invalid project ID format",
	"code": "BadRequest",
	"status": 400,
	"timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Invalid project ID format
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
	"message": "Project not found",
	"code": "NotFound",
	"status": 404,
	"timestamp": "2023-07-01T10:00:00.000Z"
}
```

**Common causes:**

-   Project ID doesn't exist
-   Project belongs to different client
-   Project has been deleted

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

## Project Flow Creation Logic

When updating a project with projectFlow configuration:

1. **If projectFlow exists**: Updates the existing projectFlow with new values
2. **If projectFlow doesn't exist**: Creates a new projectFlow and associates it with the project
3. **Partial updates**: Only updates the fields provided in the request
4. **Validation**: Validates the complete projectFlow configuration after update

## Rate Limits

-   **100 requests per minute** per user

:::tip Step-by-Step Updates
Use the step-by-step approach to match the frontend wizard flow. This provides better error handling and validation feedback.
:::

:::warning Project Flow Creation
If you update projectFlow fields on a project that doesn't have a projectFlow, a new one will be created automatically.
:::

:::note Partial Updates
You can update any combination of fields. Only the fields you specify will be updated; others will remain unchanged.
:::
