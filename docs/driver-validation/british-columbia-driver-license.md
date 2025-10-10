---
id: british-columbia-driver-license
title: British Columbia Driver License
description: British Columbia driver license verification service
slug: /driver-validation/british-columbia-driver-license
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# British Columbia Driver License

## Endpoint

```
https://api.verifik.co/v2/ca/british-columbia/driver-license 
```

The British Columbia Driver License Verification service offers a straightforward method to verify the authenticity and validity of a driver's license in the province of British Columbia, Canada. By utilizing this service, you can quickly validate a driver's license based on the provided document number and last name.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name           | Type   | Required | Description                                                                                    | Example      |
| -------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- | ------------ |
| documentNumber | String | Yes      | Driver's license to consult, all data must be entered exactly as found in this document. | `1123456`    |
| lastName       | String | Yes      | Last name that appears in the Driver License.                                                | `HELLO`      |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/british-columbia/driver-license',
  params: {documentNumber: '7793458', lastName: 'JIWA'},
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
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="swift" label="Swift">

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

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO');
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
    "documentNumber": "1123456",
    "lastName": "HELLO",
    "valid": true
  },
  "signature": {
    "dateTime": "August 8, 2023 10:56 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1234567"
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
    "message": "missing lastName\n missing documentNumber\n"
}
```

  </TabItem>
  <TabItem value="409-2" label="409 (Length Error)">

```json
{
    "code": "MissingParameter",
    "message": "documentNumber maximum length: 15\n"
}
```

  </TabItem>
</Tabs>

### Features

-   **License Verification**: Verify the authenticity and validity of British Columbia driver licenses
-   **Simple Parameters**: Only requires document number and last name
-   **Multiple Programming Languages**: Support for JavaScript, Python, Swift, and PHP
-   **Comprehensive Error Handling**: Detailed error responses for various scenarios
-   **Real-time Validation**: Quick validation based on official records