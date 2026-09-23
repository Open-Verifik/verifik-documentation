---
id: "en-docs-resources-app-registrations-validate-an-app-registration-email-validatio-response-2"
title: "Validate an App Registration Email Validation — Response"
sourcePath: "docs/resources/app-registrations/validate-an-app-registration-email-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/email-validations/${emailvalidationid}"
  - "/v2/email-validations/%s"
  - "/v2/email-validations/{email_validation_id}"
  - "/v2/email-validations/{id}"
sourceAnchor: "Response"
---

# Validate an App Registration Email Validation
**API path(s):** /v2/email-validations/${emailvalidationid}, /v2/email-validations/%s, /v2/email-validations/{email_validation_id}, /v2/email-validations/{id}

## Response

```json
{
    "data": {
        "_id": "674de8df21c72be3cc42b8a7",
        "status": "validated",
        "email": "user@example.com",
        "type": "onboarding",
        "showFaceLivenessRecommendation": false
    }
}
```

  
  

```json
{
    "code": "otp_does_not_match",
    "message": "403:otp_does_not_match"
}
```

  
  

```json
{
    "code": "email_validation_not_found",
    "message": "404:email_validation_not_found"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "missing_email_and_otp"
}
```

  
  

```json
{
    "code": "emailValidation_has_expired",
    "message": "412:emailValidation_has_expired"
}
```

### Notes

- **Onboarding Flow**: This endpoint is specifically designed for users in the app registration process, where email validation is part of the onboarding journey.
- **OTP Expiration**: OTPs have a limited lifespan (typically 10 minutes) and will expire after the predefined time. Expired OTPs cannot be validated.
- **Status Updates**: Successful validation automatically updates the email validation status to "validated" and may trigger additional onboarding steps.
- **Webhook Events**: Validation events trigger webhook notifications for tracking and integration purposes.
- **App Registration Linking**: When validated through this endpoint, the email validation is automatically linked to the user's app registration record.
- **Email Formatting**: Email addresses are automatically converted to lowercase and have spaces removed during processing.
- **Demo Mode**: If the project is in demo mode, special demo OTPs may be accepted for testing purposes.
