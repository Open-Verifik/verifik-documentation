---
id: florida-driver-license
title: Florida Driver License
description: Florida driver license validation service
slug: /driver-validation/florida-driver-license
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Florida Driver License Validation

## Endpoint

```
https://api.verifik.co/v2/usa/florida/driver-license
```

This service allows developers to validate the status, restrictions, endorsements, and designations of Florida driver licenses. By providing a valid Florida driver license number, the service response with the license status, expiration date, restrictions, endorsements, and designations.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name           | Type   | Required | Description                                    | Example           |
| -------------- | ------ | -------- | ---------------------------------------------- | ----------------- |
| documentNumber | String | Yes      | Document number of the person to be queried. | `B123-456-78-910-0` |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/florida/driver-license',
  params: { documentNumber: 'B123-456-78-910-0'},
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
conn.request("GET", "/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="swift" label="Swift">

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

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0');
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
        "designations": "None on Record",
        "documentNumber": "B123-456-78-910-0",
        "endorsements": "None on Record",
        "restrictions": "None on Record",
        "status": "As of February 26, 2024, at 12:11 AM, Florida driver license number B123-456-78-910-0 is Valid. This license is a Class E with an expiration date of 12/28/2026."
    },
    "signature": {
        "dateTime": "March 12, 2024 8:15 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "XUXSL"
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
    "message": "missing documentType\n. missing documentNumber\n"
}
```

  </TabItem>
  <TabItem value="409-2" label="409 (Invalid Type)">

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [DNIAR]"
}
```

  </TabItem>
</Tabs>

### Features

-   **License Status Validation**: Validate the current status of Florida driver licenses
-   **Comprehensive Information**: Get restrictions, endorsements, and designations
-   **Expiration Date**: Retrieve license expiration information
-   **Multiple Programming Languages**: Support for JavaScript, Python, Swift, and PHP
-   **Real-time Data**: Access to current license information from official records