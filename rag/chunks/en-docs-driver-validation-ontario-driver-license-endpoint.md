---
id: "en-docs-driver-validation-ontario-driver-license-endpoint"
title: "Ontario Driver License — Endpoint"
sourcePath: "docs/driver-validation/ontario-driver-license.md"
locale: "en"
category: "driver-validation"
tags:
  - "ca"
  - "driver-validation"
endpoints:
  - "/v2/ca/ontario/driver-license"
  - "/v2/ca/ontario/driver-license?documentnumber=m4596-07657-60824"
sourceAnchor: "Endpoint"
slug: "/driver-validation/ontario-driver-license"
url: "https://docs.verifik.co/driver-validation/ontario-driver-license"
---

# Ontario Driver License
**API path(s):** /v2/ca/ontario/driver-license, /v2/ca/ontario/driver-license?documentnumber=m4596-07657-60824

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/ca/ontario/driver-license 
```

The Ontario Driver's License service allows you to quickly obtain essential information about a driver's license issued in the province of Ontario, Canada. By providing the document number, you can access details such as the license status and the associated verification number.

Use this service to validate and verify the authenticity of Ontario driver's licenses efficiently. Whether you need to confirm the validity of a driver's license for identification or regulatory purposes, this service provides accurate and up-to-date license information.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type   | Required | Description                                                                                    | Example              |
| -------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| documentNumber | String | Yes      | Driver's license to consult, all data must be entered exactly as found in this document. | `M4596-07657-60824`   |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/ontario/driver-license',
  params: {documentNumber: 'M4596-07657-60824'},
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

url = "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=M4596-07657-60824"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=M4596-07657-60824")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=M4596-07657-60824');
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
