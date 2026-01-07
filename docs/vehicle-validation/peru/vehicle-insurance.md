---
id: peru-vehicle-insurance
title: Peru - Vehicle Insurance
description: This service provides information on the insurance status of a vehicle in Peru. It returns details including the insurance company name, policy start and end dates, vehicle plate number, policy number, usage type, vehicle class, and policy status.
slug: /vehicle-validation/peru/vehicle-insurance
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Peru - Vehicle Insurance

## Endpoint

```
https://api.verifik.co/v2/pe/vehiculo/soat
```

This service provides information on the insurance status of a vehicle in Peru. It returns details including the insurance company name, policy start and end dates, vehicle plate number, policy number, usage type, vehicle class, and policy status.

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
  url: '<https://api.verifik.co/v2/pe/vehiculo/soat>',
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
conn.request("GET", "/v2/pe/vehiculo/soat?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/vehiculo/soat?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/pe/vehiculo/soat?plate=');
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
    "soat": {
      "ConsultarSoatResult": {
        "NombreCompania": "Interseguro",
        "FechaInicio": "27/04/2022",
        "FechaFin": "27/04/2023",
        "Placa": "ABC123",
        "NúmeroPoliza": "000000000000000000001",
        "NombreUsovehiculo": "PARTICULAR",
        "NombreClasevehiculo": "AUTOMOVIL",
        "Estado": "VIGENTE",
        "CodigoUnicoPoliza": "0000000000000000000000008",
        "CodigoSBSAseguradora": "001",
        "FechaControlPolicial": "26/04/2022"
      }
    }
  },
  "signature": {
    "dateTime": "July 19, 2022 3:08 PM",
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

## Use Cases

- **SOAT Verification**: Validate the current status of mandatory traffic accident insurance
- **Insurance Services**: Verify active policies and expiration dates
- **Traffic Control**: Validate compliance with mandatory insurance
- **Transportation Companies**: Verify fleet vehicle insurance
- **Compliance Verification**: Confirm policy validity

## Features

- ✅ Query by license plate number
- ✅ Complete SOAT policy information
- ✅ Insurance company name
- ✅ Policy start and end dates
- ✅ Policy status (ACTIVE/INACTIVE)
- ✅ Unique policy code
- ✅ SBS insurer code
- ✅ Police control date
- ✅ Certified response by Verifik.co
