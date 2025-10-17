---
id: colombia-police-record-check
title: Colombia - Colombian Police Record Check
description: Colombian police record check service
---

# Colombian Police Record Check

## Colombian Police Record Check

`GET - https://api.verifik.co/v2/co/policia/consultar`

The Colombian Police Record Check service allows users to verify the criminal history of an individual in Colombia by providing their ID document number. It checks for any pending legal matters with Colombian judicial authorities, in accordance with Article 248 of the Colombian Constitution. The response includes the individual's full name, first name, last name, and additional details about their legal status. This service is ideal for businesses and organizations conducting background checks for hiring or due diligence purposes.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

<table><thead><tr><th width="186">Name</th><th width="82">Type</th><th width="109">Required?</th><th width="236">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, CE.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr></tbody></table>

#### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/policia/consultar',
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
conn.request("GET", "/v2/co/policia/consultar?documentType=CC&documentNumber=123456789", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/policia/consultar?documentType=CC&documentNumber=123456789")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/policia/consultar?documentType=CC&documentNumber=123456789');
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

**Response**

<Tabs>
<TabItem value="200" label="200">

```json
{
  "data": {
    "documentType": "CCAR",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ]
  },
     "details": "NO TIENE ASUNTOS PENDIENTES CON LAS AUTORIDADES JUDICIALES\\nde conformidad con lo establecido en el artículo 248 de la Constitución Política de Colombia. \\n\\nEn cumplimiento de la Sentencia SU-458 del 21 de junio de 2012, proferida por la Honorable Corte Constitucional, la leyenda "NO TIENE ASUNTOS PENDIENTES CON LAS AUTORIDADES JUDICIALES" aplica para todas aquellas personas que no registran antecedentes y para quienes la autoridad judicial competente haya decretado la extinción de la condena o la prescripción de la pena. "
    },
    "signature": {
        "dateTime": "March 13, 2024 10:48 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "7QS69"
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
"message": "documentType must be one of: [CC,CE]"
}
```

</TabItem>
</Tabs>

### Features

-   **Police Record Verification**: Query criminal background records associated with individuals in Colombia
-   **Detailed Information**: Returns complete background check details including full name, legal status and judicial matters
-   **Transparency**: Promotes transparency in background verification processes
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios