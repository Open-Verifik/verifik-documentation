---
id: "en-docs-resources-app-logins-email-access-example-step-3-retrieve-app-login-object-3"
title: "Email Access Example — Step 3: Retrieve App Login Object"
sourcePath: "docs/resources/app-logins/email-access-example.mdx"
locale: "en"
category: "resources"
tags:
  - "app-logins"
  - "email-validations"
  - "resources"
endpoints:
  - "/v2/app-logins/app_login_id"
  - "/v2/app-logins/app_login_id?populates[]=emailvalidation"
  - "/v2/app-logins/{apploginid}"
  - "/v2/email-validations"
  - "/v2/email-validations/validate"
sourceAnchor: "Step 3: Retrieve App Login Object"
slug: "/resources/email-access-example"
url: "https://docs.verifik.co/resources/email-access-example"
---

# Email Access Example
**API path(s):** /v2/app-logins/app_login_id, /v2/app-logins/app_login_id?populates[]=emailvalidation, /v2/app-logins/{apploginid}, /v2/email-validations, /v2/email-validations/validate

## Step 3: Retrieve App Login Object

After successful email validation, use the token to retrieve the complete AppLogin object with all its details.

**Endpoint:**
```
GET https://api.verifik.co/v2/app-logins/{appLoginId}
```

**Request Example:**

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/app-logins/app_login_id',
  params: {
    'populates[]': ['emailValidation']
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log('App Login retrieved:', data);
} catch (error) {
  console.error('Error retrieving app login:', error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("GET", "/v2/app-logins/app_login_id?populates[]=emailValidation", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/app-logins/app_login_id?populates[]=emailValidation', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);

echo $response->getBody();
```

  
  

```swift

let headers = [
  "Content-Type": "application/json",
  "Authorization": "Bearer "
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
