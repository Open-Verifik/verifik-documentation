---
id: kansas-driver-license
title: Kansas Driver License
description: Kansas driver license verification service
slug: /driver-validation/kansas-driver-license
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Kansas Driver's License Verification

## Endpoint

```
https://api.verifik.co/v2/usa/kansas/driver-license
```

The Kansas Driver License Validation Service allows developers to programmatically validate the status, restrictions, endorsements, and designations of Kansas driver licenses. By providing a valid Kansas driver license number, users can obtain a response that includes details such as the license status, expiration date, any restrictions or endorsements, and designations associated with the license.

This service is essential for verifying driver credentials and ensuring compliance with state regulations.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name           | Type   | Required | Description                                    | Example      |
| -------------- | ------ | -------- | ---------------------------------------------- | ------------ |
| documentNumber | String | Yes      | Document number of the person to be queried. | `K12345678`  |
| dateOfBirth    | String | Yes      | The birthdate of the license holder (format: DD/MM/YYYY). | `29/1/1974`  |
| firstName      | String | Yes      | Name of the license holder.                   | `MATEO`      |
| lastName       | String | Yes      | Last name of the license holder.              | `VERIFIK`    |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/kansas/driver-license',
  params: {
    documentNumber: 'K12345678',
    dateOfBirth: '29/01/1974',
    firstName: 'MATEO',
    lastName: 'VERIFIK'
  },
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
conn.request("GET", "/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK');
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
    "cdlStatus": "",
    "currentCredentialInformation": [
      {
        "credentialType": "Driver's License",
        "issueDate": "03/04/2020",
        "expirationDate": "01/29/2026"
      }
    ],
    "dateOfBirth": "29/1/1974",
    "dlNumber": "K02884565",
    "dlStatus": "Valid",
    "documentNumber": "K12345678",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "systemGeneratedDl": "N"
  },
  "signature": {
    "dateTime": "January 19, 2024 4:36 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1Q8UH"
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
    "message": "missing documentNumber\n. missing dateOfBirth\n. missing firstName\n. missing lastName\n"
}
```

  </TabItem>
  <TabItem value="409-2" label="409 (Format Error)">

```json
{
    "code": "MissingParameter",
    "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

  </TabItem>
</Tabs>

### Features

-   **Comprehensive License Validation**: Validate status, restrictions, endorsements, and designations
-   **Multiple Required Parameters**: Document number, date of birth, first name, and last name
-   **Detailed License Information**: Get issue date, expiration date, and credential type
-   **Multiple Programming Languages**: Support for JavaScript, Python, Swift, and PHP
-   **State Compliance**: Essential for verifying driver credentials and ensuring compliance