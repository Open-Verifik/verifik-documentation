---
id: "en-docs-identity-validation-argentina-request-2"
title: "Argentine Citizen — Request"
sourcePath: "docs/identity-validation/argentina.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "ar"
  - "identity-validation"
endpoints:
  - "/v2/ar/cedula"
  - "/v2/ar/cedula?documenttype=dniar&documentnumber=123456789"
sourceAnchor: "Request"
slug: "/identity-validation/argentina"
url: "https://docs.verifik.co/identity-validation/argentina"
---

# Argentine Citizen
**API path(s):** /v2/ar/cedula, /v2/ar/cedula?documenttype=dniar&documentnumber=123456789

Verifik's Identity Verification API helps you authenticate Argentine citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/cedula',
  params: {documentType: 'DNIAR', documentNumber: '123456789'},
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt '
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
    'Accept': "application/json",
    'Authorization': "JWT token"
}

conn.request("GET", "/v2/ar/cedula?documentType=DNIAR&documentNumber=123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/ar/cedula?documentType=DNIAR&documentNumber=123456789', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/ar/cedula?documentType=DNIAR&documentNumber=123456789")! as URL,
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
