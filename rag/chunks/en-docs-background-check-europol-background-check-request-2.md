---
id: "en-docs-background-check-europol-background-check-request-2"
title: "Europol Background Check — Request"
sourcePath: "docs/background-check/europol-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "europol"
  - "background-check"
endpoint: "/v2/europol"
sourceAnchor: "Request"
slug: "/background-check/international/europol-background-check"
url: "https://docs.verifik.co/background-check/international/europol-background-check"
---

# Europol Background Check
**API path(s):** /v2/europol

## Request

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/europol",
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

conn.request("GET", "/v2/europol?fullName=Mateo%20Verifik", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/europol?fullName=Mateo Verifik', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/europol?fullName=Mateo%20Verifik")! as URL,
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
