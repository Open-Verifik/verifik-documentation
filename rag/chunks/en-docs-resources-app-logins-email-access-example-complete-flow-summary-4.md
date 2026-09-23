---
id: "en-docs-resources-app-logins-email-access-example-complete-flow-summary-4"
title: "Email Access Example — Complete Flow Summary"
sourcePath: "docs/resources/app-logins/email-access-example.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Complete Flow Summary"
slug: "/resources/email-access-example"
url: "https://docs.verifik.co/resources/email-access-example"
---

# Email Access Example
**API path(s):** /v2/email-validations

## Complete Flow Summary

1. **User initiates login** with their email address
2. **System creates email validation** and sends OTP to user's email
3. **User receives OTP** via email
4. **User enters OTP** in your application
5. **System validates OTP** and creates AppLogin record
6. **System retrieves AppLogin object** with complete validation details
7. **User gains access** with authentication token and complete login data

## Related Documentation

- [Create an Email Validation](/resources/create-an-email-validation)
- [Validate an Email Validation](/resources/validate-an-email-validation)
- [Retrieve an App Login](/resources/retrieve-an-app-login)
- [Create an App Login](/resources/create-an-app-login)

## Video Tutorial

### Features

- **Email-based Authentication**: Secure login using email OTP verification
- **Automatic AppLogin Creation**: AppLogin records are created automatically upon successful validation
- **Time-limited OTP**: OTP codes expire for security
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Complete Integration**: End-to-end tutorial for email authentication flows
- **Token-based Access**: Secure authentication tokens for application access
