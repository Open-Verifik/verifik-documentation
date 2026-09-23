---
id: "en-docs-resources-document-validations-update-a-document-validation"
title: "Update a Document Validation — Endpoint"
sourcePath: "docs/resources/document-validations/update-a-document-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "document-validations"
  - "resources"
endpoint: "/v2/document-validations/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/update-a-document-validation"
url: "https://docs.verifik.co/resources/update-a-document-validation"
---

# Update a Document Validation
**API path(s):** /v2/document-validations/{id}

## Endpoint

**PUT** `https://api.verifik.co/v2/document-validations/{id}`

Method for updating an existing Document Validation. To make the service work, the `_id` parameter is required, which is generated when a Document Validation is created correctly.

:::warning
The Document Validation update functionality is currently not implemented in the system. This endpoint will return a "method_not_set" error if called.
:::

### Headers

#### Content-Type
Type: String  
Required: Yes

`application/json`

#### Authorization
Type: String  
Required: Yes

`Bearer {YOUR_ACCESS_TOKEN}`

### Path Parameters

#### `id`
Type: string  
Required: Yes

The unique identifier of the document validation to update.

### Body Parameters

#### `status`
Type: string  
Required: No

Update the validation status

#### `documentData`
Type: object  
Required: No

Update document data fields

#### `riskScore`

**Type:** number  
**Required:** No

Update risk assessment score

### Important Notes

* **Update Not Available**: The Document Validation update functionality is currently not implemented in the system.
* **Alternative Methods**: To modify document validation data, you may need to:
  * Create a new Document Validation record
  * Use the name validation endpoint (`PUT /document-validations/{id}/validate`) for specific validation updates
  * Contact support for manual updates if required

### Response Example

```json
{
  "error": "Method not allowed",
  "message": "method_not_set"
}
```

### Important Notes

* **Update Not Available**: The Document Validation update functionality is currently not implemented in the system.
* **Alternative Methods**: To modify document validation data, you may need to:
  * Create a new Document Validation record
  * Use the name validation endpoint (`PUT /document-validations/{id}/validate`) for specific validation updates
  * Contact support for manual updates if required
- **Alternative Methods**: Suggestions for update alternatives
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Appropriate error response for unimplemented method
- **Complete Documentation**: Detailed information about limitations and alternatives
