---
id: create-an-email-validation
title: Create an Email Validation
description: Create a new email validation request
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an Email Validation

## Endpoint

```
POST https://api.verifik.co/v2/email-validations
```

An Email Validation is an instance within Verifik's system that allows you to process and validate email addresses during authentication and registration processes. This process ensures the authenticity of user email addresses and provides secure verification through email delivery methods.

### Headers

| Name         | Value              |
| ------------ | ------------------ |
| Content-Type | `application/json` |

### Body Parameters

| Name               | Type    | Required | Description                                                                                                 |
| ------------------ | ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `project`          | string  | **Yes**  | The unique identifier for the project where this email validation will be used.                             |
| `validationMethod` | string  | **Yes**  | The validation method, set to `verificationCode`.                                                           |
| `email`            | string  | **Yes**  | The email address that will be validated (spaces will be automatically removed and converted to lowercase). |
| `type`             | string  | **Yes**  | Type of validation: `validation`, `login`, `onboarding`, or `oneTimeLink`.                                  |
| `expiresAt`        | string  | No       | Optional expiration date for the validation code.                                                           |
| `redirectUrl`      | string  | No       | Optional URL for redirect after validation.                                                                 |
| `webhookUrl`       | string  | No       | Optional webhook URL for validation notifications.                                                          |
| `identityUrl`      | string  | No       | Optional identity verification URL.                                                                         |
| `requires2FA`      | boolean | No       | Optional flag indicating if two-factor authentication is required.                                          |
| `ipAddress`        | string  | No       | Optional IP address of the user.                                                                            |

### `validationMethod` Values

| Value              | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| `verificationCode` | Sends a 6-digit OTP code to the email address                        |
| `oneTimeLink`      | Sends a single-use link to the email address                          |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  data: {
    project: 'project_123456789',
    validationMethod: 'verificationCode',
    email: 'user@example.com',
    type: 'validation',
    expiresAt: '2024-01-15T11:30:00Z',
    redirectUrl: 'https://example.com/success',
    webhookUrl: 'https://example.com/webhook',
    requires2FA: false,
    ipAddress: '192.168.1.1'
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
  "project": "project_123456789",
  "validationMethod": "verificationCode",
  "email": "user@example.com",
  "type": "validation",
  "expiresAt": "2024-01-15T11:30:00Z",
  "redirectUrl": "https://example.com/success",
  "webhookUrl": "https://example.com/webhook",
  "requires2FA": False,
  "ipAddress": "192.168.1.1"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("POST", "/v2/email-validations", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/email-validations', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'json' => [
    'project' => 'project_123456789',
    'validationMethod' => 'verificationCode',
    'email' => 'user@example.com',
    'type' => 'validation',
    'expiresAt' => '2024-01-15T11:30:00Z',
    'redirectUrl' => 'https://example.com/success',
    'webhookUrl' => 'https://example.com/webhook',
    'requires2FA' => false,
    'ipAddress' => '192.168.1.1'
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
  "project": "project_123456789",
  "validationMethod": "verificationCode",
  "email": "user@example.com",
  "type": "validation",
  "expiresAt": "2024-01-15T11:30:00Z",
  "redirectUrl": "https://example.com/success",
  "webhookUrl": "https://example.com/webhook",
  "requires2FA": false,
  "ipAddress": "192.168.1.1"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/email-validations")! as URL,
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
    "_id": "email_validation_123456789",
    "client": "client_123456789",
    "project": "project_123456789",
    "projectFlow": "flow_123456789",
    "status": "sent",
    "email": "user@example.com",
    "type": "validation",
    "validationMethod": "verificationCode",
    "verificationCode": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "redirectUrl": "https://example.com/success",
    "webhookUrl": "https://example.com/webhook",
    "requires2FA": false,
    "ipAddress": "192.168.1.1",
    "attempts": 0,
    "maxAttempts": 3,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
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
  "error": "Invalid email address",
  "code": "INVALID_EMAIL"
}
```

  </TabItem>
</Tabs>

### Characteristics

- **Validation Creation**: Creates new email validations with complete configuration
- **Multiple Methods**: Support for verification codes and single-use links
- **Validation Types**: Standard validation, login, onboarding and unique links
- **Advanced Configuration**: Redirect URLs, webhooks and two-factor authentication
- **Security**: Attempt control, expiration and abuse prevention
- **Multiple Languages**: Support for JavaScript, Python, PHP and Swift
- **Error Handling**: Detailed error responses for different scenarios
