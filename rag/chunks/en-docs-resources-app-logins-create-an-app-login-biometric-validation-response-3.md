---
id: "en-docs-resources-app-logins-create-an-app-login-biometric-validation-response-3"
title: "Create an App Login Biometric Validation — Response"
sourcePath: "docs/resources/app-logins/create-an-app-login-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations/app-login"
sourceAnchor: "Response"
slug: "/resources/create-an-app-login-biometric-validation"
url: "https://docs.verifik.co/resources/create-an-app-login-biometric-validation"
---

# Create an App Login Biometric Validation
**API path(s):** /v2/biometric-validations/app-login

## Response

```json
{
  "data": {
    "livenessSession": {
      "_id": "674de8df21c72be3cc42b8a7",
      "identifier": "user@example.com",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "status": "active",
      "expiresAt": "2024-12-02T17:15:35.000Z",
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:05:36.788Z"
    },
    "biometricValidation": {
      "_id": "674de8df21c72be3cc42b8a8",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "status": "new",
      "livenessSession": "674de8df21c72be3cc42b8a7",
      "type": "login",
      "url": "https://access.verifik.co/sign-in/507f1f77bcf86cd799439011?type=liveness",
      "assignedCollection": "507f1f77bcf86cd799439016",
      "collectionCode": "col_12345",
      "redirectUrl": null,
      "webhook": null,
      "requires2FA": false,
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:05:36.788Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

  
  

```json
{
  "code": "token_not_right",
  "message": "403:token_not_right"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing project"
}
```

  
  

```json
{
  "code": "Project_not_found_or_featured_disabled",
  "message": "404:Project_not_found_or_featured_disabled"
}
```

### Features

- **Login-Specific Validation**: Designed specifically for app login biometric validation flows
- **Liveness Detection**: Advanced facial recognition with anti-spoofing technology
- **Secure Sessions**: Automatic creation of secure liveness sessions with expiration
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Email Integration**: Optional email notifications with validation links
- **Webhook Support**: Real-time notifications for validation events
- **Multi-language Templates**: Support for English and Spanish email templates
- **Security Features**: IP address tracking and 2FA support
