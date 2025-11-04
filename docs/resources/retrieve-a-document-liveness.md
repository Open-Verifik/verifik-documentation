---
id: retrieve-a-document-liveness
title: Retrieve a Document Liveness Validation
description: Retrieve a specific document liveness validation record using its unique identifier
slug: /resources/retrieve-a-document-liveness
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve a Document Liveness Validation

## Endpoint

```
GET https://api.verifik.co/v2/document-liveness/{id}
```

With this service, you can retrieve all document liveness validations that you have processed, or if you only want one, you can specify the document liveness record ID and the endpoint will return only the selected validation result.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name | Type   | Description                                                      |
| ---- | ------ | ---------------------------------------------------------------- |
| `id` | string | ID of the Document Liveness record from which you want to retrieve the information. |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/document-liveness/document_liveness_123456789',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
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

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
}

conn.request("GET", "/v2/document-liveness/document_liveness_123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/document-liveness/document_liveness_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/document-liveness/document_liveness_123456789")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

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
    "_id": "document_liveness_123456789",
    "client": "client_123456789",
    "appRegistration": "app_registration_123456789",
    "imageSaved": true,
    "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
    "status": "completed",
    "validationResults": {
      "screenReplay": {
        "passed": true,
        "score": 0.95,
        "details": "No screen replay detected"
      },
      "printedCopy": {
        "passed": true,
        "score": 0.90,
        "details": "No printed copy detected"
      },
      "portraitSubstitution": {
        "passed": true,
        "score": 0.88,
        "details": "No portrait substitution detected"
      },
      "digitalManipulation": {
        "passed": true,
        "score": 0.92,
        "details": "No digital manipulation detected"
      }
    },
    "calibrationSettings": {
      "screenReplayCalibration": "REGULAR",
      "printedCopyCalibration": "REGULAR",
      "portraitSubstitutionCalibration": "REGULAR"
    },
    "validationFlags": {
      "ignoreDocumentCroppedValidation": false,
      "ignoreColourLessValidation": false
    },
    "riskScore": 0.05,
    "confidence": 0.91,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "completedAt": "2024-01-15T10:32:00Z"
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "error": "Document liveness not found",
  "message": "DOCUMENT_LIVENESS_NOT_FOUND"
}
```

  </TabItem>
</Tabs>

### Features

- **Retrieval by ID**: Get a specific liveness validation using its unique ID
- **Detailed Results**: Complete information of all anti-spoofing validations
- **Calibration Settings**: SOFT, REGULAR, and HARD settings used
- **Validation Flags**: Settings to ignore cropping and lack of color
- **Confidence Scores**: Detailed scores for each validation type
- **Image Storage**: Information about images saved to CDN
- **Client Data**: Client and application registration information
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Detailed error responses for different scenarios
