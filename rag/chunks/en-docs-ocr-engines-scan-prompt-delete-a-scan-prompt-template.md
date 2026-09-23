---
id: "en-docs-ocr-engines-scan-prompt-delete-a-scan-prompt-template"
title: "Delete a Scan Prompt Template — Endpoint"
sourcePath: "docs/ocr-engines/scan-prompt/delete-a-scan-prompt-template.mdx"
locale: "en"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoints:
  - "/v2/ocr/scan-prompt/template/:id"
  - "/v2/ocr/scan-prompt/template/template_id_123"
sourceAnchor: "Endpoint"
slug: "/ocr-engines/scan-prompt/delete-a-scan-prompt-template"
url: "https://docs.verifik.co/ocr-engines/scan-prompt/delete-a-scan-prompt-template"
---

# Delete a Scan Prompt Template
**API path(s):** /v2/ocr/scan-prompt/template/:id, /v2/ocr/scan-prompt/template/template_id_123

## Endpoint

Delete a scan prompt template. Clients can only delete their own templates, while super admins can delete any template.

### Endpoint

```
DELETE https://api.verifik.co/v2/ocr/scan-prompt/template/:id
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Path Parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `id` | string | Yes | The unique identifier of the template to delete |

### Request

  

```javascript

const options = {
  method: 'DELETE',
  url: 'https://api.verifik.co/v2/ocr/scan-prompt/template/template_id_123',
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

url = "https://api.verifik.co/v2/ocr/scan-prompt/template/template_id_123"
headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
}

response = requests.delete(url, headers=headers)
print(response.json())
```

### Response

  

```json
{
  "data": {
    "_id": "template_id_123",
    "name": "Custom CC Template",
    "deleted": true
  }
}
```

  
  

```json
{
  "code": "FORBIDDEN",
  "message": "Clients cannot delete system templates"
}
```

  
  

```json
{
  "code": "NOT_FOUND",
  "message": "Template not found"
}
```

## Features

- **Template Deletion**: Permanently delete templates
- **Access Control**: Clients can only delete their own templates
- **System Template Protection**: Clients cannot delete system templates
- **Safe Deletion**: Verify template ownership before deletion
