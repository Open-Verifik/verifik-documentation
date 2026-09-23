---
id: "en-docs-resources-biometric-validations-biometric-validations-overview"
title: "Biometric Validations — Overview"
sourcePath: "docs/resources/biometric-validations/biometric-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoints:
  - "/v2/biometric-validations"
  - "/v2/biometric-validations/{validationid}"
sourceAnchor: "Overview"
slug: "/resources/biometric-validations"
url: "https://docs.verifik.co/resources/biometric-validations"
---

# Biometric Validations
**API path(s):** /v2/biometric-validations, /v2/biometric-validations/{validationid}

## Overview

Biometric Validations are the core verification system within Verifik that processes and validates user biometric data during the authentication and registration process. Think of them as the security checkpoint that ensures users are who they claim to be by verifying their biometric identity through facial recognition and liveness detection.

### How Biometric Validations Work

Every Biometric Validation represents a single biometric verification session that processes user-submitted biometric data. When someone takes a selfie or provides biometric data during signup, login, or account verification, Verifik creates a Biometric Validation to analyze the biometric data and confirm the user's identity.

Currently, Biometric Validations support these types:

* **validation** - Standard biometric verification process
* **login** - Biometric verification for user authentication
* **onboarding** - Biometric verification for new user registration
* **liveness** - Liveness detection and anti-spoofing

### What Biometric Validations Track

Biometric Validations are comprehensive verification systems that process every aspect of biometric verification:

#### Biometric Information:
* Facial recognition and identity matching
* Liveness detection and anti-spoofing
* Quality assessment and image analysis
* User identity verification

#### Verification Process:
* Image capture and processing
* Biometric template generation
* Identity matching and comparison
* Liveness detection and validation

#### Security Features:
* Anti-spoofing and fraud detection
* Quality assessment and validation
* Template matching and comparison
* Risk assessment and scoring
