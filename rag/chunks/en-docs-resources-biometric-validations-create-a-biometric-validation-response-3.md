---
id: "en-docs-resources-biometric-validations-create-a-biometric-validation-response-3"
title: "Create a Biometric Validation — Response"
sourcePath: "docs/resources/biometric-validations/create-a-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations"
sourceAnchor: "Response"
slug: "/resources/create-a-biometric-validation"
url: "https://docs.verifik.co/resources/create-a-biometric-validation"
---

# Create a Biometric Validation
**API path(s):** /v2/biometric-validations

## Response

```json
{
  "success": true,
  "data": {
    "_id": "biometric_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "new",
    "identifier": "user@example.com",
    "type": "validation",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "sendViaEmail": true,
    "email": "user@example.com",
    "language": "en",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### Error Responses

```json
{
  "success": false,
  "error": "Invalid project flow",
  "code": "INVALID_PROJECT_FLOW"
}
```
