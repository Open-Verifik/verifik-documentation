---
id: "en-docs-background-check-interpol-background-check-request-2"
title: "Interpol Background Check — Request"
sourcePath: "docs/background-check/interpol-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "interpol"
  - "interpol?fullname=ivan"
  - "interpol?fullname=ivan%20luciano%20marquez%20marin%20arango"
  - "background-check"
endpoints:
  - "/v2/interpol"
  - "/v2/interpol?fullname=ivan"
  - "/v2/interpol?fullname=ivan%20luciano%20marquez%20marin%20arango"
sourceAnchor: "Request"
slug: "/background-check/international/interpol-background-check"
url: "https://docs.verifik.co/background-check/international/interpol-background-check"
---

# Interpol Background Check
**API path(s):** /v2/interpol, /v2/interpol?fullname=ivan, /v2/interpol?fullname=ivan%20luciano%20marquez%20marin%20arango

## Request

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/interpol",
  params: { documentType: "CC", documentNumber: "80251972" },
  headers: {
    Accept: "application/json",
    Authorization: "jwt ",
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
    'Authorization': "JWT token"
}

conn.request("GET", "/v2/interpol?fullName=IVAN%20LUCIANO%20MARQUEZ%20MARIN%20ARANGO", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```swift

let headers = [
  "Accept": "application/json",
  "Authorization": "JWT token"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/interpol?fullName=IVAN%20LUCIANO%20MARQUEZ%20MARIN%20ARANGO")! as URL,
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
request('GET', 'https://api.verifik.co/v2/interpol?fullName=IVAN LUCIANO MARQUEZ MARIN ARANGO', [
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'JWT token',
  ],
]);

echo $response->getBody();
```
