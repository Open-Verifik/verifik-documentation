---
id: "en-docs-driver-validation-florida-driver-license-endpoint"
title: "Florida Driver License — Endpoint"
sourcePath: "docs/driver-validation/florida-driver-license.md"
locale: "en"
category: "driver-validation"
tags:
  - "usa"
  - "driver-validation"
endpoint: "/v2/usa/florida/driver-license"
sourceAnchor: "Endpoint"
slug: "/driver-validation/florida-driver-license"
url: "https://docs.verifik.co/driver-validation/florida-driver-license"
---

# Florida Driver License
**API path(s):** /v2/usa/florida/driver-license

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/usa/florida/driver-license
```

This service allows developers to validate the status, restrictions, endorsements, and designations of Florida driver licenses. By providing a valid Florida driver license number, the service response with the license status, expiration date, restrictions, endorsements, and designations.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type   | Required | Description                                    | Example           |
| -------------- | ------ | -------- | ---------------------------------------------- | ----------------- |
| documentNumber | String | Yes      | Document number of the person to be queried. | `B123-456-78-910-0` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/florida/driver-license',
  params: { documentNumber: 'B123-456-78-910-0'},
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
payload = ''
headers = {}
conn.request("GET", "/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()
```

  
  

```php
setUrl('https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0');
$request->setMethod(HTTP_Request2::METHOD_GET);
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
```
