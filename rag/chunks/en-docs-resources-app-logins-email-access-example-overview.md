---
id: "en-docs-resources-app-logins-email-access-example-overview"
title: "Email Access Example — Overview"
sourcePath: "docs/resources/app-logins/email-access-example.mdx"
locale: "en"
category: "resources"
tags:
  - "app-logins"
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/app-logins/app_login_id"
  - "/v2/app-logins/{apploginid}"
  - "/v2/email-validations"
  - "/v2/email-validations/validate"
sourceAnchor: "Overview"
slug: "/resources/email-access-example"
url: "https://docs.verifik.co/resources/email-access-example"
---

# Email Access Example
**API path(s):** /v2/app-logins/app_login_id, /v2/app-logins/{apploginid}, /v2/email-validations, /v2/email-validations/validate

## Overview

This tutorial demonstrates how to implement email-based authentication for app login flows using Verifik's email validation system.

### Prerequisites

Before starting, ensure you have:

- A **Project** with login configuration
- A **ProjectFlow** with `type = "login"`
- Email validation enabled in your project flow

### Configuration Setup

If you haven't created a project and a projectFlow with the property `type = "login"`, follow these guides:

- [Create a Project](/resources/projects/projects-create)
- [Create a Project Flow](/resources/project-flows/project-flows-update)

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

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
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

  
  

```python

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
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/email-validations", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/email-validations', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
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

  
  

```swift

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer "
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
