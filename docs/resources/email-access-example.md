---
id: email-access-example
title: Email Access Example
description: Complete tutorial for implementing email-based app login authentication
slug: /resources/email-access-example
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Email Access Example

This tutorial demonstrates how to implement email-based authentication for app login flows using Verifik's email validation system.

## Prerequisites

Before starting, ensure you have:

- A **Project** with login configuration
- A **ProjectFlow** with `type = "login"`
- Email validation enabled in your project flow

### Configuration Setup

If you haven't created a project and a projectFlow with the property `type = "login"`, follow these guides:

- [Create a Project](/resources/projects/create-a-project)
- [Create a Project Flow](/resources/project-flows/create-a-project-flow)

## Implementation Flow

The email access flow consists of two main steps:

1. **Create Email Validation** - Generate an OTP and send it to the user's email
2. **Validate Email Validation** - Verify the OTP entered by the user

### Step 1: Create Email Validation

First, create an email validation to send an OTP to the user's email address.

**Endpoint:**
```
POST https://api.verifik.co/v2/email-validations
```

**Request Example:**

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
    project: 'your_project_id',
    projectFlow: 'your_project_flow_id',
    email: 'user@example.com',
    type: 'login',
    redirectUrl: 'https://yourapp.com/success'
  }
};

try {
  const { data } = await axios.request(options);
  console.log('Email validation created:', data);
} catch (error) {
  console.error('Error creating email validation:', error);
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "project": "your_project_id",
  "projectFlow": "your_project_flow_id",
  "email": "user@example.com",
  "type": "login",
  "redirectUrl": "https://yourapp.com/success"
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
    'project' => 'your_project_id',
    'projectFlow' => 'your_project_flow_id',
    'email' => 'user@example.com',
    'type' => 'login',
    'redirectUrl' => 'https://yourapp.com/success'
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
  "project": "your_project_id",
  "projectFlow": "your_project_flow_id",
  "email": "user@example.com",
  "type": "login",
  "redirectUrl": "https://yourapp.com/success"
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

**Response:**
```json
{
  "data": {
    "_id": "email_validation_id",
    "email": "user@example.com",
    "status": "pending",
    "otp": "123456",
    "expiresAt": "2024-01-15T11:30:00Z",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

### Step 2: Validate Email Validation

After the user receives the OTP via email, validate it to complete the login process.

**Endpoint:**
```
POST https://api.verifik.co/v2/email-validations/validate
```

**Request Example:**

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  },
  data: {
    emailValidationId: 'email_validation_id',
    otp: '123456'
  }
};

try {
  const { data } = await axios.request(options);
  console.log('Email validation successful:', data);
} catch (error) {
  console.error('Error validating email:', error);
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "emailValidationId": "email_validation_id",
  "otp": "123456"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <your_token>'
}

conn.request("POST", "/v2/email-validations/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://api.verifik.co/v2/email-validations/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
  'json' => [
    'emailValidationId' => 'email_validation_id',
    'otp' => '123456'
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
  "emailValidationId": "email_validation_id",
  "otp": "123456"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/email-validations/validate")! as URL,
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

**Response:**
```json
{
  "success": true,
  "data": {
    "status": "validated",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "appLogin": {
      "_id": "app_login_id",
      "type": "email",
      "status": "completed",
      "emailValidation": "email_validation_id"
    }
  }
}
```

### Step 3: Retrieve App Login Object

After successful email validation, use the token to retrieve the complete AppLogin object with all its details.

**Endpoint:**
```
GET https://api.verifik.co/v2/app-logins/{appLoginId}
```

**Request Example:**

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/app-logins/app_login_id',
  params: {
    'populates[]': ['emailValidation']
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log('App Login retrieved:', data);
} catch (error) {
  console.error('Error retrieving app login:', error);
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

conn.request("GET", "/v2/app-logins/app_login_id?populates[]=emailValidation", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://api.verifik.co/v2/app-logins/app_login_id?populates[]=emailValidation', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer <your_token>',
  ],
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/app-logins/app_login_id?populates[]=emailValidation")! as URL,
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

**Response:**
```json
{
  "data": {
    "_id": "app_login_id",
    "client": "client_id",
    "name": "User Login Session",
    "status": "completed",
    "project": "project_id",
    "projectFlow": "project_flow_id",
    "type": "email",
    "emailValidation": {
      "_id": "email_validation_id",
      "email": "user@example.com",
      "status": "validated",
      "validationMethod": "verificationCode",
      "otp": "$2a$10$encrypted_otp",
      "expiresAt": "2024-01-15T11:30:00Z",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:32:00Z"
    },
    "phoneValidation": null,
    "biometricValidation": null,
    "face": null,
    "accessControlLog": "access_control_log_id",
    "updatedAt": "2024-01-15T10:32:00Z",
    "createdAt": "2024-01-15T10:30:00Z",
    "__v": 0
  }
}
```

## Complete Flow Summary

1. **User initiates login** with their email address
2. **System creates email validation** and sends OTP to user's email
3. **User receives OTP** via email
4. **User enters OTP** in your application
5. **System validates OTP** and creates AppLogin record
6. **System retrieves AppLogin object** with complete validation details
7. **User gains access** with authentication token and complete login data

## Related Documentation

- [Create an Email Validation](/resources/email-validations/create-an-email-validation)
- [Validate an Email Validation](/resources/email-validations/validate-an-email-validation)
- [Retrieve an App Login](/resources/app-logins/retrieve-an-app-login)
- [Create an App Login](/resources/app-logins/create-an-app-login)

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/wYJcFnMhtKg" title="Email Access Example Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Features

- **Email-based Authentication**: Secure login using email OTP verification
- **Automatic AppLogin Creation**: AppLogin records are created automatically upon successful validation
- **Time-limited OTP**: OTP codes expire for security
- **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
- **Complete Integration**: End-to-end tutorial for email authentication flows
- **Token-based Access**: Secure authentication tokens for application access
