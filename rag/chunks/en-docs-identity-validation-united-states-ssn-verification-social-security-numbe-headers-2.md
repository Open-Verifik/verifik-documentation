---
id: "en-docs-identity-validation-united-states-ssn-verification-social-security-numbe-headers-2"
title: "SSN Verification (Social Security Number) — Headers"
sourcePath: "docs/identity-validation/united-states/ssn-verification-social-security-number.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "us"
  - "usa"
  - "identity-validation"
endpoint: "/v2/usa/ssn"
sourceAnchor: "Headers"
slug: "/identity-validation/united-states/ssn-verification-social-security-number"
url: "https://docs.verifik.co/identity-validation/united-states/ssn-verification-social-security-number"
---

# SSN Verification (Social Security Number)
**API path(s):** /v2/usa/ssn

Verifik's SSN Verification API helps you authenticate Social Security Numbers (SSN) issued in the United States using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the validity of Social Security Numbers.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Yes** | SSN to be queried, it must be written exactly as it appears on the document. | `123-45-678` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/ssn',
  params: {
    documentNumber: '123-45-678'
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
conn.request("GET", "/v2/usa/ssn?documentNumber=123-45-678", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/usa/ssn?documentNumber=123-45-678');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/ssn?documentNumber=123-45-678")!,timeoutInterval: Double.infinity)
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
