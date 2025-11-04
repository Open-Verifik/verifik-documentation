---
id: list-all-document-liveness
title: List All Document Liveness Validations
description: Retrieve a list of all document liveness validations with optional filtering and pagination
slug: /resources/list-all-document-liveness
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List All Document Liveness Validations

## Endpoint

```
GET https://api.verifik.co/v2/document-liveness
```

With this service, you can retrieve all document liveness validations that you have processed.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name          | Type    | Description                                                                                    |
| ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `page`        | number  | Page number for pagination (default: 1)                                                       |
| `limit`       | number  | Number of records per page (default: 10, maximum: 100)                                            |
| `status`      | string  | Filter by status: `new`, `processing`, `completed`, `failed`                                  |
| `populates[]` | string  | Optional array of related data to include. Available options: `client`, `appRegistration`.    |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/document-liveness',
  params: {
    page: 1,
    limit: 10,
    status: 'completed',
    'populates[]': ['client', 'appRegistration']
  },
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

conn.request("GET", "/v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appRegistration", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/document-liveness', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'query' => [
    'page' => 1,
    'limit' => 10,
    'status' => 'completed',
    'populates[]' => ['client', 'appRegistration']
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/document-liveness?page=1&limit=10&status=completed&populates[]=client&populates[]=appRegistration")! as URL,
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
  "data": [
    {
      "_id": "document_liveness_123456789",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "appRegistration": {
        "_id": "app_registration_123456789",
        "fullName": "John Doe",
        "email": "user@example.com",
        "status": "completed"
      },
      "imageSaved": true,
      "imageUrl": "https://cdn.verifik.co/images/document_123456789.jpg",
      "status": "completed",
      "validationResults": {
        "screenReplay": {
          "passed": true,
          "score": 0.95
        },
        "printedCopy": {
          "passed": true,
          "score": 0.90
        },
        "portraitSubstitution": {
          "passed": true,
          "score": 0.88
        },
        "digitalManipulation": {
          "passed": true,
          "score": 0.92
        }
      },
      "riskScore": 0.05,
      "confidence": 0.91,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z",
      "completedAt": "2024-01-15T10:32:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  },
  "signature": {
    "dateTime": "April 11, 2023 12:25 PM",
    "message": "Certified by Verifik.co"
  }
}
```

  </TabItem>
  <TabItem value="400" label="400">

```json
{
  "success": false,
  "error": "Invalid query parameters",
  "code": "INVALID_PARAMETERS"
}
```

  </TabItem>
</Tabs>

### Features

- **Complete Listing**: Retrieve all processed document liveness validations
- **Pagination**: Control page and record limit per page
- **Status Filtering**: Filter by status (new, processing, completed, failed)
- **Data Population**: Include client and application registration information
- **Validation Results**: Details of all anti-spoofing validations
- **Confidence Scores**: Detailed scores for each validation type
- **Image Storage**: Information about images saved to CDN
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Detailed Information**: Includes timestamps, risk scores, and configuration
