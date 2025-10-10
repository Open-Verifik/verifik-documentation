---
id: colombia-public-contracts
title: Colombia - Public Contracts
description: Colombian public contracts background check
---

# Public Contracts

## Public Contracts

`GET - https://api.verifik.co/v2/co/contracts`

The Public Contracts service allows users to retrieve a list of public contracts associated with a person or company by providing their document number and document type. The response includes valuable details about each contract, such as contractor information, contract values, involved entities, contract duration, and more.

This service promotes transparency and facilitates the monitoring of public contracts with the state in Colombia.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="185">Name</th><th width="85">Type</th><th width="112">Required?</th><th width="227">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document Type. Allowed Parameters: CC, NIT.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document Number to request</td><td><code>123456789</code></td></tr></tbody></table>

**Request**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/contracts',
  params: {documentType: 'CC', documentNumber: '123456789'},
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
conn.request("GET", "/v2/co/contracts?documentType=CC&documentNumber=63535790", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/contracts?documentType=CC&documentNumber=63535790")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/contracts?documentType=CC&documentNumber=63535790');
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

### **Response**

<Tabs>
<TabItem value="200" label="200">

```json
{
  "value": {
    "data": {
      "contractor": [
        {
          "contractor": "123456789",
          "contractor_name": "MATEO VERIFIK",
          "count": 19
        }
      ],
      "contracts": [
        {
          "contractor_reference": "18486325807904513",
          "contractor_id": "63535790",
          "contractor": "DIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "824002672",
          "entity": "CESAR ESE HOSPITAL CAMILO VILLAZON PUMAREJO PUEBLO BELLO",
          "url": "https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=18-4-8632580",
          "value": 1250000,
          "object": "PRESTACION DE SERVICIOS PARA EL MANTENIMIENTO PREVENTIVO PLANIFICADO Y CORRECTIVO DE LOS EQUIPOS BIOMEDICOS DE LAS DISTINTAS AREAS DE LA ESE HOSPITAL CAMILO VILLAZON PUMAREJO DE PUEBLO BELLO  CESAR",
          "process_id": "4",
          "department": "CESAR",
          "contract_start_date": "2018-11-01",
          "contract_end_date": "2018-11-16"
        }
      ]
    },
    "signature": {
      "dateTime": "May 24, 2023 4:41 PM",
      "message": "Certified by Verifik.co"
    }
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
<TabItem value="409-1" label="409 (Missing Parameters)">

```json
{
"code": "MissingParameter",
"message": "missing documentType\n. missing documentNumber\n"
}
```

</TabItem>
<TabItem value="409-2" label="409 (Invalid Document Type)">

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC,NIT]"
}
```

</TabItem>
</Tabs>
