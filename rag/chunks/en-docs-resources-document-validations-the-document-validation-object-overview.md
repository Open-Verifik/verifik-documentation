---
id: "en-docs-resources-document-validations-the-document-validation-object-overview"
title: "The Document Validation Object — Overview"
sourcePath: "docs/resources/document-validations/the-document-validation-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/the-document-validation-object"
url: "https://docs.verifik.co/resources/the-document-validation-object"
---

# The Document Validation Object

## Overview

The Document Validation object represents the process of verifying documents within your Verifik projects. This object contains all the information needed to track and manage document verification requests, including document scanning, OCR processing, and validation results.

### Attributes

#### `appRegistration`

Type: string (reference id)  
Required: No

Reference to the AppRegistration object associated with this document validation.

#### `client`

Type: string (reference id)  
Required: No

Reference to the Client object associated with this document validation.

#### `project`

Type: string (reference id)  
Required: No

Reference to the Project object associated with this document validation.

#### `projectFlow`

Type: string (reference id)  
Required: No

Reference to the ProjectFlow object associated with this document validation.

#### `status`

Type: String  
Required: Yes

The current status of the document validation process. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"pending"` - Document is being processed
* `"completed"` - Document validation completed successfully
* `"failed"` - Document validation failed
* `"expired"` - Validation session has expired

#### `documentType`

Type: String  
Required: Yes

The type of document being validated:

* `"id"` - National ID card
* `"passport"` - Passport
* `"driver_license"` - Driver's license
* `"other"` - Other document type

#### `country`

Type: String  
Required: Yes

The country code where the document was issued (e.g., "US", "CO", "MX").

#### `documentData`

Type: Object  
Required: No

Contains the extracted document data:

* `firstName` - First name from document
* `lastName` - Last name from document
* `middleName` - Middle name from document
* `documentNumber` - Document number
* `birthDate` - Birth date
* `expirationDate` - Document expiration date
* `issueDate` - Document issue date
* `gender` - Gender
* `nationality` - Nationality

#### `ocrResults`

Type: Object  
Required: No

Contains OCR processing results:

* `confidence` - OCR confidence score
* `rawText` - Raw extracted text
* `fields` - Structured field extraction results

#### `validationResults`

Type: Object  
Required: No

Contains validation results:

* `documentAuthenticity` - Document authenticity check result
* `dataConsistency` - Data consistency check result
* `livenessDetection` - Liveness detection result
* `antiSpoofing` - Anti-spoofing detection result

#### `images`

Type: Object  
Required: No

Contains document images:

* `frontImage` - Front side image (base64)
* `backImage` - Back side image (base64)
* `selfieImage` - Selfie image for comparison

#### `riskScore`

Type: Number  
Required: No

Risk assessment score for the validation.

#### `age`

Type: String  
Required: No

Calculated age from birth date.

#### `backUrl`

Type: String  
Required: No

URL to redirect back to after validation.

#### `frontUrl`

Type: String  
Required: No

URL to redirect to front after validation.

#### `createdAt`

Type: Date  
Required: Yes

Timestamp when the document validation was created.

#### `updatedAt`

Type: Date  
Required: Yes

Timestamp when the document validation was last updated.

#### `completedAt`

Type: Date  
Required: No

Timestamp when the document validation was completed successfully.
