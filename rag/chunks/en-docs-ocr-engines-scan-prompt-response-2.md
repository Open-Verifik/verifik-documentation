---
id: "en-docs-ocr-engines-scan-prompt-response-2"
title: "Scan Prompt — Response"
sourcePath: "docs/ocr-engines/scan-prompt.mdx"
locale: "en"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoint: "/v2/ocr/scan-prompt"
sourceAnchor: "Response"
slug: "/ocr-engines/scan-prompt"
url: "https://docs.verifik.co/ocr-engines/scan-prompt"
---

# Scan Prompt
**API path(s):** /v2/ocr/scan-prompt

## Response

```json
{
  "id": "xjicp",
  "data": {
    "__v": 0,
    "_id": "64d3ed6aed1c7d7ea391e617",
    "url": "https://cdn.verifik.co/ocr/64404b1f9856cc8cebd762e7/1691610471704-image.jpeg",
    "type": "ocr",
    "client": "64404b1f9856cc8cebd762e7",
    "status": "ACTIVE_BUT_UNVERIFIED",
    "deleted": false,
    "createdAt": "2023-08-09T19:47:54.214Z",
    "updatedAt": "2023-08-09T19:47:54.214Z",
    "requires2FA": false,
    "documentType": "CUSTOM",
    "OCRExtraction": {
      "fullName": "Juan Miguel Rodríguez López",
      "lastName": "Rodríguez López",
      "firstName": "Juan Miguel",
      "documentNumber": "01101101 01100001"
    },
    "documentNumber": "01101101 01100001",
    "imageValidated": false,
    "validationMethod": "SCAN_GPT"
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "August 9, 2023 7:47 PM"
  }
}
```

  
  

```json
{
  "message": "Document not found",
  "code": "DOCUMENT_NOT_FOUND"
}
```

### Features

1. **AI-Powered Document Type Extraction**: Automatically identifies the type of legal document.
2. **Precise data extraction**: Employs custom technology to extract relevant information with high accuracy.
3. **Flexible prompt templates**: Uses pre-designed system prompts for efficient out-of-the-box extraction. Also allows users to create custom templates to refine logic, adjust extracted fields, or enhance the process by adding/removing data points.

### Notes

- Use Base64 encoded images or direct URLs for the `image` parameter.
- The `cropFace` parameter helps improve accuracy by focusing on document content.
- Specify `documentType` when you know the document type for better results.
