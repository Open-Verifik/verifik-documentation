---
id: "en-docs-identity-argentina-extra-request-2"
title: "Argentina - Complete Argentine Citizen — Request"
sourcePath: "docs/identity/argentina-extra.mdx"
locale: "en"
category: "identity"
tags:
  - "ar"
  - "identity"
endpoint: "/v2/ar/cedula/extra"
sourceAnchor: "Request"
slug: "/identity/argentina-extra"
url: "https://docs.verifik.co/identity/argentina-extra"
---

# Argentina - Complete Argentine Citizen
**API path(s):** /v2/ar/cedula/extra

Verifik's Identity Verification API helps you authenticate Argentine citizens using official government data. This endpoint returns extended identity fields beyond the standard cédula response, including **date of birth**, **gender**, structured name tokens, and **life status** (`isAlive`).

## Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/cedula/extra',
  params: { documentType: 'DNIAR', documentNumber: '44768756' },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ',
  },
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
    'Accept': "application/json",
    'Authorization': "Bearer "
}

conn.request(
    "GET",
    "/v2/ar/cedula/extra?documentType=DNIAR&documentNumber=44768756",
    headers=headers
)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/ar/cedula/extra', [
  'query' => [
    'documentType' => 'DNIAR',
    'documentNumber' => '44768756',
  ],
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);

echo $response->getBody();
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "Bearer "
]

let request = NSMutableURLRequest(
  url: NSURL(string: "https://api.verifik.co/v2/ar/cedula/extra?documentType=DNIAR&documentNumber=44768756")! as URL,
  cachePolicy: .useProtocolCachePolicy,
  timeoutInterval: 10.0
)
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
