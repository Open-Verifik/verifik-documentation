---
id: document-validations
title: Document Validations
description: Core verification system that processes and validates user identity documents
---

# Document Validations

Document Validations are the core verification system within Verifik that processes and validates user identity documents during the app registration process. Think of them as the quality control system that ensures documents are authentic, readable, and match the user's claimed identity.

## How Document Validations Work

Every Document Validation represents a single document verification session that processes user-submitted identity documents. When someone uploads or scans their ID, passport, or license, Verifik creates a Document Validation to analyze the document, extract information, and verify its authenticity.

Currently, Document Validations support these types:

* **validation** - Standard document verification process
* **login** - Document verification for login flows
* **signup** - Document verification for new user registration
* **ocr** - Optical character recognition processing
* **demo** - Demonstration and testing purposes

## What Document Validations Track

Document Validations are comprehensive verification systems that process every aspect of identity documents:

### Document Information:
* Document type and category (ID, passport, license)
* Document number and identification details
* Country and nationality verification
* Age and gender information extraction

### Verification Process:
* Input method (camera, file upload, or not set)
* Document quality and readability assessment
* OCR text extraction and validation
* Security feature verification

### Validation Results:
* Document authenticity verification
* Information accuracy validation
* Security feature detection
* Risk assessment and scoring

## API Endpoints

### Create a Document Validation
```http
POST https://api.verifik.co/v2/document-validations
```

### List All Document Validations
```http
GET https://api.verifik.co/v2/document-validations
```

### Retrieve a Document Validation
```http
GET https://api.verifik.co/v2/document-validations/{validationId}
```

### Update a Document Validation
```http
PUT https://api.verifik.co/v2/document-validations/{validationId}
```

### Delete a Document Validation
```http
DELETE https://api.verifik.co/v2/document-validations/{validationId}
```

## Document Validation Object Structure

```json
{
  "id": "validation_123456789",
  "documentType": "passport",
  "status": "completed",
  "documentInfo": {
    "documentNumber": "123456789",
    "country": "US",
    "nationality": "American",
    "firstName": "John",
    "lastName": "Doe",
    "dateOfBirth": "1990-01-15",
    "gender": "Male"
  },
  "verificationResults": {
    "authenticity": "passed",
    "quality": "good",
    "ocrAccuracy": 0.98,
    "securityFeatures": "detected"
  },
  "riskScore": 0.15,
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

## Use Cases

- **Identity Verification**: Verify user identity through document validation
- **Compliance**: Meet regulatory requirements for document verification
- **Fraud Prevention**: Detect fraudulent or manipulated documents
- **Data Extraction**: Extract structured data from identity documents
