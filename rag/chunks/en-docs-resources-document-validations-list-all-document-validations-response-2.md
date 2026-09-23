---
id: "en-docs-resources-document-validations-list-all-document-validations-response-2"
title: "List All Document Validations — Response"
sourcePath: "docs/resources/document-validations/list-all-document-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations"
sourceAnchor: "Response"
slug: "/resources/list-all-document-validations"
url: "https://docs.verifik.co/resources/list-all-document-validations"
---

# List All Document Validations
**API path(s):** /v2/document-validations

## Response

```json
{
  "data": [
    {
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
      "documentType": "driver_license",
      "frontUrl": "https://example.com/front",
      "project": "project_123456789",
      "projectFlow": {
        "_id": "flow_123456789",
        "name": "Example Flow",
        "type": "onboarding"
      },
      "status": "ACTIVE",
      "updatedAt": "2024-01-15T10:32:00Z",
      "validationResults": {
        "documentAuthenticity": "passed",
        "dataConsistency": "passed"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 10,
    "total": 1,
    "pages": 1
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  
  

```json
{
  "error": "Invalid query parameters",
  "message": "INVALID_PARAMETERS"
}
```

```

### Features

- **Complete Listing**: Retrieve all document validations from your account
- **Advanced Pagination**: Control page and items per page
- **Complete Filtering**: Filter by status, document type, validation method, and more
- **Data Population**: Include related information like application registrations and project flows
- **Multiple States**: Filter by different validation states
- **Document Types**: Support for driver's licenses, passports, national IDs
- **Validation Methods**: OCR, manual, scanning, and more
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Detailed Information**: Includes document data, validation results, and timestamps
