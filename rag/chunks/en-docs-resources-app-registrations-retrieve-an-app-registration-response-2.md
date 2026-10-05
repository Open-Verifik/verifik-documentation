---
id: "en-docs-resources-app-registrations-retrieve-an-app-registration-response-2"
title: "Get App Registration — Response"
sourcePath: "docs/resources/app-registrations/retrieve-an-app-registration.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/api/app-registrations"
  - "/v2/app-registrations"
  - "/v2/app-registrations/{id}"
sourceAnchor: "Response"
---

# Get App Registration
**API path(s):** /api/app-registrations, /v2/app-registrations, /v2/app-registrations/{id}

## Response

```json
{
    "data": {
        "_id": "674de8df21c72be3cc42b8a7",
        "client": "507f1f77bcf86cd799439013",
        "project": {
            "_id": "507f1f77bcf86cd799439011",
            "name": "Example Project"
        },
        "projectFlow": {
            "_id": "507f1f77bcf86cd799439015",
            "type": "onboarding",
            "target": "personal"
        },
        "status": "ONGOING",
        "email": "user@example.com",
        "phone": "1234567890",
        "countryCode": "+1",
        "currentStep": "1",
        "language": "en",
        "emailValidation": {
            "_id": "674de8df21c72be3cc42b8a8",
            "email": "user@example.com",
            "status": "validated"
        },
        "phoneValidation": {
            "_id": "674de8df21c72be3cc42b8a9",
            "phone": "1234567890",
            "status": "validated"
        },
        "biometricValidation": null,
        "documentValidation": null,
        "informationValidation": {
            "_id": "674de8df21c72be3cc42b8a10",
            "fullName": "John Doe",
            "firstName": "John",
            "lastName": "Doe"
        },
        "createdAt": "2024-12-02T17:05:36.788Z",
        "updatedAt": "2024-12-02T17:05:36.788Z"
    }
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

  
  

```json
{
    "message": "AppRegistration_not_found",
    "code": "NotFound"
}
```

### Reading face-comparison scores (SmartEnroll)

There is **no** public `GET /v2/face-verifications/:id` (or similar) to load a FaceVerification by id alone. After a hosted face compare, the score lives on the linked `FaceVerification` document referenced by `compareFaceVerification` on the app registration.

```
GET https://api.verifik.co/v2/app-registrations/{id}?populates[]=compareFaceVerification
```

The populated object includes fields such as `result.score`, `result.passed`, `result.compare_min_score`, and `comparedAt`. FaceVerification records use a TTL of about **90 days** in production (shorter in development); after expiry the populate may be empty even if the app registration remains.
