---
id: "en-docs-resources-document-validations-retrieve-a-document-validation-response-2"
title: "Retrieve a Document Validation — Response"
sourcePath: "docs/resources/document-validations/retrieve-a-document-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations/document_validation_123456789"
  - "/v2/document-validations/{id}"
sourceAnchor: "Response"
slug: "/resources/retrieve-a-document-validation"
url: "https://docs.verifik.co/resources/retrieve-a-document-validation"
---

# Retrieve a Document Validation
**API path(s):** /v2/document-validations/document_validation_123456789, /v2/document-validations/{id}

## Response

```json
{
  "data": {
    "_id": "document_validation_123456789",
    "age": "25",
    "appRegistration": {
      "_id": "reg_123456789",
      "email": "user@example.com",
      "status": "completed"
    },
    "backUrl": "https://example.com/back",
    "client": "client_123456789",
    "country": "US",
    "createdAt": "2024-01-15T10:30:00Z",
    "documentData": {
      "firstName": "John",
      "lastName": "Doe",
      "documentNumber": "123456789",
      "birthDate": "1999-01-15"
    },
    "documentType": "id",
    "frontUrl": "https://example.com/front",
    "images": {
      "frontImage": "base64_encoded_image",
      "backImage": "base64_encoded_image"
    },
    "ocrResults": {
      "confidence": 0.95,
      "rawText": "US DRIVER LICENSE..."
    },
    "project": "project_123456789",
    "projectFlow": {
      "_id": "flow_123456789",
      "name": "Example Flow",
      "type": "onboarding"
    },
    "status": "completed",
    "updatedAt": "2024-01-15T10:32:00Z",
    "validationResults": {
      "documentAuthenticity": "passed",
      "dataConsistency": "passed"
    }
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "error": "Document validation not found",
  "message": "DOCUMENT_VALIDATION_NOT_FOUND"
}
```

```

### Features

- **Retrieval by ID**: Get a specific document validation using its unique ID
- **Complete Information**: Includes all document validation process details
- **Document Data**: Information extracted from the document (name, number, birth date)
- **OCR Results**: Confidence and extracted text from optical character recognition
- **Images**: Front and back document images in base64
- **Related Data**: Application registration and project flow information
- **Validation Results**: Document authenticity and data consistency
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Detailed error responses for different scenarios
