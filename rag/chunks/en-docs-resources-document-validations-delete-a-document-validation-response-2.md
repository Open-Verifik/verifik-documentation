---
id: "en-docs-resources-document-validations-delete-a-document-validation-response-2"
title: "Delete a Document Validation — Response"
sourcePath: "docs/resources/document-validations/delete-a-document-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations/{id}"
sourceAnchor: "Response"
slug: "/resources/delete-a-document-validation"
url: "https://docs.verifik.co/resources/delete-a-document-validation"
---

# Delete a Document Validation
**API path(s):** /v2/document-validations/{id}

## Response

```json
{
  "success": true,
  "message": "Document validation deleted successfully",
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

  
  

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```

### Important Notes

* **Permanent Deletion**: This action cannot be undone. All document validation data will be permanently removed.
* **Associated Data**: Deleting a document validation may affect related app registrations or project flows.
* **Backup**: Consider backing up important data before deletion.
```

### Important Notes

* **Permanent Deletion**: This action cannot be undone. All document validation data will be permanently removed.
* **Associated Data**: Deleting a document validation may affect related app registrations or project flows.
* **Backup**: Consider backing up important data before deletion.

### Features

- **Permanent Deletion**: Completely removes the document validation record
- **ID Identification**: Uses unique ID to identify the validation to delete
- **Success Confirmation**: Confirmation response when deletion is successful
- **Error Handling**: Error responses for not found and unauthorized cases
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Security**: Requires authentication with access token
- **Warnings**: Important notes about the permanent nature of deletion
