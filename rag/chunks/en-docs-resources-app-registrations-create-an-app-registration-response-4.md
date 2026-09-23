---
id: "en-docs-resources-app-registrations-create-an-app-registration-response-4"
title: "Create an App Registration — Response"
sourcePath: "docs/resources/app-registrations/create-an-app-registration.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "Response"
---

# Create an App Registration
**API path(s):** /v2/app-registrations

## Response

```json
{
	"data": {
		"appRegistration": {
			"_id": "674de8df21c72be3cc42b8a7",
			"client": "507f1f77bcf86cd799439013",
			"project": "507f1f77bcf86cd799439011",
			"projectFlow": "507f1f77bcf86cd799439015",
			"status": "STARTED",
			"email": "user@example.com",
			"phone": "1234567890",
			"countryCode": "+1",
			"currentStep": "1",
			"language": "en",
			"createdAt": "2024-12-02T17:05:36.788Z",
			"updatedAt": "2024-12-02T17:05:36.788Z"
		},
		"informationValidation": {
			"_id": "674de8df21c72be3cc42b8a8",
			"fullName": "John Doe",
			"firstName": "John",
			"lastName": "Doe"
		},
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
	}
}
```

  
  

```json
{
	"message": "Needs an email or a phone at least",
	"code": "MissingParameter",
	"status": 409
}
```

  
  

```json
{
	"message": "email domain not allowed",
	"code": "PreconditionFailed",
	"status": 409
}
```

  
  

```json
{
	"message": "missing countryCode",
	"code": "MissingParameter",
	"status": 409
}
```

### Notes

-   **Token Generation**: A JWT token is returned in the response that must be used for subsequent validation requests (email, phone, document, biometric).
-   **Contact Information**: Either `email` or `phone` (with `countryCode`) must be provided. Both can be provided.
-   **Name Fields**: You can use either `fullName` or `firstName`/`lastName` combination.
-   **Phone Format**: Phone numbers should contain only digits (no spaces, dashes, or other characters).
-   **Country Code**: Must be in format `+XXX` where X are digits (1-3 digits maximum).
-   **Status**: New app registrations start with status `STARTED`.
-   **Language**: Defaults to `"en"` if not provided.
-   **Resume an incomplete session**: Use [Resend an App Registration Link](/resources/app-registrations/resend-an-app-registration-link). Do not recreate the registration with the same contact details.
