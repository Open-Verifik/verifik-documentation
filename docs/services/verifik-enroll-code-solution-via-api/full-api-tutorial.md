---
id: verifik-enroll-code-solution-via-api
title: Enroll
description: Full API tutorial for Verifik Enroll Code Solution
slug: /services/verifik-enroll-code-solution-via-api/full-api-tutorial
---

# Enroll

### Getting Started

The **recommended approach** is to use our [web app](https://app.verifik.co) for setup. Our intuitive UI handles all the configuration automatically, eliminating the need for manual API calls. However, if you prefer full API control, we provide comprehensive endpoints for every step of the process.

## Prerequisites

Before starting the integration, ensure you have:

- **API Access Token** - Obtain from [Verifik Dashboard](https://app.verifik.co)
- **HTTPS Endpoint** - Required for webhook configuration
- **Project Requirements** - Privacy policy and terms of service URLs
- **Supported Countries** - List of countries where your service will operate

## API Base URL

All API endpoints use the following base URL:
```
https://api.verifik.co/v2/
```

## Authentication

All API requests require authentication using a Bearer token:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

### Setup Process

| Step | Action | Documentation | Endpoint |
|------|--------|--------------|----------|
| 1 | **Create a Project** | [Create a Project](/resources/projects/projects-create) | `POST /projects` |
| 2 | **Create a Project Flow** | [Create a Project Flow](/resources/project-flows/project-flows-update) | `POST /project-flows` |
| 3 | **Configure App Registrations** | [Create an App Registration](/resources/app-registrations/create-an-app-registration) | `POST /app-registrations` |
| 4 | **Set up Webhooks** | [Create a Webhook](/resources/create-a-webhook) | `POST /webhooks` |
| 5 | **Configure App Logins** | [Create an App Login](/resources/create-an-app-login) | Auto-generated |

## Validation Methods

Verifik supports multiple validation methods that can be combined in your project flows:

### 1. Email Validation
- **Endpoint**: `POST /email-validations`
- **Purpose**: Verify email ownership via OTP
- **Types**: `validation`, `login`, `onboarding`, `oneTimeLink`
- **Documentation**: [Email Validations](/resources/email-validations)

### 2. Phone Validation  
- **Endpoint**: `POST /phone-validations`
- **Purpose**: Verify phone ownership via SMS/WhatsApp
- **Types**: `validation`, `login`, `onboarding`, `twoFactor`
- **Documentation**: [Phone Validations](/resources/phone-validations)

### 3. Document Validation
- **Endpoint**: `POST /document-validations`
- **Purpose**: Verify identity documents (ID, passport, license)
- **Types**: `validation`, `login`, `signup`, `ocr`, `demo`
- **Documentation**: [Document Validations](/resources/document-validations)

### 4. Biometric Validation
- **Endpoint**: `POST /biometric-validations`
- **Purpose**: Verify identity via facial recognition and liveness detection
- **Types**: `validation`, `login`, `onboarding`, `liveness`
- **Documentation**: [Biometric Validations](/resources/biometric-validations)

## Integration Flow

Follow these steps to integrate Verifik's enrollment system:

### 1. Project Setup
Create your project and configure the basic settings:
- [Create a Project](/resources/projects/projects-create) - Set up your project with basic information
- [Create a Project Flow](/resources/project-flows/project-flows-update) - Define your validation workflow

### 2. User Registration
Handle user registration and validation:
- [Create an App Registration](/resources/app-registrations/create-an-app-registration) - Register users in your system
- [Create an App Login](/resources/create-an-app-login) - Manage user authentication

### 3. Validation Methods
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

## Testing

Use our sandbox environment for testing:
- **Base URL**: `https://api-sandbox.verifik.co/v2/`
- **Test Data**: Use provided test phone numbers and emails
- **No Charges**: Sandbox usage doesn't count against your credits

## Production Checklist

Before going live, ensure:

- [ ] **HTTPS Endpoints** - All webhook URLs use HTTPS
- [ ] **Error Handling** - Implement proper error handling for all API calls
- [ ] **Rate Limiting** - Respect API rate limits
- [ ] **Webhook Security** - Verify webhook signatures
- [ ] **Test Coverage** - Test all validation flows
- [ ] **Monitoring** - Set up monitoring for API calls and webhooks
- [ ] **Documentation** - Document your integration for your team

### SmartEnroll: The No-Code Solution

**SmartEnroll** streamlines the entire enrollment process through our visual web interface. Perfect for both developers and business users, it offers:

* **Visual Project Builder** - Create and configure projects with drag-and-drop simplicity
* **Intuitive Flow Designer** - Build complex onboarding workflows without coding
* **Smart Configuration** - Automated setup with guided wizards for each step
* **Real-time Monitoring** - Track progress and view logs directly in the dashboard
* **Instant Deployment** - Go from concept to production in minutes, not hours

#### Why Choose SmartEnroll?

* **Faster Implementation** - Reduce setup time from days to hours
* **Reduced Errors** - Eliminate manual configuration mistakes
* **Easy Maintenance** - Update settings through the UI without touching code
* **Team Collaboration** - Non-technical team members can manage configurations
* **Scalable** - Handle multiple projects and complex workflows effortlessly

Whether you're a developer looking to accelerate deployment or a business user managing enrollment processes, SmartEnroll provides the tools you need to succeed without the complexity of direct API integration.
