---
id: "en-docs-identity-canada-ontario-driver-license-3"
title: "Canadian Driver License Validation — Ontario Driver License"
sourcePath: "docs/identity/canada.mdx"
locale: "en"
category: "identity"
tags:
  - "ca"
  - "identity"
endpoint: "/v2/ca/british-columbia/driver-license"
sourceAnchor: "Ontario Driver License"
slug: "/identity/canada"
url: "https://docs.verifik.co/identity/canada"
---

# Canadian Driver License Validation
**API path(s):** /v2/ca/british-columbia/driver-license

Verifik's Driver License Verification API helps you authenticate Canadian driver licenses using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the validity of driver's licenses issued in British Columbia and Ontario provinces.

## Ontario Driver License

### Endpoint

```
GET https://api.verifik.co/v2/ca/ontario/driver-license
```

The Ontario Driver's License service allows you to quickly obtain essential information about a driver's license issued in the province of Ontario, Canada. By providing the document number, you can access details such as the license status and the associated verification number.

Use this service to validate and verify the authenticity of Ontario driver's licenses efficiently. Whether you need to confirm the validity of a driver's license for identification or regulatory purposes, this service provides accurate and up-to-date license information.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Yes** | Driver's license to consult, all data must be entered exactly as found in this document. | `S123456789123456` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/ontario/driver-license',
  params: {
    documentNumber: 'S123456789123456'
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

url = "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

  
  

```php
setUrl('https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456');
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
?>
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456")!,timeoutInterval: Double.infinity)
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
