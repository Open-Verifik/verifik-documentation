---
id: "en-docs-ocr-engines-scan-studio-headers-6"
title: "Scan Studio — Headers"
sourcePath: "docs/ocr-engines/scan-studio.mdx"
locale: "en"
category: "ocr-engines"
tags:
  - "ocr-engines"
endpoint: "/api/ocr/scan-studio"
sourceAnchor: "Headers"
slug: "/ocr-engines/scan-studio"
url: "https://docs.verifik.co/ocr-engines/scan-studio"
---

# Scan Studio
**API path(s):** /api/ocr/scan-studio

## Headers

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
  "documentType": "CC"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/ocr/scan-studio',
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
  "documentType": "CC"
}';
$request = new Request('POST', 'https://api.verifik.co/v2/ocr/scan-studio', $headers, $body);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();
```
