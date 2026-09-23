---
id: "en-docs-access-access-let-s-get-started-4"
title: "Access — Let's Get Started"
sourcePath: "docs/access/access.md"
locale: "en"
category: "access"
tags:
  - "access"
endpoint: "/v2/access"
sourceAnchor: "Let's Get Started"
slug: "/access"
url: "https://docs.verifik.co/access"
---

# Access
**API path(s):** /v2/access

Everything that Smart Access has to offer but on the API level, giving the flexibility to code a custom solution based on your company needs.

## Let's Get Started

The flow mainly starts with the creation of the biometric validation then we proceed with the validation of that biometric validation that has a condition of time and also entering the JWT token into the headers > Authorization once the biometric Validation is created to authorize the **validation**.

#### Step 1: Register Face

```http
POST /biometric/register-face
Content-Type: application/json
Authorization: Bearer 

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
Authorization: Bearer 

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
Authorization: Bearer 

{
  "face_image": "base64_encoded_image",
  "validation_id": "validation_id_from_step_1"
}
```

### Tutorial Video

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
