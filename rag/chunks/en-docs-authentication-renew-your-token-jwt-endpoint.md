---
id: "en-docs-authentication-renew-your-token-jwt-endpoint"
title: "Renew your token (JWT) — Endpoint"
sourcePath: "docs/authentication/renew-your-token-jwt.mdx"
locale: "en"
category: "authentication"
tags:
  - "authentication"
  - "auth"
endpoints:
  - "/v2/auth/session"
  - "/v2/auth/session?origin=refresh&expiresin=120"
sourceAnchor: "Endpoint"
slug: "/authentication/renew-your-token-jwt"
url: "https://docs.verifik.co/authentication/renew-your-token-jwt"
---

# Renew your token (JWT)
**API path(s):** /v2/auth/session, /v2/auth/session?origin=refresh&expiresin=120

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/auth/session
```

This method is responsible for renewing the access token generated using other login endpoints, which has a validity period of **30 days**. After this period, it is necessary to **generate** a new Access Token. The only parameter required for renewal is the previous access token, as long as it has not expired. This service only renews tokens that are still valid.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Authorization | ``          |

### Parameters

| Name           | Type   | Required | Description                                    |
| -------------- | ------ | -------- | ---------------------------------------------- |
| `origin`       | string | No       | Define what we are going to do with the token. In this case, the action will be "refresh". |
| `expiresIn`    | number | No       | Number that can range from 1 to any number you wish. Each multiple represents a month, meaning 1: 1 month, 2: two months, 100: 100 months. |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/auth/session',
  params: {origin: 'refresh', expiresIn: 120},
  headers: {
    Authorization: ''
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

headers = {
    'Authorization': ''
}

conn.request("GET", "/v2/auth/session?origin=refresh&expiresIn=120", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Authorization": ""
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/auth/session?origin=refresh&expiresIn=120")! as URL,
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

  
  

```php
request('GET', 'https://api.verifik.co/v2/auth/session?origin=refresh&expiresIn=120', [
  'headers' => [
    'Authorization' => '',
  ],
]);

echo $response->getBody();
```
