---
id: list-all-project-flows
title: List All Project Flows
description: Retrieve a list of all project flows with optional filtering and pagination
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List All Project Flows

## Endpoint

```
GET https://api.verifik.co/v2/project-flows
```

This endpoint allows you to retrieve a list of all project flows within your Verifik account. You can filter by project, type, status, and other parameters.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Query Parameters

| Name          | Type    | Description                                                                                    |
| ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| `page`        | number  | Page number for pagination (default: 1)                                                       |
| `limit`       | number  | Number of records per page (default: 10, max: 100)                                            |
| `project`     | string  | Filter by specific project ID                                                                  |
| `type`        | string  | Filter by flow type: `login`, `onboarding`                                                   |
| `status`      | string  | Filter by status: `draft`, `active`, `paused`                                                |
| `populates[]` | string  | Optional array of related data to include. Available options: `project`, `client`.             |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/project-flows',
  params: {
    page: 1,
    limit: 10,
    type: 'onboarding',
    status: 'active',
    'populates[]': ['project']
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

conn.request("GET", "/v2/project-flows?page=1&limit=10&type=onboarding&status=active&populates[]=project", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/project-flows', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'query' => [
    'page' => 1,
    'limit' => 10,
    'type' => 'onboarding',
    'status' => 'active',
    'populates[]' => ['project']
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/project-flows?page=1&limit=10&type=onboarding&status=active&populates[]=project")! as URL,
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
      "_id": "project_flow_123456789",
      "project": {
        "_id": "project_123456789",
        "name": "Example Project",
        "status": "active"
      },
      "type": "onboarding",
      "status": "active",
      "version": 1,
      "name": "Complete Onboarding Flow",
      "description": "Full onboarding flow with email, phone, and biometric verification",
      "client": "client_123456789",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
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

- **Complete Listing**: Retrieve all project flows from your account
- **Pagination**: Support for pagination with page and limit control
- **Advanced Filtering**: Filter by project, type, and status
- **Data Population**: Include related information such as project data
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Detailed Information**: Includes status, version, and flow configurations
