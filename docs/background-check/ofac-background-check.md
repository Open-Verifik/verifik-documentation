---
id: ofac-background-check
title: OFAC Background Check
description: OFAC background check service
---

# OFAC Background Check

### Endpoint

```
https://api.verifik.co/v2/ofac
```

This service provides a simple way to check if a person or entity appears on the U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC) Specially Designated Nationals (SDN) and Blocked Persons List. By using this service, you can verify whether the individual or entity is subject to sanctions or restrictions enforced by OFAC.

### **Use Cases:**

* **Sanctions Compliance:** Essential for financial institutions, exporters, and multinational corporations to ensure they are not dealing with sanctioned individuals or entities.
* **Risk Mitigation:** Helps businesses avoid penalties by ensuring compliance with U.S. and international trade regulations.
* **KYC & AML:** A critical tool for Know Your Customer (KYC) and Anti-Money Laundering (AML) processes in industries such as banking, insurance, and real estate.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query via Document**

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>False</code></td><td>The document type that you want to request.</td></tr><tr><td>documentNumber</td><td>String</td><td><code>False</code></td><td>Document number to consult, without spaces or points.</td></tr></tbody></table>

#### Query via Full Name

<table><thead><tr><th width="198">Name</th><th width="83">Type</th><th width="107">Required</th><th width="363">Description</th></tr></thead><tbody><tr><td>fullName</td><td>String</td><td><code>False</code></td><td>Instead of documentType and documentNumber, you can pass the name directly of the person/business.</td></tr></tbody></table>

### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ofac',
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
conn.request("GET", "/v2/ofac?fullName=Mateo%20Verifik", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ofac?fullName=Mateo%20Verifik")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ofac?fullName=Mateo Verifik');
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
<TabItem value="200-not-found" label="200 (Not Found in OFAC)">

```json
{
    "data": {
        "documentType": "CC",
        "documentNumber": "80927603",
        "fullName": "MATEO ANDRES VERIFIK",
        "firstName": "MATEO ANDRES",
        "lastName": "VERIFIK",
        "arrayName": [
            "MATEO",
            "ANDRES",
            "VERIFIK"
        ],
        "foundInOFAC": false,
        "details": {}
    },
    "signature": {
        "dateTime": "June 27, 2025 4:33 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "U4RBQ"
}
```

</TabItem>
<TabItem value="200-found" label="200 (Found in OFAC)">

```json
{
    "data": {
        "documentType": "CURP",
        "documentNumber": "VILJ580411HSLLRN09",
        "fullName": "JUAN CARLOS VILLEGAS LOERA",
        "firstName": "JUAN CARLOS",
        "lastName": "VILLEGAS LOERA",
        "arrayName": [
            "JUAN",
            "CARLOS",
            "VILLEGAS",
            "LOERA"
        ],
        "foundInOFAC": true,
        "details": {
            "fullLink": "https://sanctionssearch.ofac.treas.gov/Details.aspx?id=15785",
            "type": "Individual",
            "list": "SDN",
            "lastName": "VILLEGAS LOERA",
            "program": "SDNTK",
            "firstName": "Juan Carlos",
            "nationality": "",
            "title": "",
            "citizenship": "",
            "dateOfBirth": "11 Apr 1958",
            "placeOfBirth": "Culiacan, Sinaloa, Mexico",
            "remarks": "(Linked To: BUENOS AIRES SERVICIOS, S.A. DE C.V.; Linked To: ESTACIONES DE SERVICIOS CANARIAS, S.A. DE C.V.; Linked To: GASODIESEL Y SERVICIOS ANCONA, S.A. DE C.V.; Linked To: GASOLINERA ALAMOS COUNTRY, S.A. DE C.V.; Linked To: GASOLINERA Y SERVICIOS VILLABONITA, S.A. DE C.V.; Linked To: PETROBARRANCOS, S.A. DE C.V.; Linked To: SERVICIOS CHULAVISTA, S.A. DE C.V.)",
            "identifications": [
                {
                    "type": "C.U.R.P.",
                    "idNumber": "VILJ580411HSLLRN09",
                    "country": "Mexico",
                    "issueDate": null,
                    "expireDate": null
                }
            ],
            "addresses": [
                {
                    "address": "Calle Golfo de California No. 1635",
                    "city": "Culiacan",
                    "stateOrProvince": "Sinaloa",
                    "postalCode": "",
                    "country": "Mexico"
                }
            ]
        }
    },
    "signature": {
        "dateTime": "June 27, 2025 4:48 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "1LMO7"
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
    "message": "documentType must be one of: [DNIAR]"
}
```

</TabItem>
</Tabs>
