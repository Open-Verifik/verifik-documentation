---
id: "en-docs-resources-document-validations-create-a-name-validation-endpoint"
title: "Create a Name Validation — Endpoint"
sourcePath: "docs/resources/document-validations/create-a-name-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations/document_validation_123456789/validate"
  - "/v2/document-validations/document_validation_123456789/validate?force=false"
  - "/v2/document-validations/{id}/validate"
sourceAnchor: "Endpoint"
slug: "/resources/create-a-name-validation"
url: "https://docs.verifik.co/resources/create-a-name-validation"
---

# Create a Name Validation
**API path(s):** /v2/document-validations/document_validation_123456789/validate, /v2/document-validations/document_validation_123456789/validate?force=false, /v2/document-validations/{id}/validate

## Endpoint

**PUT** `https://api.verifik.co/v2/document-validations/{id}/validate`

This endpoint performs name validation by comparing the names extracted from a user's document with official government records. It validates that the user's provided names match their official identity records through government API integrations.

### Headers

#### Content-Type
Type: String  
Required: Yes

`application/json`

#### Authorization
Type: String  
Required: Yes

`Bearer {YOUR_ACCESS_TOKEN}`

:::warning
**Prerequisites**: Users must complete both the `signUpForm` step and the `document` step before name validation can be performed.
:::

:::warning
**Additional Feature**: Name Validations are an additional feature and are subject to charges. Each validation request will incur a fee based on your plan.
:::

### Path Parameters

#### `id`
Type: string  
Required: Yes

The unique identifier of the document validation record to validate.

### Query Parameters

#### `force`
Type: boolean  
Required: No

Force re-validation even if already validated. Example: `force=true`

### Body Parameters

This endpoint does not require a request body. All necessary information is automatically retrieved from the document validation record.

### Supported Regions and Document Types

Name validation is currently supported for the following regions and document types:

| Region       | Document Type | Description                  |
| ------------ | ------------- | ---------------------------- |
| **Panama**   | `CCPA`        | Panama National ID Card      |
| **Colombia** | `CC`          | Colombian National ID Card   |
| **Colombia** | `DRCC`        | Colombian Diplomatic ID Card |
| **Chile**    | `CL`          | Chilean National ID Card     |

:::info
**Note**: Support for additional regions and document types may be available. Contact your account manager for the most up-to-date list of supported countries and document types.
:::
