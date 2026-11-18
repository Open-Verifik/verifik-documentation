---
id: "en-docs-access-access-authentication-methods-2"
title: "Access — Authentication Methods"
sourcePath: "docs/access/access.md"
locale: "en"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Authentication Methods"
slug: "/access"
url: "https://docs.verifik.co/access"
---

# Access
**API path(s):** /v2/access

Everything that Smart Access has to offer but on the API level, giving the flexibility to code a custom solution based on your company needs.

## Authentication Methods

Choose from three powerful authentication methods, each with comprehensive API support:

  
    
      
        📧 Email Access
      
      
        Send and verify OTP codes via email for secure authentication.
        View Example
      
    
  
  
    
      
        📱 Phone Access
      
      
        Send and verify OTP codes via SMS and WhatsApp.
        View Example
      
    
  
  
    
      
        👤 Biometric Access
      
      
        Face recognition and liveness detection for secure authentication.
        View Example

## API Reference

### Authentication

All API requests require a valid JWT token. Include the token in the Authorization header:

```bash
Authorization: Bearer 
```

### Base URL

```bash
https://api.verifik.co/v2/access
```

---

## Email Access Example

### Configuration

If you haven't created a project and a projectFlow with the property type = **login**, then here are the links for that:

- [Create a Project](/resources/projects/projects-create)
- [Create a Project Flow](/resources/project-flows/project-flows-update)

### Let's Get Started

The flow mainly starts with the creation of the email validation then we proceed with the validation of that email validation that has a condition of time and also entering the one-time password that belongs to that email validation.

#### Step 1: Create Email Validation

```http
POST /email/send-otp
Content-Type: application/json
Authorization: Bearer 

{
  "email": "user@example.com",
  "project_id": "your_project_id"
}
```

#### Step 2: Validate Email OTP

```http
POST /email/verify-otp
Content-Type: application/json
Authorization: Bearer 

{
  "email": "user@example.com",
  "otp": "123456",
  "validation_id": "validation_id_from_step_1"
}
```
