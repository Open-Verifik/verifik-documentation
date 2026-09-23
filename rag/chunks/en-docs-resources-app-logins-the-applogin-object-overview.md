---
id: "en-docs-resources-app-logins-the-applogin-object-overview"
title: "The App Login Object — Overview"
sourcePath: "docs/resources/app-logins/the-applogin-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/app-logins/the-applogin-object"
url: "https://docs.verifik.co/resources/app-logins/the-applogin-object"
---

# The App Login Object

## Overview

The App Login object represents user authentication sessions in Verifik. It tracks login attempts and links them to specific validation methods (email, phone, or biometric).

### Attributes

#### `client`
**Type:** string (reference id)  
**Required:** Yes

Client ID associated with this login request.

#### `name`
**Type:** String  
**Required:** No

Optional name for the login session.

#### `status`
**Type:** String  
**Required:** No

Status of the login request (e.g., pending, completed, failed).

#### `project`
**Type:** string (reference id)  
**Required:** Yes

Project ID linked to this login request.

#### `projectFlow`
**Type:** string (reference id)  
**Required:** Yes

ProjectFlow ID that defines the flow configuration for this login.

#### `type`
**Type:** String  
**Required:** Yes

Type of login being attempted. Must be one of:
* `email`
* `phone`
* `faceLiveness`

#### `emailValidation`
**Type:** string (reference id)  
**Required:** No

Reference to the EmailValidation object if an email-based login is used.

#### `phoneValidation`
**Type:** string (reference id)  
**Required:** No

Reference to the PhoneValidation object if a phone-based login is used.

#### `biometricValidation`
**Type:** string (reference id)  
**Required:** No

Reference to the BiometricValidation object if a biometric login is used.

#### `face`
**Type:** string (reference id)  
**Required:** No

Reference to the IdentityImage object, used for facial recognition or liveness checks.

#### `accessControlLog`
**Type:** string (reference id)  
**Required:** No

Reference to the AccessControlLog object, used to log access control actions related to this login.
