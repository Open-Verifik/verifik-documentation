---
id: "en-docs-resources-app-logins-create-an-app-login-overview"
title: "Create an App Login — Overview"
sourcePath: "docs/resources/app-logins/create-an-app-login.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/create-an-app-login"
url: "https://docs.verifik.co/resources/create-an-app-login"
---

# Create an App Login

## Overview

You cannot create an instance of an `AppLogin` directly. AppLogins are generated automatically when the user performs validation methods defined in the **Project > ProjectFlow**. The AppLogin is tied to the respective validation method used during the login process.

### Validation Methods

AppLogins are created automatically through the following validation methods:

#### Email Validation

The AppLogin will contain an `emailValidation` field that tracks the email-related authentication details.

**Steps:**

1. User receives an OTP (One-Time Password) via email
2. User enters the OTP on the login page or validates it via the [Validate an Email Validation](/resources/validate-an-email-validation) API
3. Once verified, an AppLogin object is created with `type: email`

See: [Email Access Example](/resources/email-access-example)

#### Phone Validation

The AppLogin will contain a `phoneValidation` field capturing the phone authentication.

**Steps:**

1. User receives an OTP via SMS
2. User inputs the OTP to log in or validates it via the [Validate a Phone Validation](/resources/validate-a-phone-validation) API
3. Once the OTP is validated, an AppLogin object is created with `type: phone`

#### Biometric Validation

The AppLogin will include a `biometricValidation` field recording the biometric authentication event.

**Steps:**

1. User provides biometric data (e.g., facial recognition, fingerprint)
2. The biometric data is validated using liveness detection in the web app or via the [Validate an App Login Biometric Validation](/resources/validate-an-app-login-biometric-validation) API
3. Upon successful validation, an AppLogin object is generated with `type: faceLiveness`
