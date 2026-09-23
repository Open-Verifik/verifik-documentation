---
id: "en-docs-identity-canada-headers-2"
title: "Canadian Driver License Validation — Headers"
sourcePath: "docs/identity/canada.mdx"
locale: "en"
category: "identity"
tags:
  - "ca"
  - "identity"
endpoints:
  - "/v2/ca/british-columbia/driver-license"
  - "/v2/ca/british-columbia/driver-license?documentnumber=1123456&lastname=hello"
  - "/v2/ca/ontario/driver-license"
  - "/v2/ca/ontario/driver-license?documentnumber=s123456789123456"
sourceAnchor: "Headers"
slug: "/identity/canada"
url: "https://docs.verifik.co/identity/canada"
---

# Canadian Driver License Validation
**API path(s):** /v2/ca/british-columbia/driver-license, /v2/ca/british-columbia/driver-license?documentnumber=1123456&lastname=hello, /v2/ca/ontario/driver-license, /v2/ca/ontario/driver-license?documentnumber=s123456789123456

Verifik's Driver License Verification API helps you authenticate Canadian driver licenses using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the validity of driver's licenses issued in British Columbia and Ontario provinces.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Yes** | Driver's license to consult, all data must be entered exactly as found in this document. | `1123456` |
| `lastName` | string | **Yes** | Last name that appears in the Driver License. | `HELLO` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/british-columbia/driver-license',
  params: {
    documentNumber: '7793458',
    lastName: 'JIWA'
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
headers = {}
conn.request("GET", "/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO")!,timeoutInterval: Double.infinity)
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
