---
id: "en-docs-authentication-api-key-access-via-phone-parameters-3"
title: "API Key Access via Phone — Parameters"
sourcePath: "docs/authentication/api-key-access-via-phone.mdx"
locale: "en"
category: "authentication"
tags:
  - "authentication"
  - "projects"
endpoints:
  - "/v2/projects/phone-login"
  - "/v2/projects/phone-login/confirm"
sourceAnchor: "Parameters"
slug: "/authentication/api-key-access-via-phone"
url: "https://docs.verifik.co/authentication/api-key-access-via-phone"
---

# API Key Access via Phone
**API path(s):** /v2/projects/phone-login, /v2/projects/phone-login/confirm

## Parameters

| Name           | Type   | Required | Description                                    |
| -------------- | ------ | -------- | ---------------------------------------------- |
| `countryCode`  | string | Yes      | Country code for the phone number             |
| `phone`        | number | Yes      | Phone number                                   |
| `otp`          | string | Yes      | One Time Password received via phone           |

### Request

  

```javascript

const options = {
  method: 'POST',
  url: 'https://api.verifik.co/v2/projects/phone-login/confirm',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {
    countryCode: '+1',
    phone: 1234566663,
    otp: '123456'
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
    "otp": "123456"
})

headers = {
    'Content-Type': 'application/json'
}

conn.request("POST", "/v2/projects/phone-login/confirm", payload, headers)

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
    "otp": "123456"
] as [String : Any]

let postData = try JSONSerialization.data(withJSONObject: parameters, options: [])

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/projects/phone-login/confirm")! as URL,
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
request('POST', 'https://api.verifik.co/v2/projects/phone-login/confirm', [
  'headers' => [
    'Content-Type' => 'application/json',
  ],
  'json' => [
    'countryCode' => '+1',
    'phone' => 1234566663,
    'otp' => '123456'
  ]
]);

echo $response->getBody();
```
