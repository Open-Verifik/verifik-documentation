---
id: "en-docs-driver-validation-chile-driver-license-endpoint"
title: "\\U0001F1E8\\U0001F1F1 Chile - Driver License — Endpoint"
sourcePath: "docs/driver-validation/chile-driver-license.mdx"
locale: "en"
category: "driver-validation"
tags:
  - "cl"
  - "driver-validation"
endpoints:
  - "/v2/cl/driver-license"
  - "/v2/cl/driver-license?documentnumber=12345678"
sourceAnchor: "Endpoint"
slug: "/driver-validation/chile-driver-license"
url: "https://docs.verifik.co/driver-validation/chile-driver-license"
---

# \U0001F1E8\U0001F1F1 Chile - Driver License
**API path(s):** /v2/cl/driver-license, /v2/cl/driver-license?documentnumber=12345678

## Endpoint

This service looks up a Chilean driver license by license number (RUN body). Today it queries **Municipalidad de Santiago only** (`tramites.munistgo.cl`). Licenses issued by other communes (for example Ñuñoa) return **404** even when the number is valid. That is expected coverage, not an outage.

### Endpoint

```
GET https://api.verifik.co/v2/cl/driver-license
```

Look up a **Santiago-issued** Chilean driver license by **license number** (query `documentNumber`). Returned fields typically include **RUT**, **license class**, **restrictions**, **control dates**, **municipality**, and **address**, subject to registry availability—useful for **fleet**, **workforce**, and **KYC** checks where driving credentials matter.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Yes** | Eight-digit RUN/license body. Dots, commas, spaces, and an optional `-K` verification digit are stripped (`12.345.678-K` → `12345678`). | `12345678` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cl/driver-license',
  params: {
    documentNumber: '12345678'
  },
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
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
payload = ''
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer ",
}
conn.request("GET", "/v2/cl/driver-license?documentNumber=12345678", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/cl/driver-license?documentNumber=12345678');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setHeader('Accept', 'application/json');
$request->setHeader('Authorization', 'Bearer ');
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
?>
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/driver-license?documentNumber=12345678")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer ", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()
```
