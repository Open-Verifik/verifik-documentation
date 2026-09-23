---
id: "en-docs-identity-venezuela-foreigner-id-request-2"
title: "\\U0001F1FB\\U0001F1EA Venezuela - Foreigner ID (CEVE) — Request"
sourcePath: "docs/identity/venezuela-foreigner-id.mdx"
locale: "en"
category: "identity"
tags:
  - "ve"
  - "identity"
endpoints:
  - "/v2/ve/cedula"
  - "/v2/ve/foreigner-id"
sourceAnchor: "Request"
slug: "/identity/venezuela-foreigner-id"
url: "https://docs.verifik.co/identity/venezuela-foreigner-id"
---

# \U0001F1FB\U0001F1EA Venezuela - Foreigner ID (CEVE)
**API path(s):** /v2/ve/cedula, /v2/ve/foreigner-id

Verifik's Identity Verification API helps you authenticate foreign individuals in Venezuela using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to verify the identity of foreign clients, employees, or partners in Venezuela.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ve/foreigner-id", {
  params: { documentNumber: "10000001" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
    'Accept': "application/json",
    'Authorization': "Bearer "
}

conn.request("GET", "/v2/ve/foreigner-id?documentNumber=10000001", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/ve/foreigner-id?documentNumber=10000001', [
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

let request = NSMutableURLRequest(url: NSURL(string: "https://api.verifik.co/v2/ve/foreigner-id?documentNumber=10000001")! as URL,
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

### Response

  

```json
{
  "data": {
    "documentType": "CEVE",
    "documentNumber": "10000001",
    "fullName": "MATEO VENEZUELA VERIFIK",
    "lastName": "MATEO",
    "firstName": "VENEZUELA VERIFIK",
    "arrayName": [
      "MATEO",
      "VENEZUELA",
      "VERIFIK"
    ]
  },
  "signature": {
    "dateTime": "March 13, 2024 2:01 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "7VWXP"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber"
}
```

  
  

```json
{
  "code": "Endpoint_out_of_service",
  "message": "Endpoint_out_of_service"
}
```
