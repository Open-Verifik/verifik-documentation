---
id: "en-docs-resources-app-registrations-sync-app-registration-status-response-3"
title: "Sync App Registration Status — Response"
sourcePath: "docs/resources/app-registrations/sync-app-registration-status.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations/${appregistrationid}/sync"
  - "/v2/app-registrations/%s/sync"
  - "/v2/app-registrations/{app_registration_id}/sync"
  - "/v2/app-registrations/{id}/sync"
sourceAnchor: "Response"
---

# Sync App Registration Status
**API path(s):** /v2/app-registrations/${appregistrationid}/sync, /v2/app-registrations/%s/sync, /v2/app-registrations/{app_registration_id}/sync, /v2/app-registrations/{id}/sync

## Response

```json
{
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "firstName": "John",
        "lastName": "Doe",
        "fullName": "John Doe",
        "step": "signUpForm",
        "steps": {
            "signUpForm": "mandatory",
            "basicInformation": "skip",
            "document": "mandatory",
            "liveness": "mandatory",
            "form": "skip"
        },
        "appRegistrationId": "507f1f77bcf86cd799439011",
        "status": "ONGOING"
    }
}
```

  
  

```json
{
    "code": "Conflict",
    "message": "signUpForm_validation_not_passed"
}
```

  
  

```json
{
    "code": "AppRegistration_not_found",
    "message": "404:AppRegistration_not_found"
}
```

  
  

```json
{
    "code": "step_not_supported",
    "message": "500:step_not_supported"
}
```

### Notes

- **Not a hosted resume URL**: This endpoint updates step and status **inside** an active session. It does not mint `https://access.verifik.co/sign-up/{projectId}?token=...`. To send a user back into hosted SmartEnroll, use [Resend an App Registration Link](/resources/app-registrations/resend-an-app-registration-link).
- **Token Generation**: The `end` step is the only step that guarantees token generation for user authentication
- **Validation Requirements**: Each step may have specific validation requirements that must be met
- **KYC Skip Logic**: Skipping KYC only works if no mandatory verification steps are configured
- **Webhook Integration**: All status changes trigger webhook events if configured in the project flow
- **Status Flow Control**: 
  - `ONGOING` - Continues the registration process to the next step
  - `COMPLETED` - Finalizes registration and provides full access
  - `FAILED` - Marks registration as unsuccessful but still provides access token
  - `NEEDS_MANUAL_VERIFICATION` - Requires human review before completion
