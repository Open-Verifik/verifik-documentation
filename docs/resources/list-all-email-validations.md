---
id: list-all-email-validations
title: List All Email Validations
description: Retrieve a list of all email validations with optional filtering and pagination
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List All Email Validations

## Endpoint

```
GET https://api.verifik.co/v2/email-validations
```

This service retrieves a list of all email validations with optional filtering and pagination. You can filter by project, status, type, and other parameters to find specific email validations.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Query Parameters

| Name          | Type    | Description                                                                                    |
| ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `page`        | number  | Page number for pagination (default: 1)                                                       |
| `limit`       | number  | Number of records per page (default: 10, max: 100)                                            |
| `project`     | string  | Filter by project ID                                                                           |
| `status`      | string  | Filter by status: `new`, `sent`, `validated`, `expired`, `failed`                            |
| `type`        | string  | Filter by type: `validation`, `login`, `onboarding`, `oneTimeLink`                           |
| `email`       | string  | Filter by email address                                                                        |
| `populates[]` | string  | Optional array of related data to include. Available options: `client`, `project`, `projectFlow`. |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/email-validations',
  params: {
    page: 1,
    limit: 10,
    status: 'validated',
    type: 'validation',
    'populates[]': ['client', 'project']
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

conn.request("GET", "/v2/email-validations?page=1&limit=10&status=validated&type=validation&populates[]=client&populates[]=project", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/email-validations', [
  'headers' => [
    'Content-Type': 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'query' => [
    'page' => 1,
    'limit' => 10,
    'status' => 'validated',
    'type' => 'validation',
    'populates[]' => ['client', 'project']
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/email-validations?page=1&limit=10&status=validated&type=validation&populates[]=client&populates[]=project")! as URL,
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
      "_id": "email_validation_123456789",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "project": {
        "_id": "project_123456789",
        "name": "Example Project",
        "description": "Example project description"
      },
      "status": "validated",
      "email": "user@example.com",
      "type": "validation",
      "validationMethod": "verificationCode",
      "expiresAt": "2024-01-15T11:30:00Z",
      "attempts": 1,
      "maxAttempts": 3,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z",
      "validatedAt": "2024-01-15T10:32:00Z"
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

### Characteristics

- **Complete Listing**: Retrieves all email validations from your account
- **Pagination**: Support for pagination with page and limit control
- **Advanced Filtering**: Filter by project, status, type and email address
- **Data Population**: Includes related information such as client and project data
- **Multiple States**: Filter by status (new, sent, validated, expired, failed)
- **Multiple Languages**: Support for JavaScript, Python, PHP and Swift
- **Detailed Information**: Includes attempts, limits and validation timestamps
