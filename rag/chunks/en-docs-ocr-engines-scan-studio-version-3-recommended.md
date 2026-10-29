---
id: "en-docs-ocr-engines-scan-studio-version-3-recommended"
title: "Scan Studio — Version 3 (Recommended)"
sourcePath: "docs/ocr-engines/scan-studio.mdx"
locale: "en"
category: "ocr-engines"
tags:
  - "ocr-engines"
endpoint: "/api/ocr/scan-studio"
sourceAnchor: "Version 3 (Recommended)"
slug: "/ocr-engines/scan-studio"
url: "https://docs.verifik.co/ocr-engines/scan-studio"
---

# Scan Studio
**API path(s):** /api/ocr/scan-studio

## Version 3 (Recommended)

:::warning Deprecation Notice
**Version 2 of the Scan Studio API is deprecated and will be removed on November 25, 2026.** Please migrate to the new v3 endpoint for continued support and enhanced features.
:::

# Scan Studio

## Version 3 (Recommended)

### Endpoint

```
https://api.verifik.co/v3/ocr/scan-studio
```

The Scan Studio v3 offers enhanced OCR capabilities with improved accuracy and additional features. This version provides more detailed field extraction with normalized values and enhanced confidence scoring.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `image`        | string  | Yes      | Image in Base64 encoded format or a URL where the image is hosted. |
| `documentType` | string  | Yes      | The document type you need to scan information from. Supported document types include: `CC`, `RUT`, `PA`, `ENSAPA`, `DNI`, `CCVE`, `RIFVE`, `TLCC`. |

### Request

  

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "image": "/9j/4AAQSkZJRgABAQEASA....AAD/4gIoS=",
  "documentType": "CCVE"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v3/ocr/scan-studio',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJ0w1splt4Cw'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

  
  

```php
 'application/json',
  'Authorization' => '••••••'
];
$body = '{
  "image": "/9j/4AAQSkZJRgABAQEA...xbjqiSXFqrqWSutTpCVOELMoqFhH/2Q==",
  "documentType": "CCVE"
}';
$request = new Request('POST', 'https://api.verifik.co/v3/ocr/scan-studio', $headers, $body);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();
```
