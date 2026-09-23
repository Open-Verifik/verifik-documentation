---
id: "en-docs-resources-app-registrations-validate-an-app-registration-phone-validatio-response-3"
title: "Validate an App Registration Phone Validation — Response"
sourcePath: "docs/resources/app-registrations/validate-an-app-registration-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/api/phone-validations"
  - "/v2/phone-validations"
sourceAnchor: "Response"
---

# Validate an App Registration Phone Validation
**API path(s):** /api/phone-validations, /v2/phone-validations

## Response

```json
{
    "data": {
        "_id": "674de8df21c72be3cc42b8a7",
        "status": "validated",
        "countryCode": "+507",
        "phone": "62647737",
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
    "code": "phone_validation_not_found",
    "message": "404:phone_validation_not_found"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "missing phone\n. missing countryCode\n. missing otp"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "Invalid countryCode format. CountryCode should be in the format + followed by 1 to 3 digits."
}
```

  
  

```json
{
    "code": "phoneValidation_has_expired",
    "message": "412:phoneValidation_has_expired"
}
```

### Notes

- **Onboarding Flow**: This endpoint is specifically designed for users in the app registration process, where phone validation is part of the onboarding journey.
- **OTP Expiration**: OTPs have a limited lifespan (typically 10 minutes) and will expire after the predefined time. Expired OTPs cannot be validated.
- **Status Updates**: Successful validation automatically updates the phone validation status to "validated" and may trigger additional onboarding steps.
- **Webhook Events**: Validation events trigger webhook notifications for tracking and integration purposes.
- **Face Liveness**: Some project flows may recommend face liveness verification after phone validation as part of the onboarding process.
- **App Registration Linking**: When validated through this endpoint, the phone validation is automatically linked to the user's app registration record.
- **Phone Number Formatting**: Phone numbers have spaces automatically removed during processing.
- **Country Code Format**: The country code must be in the format `+XXX` where X are digits (1-3 digits maximum).
