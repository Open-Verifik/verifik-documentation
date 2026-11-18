---
id: "en-docs-authentication-api-key-access-via-phone-endpoint"
title: "API Key Access via Phone — Endpoint"
sourcePath: "docs/authentication/api-key-access-via-phone.mdx"
locale: "en"
category: "authentication"
tags:
  - "authentication"
  - "projects"
endpoints:
  - "/api/projects/phone-login"
  - "/v2/projects/phone-login"
sourceAnchor: "Endpoint"
slug: "/authentication/api-key-access-via-phone"
url: "https://docs.verifik.co/authentication/api-key-access-via-phone"
---

# API Key Access via Phone
**API path(s):** /api/projects/phone-login, /v2/projects/phone-login

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/projects/phone-login
```

Methods used for logging in with an already generated account in Verifik. This procedure is important because all queries require an Access Token, which is only generated upon login to the Verifik page.

These services create an OTP (One Time Password) request necessary to validate that the phone or email belongs to a Verifik client.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |

### Parameters

| Name           | Type   | Required | Description                                    |
| -------------- | ------ | -------- | ---------------------------------------------- |
| `countryCode`  | string | Yes      | Country code for the phone number             |
| `phone`        | number | Yes      | Phone number                                   |
| `type`         | string | Yes      | Type of request. Use "login" for authentication |

### Request

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/projects/phone-login',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    countryCode: '+1',
    phone: 1234566663,
    type: 'login'
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
    "countryCode": "+1",
    "phone": 1234566663,
    "type": "login"
})

headers = {
    'Content-Type': 'application/json'
}

conn.request("POST", "/v2/projects/phone-login", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Content-Type": "application/json"
]

let parameters = [
    "countryCode": "+1",
    "phone": 1234566663,
    "type": "login"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/projects/phone-login")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = postData

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

  
  

```php
request('POST', 'https://api.verifik.co/v2/projects/phone-login', [
  'headers' => [
    'Content-Type' => 'application/json',
  ],
  'json' => [
    'countryCode' => '+1',
    'phone' => 1234566663,
    'type' => 'login'
  ]
]);

echo $response->getBody();
```
