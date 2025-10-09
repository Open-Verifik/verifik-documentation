---
id: validate-an-app-login-biometric-validation
title: Validate an App Login Biometric Validation
description: Process biometric data submitted by users to verify their identity and complete the validation process
slug: /resources/validate-an-app-login-biometric-validation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Validate an App Login Biometric Validation

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/validate
```

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection. This endpoint processes the biometric data submitted by users to verify their identity and complete the validation process. This is typically used after a user has completed their liveness detection session.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
The JWT Token you should use when validating biometric validations must contain a valid `livenessSession` token that was provided during the creation of the biometric validation.

The token provided in this response is the token you can pass to your own application for signing into your application. In the no-code solution, this token is appended to the `redirectUrl` of your `projectFlow`.

E.g., `https://verifik.co?token={token}`
:::

### Parameters

| Name    | Type   | Required | Description                                                      |
| ------- | ------ | -------- | ---------------------------------------------------------------- |
| `image` | string | Yes      | Base64 encoded image of the user's face for biometric validation. |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/biometric-validations/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  data: {
    image: 'base64_encoded_image_data'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "image": "base64_encoded_image_data"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("POST", "/v2/biometric-validations/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/biometric-validations/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'json' => [
    'image' => 'base64_encoded_image_data'
  ]
]);

echo $response->getBody();
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
import Foundation

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer <your_token>"
]

let parameters = [
  "image": "base64_encoded_image_data"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/biometric-validations/validate")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData as Data

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()
```

  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "success": true,
  "data": {
    "_id": "biometric_validation_123456789",
    "status": "completed",
    "verificationResults": {
      "livenessDetection": "passed",
      "identityMatch": "passed",
      "qualityScore": 0.95,
      "antiSpoofing": "passed"
    },
    "biometricData": {
      "faceImage": "base64_encoded_image",
      "template": "biometric_template_data",
      "quality": "good",
      "livenessScore": 0.95
    },
    "riskScore": 0.05,
    "completedAt": "2024-01-15T10:32:00Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

  </TabItem>
  <TabItem value="400" label="400">

```json
{
  "error": "Invalid biometric data",
  "message": "INVALID_BIOMETRIC_DATA"
}
```

  </TabItem>
  <TabItem value="400-2" label="400 (Liveness Failed)">

```json
{
  "error": "Liveness detection failed",
  "message": "LIVENESS_DETECTION_FAILED"
}
```

  </TabItem>
  <TabItem value="400-3" label="400 (Identity Failed)">

```json
{
  "error": "Identity verification failed",
  "message": "IDENTITY_VERIFICATION_FAILED"
}
```

  </TabItem>
</Tabs>

### Features

- **Biometric Verification**: Process facial recognition and liveness detection
- **Quality Assessment**: Analyze image quality and biometric template quality
- **Anti-Spoofing Protection**: Advanced security against fake biometric attempts
- **Risk Scoring**: Calculate risk scores for authentication decisions
- **Authentication Token**: Generate secure tokens for application access
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Comprehensive Results**: Detailed verification results and biometric data
- **Security Features**: Liveness session validation and secure token generation