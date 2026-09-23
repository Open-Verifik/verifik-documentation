---
id: "en-docs-resources-document-validations-document-validations-api-endpoints-2"
title: "Document Validations — API Endpoints"
sourcePath: "docs/resources/document-validations/document-validations.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoints:
  - "/v2/document-validations"
  - "/v2/document-validations/{validationid}"
sourceAnchor: "API Endpoints"
slug: "/resources/document-validations"
url: "https://docs.verifik.co/resources/document-validations"
---

# Document Validations
**API path(s):** /v2/document-validations, /v2/document-validations/{validationid}

## API Endpoints

#### Create a Document Validation

`POST https://api.verifik.co/v2/document-validations`

#### List All Document Validations

`GET https://api.verifik.co/v2/document-validations`

#### Retrieve a Document Validation

`GET https://api.verifik.co/v2/document-validations/{validationId}`

#### Update a Document Validation

`PUT https://api.verifik.co/v2/document-validations/{validationId}`

#### Delete a Document Validation

`DELETE https://api.verifik.co/v2/document-validations/{validationId}`

### Document Validation Object Structure

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

### Use Cases

* Identity Verification - Verify user identity through document validation
* Compliance - Meet regulatory requirements for document verification
* Fraud Prevention - Detect fraudulent or manipulated documents
* Data Extraction - Extract structured data from identity documents
}
```

## Use Cases

- **Identity Verification**: Verify user identity through document validation
- **Compliance**: Meet regulatory requirements for document verification
- **Fraud Prevention**: Detect fraudulent or manipulated documents
- **Data Extraction**: Extract structured data from identity documents
