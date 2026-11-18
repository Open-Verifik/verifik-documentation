---
id: "en-docs-resources-app-logins-email-access-example-step-2-validate-email-validation-2"
title: "Email Access Example — Step 2: Validate Email Validation"
sourcePath: "docs/resources/app-logins/email-access-example.mdx"
locale: "en"
category: "resources"
tags:
  - "email-validations"
  - "resources"
endpoint: "/v2/email-validations"
sourceAnchor: "Step 2: Validate Email Validation"
slug: "/resources/email-access-example"
url: "https://docs.verifik.co/resources/email-access-example"
---

# Email Access Example
**API path(s):** /v2/email-validations

## Step 2: Validate Email Validation

After the user receives the OTP via email, validate it to complete the login process.

**Endpoint:**
```
POST https://api.verifik.co/v2/email-validations/validate
```

**Request Example:**

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/email-validations/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
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

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "emailValidationId": "email_validation_id",
  "otp": "123456"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/email-validations/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/email-validations/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'emailValidationId' => 'email_validation_id',
    'otp' => '123456'
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
