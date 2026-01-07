---
id: dea-background-check
title: DEA Background Check
description: DEA background check service
---

# DEA Background Check

### Endpoint

```
https://api.verifik.co/v2/dea
```

This API allows businesses and organizations to verify whether a person or entity appears on the U.S. Drug Enforcement Administration (DEA) watchlist. By providing a document type and document number, users can quickly determine if the individual or organization has been flagged by the DEA.

The service returns a boolean indicator showing whether a match exists and, if applicable, includes a URL linking to the official DEA record.

This tool is essential for regulatory compliance and risk mitigation in industries where individuals or entities may be involved with controlled substances.

### **Use Cases**

* **Regulatory Compliance:** Ensure that your business operations comply with U.S. federal regulations by screening individuals or entities for DEA-related flags.
* **Fraud Prevention:** Identify potential risks associated with individuals or organizations involved in controlled substances.
* **KYC & AML Compliance:** Essential for industries such as healthcare, pharmaceuticals, logistics, and finance to comply with Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query via Document**

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>False</code></td><td>The document type that you want to request.</td></tr><tr><td>documentNumber</td><td>String</td><td><code>False</code></td><td>Document number to consult, without spaces or points. </td></tr></tbody></table>

#### Query via Full Name

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>fullName</td><td>String</td><td><code>False</code></td><td>Instead of documentType and documentNumber, you can pass the name directly of the person/business.</td></tr></tbody></table>

### Parameters

:::info
For the complete list of supported **Document Types** and their specific mandatory parameters, please visit the [Document Types](/docs/background-check/document-types) guide.
:::

### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/dea',
  params: {documentType: 'CC', documentNumber: '80251972'},
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
conn.request("GET", "/v2/dea?fullName=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/dea?fullName=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/dea?fullName=');
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

### **Response**

<Tabs>
<TabItem value="200" label="200">

```json
{
    "data": {
        "documentType": "CC",
        "documentNumber": "123456789",
        "fullName": "MATEO VERIFIK",
        "firstName": "MATEO",
        "lastName": "VERIFIK",
        "arrayName": [
        "MATEO",
        "VERIFIK"
        ],
        "foundInDEA": true,
        "urlDEA": "https://www.dea.gov/fugitives/ismael-zambada-garcia"
    },
    "signature": {
        "dateTime": "June 28, 2022 11:41 AM",
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
"message": "missing documentType\n. missing documentNumber\n"
}
```

</TabItem>
</Tabs>
