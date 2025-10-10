---
id: peru-vehicle-information
title: Peru - Vehicle Information
description: The Peruvian Vehicle Information service provides detailed data about registered vehicles in Peru based on their license plate number. The response includes key details such as the vehicle's make, model, year, engine and chassis serial numbers, seating capacity, and usage type.
slug: /vehicle-validation/peru/vehicle-information
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Peru - Vehicle Information

## Endpoint

```
https://api.verifik.co/v2/pe/vehiculo/placa
```

The Peruvian Vehicle Information service provides detailed data about registered vehicles in Peru based on their license plate number. The response includes key details such as the vehicle's make, model, year, engine and chassis serial numbers, seating capacity, and usage type.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `plate`        | string  | Yes      | Plate number to consult, without spaces or points. |

## Request

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/pe/vehiculo/placa>',
  params: {plate: 'ABC123'},
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
conn.request("GET", "/v2/pe/vehiculo/placa?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/vehiculo/placa?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/pe/vehiculo/placa?plate=');
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

## Response

<Tabs>
<TabItem value="200" label="200">

```json
{
"data": {
"plate": "ABC123",
"use": "PARTICULAR",
"type": "AUTOMOVIL",
"brand": "NISSAN",
"model": "VERSA",
"year": "2014",
"engineSerial": "HR123456789J",
"chasisSerial": "1234567890",
"seats": "5",
"validFormat": true,
"serial": "1234567890"
},
"signature": {
"dateTime": "August 1, 2022 5:23 PM",
"message": "Certified by [Verifik.co](<http://verifik.co/>)"
}
}
```

</TabItem>
<TabItem value="404" label="404">

```json
{
"code": "NotFound",
"message": "Record not found.",
"signature": {
"dateTime": "August 31, 2022 3:24 PM",
"message": "Certified by Verifik.co"
}
}
```

</TabItem>
<TabItem value="409" label="409">

```json
{
"code": "MissingParameter",
"message": "missing plate\n"
}
```

</TabItem>
</Tabs>

## Use Cases

- **Vehicle Verification**: Validate basic information of vehicles registered in Peru
- **Insurance Services**: Verify vehicle data for insurance processes
- **Traffic Agencies**: Consult official vehicle information
- **Transportation Companies**: Validate commercial vehicle data
- **Property Verification**: Confirm technical details of the vehicle

## Features

- ✅ Query by license plate number
- ✅ Complete technical information (brand, model, year)
- ✅ Engine and chassis serial numbers
- ✅ Seating capacity
- ✅ Vehicle usage type
- ✅ License plate format validation
- ✅ Certified response by Verifik.co
