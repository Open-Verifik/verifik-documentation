---
id: "en-docs-services-verifik-enroll-code-solution-via-api-full-api-tutorial-validation-methods-2"
title: "Enroll — Validation Methods"
sourcePath: "docs/services/verifik-enroll-code-solution-via-api/full-api-tutorial.md"
locale: "en"
category: "services"
tags:
  - "services"
endpoint: "/v2"
sourceAnchor: "Validation Methods"
slug: "/services/verifik-enroll-code-solution-via-api/full-api-tutorial"
url: "https://docs.verifik.co/services/verifik-enroll-code-solution-via-api/full-api-tutorial"
---

# Enroll
**API path(s):** /v2

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
