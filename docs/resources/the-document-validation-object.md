---
id: the-document-validation-object
title: The Document Validation Object
description: The Document Validation object represents the process of verifying documents within your Verifik projects
---

# The Document Validation Object

The Document Validation object represents the process of verifying documents within your Verifik projects. This object contains all the information needed to track and manage document verification requests, including document scanning, OCR processing, and validation results.

## Attributes

**`appRegistration`** - ObjectId - Optional

Reference to the AppRegistration object associated with this document validation.

**`client`** - ObjectId - Optional

Reference to the Client object associated with this document validation.

**`project`** - ObjectId - Optional

Reference to the Project object associated with this document validation.

**`projectFlow`** - ObjectId - Optional

Reference to the ProjectFlow object associated with this document validation.

**`status`** - String - Required

The current status of the document validation process. Can be:

* `"new"` - Validation request created but not yet processed (default)
* `"pending"` - Document is being processed
* `"completed"` - Document validation completed successfully
* `"failed"` - Document validation failed
* `"expired"` - Validation session has expired

**`documentType`** - String - Required

The type of document being validated:

* `"id"` - National ID card
* `"passport"` - Passport
* `"driver_license"` - Driver's license
* `"other"` - Other document type

**`country`** - String - Required

The country code where the document was issued (e.g., "US", "CO", "MX").

**`documentData`** - Object - Optional

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

**`ocrResults`** - Object - Optional

Contains OCR processing results:

* `confidence` - OCR confidence score
* `rawText` - Raw extracted text
* `fields` - Structured field extraction results

**`validationResults`** - Object - Optional

Contains validation results:

* `documentAuthenticity` - Document authenticity check result
* `dataConsistency` - Data consistency check result
* `livenessDetection` - Liveness detection result
* `antiSpoofing` - Anti-spoofing detection result

**`images`** - Object - Optional

Contains document images:

* `frontImage` - Front side image (base64)
* `backImage` - Back side image (base64)
* `selfieImage` - Selfie image for comparison

**`riskScore`** - Number - Optional

Risk assessment score for the validation.

**`age`** - String - Optional

Calculated age from birth date.

**`backUrl`** - String - Optional

URL to redirect back to after validation.

**`frontUrl`** - String - Optional

URL to redirect to front after validation.

**`createdAt`** - Date - Required

Timestamp when the document validation was created.

**`updatedAt`** - Date - Required

Timestamp when the document validation was last updated.

**`completedAt`** - Date - Optional

Timestamp when the document validation was completed successfully.

## Example Object

```json
{
  "_id": "document_validation_123456789",
  "appRegistration": "reg_123456789",
  "client": "client_123456789",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
  "status": "completed",
  "documentType": "id",
  "country": "US",
  "documentData": {
    "firstName": "John",
    "lastName": "Doe",
    "middleName": "Michael",
    "documentNumber": "123456789",
    "birthDate": "1990-01-15",
    "expirationDate": "2030-01-15",
    "issueDate": "2020-01-15",
    "gender": "M",
    "nationality": "US"
  },
  "ocrResults": {
    "confidence": 0.95,
    "rawText": "US DRIVER LICENSE...",
    "fields": {
      "firstName": "John",
      "lastName": "Doe"
    }
  },
  "validationResults": {
    "documentAuthenticity": "passed",
    "dataConsistency": "passed",
    "livenessDetection": "passed",
    "antiSpoofing": "passed"
  },
  "images": {
    "frontImage": "base64_encoded_front_image",
    "backImage": "base64_encoded_back_image",
    "selfieImage": "base64_encoded_selfie_image"
  },
  "riskScore": 0.05,
  "age": "34",
  "backUrl": "https://example.com/back",
  "frontUrl": "https://example.com/front",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

### Features

- **Unique Identification**: Each validation has a unique ID for reference
- **Multiple States**: Support for different validation process states
- **Document Types**: Support for IDs, passports, driver's licenses, and others
- **Extracted Data**: Complete information extracted from the document
- **OCR Processing**: Optical character recognition results
- **Validation Results**: Authenticity and consistency verification
- **Images**: Front, back, and selfie images in base64
- **Risk Assessment**: Risk score for the validation
- **Complete Timestamps**: Record of creation, update, and completion
- **Context Information**: Client, project, and project flow data