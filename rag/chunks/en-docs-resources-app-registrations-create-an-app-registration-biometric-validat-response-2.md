---
id: "en-docs-resources-app-registrations-create-an-app-registration-biometric-validat-response-2"
title: "Create an App Registration Biometric Validation — Response"
sourcePath: "docs/resources/app-registrations/create-an-app-registration-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoints:
  - "/api/biometric-validations/app-registration"
  - "/v2/biometric-validations/app-registration"
sourceAnchor: "Response"
---

# Create an App Registration Biometric Validation
**API path(s):** /api/biometric-validations/app-registration, /v2/biometric-validations/app-registration

## Response

```json
{
    "data": {
        "_id": "674de8df21c72be3cc42b8a7",
        "client": "507f1f77bcf86cd799439013",
        "project": "507f1f77bcf86cd799439011",
        "projectFlow": "507f1f77bcf86cd799439015",
        "status": "STARTED",
        "email": "user@example.com",
        "countryCode": "+1",
        "phone": "5551234567",
        "biometricValidation": "674de8df21c72be3cc42b8a8",
        "person": "674de8df21c72be3cc42b8a9",
        "informationValidation": "674de8df21c72be3cc42b8a10",
        "assignedCollection": "507f1f77bcf86cd799439016",
        "createdAt": "2024-12-02T17:05:36.788Z",
        "updatedAt": "2024-12-02T17:05:36.788Z"
    }
}
```

  
  

```json
{
    "code": "person_already_set",
    "message": "409:person_already_set"
}
```

  
  

```json
{
    "code": "liveness_failed",
    "message": "409:liveness_failed@0.45"
}
```

The message includes the liveness score that failed the threshold.

  
  

```json
{
    "code": "appRegistration_not_found",
    "message": "404:appRegistration_not_found"
}
```

  
  

```json
{
    "code": "collection_not_set",
    "message": "409:collection_not_set"
}
```

### Notes

- **App Registration Required**: This endpoint requires an active app registration session with status "STARTED" or "ONGOING".
- **Liveness Detection**: Advanced anti-spoofing technology ensures the person being verified is physically present.
- **Collection Integration**: The project must have an assigned collection for biometric data storage.
- **Person Creation**: A person record is automatically created and linked to the app registration.
- **Credit Charging**: This endpoint automatically charges credits from your SmartEnroll plan.
- **Image Processing**: Facial images are processed for both biometric matching and liveness detection.
- **Force Flag**: Use the force flag to override existing person records if needed.
- **Liveness Configuration**: The system uses default liveness settings from the project flow (minimum score: 0.6, search mode: ACCURATE, search minimum score: 0.9). These can be customized in your project flow configuration.
