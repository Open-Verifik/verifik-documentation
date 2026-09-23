---
id: "en-docs-resources-document-validations-document-validations-overview"
title: "Document Validations — Overview"
sourcePath: "docs/resources/document-validations/document-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations"
  - "/v2/document-validations/{validationid}"
sourceAnchor: "Overview"
slug: "/resources/document-validations"
url: "https://docs.verifik.co/resources/document-validations"
---

# Document Validations
**API path(s):** /v2/document-validations, /v2/document-validations/{validationid}

## Overview

Document Validations are the core verification system within Verifik that processes and validates user identity documents during the app registration process. Think of them as the quality control system that ensures documents are authentic, readable, and match the user's claimed identity.

### How Document Validations Work

Every Document Validation represents a single document verification session that processes user-submitted identity documents. When someone uploads or scans their ID, passport, or license, Verifik creates a Document Validation to analyze the document, extract information, and verify its authenticity.

Currently, Document Validations support these types:

* **validation** - Standard document verification process
* **login** - Document verification for login flows
* **signup** - Document verification for new user registration
* **ocr** - Optical character recognition processing
* **demo** - Demonstration and testing purposes

### What Document Validations Track

Document Validations are comprehensive verification systems that process every aspect of identity documents:

#### Document Information

* Document type and category (ID, passport, license)
* Document number and identification details
* Country and nationality verification
* Age and gender information extraction

#### Verification Process

* Input method (camera, file upload, or not set)
* Document quality and readability assessment
* OCR text extraction and validation
* Security feature verification

#### Validation Results

* Document authenticity verification
* Information accuracy validation
* Security feature detection
* Risk assessment and scoring
