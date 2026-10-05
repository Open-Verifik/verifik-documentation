---
id: "en-docs-resources-email-validations-the-email-validation-object-example-object-2"
title: "The Email Validation Object — Example Object"
sourcePath: "docs/resources/email-validations/the-email-validation-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Example Object"
slug: "/resources/the-email-validation-object"
url: "https://docs.verifik.co/resources/the-email-validation-object"
---

# The Email Validation Object

## Example Object

```json
{
  "_id": "email_validation_123456789",
  "client": "client_123456789",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
  "status": "validated",
  "email": "user@example.com",
  "type": "validation",
  "validationMethod": "verificationCode",
  "verificationCode": "123456",
  "expiresAt": "2024-01-15T11:30:00Z",
  "redirectUrl": "https://example.com/success",
  "webhookUrl": "https://example.com/webhook",
  "requires2FA": false,
  "ipAddress": "192.168.1.1",
  "attempts": 1,
  "maxAttempts": 3,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
  "validatedAt": "2024-01-15T10:32:00Z"
}
```
