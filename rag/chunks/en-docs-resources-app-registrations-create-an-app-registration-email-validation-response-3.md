---
id: "en-docs-resources-app-registrations-create-an-app-registration-email-validation-response-3"
title: "Create an App Registration Email Validation — Response"
sourcePath: "docs/resources/app-registrations/create-an-app-registration-email-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/api/email-validations/app-registration"
  - "/v2/email-validations/app-registration"
sourceAnchor: "Response"
---

# Create an App Registration Email Validation
**API path(s):** /api/email-validations/app-registration, /v2/email-validations/app-registration

## Response

```json
{
    "data": {
        "status": "sent",
        "validationMethod": "verificationCode",
        "extraParams": [],
        "type": "onboarding",
        "requires2FA": false,
        "deleted": false,
        "_id": "65c28d66c3abd708cc9b12e2",
        "email": "user@example.com",
        "project": "6266193db77ccc8322530c90",
        "projectFlow": "658ed28b02589f325134d7b78",
        "ipAddress": "4.246.194.90",
        "emailData": {
            "firstName": "John",
            "title": "Verifik Client App",
            "projectName": "Verifik Client App",
            "contactEmail": "support@verifik.co",
            "logo": "https://cdn.verifik.co/access/verifikprojectlogo.png",
            "authLink": "https://access.verifik.co/sign-up/6266193db77ccc8111730c90?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&otp="
        },
        "otp": "$2a$10$MCdw130G.RbW4je9Uj2MvuSTzm7.raG23f0Zaasda0FKC1Gl98r0s4D1m",
        "expiresAt": "2024-02-06T19:59:58.000Z",
        "client": "613375a1eab2fe01237f81e2",
        "updatedAt": "2024-02-06T19:49:59.397Z",
        "createdAt": "2024-02-06T19:49:59.397Z",
        "__v": 0,
        "existing": false,
        "sent": true
    }
}
```

  
  

```json
{
    "message": "missing project\n. missing validationMethod\n. missing email\n. missing type",
    "code": "MissingParameter"
}
```

  
  

```json
{
    "message": "Invalid email format",
    "code": "MissingParameter"
}
```

  
  

```json
{
    "code": "project_not_found",
    "message": "404:project_not_found"
}
```

  
  

```json
{
    "code": "projectFlow_not_found",
    "message": "404:projectFlow_not_found"
}
```

  
  

```json
{
    "code": "security_not_set",
    "message": "404:security_not_set"
}
```
