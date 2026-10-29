---
id: "en-docs-resources-document-validations-the-documentvalidation-object-example-object-2"
title: "The Document Validation Object — Example Object"
sourcePath: "docs/resources/document-validations/the-documentvalidation-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Example Object"
slug: "/resources/document-validations/the-documentvalidation-object"
url: "https://docs.verifik.co/resources/document-validations/the-documentvalidation-object"
---

# The Document Validation Object

## Example Object

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
