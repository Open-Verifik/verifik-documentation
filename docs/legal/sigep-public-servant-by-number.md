---
id: sigep-public-servant-by-number
title: Colombia - Public Servant Query by Number (SIGEP)
description: Query public servant information by document number from SIGEP
slug: /legal/sigep-public-servant-by-number
---

# Public Servant Query by Number (SIGEP)

## Public Servant Query by Number

`GET - https://api.verifik.co/v2/co/sigep/number`

The SIGEP (Sistema de Información y Gestión del Empleo Público) service allows you to query information about public servants in Colombia by providing their document number and type. This service provides detailed information about public servants including their full name, position, entity, contact information, and profile link.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="186">Name</th><th width="82">Type</th><th width="109">Required?</th><th width="236">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type. Valid parameters: CC, NIT.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>34503110</code></td></tr></tbody></table>

#### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from "axios";

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/co/sigep/number",
	params: { documentType: "CC", documentNumber: "34503110" },
	headers: {
		Accept: "application/json",
		Authorization: "Bearer <tu_token>",
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
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/co/sigep/number?documentType=CC&documentNumber=34503110", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/sigep/number?documentType=CC&documentNumber=34503110")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/co/sigep/number?documentType=CC&documentNumber=34503110');
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
		"arrayName": ["FRANCIA", "ELENA", "MARQUEZ", "MINA"],
		"documentNumber": "34503110",
		"documentType": "CC",
		"firstName": "FRANCIA ELENA",
		"fullName": "FRANCIA ELENA MARQUEZ MINA",
		"lastName": "MARQUEZ MINA",
		"legend": "",
		"records": [
			{
				"name": "FRANCIA ELENA MARQUEZ MINA",
				"linkProfile": "https://www.funcionpublica.gov.co/dafpIndexerBHV/hvSigep/detallarHV/S4588442-0018-4",
				"position": "Servidor Público",
				"entity": "DEPARTAMENTO ADMINISTRATIVO DE LA PRESIDENCIA DE LA REPUBLICA",
				"email": "juliethrincon@presidencia.gov.co",
				"phone": "3822800",
				"location": "BOGOTÁ. D.C. - BOGOTÁ. D.C."
			}
		]
	},
	"signature": {
		"dateTime": "October 27, 2025 8:49 AM",
		"message": "Certified by Verifik.co"
	},
	"id": "VMH0I"
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

## Use Cases

-   **Government Transparency**: Verify public servant information for transparency purposes
-   **Background Checks**: Conduct background checks for employment or business purposes
-   **Due Diligence**: Perform due diligence for partnerships with government entities
-   **Compliance**: Verify compliance with government employment regulations
-   **Data Verification**: Validate public servant data for official records
