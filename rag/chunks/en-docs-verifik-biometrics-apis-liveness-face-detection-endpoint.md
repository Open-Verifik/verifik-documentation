---
id: "en-docs-verifik-biometrics-apis-liveness-face-detection-endpoint"
title: "Face Detection — Endpoint"
sourcePath: "docs/verifik-biometrics-apis/liveness/face-detection.mdx"
locale: "en"
category: "verifik-biometrics-apis"
tags:
  - "biometrics"
  - "face-recognition"
  - "verifik-biometrics-apis"
endpoint: "/v2/face-recognition/detect"
sourceAnchor: "Endpoint"
slug: "/verifik-biometrics-apis/liveness/face-detection"
url: "https://docs.verifik.co/verifik-biometrics-apis/liveness/face-detection"
---

# Face Detection
**API path(s):** /v2/face-recognition/detect

## Endpoint

Detects and extracts faces from images. This endpoint can be used to identify and locate faces in images before performing liveness detection or face comparison.

### Endpoint

```
POST https://api.verifik.co/v2/face-recognition/detect
```

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | string | Yes | Base64 image data (data URI or raw base64). If an `https` URL is provided, it will be downloaded and converted internally. |
| `return_landmarks` | boolean | No | Whether to return facial landmarks. Default: `false`. |
| `return_attributes` | boolean | No | Whether to return face attributes (age, gender, etc.). Default: `false`. |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/face-recognition/detect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      image: "",
      return_landmarks: true,
      return_attributes: true
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "",
    "return_landmarks" => true,
    "return_attributes" => true
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/face-recognition/detect"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "image": "",
    "return_landmarks": True,
    "return_attributes": True
}
r = requests.post(url, json=payload, headers=headers)
print(r.json())
```
