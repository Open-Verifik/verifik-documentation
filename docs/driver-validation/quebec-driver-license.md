---
id: quebec-driver-license
title: Quebec Driver License
description: Verify Quebec (Canada) driver licenses by document number via Verifik's API.
slug: /driver-validation/quebec-driver-license
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quebec Driver License

### Endpoint

```
GET https://api.verifik.co/v2/ca/quebec/driver-license
```

Verifies a Quebec driver's license against provincial records using the license **document number**. Typical fields include license class, status, issue-related data, and a confirmation number when returned by the source. Use it for **KYC**, **fleet and mobility onboarding**, and **compliance** checks.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name             | Type   | Required | Description                                                                 | Example        |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------- | -------------- |
| `documentNumber` | String | Yes      | Driver's license number to query; enter exactly as shown on the credential. | `L12345678901` |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/quebec/driver-license',
  params: { documentNumber: 'L12345678901' },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <your_token>',
  },
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

url = "https://api.verifik.co/v2/ca/quebec/driver-license?documentNumber=L12345678901"

payload = {}
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer <your_token>",
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ca/quebec/driver-license?documentNumber=L12345678901")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer <your_token>", forHTTPHeaderField: "Authorization")

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
$request->setUrl('https://api.verifik.co/v2/ca/quebec/driver-license?documentNumber=L12345678901');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setHeader('Accept', 'application/json');
$request->setHeader('Authorization', 'Bearer <your_token>');
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

  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "documentNumber": "L12345678901",
    "classLicense": "5",
    "status": "Valid",
    "dateOfIssue": "15/03/2020",
    "confirmationNumber": "Q12345V",
    "condition": ""
  },
  "signature": {
    "dateTime": "April 20, 2026 10:00 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "QBC1X"
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

### Notes

- Send only the query parameter **`documentNumber`** required by this endpoint.
