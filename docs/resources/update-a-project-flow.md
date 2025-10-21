---
id: update-a-project-flow
title: Update a Project Flow
description: Update an existing project flow configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update a Project Flow

## Endpoint

```
PUT https://api.verifik.co/v2/project-flows/{id}
```

This endpoint allows you to update an existing project flow configuration. You can modify the flow steps, configuration settings, and other flow-specific parameters.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

### Path Parameters

| Name | Type   | Required | Description                                                      |
| ---- | ------ | -------- | ---------------------------------------------------------------- |
| `id` | string | **Yes**  | The unique identifier of the project flow to update.            |

### Body Parameters

| Name            | Type   | Required | Description                                                                                    |
| --------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| `name`          | string | No       | Name of the project flow for identification purposes.                                        |
| `description`   | string | No       | Description of the project flow and its purpose.                                              |
| `status`        | string | No       | Status of the project flow: `draft`, `active`, `paused`                                       |
| `configuration` | object | No       | Configuration object containing flow-specific settings.                                      |
| `steps`         | array  | No       | Array of steps that define the flow sequence.                                                 |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
const axios = require("axios");

const config = {
  method: "put",
  url: "https://api.verifik.co/v2/project-flows/project_flow_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  data: {
    name: "Updated Onboarding Flow",
    description: "Updated description for the onboarding flow",
    status: "active",
    configuration: {
      emailVerification: {
        enabled: true,
        required: true,
        method: "verificationCode"
      },
      phoneVerification: {
        enabled: true,
        required: true,
        method: "sms"
      },
      biometricVerification: {
        enabled: true,
        required: true,
        livenessDetection: true,
        antiSpoofing: true
      }
    }
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "name": "Updated Onboarding Flow",
  "description": "Updated description for the onboarding flow",
  "status": "active",
  "configuration": {
    "emailVerification": {
      "enabled": True,
      "required": True,
      "method": "verificationCode"
    },
    "phoneVerification": {
      "enabled": True,
      "required": True,
      "method": "sms"
    },
    "biometricVerification": {
      "enabled": True,
      "required": True,
      "livenessDetection": True,
      "antiSpoofing": True
    }
  }
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("PUT", "/v2/project-flows/project_flow_123456789", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('PUT', 'https://api.verifik.co/v2/project-flows/project_flow_123456789', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'json' => [
    'name' => 'Updated Onboarding Flow',
    'description' => 'Updated description for the onboarding flow',
    'status' => 'active',
    'configuration' => [
      'emailVerification' => [
        'enabled' => true,
        'required' => true,
        'method' => 'verificationCode'
      ],
      'phoneVerification' => [
        'enabled' => true,
        'required' => true,
        'method' => 'sms'
      ],
      'biometricVerification' => [
        'enabled' => true,
        'required' => true,
        'livenessDetection' => true,
        'antiSpoofing' => true
      ]
    ]
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
  "name": "Updated Onboarding Flow",
  "description": "Updated description for the onboarding flow",
  "status": "active",
  "configuration": [
    "emailVerification": [
      "enabled": true,
      "required": true,
      "method": "verificationCode"
    ],
    "phoneVerification": [
      "enabled": true,
      "required": true,
      "method": "sms"
    ],
    "biometricVerification": [
      "enabled": true,
      "required": true,
      "livenessDetection": true,
      "antiSpoofing": true
    ]
  ]
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/project-flows/project_flow_123456789")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "PUT"
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
    "_id": "project_flow_123456789",
    "project": "project_123456789",
    "type": "onboarding",
    "status": "active",
    "version": 1,
    "name": "Updated Onboarding Flow",
    "description": "Updated description for the onboarding flow",
    "configuration": {
      "emailVerification": {
        "enabled": true,
        "required": true,
        "method": "verificationCode"
      },
      "phoneVerification": {
        "enabled": true,
        "required": true,
        "method": "sms"
      },
      "biometricVerification": {
        "enabled": true,
        "required": true,
        "livenessDetection": true,
        "antiSpoofing": true
      }
    },
    "steps": [
      {
        "stepType": "email",
        "order": 1,
        "required": true,
        "config": {
          "verificationMethod": "verificationCode"
        }
      },
      {
        "stepType": "phone",
        "order": 2,
        "required": true,
        "config": {
          "verificationMethod": "sms"
        }
      },
      {
        "stepType": "biometric",
        "order": 3,
        "required": true,
        "config": {
          "livenessDetection": true
        }
      }
    ],
    "client": "client_123456789",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:35:00Z"
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
  "error": "Project flow not found",
  "message": "PROJECT_FLOW_NOT_FOUND"
}
```

  </TabItem>
  <TabItem value="400" label="400">

```json
{
  "error": "Invalid configuration",
  "message": "INVALID_CONFIGURATION"
}
```

  </TabItem>
</Tabs>

### Features

- **Flexible Updates**: Update only the fields you need to change
- **Advanced Configuration**: Modify detailed verification configurations
- **Flow Status**: Change flow status (draft, active, paused)
- **Anti-Spoofing**: Advanced liveness detection and anti-spoofing configuration
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Error Handling**: Detailed error responses for different scenarios
