---
id: licencia-conducir-chile
title: Licencia de Conducir
description: Servicio de licencia de conducir chilena
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Licencia de Conducir

## Licencia de conducir chilena

<mark >`GET - https://api.verifik.co/v2/cl/driver-license`</mark>

Este servicio te permite recuperar información detallada sobre una licencia de conducir chilena usando el número de licencia como parámetro de consulta. Puedes obtener información como el RUT (número único de identificación tributaria), dirección, clase de licencia, fechas de control y más. Proporciona datos esenciales relacionados con la licencia de conducir en un formato estructurado.

### Implementación

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Parámetros de Consulta**

<table><thead><tr><th width="188">Name</th><th width="85">Type</th><th width="108">Required?</th><th width="229">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Licencia a consultar, sin espacios ni puntos.</td><td><code>12345678</code></td></tr></tbody></table>

#### Solicitud

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/cl/driver-license>',
  params: {documentNumber: '12345678'},

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
conn.request("GET", "/v2/cl/driver-license?documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/driver-license?documentNumber=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/cl/driver-license?documentNumber=');
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

**Respuesta**

<Tabs>
<TabItem value="200" label="200">

```json
{
  "data": {
    "RUT": "12.345.678-9",
    "address": "PEDRO LEON UGALDE 1825",
    "class": "B",
    "controlDate": "23/08/2009",
    "documentNumber": "012345678",
    "lastControlDate": "15/07/2003",
    "lastName": "VERIFIK",
    "license": "CA-12345678",
    "municipality": "SANTIAGO",
    "names": "MATEO",
    "procedure": "DUPLICADO",
    "restrictions": ".USAR LENTES O DE CONTACTO. "
  },
  "signature": {
    "dateTime": "November 2, 2023 3:12 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1tm6q"
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
"message": "missing documentNumber\n"
}
```

</TabItem>
</Tabs>
