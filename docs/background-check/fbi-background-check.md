---
id: fbi-background-check
title: FBI Background Check
description: FBI background check service
---

# FBI Background Check

### Endpoint

```
https://api.verifik.co/v2/fbi
```

This API allows businesses and organizations to verify whether a person or a document appears in the FBI database. By providing a document type and document number, users can retrieve information about the individual, including their full name, first name, and last name, if a match is found.

This service is ideal for verifying the authenticity of documents and conducting detailed identity checks as part of compliance, security, or regulatory processes.

### **Use Cases**

* **Identity Verification:** Ensure that documents presented by individuals are valid and consistent with FBI records.
* **Compliance:** Meet regulatory requirements by conducting thorough background checks on individuals involved in sensitive transactions.
* **Fraud Prevention:** Protect your business by verifying individuals' identities before establishing relationships or processing critical operations.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query via Document**

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>False</code></td><td>The document type that you want to request.</td></tr><tr><td>documentNumber</td><td>String</td><td><code>False</code></td><td>Document number to consult, without spaces or points.</td></tr></tbody></table>

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
  url: 'https://api.verifik.co/v2/fbi',
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
conn.request("GET", "/v2/fbi?fullName=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/fbi?fullName=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/fbi?fullName=');
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
  "data": {
    "documentType": "CC",
    "documentNumber": "80251972",
    "fullName": "WILVER VILLEGAS PALOMINO",
    "firstName": "WILVER",
    "lastName": "VILLEGAS PALOMINO",
    "arrayName": [
      "WILVER",
      "VILLEGAS",
      "PALOMINO"
    ],
    "foundInFBI": true,
    "urlFBI": "https://www.fbi.gov/wanted/cei/wilver-villegas-palomino-"
  },
  "signature": {
    "dateTime": "June 28, 2022 12:36 PM",
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
