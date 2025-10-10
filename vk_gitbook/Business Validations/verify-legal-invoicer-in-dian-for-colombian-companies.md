# Verify Legal Invoicer in DIAN for Colombian Companies

## Verify Legal Invoicer in DIAN for Colombian Companies

<mark style="color:green;">`GET - https://api.verifik.cohttps://api.verifik.co/v2/co/company/dian/invoicer`</mark>

This service allows you to verify if a company is registered with DIAN (Dirección de Impuestos y Aduanas Nacionales) as a legal invoicer. By querying the company's registration details, you can determine if it is officially recognized for issuing invoices. A successful response confirms the company's status as a registered invoicer.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Query Parameters**

<table><thead><tr><th width="184">Name</th><th width="79">Type</th><th width="111">Required?</th><th width="236">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Valid parameter: NIT</td><td><code>NIT</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>NIT of the company, without spaces, points and without verification number.</td><td><code>901331380</code></td></tr></tbody></table>

#### Request

{% tabs %}
{% tab title="JavaScript" %}

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.cohttps://api.verifik.co/v2/co/company/dian/invoicer>',
  params: {documentType: 'NIT', documentNumber: '901331380'},
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

{% endtab %}

{% tab title="Python" %}

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "https://api.verifik.co/v2/co/company/dian/invoicer?documentType=NIT&documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

{% endtab %}

{% tab title="Swift" %}

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.cohttps://api.verifik.co/v2/co/company/dian/invoicer?documentType=NIT&documentNumber=")!,timeoutInterval: Double.infinity)
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

{% endtab %}

{% tab title="PHP" %}

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.cohttps://api.verifik.co/v2/co/company/dian/invoicer?documentType=NIT&documentNumber=');
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

{% endtab %}
{% endtabs %}

### **Response**

{% tabs %}
{% tab title="200" %}

```json
{
  "data": {
    "documentNumber": "901331380",
    "documentType": "NIT",
    "email": "hola@verifik.co",
    "nit": "901331380"
  },
  "signature": {
    "dateTime": "May 11, 2023 7:57 PM",
    "message": "Certified by Verifik.co"
  }
}
```

{% endtab %}

{% tab title="404" %}

```json
{
"code": "NotFound",
"message": "No existe contribuyente asociado a la CUIT ingresada",
"signature": {
"dateTime": "February 21, 2024 7:52 PM",
"message": "Certified by Verifik.co"
}
}
```

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "missing documentType\n. missing documentNumber\n"
}
```

{% endtab %}

{% tab title="409" %}

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [NIT]"
}
```

{% endtab %}
{% endtabs %}
