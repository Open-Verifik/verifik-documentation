---
id: "en-docs-resources-app-registrations-create-an-app-registration-document-validati-response-2"
title: "Create an App Registration Document Validation — Response"
sourcePath: "docs/resources/app-registrations/create-an-app-registration-document-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/api/document-validations/app-registration"
  - "/v2/document-validations/app-registration"
sourceAnchor: "Response"
---

# Create an App Registration Document Validation
**API path(s):** /api/document-validations/app-registration, /v2/document-validations/app-registration

## Response

```json
{
    "data": {
        "documentValidation": {
            "_id": "507f1f77bcf86cd799439011",
            "appRegistration": "507f1f77bcf86cd799439012",
            "client": "507f1f77bcf86cd799439013",
            "project": "507f1f77bcf86cd799439014",
            "projectFlow": "507f1f77bcf86cd799439015",
            "documentType": "Passport",
            "documentCategory": "ID",
            "status": "ASSESSING",
            "validationMethod": "OCR",
            "inputMethod": "FILE_UPLOAD",
            "imageValidated": false,
            "namesMatch": false,
            "fullNameMatchPercentage": 0,
            "firstNameMatchPercentage": 0,
            "lastNameMatchPercentage": 0,
            "type": "validation",
            "createdAt": "2025-01-01T00:00:00.000Z",
            "updatedAt": "2025-01-01T00:00:00.000Z"
        }
    }
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "missing image"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "Either image or backImage must be provided"
}
```

  
  

```json
{
    "code": "already_exists",
    "message": "409:already_exists"
}
```

This error occurs when a document validation already exists for the app registration and the `force` parameter is not set to `true`.

  
  

```json
{
    "code": "appRegistration_not_found",
    "message": "404:appRegistration_not_found"
}
```

  
  

```json
{
    "code": "document_settings_not_set",
    "message": "404:document_settings_not_set"
}
```

### Notes

- **App Registration Required**: This endpoint requires an active app registration session. You must use the token returned from creating an App Registration.
- **At Least One Image Required**: Either `image` or `backImage` (or both) must be provided in the request.
- **Document Processing**: Documents are processed using OCR (Optical Character Recognition) to extract and validate information.
- **Status Values**: The document validation status can be `ASSESSING`, `VALIDATED`, `FAILED`, or other status values depending on the validation process.
- **Credit Charging**: This endpoint automatically charges credits from your SmartEnroll plan.
- **Force Flag**: Use the `force` parameter to overwrite existing document validations if needed.
