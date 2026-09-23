---
id: "en-docs-access-access-tutorial-video-3"
title: "Access — Tutorial Video"
sourcePath: "docs/access/access.md"
locale: "en"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Tutorial Video"
slug: "/access"
url: "https://docs.verifik.co/access"
---

# Access
**API path(s):** /v2/access

Everything that Smart Access has to offer but on the API level, giving the flexibility to code a custom solution based on your company needs.

## Tutorial Video

### API Endpoints

- [Create an Email Validation](/resources/create-an-email-validation)
- [Validate an Email Validation](/resources/validate-an-email-validation)

---

## Phone Access Example

### Configuration

If you haven't created a project and a projectFlow with the property type = **login**, then here are the links for that:

- [Create a Project](/resources/projects/projects-create)
- [Create a Project Flow](/resources/project-flows/project-flows-update)

### Let's Get Started

The flow mainly starts with the creation of the phone validation then we proceed with the validation of that phone validation that has a condition of time and also entering the one-time password that belongs to that phone validation.

#### Step 1: Create Phone Validation (SMS)

```http
POST /phone/send-sms
Content-Type: application/json
Authorization: Bearer 

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

#### Step 2: Create Phone Validation (WhatsApp)

```http
POST /phone/send-whatsapp
Content-Type: application/json
Authorization: Bearer 

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

#### Step 3: Validate Phone OTP

```http
POST /phone/verify-otp
Content-Type: application/json
Authorization: Bearer 

{
  "phone": "+1234567890",
  "otp": "123456",
  "validation_id": "validation_id_from_step_1_or_2"
}
```

### Tutorial Video

### API Endpoints

- [Create a Phone Validation](/resources/create-a-phone-validation)
- [Validate a Phone Validation](/resources/validate-a-phone-validation)

---

## Biometric Access Example

### Configuration

If you haven't created a project and a projectFlow with the property type = **login**, then here are the links for that:

- [Create a Project](/resources/projects/projects-create)
- [Create a Project Flow](/resources/project-flows/project-flows-update)
