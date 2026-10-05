---
id: "en-docs-api-projects-projects-create-endpoint"
title: "Create Project — Endpoint"
sourcePath: "docs/api/projects/projects-create.mdx"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/projects"
sourceAnchor: "Endpoint"
slug: "/api/projects/projects-create"
url: "https://docs.verifik.co/api/projects/projects-create"
---

# Create Project
**API path(s):** /api/projects

## Endpoint

```
POST https://api.verifik.co/v3/projects
```

Create a new KYC project with complete configuration. You can create a basic project with minimal fields or include a complete project flow configuration in a single request.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | Project name (max 60 characters) |
| `allowedCountries` | array | Yes | List of allowed countries |
| `contactEmail` | string | Yes | Contact email (valid email format) |
| `privacyUrl` | string | Yes | Privacy policy URL (valid URL format) |
| `termsAndConditionsUrl` | string | Yes | Terms and conditions URL (valid URL format) |
| `dataProtection` | object | Yes | Data protection officer information |
| `identifier` | string | No | Project identifier |
| `currentStep` | number | No | Current configuration step |
| `lastStep` | number | No | Last completed step |
| `demoMode` | boolean | No | Enable demo mode for testing |
| `demoOTP` | string | No | Demo OTP (6 digits) - auto-generated if not provided |
| `branding` | object | No | Project branding configuration |
| `projectFlow` | object | No | Project flow configuration |
| `projectFlowType` | string | No | Project flow type (required if projectFlow provided) |

#### Data Protection Object

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | string | Yes | DPO name |
| `email` | string | Yes | DPO email (valid email format) |
| `address` | string | Yes | Primary address |
| `address2` | string | No | Secondary address |
| `city` | string | Yes | City |
| `country` | string | Yes | Country |
| `postalCode` | string | Yes | Postal code (3-12 characters, alphanumeric with spaces and hyphens) |

#### Project Flow Object

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `target` | string | Yes | Target audience (`personal`) |
| `type` | string | Yes | Flow type (`onboarding`) |
| `signUpForm` | object | No | Sign-up form configuration |
| `documents` | object | No | Document verification settings |
| `liveness` | object | No | Biometric verification settings |
| `steps` | object | No | Step configuration |
| `integrations` | object | No | Integration settings |
