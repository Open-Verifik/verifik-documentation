---
id: "en-docs-resources-app-registrations-create-an-app-registration-email-validation-notes-4"
title: "Create an App Registration Email Validation — Notes"
sourcePath: "docs/resources/app-registrations/create-an-app-registration-email-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoints:
  - "/api/email-validations/app-registration"
  - "/v2/email-validations/app-registration"
sourceAnchor: "Notes"
---

# Create an App Registration Email Validation
**API path(s):** /api/email-validations/app-registration, /v2/email-validations/app-registration

## Notes

- **App Registration Linking**: This endpoint automatically links the email validation to the user's app registration using the `appRegistrationId` from the authentication token.
- **Credit Charging**: Each email validation request consumes credits from your SmartEnroll plan (handled automatically).
- **Enhanced Email Data**: The system automatically populates additional email data including the user's first name from their information validation if available.
- **Auth Link Generation**: For onboarding flows, the system generates a secure JWT token and auth link for seamless user experience.
- **Duplicate Prevention**: If an active email validation already exists for the same email, project flow, and type, the system will resend the existing OTP instead of creating a new one.
- **Security Features**: The system validates email security policies and identity verification requirements based on your project flow configuration.
- **Email Format**: The email address is automatically converted to lowercase and whitespace is removed.
