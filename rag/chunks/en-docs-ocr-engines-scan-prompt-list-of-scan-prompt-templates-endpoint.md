---
id: "en-docs-ocr-engines-scan-prompt-list-of-scan-prompt-templates-endpoint"
title: "List of Scan Prompt Templates — Endpoint"
sourcePath: "docs/ocr-engines/scan-prompt/list-of-scan-prompt-templates.mdx"
locale: "en"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoints:
  - "/api/ocr/scan-prompt/templates"
  - "/v2/ocr/scan-prompt/templates"
sourceAnchor: "Endpoint"
slug: "/ocr-engines/scan-prompt/list-of-scan-prompt-templates"
url: "https://docs.verifik.co/ocr-engines/scan-prompt/list-of-scan-prompt-templates"
---

# List of Scan Prompt Templates
**API path(s):** /api/ocr/scan-prompt/templates, /v2/ocr/scan-prompt/templates

## Endpoint

Retrieve a list of available scan prompt templates. Super admins can see both system and client templates, while clients can only see their own templates and system templates.

### Endpoint

```
GET https://api.verifik.co/v2/ocr/scan-prompt/templates
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Query Parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `documentType` | string | No | Filter templates by document type (e.g., "CC", "DNI") |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ocr/scan-prompt/templates',
  params: {
    documentType: 'CC' // Optional filter
  },
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  
  

```python

url = "https://api.verifik.co/v2/ocr/scan-prompt/templates"
headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
}
params = {
    'documentType': 'CC'  # Optional filter
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
```

### Response

  

```json
{
  "data": [
    {
      "_id": "template_id_123",
      "name": "CC - Escaneo de cédulas de Colombia",
      "description": "Template for scanning Colombian ID cards",
      "documentTypes": ["CC"],
      "fields": ["firstName", "lastName", "documentNumber", "dateOfBirth"],
      "prompt": "From the provided image of the legal document, extract the fields {{fields}} in {{format}} format.",
      "format": "json",
      "requiresBackSide": true,
      "system": true,
      "active": true,
      "version": 1
    },
    {
      "_id": "template_id_456",
      "name": "Custom CC Template",
      "description": "Custom template for CC documents",
      "documentTypes": ["CC"],
      "fields": ["firstName", "lastName", "documentNumber"],
      "prompt": "Extract these fields from the document: {{fields}} in {{format}} format.",
      "format": "json",
      "requiresBackSide": false,
      "system": false,
      "client": "client_id_789",
      "active": true,
      "version": 1
    }
  ]
}
```

  
  

```json
{
  "error": "Unauthorized",
  "message": "UNAUTHORIZED"
}
```
