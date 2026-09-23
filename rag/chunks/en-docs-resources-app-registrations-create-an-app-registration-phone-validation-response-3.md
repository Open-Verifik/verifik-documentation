---
id: "en-docs-resources-app-registrations-create-an-app-registration-phone-validation-response-3"
title: "Create an App Registration Phone Validation — Response"
sourcePath: "docs/resources/app-registrations/create-an-app-registration-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoint: "/v2/phone-validations/app-registration"
sourceAnchor: "Response"
---

# Create an App Registration Phone Validation
**API path(s):** /v2/phone-validations/app-registration

## Response

```json
{
    "data": {
        "client": "507f1f77bcf86cd799439013",
        "project": "507f1f77bcf86cd799439011",
        "projectFlow": "507f1f77bcf86cd799439015",
        "status": "sent",
        "countryCode": "+507",
        "phone": "62647737",
        "phoneGateway": "whatsapp",
        "otp": "$2a$10$/v55.1QmwlCdX6zD1jy51OF87POIDZzj30.UmTtp13pZv6uKm.a.m",
        "expiresAt": "2024-12-02T17:15:35.000Z",
        "phoneData": {},
        "type": "validation",
        "redirectUrl": "https://api.verifik.co",
        "requires2FA": false,
        "ipAddress": "172.17.0.1",
        "language": "en",
        "_id": "674de8df21c72be3cc42b8a7",
        "updatedAt": "2024-12-02T17:05:36.788Z",
        "createdAt": "2024-12-02T17:05:36.788Z",
        "__v": 0,
        "new": true
    }
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "missing project\n. missing validationMethod\n. missing phone\n. missing countryCode\n. missing type"
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

### Notes

- **Country Code Format**: The `countryCode` must be in the format `+XXX` where X are digits (1-3 digits maximum). For example: `+1`, `+507`, `+52`.
- **Phone Number**: Spaces in phone numbers are automatically removed during processing.
- **OTP Security**: The OTP is encrypted using bcrypt before storage for security.
- **Default Gateway**: Phone validations default to WhatsApp delivery method based on your project flow configuration.
- **Automatic Linking**: When created through the app-registration endpoint, the phone validation is automatically linked to the user's app registration record.
- **Credit Charging**: This endpoint automatically charges credits from your SmartEnroll plan.
- **App Registration Required**: This endpoint requires an active app registration session. You must use the token returned from creating an App Registration.
