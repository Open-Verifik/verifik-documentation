---
id: "en-docs-resources-email-validations-email-validations-overview"
title: "Email Validations — Overview"
sourcePath: "docs/resources/email-validations/email-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Overview"
slug: "/resources/email-validations"
url: "https://docs.verifik.co/resources/email-validations"
---

# Email Validations
**API path(s):** /v2/email-validations

## Overview

Email Validations are the core verification system within Verifik that processes and validates user email addresses during the authentication and registration process. Think of them as the security checkpoint that ensures users are who they claim to be by verifying their email ownership through secure verification codes.

### How Email Validations Work

Every Email Validation represents a single email verification session that processes user-submitted email addresses. When someone enters their email during signup, login, or account verification, Verifik creates an Email Validation to send a secure verification code and confirm the user's email ownership.

Currently, Email Validations support these types:

* **validation** - Standard email verification process
* **login** - Email verification for user authentication
* **onboarding** - Email verification for new user registration
* **oneTimeLink** - Single-use access link verification

### What Email Validations Track

Email Validations are comprehensive verification systems that process every aspect of email verification:

#### Email Information
* Email address and ownership verification
* User name and contact details
* Project and client association
* Verification method and security settings

#### Verification Process
* One-time password (OTP) generation and delivery
* Email sending status and delivery confirmation
* Code validation and verification attempts
* Expiration and security management

#### Security Features
* Rate limiting and abuse prevention
* Secure code generation and validation
* Delivery tracking and confirmation
* Fraud detection and prevention
