---
id: chile-vehicle-information
title: Vehicle Information
description: Chilean vehicle information service
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vehicle Information

<mark >`GET - https://api.verifik.co/v2/cl/vehicle`</mark>

This API endpoint allows you to verify the information of a vehicle registered in Chile by providing its license plate number. The response includes details such as the chassis number, engine number, manufacturer, model, year, color, and any outstanding fines associated with the vehicle. Additionally, the API also provides information on the vehicle's owner, type, and origin, where available. Please note that you need to provide the license plate number of the vehicle to query its information.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="99">Name</th><th width="88">Type</th><th width="105">Required?</th><th width="341">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Plate to consult, without spaces or points.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Request

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/cl/vehicle>',
  params: {plate: 'BB985'},
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
conn.request("GET", "/v2/cl/vehicle?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/vehicle?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/cl/vehicle?plate=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('');
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

**Response**

<Tabs>
<TabItem value="200" label="200">

```json
{
  "data": {
    "chasisNumber": "ME1KG0447E2066723",
    "color": "NEGRO",
    "engineNumber": "1ES3032465",
    "fines": "NO POSEE MULTAS",
    "manufacturer": "NO DISPONIBLE",
    "mark": "YAMAHA",
    "model": "FZ 16",
    "orderTheft": "NO DISPONIBLE",
    "origin": "NO DISPONIBLE",
    "owner": "",
    "plate": "BB985",
    "publicTrans": "NO DISPONIBLE",
    "revision": "NO DISPONIBLE",
    "rut": "26043542-6",
    "type": "MOTO",
    "typeTransPub": "NO DISPONIBLE",
    "year": "2014"
  },
  "signature": {
    "dateTime": "April 21, 2023 8:32 PM",
    "message": "Certified by Verifik.co"
  }
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
"message": "missing plate\n"
}
```

</TabItem>
</Tabs>
