---
id: "en-docs-services-verifik-enroll-code-solution-via-api-full-api-tutorial-3-validation-methods-3"
title: "Enroll — 3. Validation Methods"
sourcePath: "docs/services/verifik-enroll-code-solution-via-api/full-api-tutorial.md"
locale: "en"
category: "services"
tags:
  - "services"
sourceAnchor: "3. Validation Methods"
slug: "/services/verifik-enroll-code-solution-via-api/full-api-tutorial"
url: "https://docs.verifik.co/services/verifik-enroll-code-solution-via-api/full-api-tutorial"
---

# Enroll

## 3. Validation Methods

Implement the validation methods you need:
- [Email Validations](/resources/email-validations) - Verify email ownership
- [Phone Validations](/resources/phone-validations) - Verify phone numbers
- [Document Validations](/resources/document-validations) - Verify identity documents
- [Biometric Validations](/resources/biometric-validations) - Verify identity via biometrics

### 4. Webhook Integration
Set up real-time notifications:
- [Create a Webhook](/resources/create-a-webhook) - Receive validation events
- [Webhook Events](/resources/webhooks) - Understand webhook payloads

## Webhook Configuration

Set up webhooks to receive real-time notifications about validation events. For detailed implementation, see:

- [Create a Webhook](/resources/create-a-webhook) - Complete webhook setup guide
- [Webhook Events](/resources/webhooks) - Available events and payload formats

### Webhook Events
- `validation.completed` - Validation successfully completed
- `validation.failed` - Validation failed
- `validation.expired` - Validation expired
- `app.login.created` - New app login created

## Error Handling

All API endpoints return standardized error responses:

```json
{
  "code": "MissingParameter",
  "message": "Required field 'email' is missing"
}
```

### Common Error Codes
- `MissingParameter` - Required field missing
- `InvalidParameter` - Invalid parameter value
- `Unauthorized` - Invalid or missing token
- `Forbidden` - Insufficient permissions
- `NotFound` - Resource not found
- `RateLimitExceeded` - Too many requests

## Rate Limits

- **General API**: 1000 requests per hour
- **Validation APIs**: 100 requests per hour per project
- **Webhook Delivery**: 10 retries with exponential backoff
