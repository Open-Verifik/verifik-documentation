---
id: create-an-app-login-biometric-validation
title: Create an App Login Biometric Validation
description: Create a biometric validation specifically for app login flow
slug: /resources/create-an-app-login-biometric-validation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an App Login Biometric Validation

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/app-login
```

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection during the login process. This process ensures the authenticity of users by verifying their unique biometric characteristics through advanced security technology. This endpoint is specifically designed for users who are in the middle of an app login flow.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
The JWT Token you should use when creating `App Login Biometric Validations` is provided from the [`App Login`](https://docs.verifik.co/resources/app-logins/create-an-app-login) in creation.
:::

### Parameters

| Name           | Type    | Required | Description                                                                                                 |
| -------------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `project`      | string  | Yes      | The unique identifier for the project where this biometric validation will be used.                         |
| `projectFlow`  | string  | Yes      | The unique identifier for the project flow configuration.                                                  |
| `identifier`   | string  | Yes      | A unique identifier for the user or session (e.g., email, phone, or custom ID).                             |
| `type`         | string  | Yes      | Must be set to `login` for this endpoint.                                                                   |
| `expiresAt`    | string  | No       | Optional expiration date for the validation session.                                                         |
| `redirectUrl`  | string  | No       | Optional URL for redirect after validation.                                                                 |
| `webhookUrl`   | string  | No       | Optional webhook URL for validation notifications.                                                          |
| `requires2FA`  | boolean | No       | Optional flag indicating if two-factor authentication is required.                                          |
| `ipAddress`    | string  | No       | Optional IP address of the user.                                                                            |
| `sendViaEmail` | boolean | No       | Optional flag to send validation link via email.                                                            |
| `email`        | string  | No       | Email address to send validation link to (required if sendViaEmail is true).                              |
| `language`     | string  | No       | Language for email templates (en/es). Defaults to "en".                                                   |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/biometric-validations/app-login',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  data: {
    project: '507f1f77bcf86cd799439011',
    projectFlow: '507f1f77bcf86cd799439015',
    identifier: 'user@example.com',
    type: 'login',
    expiresAt: '2024-12-31T23:59:59.000Z',
    redirectUrl: 'https://yourapp.com/success',
    webhookUrl: 'https://yourapp.com/webhook',
    requires2FA: false,
    ipAddress: '192.168.1.1',
    sendViaEmail: true,
    email: 'user@example.com',
    language: 'en'
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
  "project": "507f1f77bcf86cd799439011",
  "projectFlow": "507f1f77bcf86cd799439015",
  "identifier": "user@example.com",
  "type": "login",
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "redirectUrl": "https://yourapp.com/success",
  "webhookUrl": "https://yourapp.com/webhook",
  "requires2FA": False,
  "ipAddress": "192.168.1.1",
  "sendViaEmail": True,
  "email": "user@example.com",
  "language": "en"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("POST", "/v2/biometric-validations/app-login", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/biometric-validations/app-login', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'json' => [
    'project' => '507f1f77bcf86cd799439011',
    'projectFlow' => '507f1f77bcf86cd799439015',
    'identifier' => 'user@example.com',
    'type' => 'login',
    'expiresAt' => '2024-12-31T23:59:59.000Z',
    'redirectUrl' => 'https://yourapp.com/success',
    'webhookUrl' => 'https://yourapp.com/webhook',
    'requires2FA' => false,
    'ipAddress' => '192.168.1.1',
    'sendViaEmail' => true,
    'email' => 'user@example.com',
    'language' => 'en'
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
  "project": "507f1f77bcf86cd799439011",
  "projectFlow": "507f1f77bcf86cd799439015",
  "identifier": "user@example.com",
  "type": "login",
  "expiresAt": "2024-12-31T23:59:59.000Z",
  "redirectUrl": "https://yourapp.com/success",
  "webhookUrl": "https://yourapp.com/webhook",
  "requires2FA": false,
  "ipAddress": "192.168.1.1",
  "sendViaEmail": true,
  "email": "user@example.com",
  "language": "en"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/biometric-validations/app-login")! as URL,
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
  "data": {
    "livenessSession": {
      "_id": "674de8df21c72be3cc42b8a7",
      "identifier": "user@example.com",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "status": "active",
      "expiresAt": "2024-12-02T17:15:35.000Z",
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:05:36.788Z"
    },
    "biometricValidation": {
      "_id": "674de8df21c72be3cc42b8a8",
      "client": "507f1f77bcf86cd799439013",
      "project": "507f1f77bcf86cd799439011",
      "projectFlow": "507f1f77bcf86cd799439015",
      "status": "new",
      "livenessSession": "674de8df21c72be3cc42b8a7",
      "type": "login",
      "url": "https://access.verifik.co/sign-in/507f1f77bcf86cd799439011?type=liveness",
      "assignedCollection": "507f1f77bcf86cd799439016",
      "collectionCode": "col_12345",
      "redirectUrl": null,
      "webhook": null,
      "requires2FA": false,
      "createdAt": "2024-12-02T17:05:36.788Z",
      "updatedAt": "2024-12-02T17:05:36.788Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

  </TabItem>
  <TabItem value="403" label="403">

```json
{
  "code": "token_not_right",
  "message": "403:token_not_right"
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "code": "MissingParameter",
  "message": "missing project"
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "code": "Project_not_found_or_featured_disabled",
  "message": "404:Project_not_found_or_featured_disabled"
}
```

  </TabItem>
</Tabs>

### Features

- **Login-Specific Validation**: Designed specifically for app login biometric validation flows
- **Liveness Detection**: Advanced facial recognition with anti-spoofing technology
- **Secure Sessions**: Automatic creation of secure liveness sessions with expiration
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Email Integration**: Optional email notifications with validation links
- **Webhook Support**: Real-time notifications for validation events
- **Multi-language Templates**: Support for English and Spanish email templates
- **Security Features**: IP address tracking and 2FA support
