---
id: retrieve-a-phone-validation
title: Retrieve a Phone Validation
description: Retrieve a specific phone validation record using its unique identifier
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve a Phone Validation

**GET** `https://api.verifik.co/v2/phone-validations/{id}`

This service retrieves a specific phone validation record using its unique identifier. The response includes all the details about the phone validation process, including status, OTP information, and associated project data. This endpoint is useful for checking the current status of a phone validation or retrieving details for audit purposes.

## Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

## Path Parameters

| Name | Type   | Description                                                      |
| ---- | ------ | ---------------------------------------------------------------- |
| `id` | string | The unique identifier of the Phone Validation you want to retrieve. |

## Query Parameters

| Name          | Type   | Description                                                                                    |
| ------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `populates[]` | string | Optional. A list of related objects to include in the response. Available options: `client`, `project`, `projectFlow`. |

## Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/phone-validations/phone_validation_123456789',
  params: {
    'populates[]': ['client', 'project', 'projectFlow']
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

conn.request("GET", "/v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/phone-validations/phone_validation_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'query' => [
    'populates[]' => ['client', 'project', 'projectFlow']
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/phone-validations/phone_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow")! as URL,
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

## Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "success": true,
  "data": {
    "_id": "phone_validation_123456789",
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
    "projectFlow": {
      "_id": "flow_123456789",
      "name": "Example Flow",
      "type": "onboarding"
    },
    "status": "validated",
    "countryCode": "+1",
    "phone": "1234567890",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "attempts": 1,
    "maxAttempts": 3,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:32:00Z",
    "validatedAt": "2024-01-15T10:32:00Z"
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
  "success": false,
  "error": "Phone validation not found",
  "code": "PHONE_VALIDATION_NOT_FOUND"
}
```

  </TabItem>
</Tabs>

## Features

- **Retrieval by ID**: Get a specific phone validation using its unique ID
- **Complete Information**: Includes all details of the validation process
- **Related Data**: Client, project and project flow information
- **Detailed Status**: Current status, attempts, limits and timestamps
- **Configuration**: Redirect URLs, webhooks and security configurations
- **Country Codes**: Complete country code and number information
- **Multiple Languages**: Support for JavaScript, Python, PHP and Swift
- **Error Handling**: Detailed error responses for different scenarios
