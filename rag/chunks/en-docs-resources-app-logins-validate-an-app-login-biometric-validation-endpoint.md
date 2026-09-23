---
id: "en-docs-resources-app-logins-validate-an-app-login-biometric-validation-endpoint"
title: "Validate an App Login Biometric Validation — Endpoint"
sourcePath: "docs/resources/app-logins/validate-an-app-login-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoints:
  - "/api/biometric-validations/validate"
  - "/v2/biometric-validations/validate"
sourceAnchor: "Endpoint"
slug: "/resources/validate-an-app-login-biometric-validation"
url: "https://docs.verifik.co/resources/validate-an-app-login-biometric-validation"
---

# Validate an App Login Biometric Validation
**API path(s):** /api/biometric-validations/validate, /v2/biometric-validations/validate

## Endpoint

```
POST https://api.verifik.co/v2/biometric-validations/validate
```

### Overview

A Biometric Validation is an instance within Verifik's system that allows you to process and validate user identities through facial recognition and liveness detection. This endpoint processes the biometric data submitted by users to verify their identity and complete the validation process. This is typically used after a user has completed their liveness detection session.

### Headers

| Name          | Value                        |
| ------------- | ---------------------------- |
| Content-Type  | `application/json`           |
| Authorization | `Bearer {YOUR_ACCESS_TOKEN}` |

:::warning
The JWT Token you should use when validating biometric validations must contain a valid `livenessSession` token that was provided during the creation of the biometric validation.

The token provided in this response is the token you can pass to your own application for signing into your application. In the no-code solution, this token is appended to the `redirectUrl` of your `projectFlow`.

E.g., `https://verifik.co?token={token}`
:::

### Parameters

| Name    | Type   | Required | Description                                                      |
| ------- | ------ | -------- | ---------------------------------------------------------------- |
| `image` | string | Yes      | Base64 encoded image of the user's face for biometric validation. |

### Request

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/biometric-validations/validate',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  },
  data: {
    image: 'base64_encoded_image_data'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

payload = json.dumps({
  "image": "base64_encoded_image_data"
})

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("POST", "/v2/biometric-validations/validate", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('POST', 'https://api.verifik.co/v2/biometric-validations/validate', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
  'json' => [
    'image' => 'base64_encoded_image_data'
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
  "image": "base64_encoded_image_data"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/biometric-validations/validate")! as URL,
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
