---
id: access
title: Access
description: Everything that Smart Access has to offer but on the API level
---

# Access

Everything that Smart Access has to offer but on the API level, giving the flexibility to code a custom solution based on your company needs.

## Overview

The Access API provides programmatic access to all SmartAccess functionality, allowing you to build custom authentication flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate authentication into their existing applications.

## Quick Start Guide

Let's start by saying that the **optimal** path is: Set everything up in our [web app](https://app.verifik.co) (using our UI to save everything that is related to the setup since there is no need to save everything via API). If you still want to follow everything via API I will list all the endpoints that need to be called in order to set it up manually or change the information via API as well.

### Setup Steps

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>1. Create a Project</h3>
      </div>
      <div className="card__body">
        <p>Start by creating a new project in the Verifik platform to organize your authentication flows.</p>
        <a href="/resources/create-a-project" className="button button--primary">Create Project</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>2. Create a Project Flow</h3>
      </div>
      <div className="card__body">
        <p>Define the authentication flow with type = "login" for your project.</p>
        <a href="/resources/create-a-project-flow" className="button button--primary">Create Flow</a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>3. Setup Login Methods</h3>
      </div>
      <div className="card__body">
        <p>Configure the authentication methods you want to support.</p>
        <a href="/resources/project-flows/create-a-project-flow/smart-access-project-flow" className="button button--primary">Setup Methods</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>4. Database Connection</h3>
      </div>
      <div className="card__body">
        <p>Connect your existing user database to the authentication system.</p>
        <a href="/resources/project-flows/create-a-project-flow/security-settings" className="button button--primary">Connect DB</a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--12">
    <div className="card">
      <div className="card__header">
        <h3>5. Setup Webhooks</h3>
      </div>
      <div className="card__body">
        <p>Configure webhooks to receive real-time notifications for authentication events.</p>
        <a href="/resources/webhooks/webhook-integration" className="button button--primary">Setup Webhooks</a>
      </div>
    </div>
  </div>
</div>

## Authentication Methods

Choose from three powerful authentication methods, each with comprehensive API support:

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>📧 Email Access</h3>
      </div>
      <div className="card__body">
        <p>Send and verify OTP codes via email for secure authentication.</p>
        <a href="#email-access-example" className="button button--primary">View Example</a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>📱 Phone Access</h3>
      </div>
      <div className="card__body">
        <p>Send and verify OTP codes via SMS and WhatsApp.</p>
        <a href="#phone-access-example" className="button button--primary">View Example</a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>👤 Biometric Access</h3>
      </div>
      <div className="card__body">
        <p>Face recognition and liveness detection for secure authentication.</p>
        <a href="#biometric-access-example" className="button button--primary">View Example</a>
      </div>
    </div>
  </div>
</div>

## API Reference

### Authentication

All API requests require a valid JWT token. Include the token in the Authorization header:

```bash
Authorization: Bearer <your_jwt_token>
```

### Base URL

```bash
https://api.verifik.co/v2/access
```

---

## Email Access Example

### Configuration

If you haven't created a project and a projectFlow with the property type = **login**, then here are the links for that:

- [Create a Project](/resources/create-a-project)
- [Create a Project Flow](/resources/create-a-project-flow)

### Let's Get Started

The flow mainly starts with the creation of the email validation then we proceed with the validation of that email validation that has a condition of time and also entering the one-time password that belongs to that email validation.

#### Step 1: Create Email Validation

```http
POST /email/send-otp
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "email": "user@example.com",
  "project_id": "your_project_id"
}
```

#### Step 2: Validate Email OTP

```http
POST /email/verify-otp
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "email": "user@example.com",
  "otp": "123456",
  "validation_id": "validation_id_from_step_1"
}
```

### Tutorial Video

<div className="video-container">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/wYJcFnMhtKg" 
    title="Email Access Example Tutorial" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

### API Endpoints

- [Create an Email Validation](/resources/create-an-email-validation)
- [Validate an Email Validation](/resources/validate-an-email-validation)

---

## Phone Access Example

### Configuration

If you haven't created a project and a projectFlow with the property type = **login**, then here are the links for that:

- [Create a Project](/resources/create-a-project)
- [Create a Project Flow](/resources/create-a-project-flow)

### Let's Get Started

The flow mainly starts with the creation of the phone validation then we proceed with the validation of that phone validation that has a condition of time and also entering the one-time password that belongs to that phone validation.

#### Step 1: Create Phone Validation (SMS)

```http
POST /phone/send-sms
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

#### Step 2: Create Phone Validation (WhatsApp)

```http
POST /phone/send-whatsapp
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

#### Step 3: Validate Phone OTP

```http
POST /phone/verify-otp
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "phone": "+1234567890",
  "otp": "123456",
  "validation_id": "validation_id_from_step_1_or_2"
}
```

### Tutorial Video

<div className="video-container">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/QEdQzUL7PpE" 
    title="Phone Access Example Tutorial" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

### API Endpoints

- [Create a Phone Validation](/resources/create-a-phone-validation)
- [Validate a Phone Validation](/resources/validate-a-phone-validation)

---

## Biometric Access Example

### Configuration

If you haven't created a project and a projectFlow with the property type = **login**, then here are the links for that:

- [Create a Project](/resources/create-a-project)
- [Create a Project Flow](/resources/create-a-project-flow)

### Let's Get Started

The flow mainly starts with the creation of the biometric validation then we proceed with the validation of that biometric validation that has a condition of time and also entering the JWT token into the headers > Authorization once the biometric Validation is created to authorize the **validation**.

#### Step 1: Register Face

```http
POST /biometric/register-face
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "user_id": "user123",
  "project_id": "your_project_id",
  "face_image": "base64_encoded_image"
}
```

#### Step 2: Verify Face

```http
POST /biometric/verify-face
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "user_id": "user123",
  "face_image": "base64_encoded_image",
  "validation_id": "validation_id_from_step_1"
}
```

#### Step 3: Liveness Check

```http
POST /biometric/liveness-check
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "face_image": "base64_encoded_image",
  "validation_id": "validation_id_from_step_1"
}
```

### Tutorial Video

<div className="video-container">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/0vgyvnFg5QY" 
    title="Biometric Access Example Tutorial" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

### API Endpoints

- [Create a Biometric Validation](/resources/create-a-biometric-validation)
- [Validate an App Login Biometric Validation](/resources/validate-an-app-login-biometric-validation)

---

## Response Format

All API responses follow a consistent format:

### Success Response

```json
{
  "success": true,
  "data": {
    "validation_id": "val_123456789",
    "expires_at": "2024-01-01T12:00:00Z",
    "status": "pending"
  },
  "message": "Operation completed successfully"
}
```

### Error Response

```json
{
  "success": false,
  "error": "Invalid OTP code",
  "code": "INVALID_OTP",
  "details": {
    "attempts_remaining": 2
  }
}
```

## Rate Limits

- **Email OTP**: 5 requests per minute per email
- **Phone OTP**: 3 requests per minute per phone number
- **Biometric**: 10 requests per minute per user

## Security Features

- **JWT Token Authentication**: Secure API access with time-limited tokens
- **Rate Limiting**: Protection against brute force attacks
- **OTP Expiration**: Time-limited one-time passwords
- **Liveness Detection**: Prevents spoofing attacks in biometric authentication
- **Webhook Notifications**: Real-time security event monitoring

## Best Practices

1. **Always validate responses**: Check the `success` field before processing data
2. **Handle errors gracefully**: Implement proper error handling for all API calls
3. **Store tokens securely**: Never expose JWT tokens in client-side code
4. **Implement retry logic**: Handle temporary failures with exponential backoff
5. **Monitor rate limits**: Track API usage to avoid hitting rate limits

## Support

For technical support and API documentation, contact our support team or visit our developer portal.

---

:::tip Pro Tip
Start with the web app setup for the fastest implementation, then use the API for custom integrations and advanced features.
:::

:::warning Security Notice
Always use HTTPS in production and never expose sensitive credentials in client-side code.
:::