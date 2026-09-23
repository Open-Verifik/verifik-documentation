---
id: "en-docs-resources-app-registrations-app-registrations-overview"
title: "App Registrations — Overview"
sourcePath: "docs/resources/app-registrations/app-registrations.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations"
  - "/v2/app-registrations/{id}"
  - "/v2/app-registrations/{id}/resend-link"
  - "/v2/app-registrations/{id}/sync"
sourceAnchor: "Overview"
---

# App Registrations
**API path(s):** /v2/app-registrations, /v2/app-registrations/{id}, /v2/app-registrations/{id}/resend-link, /v2/app-registrations/{id}/sync

## Overview

App Registrations are individual user sessions within Verifik's system that allow people to go through the **onboarding and verification process** you've configured in your Project Flow. Think of them as the actual user journey through your new user registration system.

### How App Registrations Work

Every App Registration represents a single user's attempt to **create an account and verify their identity** using your configured Project Flow. When someone wants to **enroll in your system for the first time**, Verifik creates an App Registration to track their progress through the verification steps.

Currently, App Registrations are designed for:

* **onboarding** - For new users to enroll and create accounts

### What App Registrations Track

App Registrations are comprehensive tracking systems for new user verification processes:

#### User Progress:
* Registration form completion
* Document verification status (ID, passport, license)
* Biometric verification results (selfie + liveness)
* Basic information collection progress
* Custom forms and signatures
* Criminal history verification outcomes

#### Security Monitoring:
* Red flags and security concerns
* Failed validation attempts
* Access control and attempt tracking
* Fraud detection and prevention

### API Endpoints

#### Create an App Registration
```
POST https://api.verifik.co/v2/app-registrations
```

#### List All App Registrations
```
GET https://api.verifik.co/v2/app-registrations
```

#### Retrieve an App Registration
```
GET https://api.verifik.co/v2/app-registrations/{id}
```

#### Sync App Registration Status
```
PUT https://api.verifik.co/v2/app-registrations/{id}/sync
```

#### Resend an App Registration Link
```
POST https://api.verifik.co/v2/app-registrations/{id}/resend-link
```

Use this to mint a fresh hosted SmartEnroll URL when a user left mid-flow. See [Resume an Incomplete Enrollment](/smartenroll/resume).
