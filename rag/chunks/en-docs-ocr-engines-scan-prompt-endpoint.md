---
id: "en-docs-ocr-engines-scan-prompt-endpoint"
title: "Scan Prompt — Endpoint"
sourcePath: "docs/ocr-engines/scan-prompt.mdx"
locale: "en"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoint: "/v2/ocr/scan-prompt"
sourceAnchor: "Endpoint"
slug: "/ocr-engines/scan-prompt"
url: "https://docs.verifik.co/ocr-engines/scan-prompt"
---

# Scan Prompt
**API path(s):** /v2/ocr/scan-prompt

## Endpoint

```
https://api.verifik.co/v2/ocr/scan-prompt
```

Scan Prompt Document Scanning with AI Integration is a powerful tool designed to streamline the extraction of text from legal documents, supporting your Know Your Customer (KYC) process. This service harnesses advanced AI to automatically detect document types and utilizes proprietary technology for accurate data extraction.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | string | Yes | Image in Base64 encoded format or a URL where the image is hosted. |
| `cropFace` | boolean | No | If you want to crop the face out of the document, pass this as `true`. |
| `documentType` | string | No | You could specify the documentType so the AI doesn't have to guess what document type are we extracting. |

### Request

  

```javascript

const { data } = await axios.post("https://api.verifik.co/v2/ocr/scan-prompt", {
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  cropFace: true,
  documentType: "DNI"
}, {
  headers: { 
    "Content-Type": "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ocr/scan-prompt"
headers = {"Content-Type": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
payload = {
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "cropFace": True,
    "documentType": "DNI"
}
r = requests.post(url, json=payload, headers=headers)
print(r.json())
```
