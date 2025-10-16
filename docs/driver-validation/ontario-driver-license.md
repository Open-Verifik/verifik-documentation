---
id: ontario-driver-license
title: Ontario Driver License
description: Ontario driver license verification service
slug: /driver-validation/ontario-driver-license
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ontario Driver License

## Endpoint

```
https://api.verifik.co/v2/ca/ontario/driver-license 
```

The Ontario Driver's License service allows you to quickly obtain essential information about a driver's license issued in the province of Ontario, Canada. By providing the document number, you can access details such as the license status and the associated verification number.

Use this service to validate and verify the authenticity of Ontario driver's licenses efficiently. Whether you need to confirm the validity of a driver's license for identification or regulatory purposes, this service provides accurate and up-to-date license information.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name           | Type   | Required | Description                                                                                    | Example              |
| -------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| documentNumber | String | Yes      | Driver's license to consult, all data must be entered exactly as found in this document. | `S123456789123456`   |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/ontario/driver-license',
  params: {documentNumber: 'S123456789123456'},
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt <tu_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

  </TabItem>
  <TabItem value="swift" label="Swift">

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

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456');
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

  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "documentNumber": "S123456789123456",
    "licenceStatus": "Valid",
    "verificationNumber": "123V5"
  },
    "signature": {
        "dateTime": "March 12, 2024 3:47 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "8X9FD"
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
    "code": "MissingParameter",
    "message": "missing documentNumber\n"
}
```

  </TabItem>
</Tabs>

### Features

-   **License Status Verification**: Quickly obtain essential information about Ontario driver licenses
-   **Simple Parameter**: Only requires document number for verification
-   **Verification Number**: Get the associated verification number for additional validation
-   **Multiple Programming Languages**: Support for JavaScript, Python, Swift, and PHP
-   **Regulatory Compliance**: Perfect for identification and regulatory purposes