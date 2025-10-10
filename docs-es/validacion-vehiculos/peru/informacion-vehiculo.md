---
id: informacion-vehiculo-peru
title: Información de Vehículo
description: Servicio de información de vehículos peruanos
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Perú

## Información de Vehículos Peruanos

<mark >`GET - https://api.verifik.co/v2/pe/vehiculo/placa`</mark>

El servicio de información de vehículos peruanos proporciona datos detallados sobre vehículos registrados en Perú basado en su número de placa de matrícula. La respuesta incluye detalles clave como la marca, modelo, año, números de serie del motor y chasis, capacidad de asientos y tipo de uso del vehículo.

### Implementación

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Parámetros de Consulta**

<table><thead><tr><th width="107">Name</th><th width="78">Type</th><th width="111">Required?</th><th width="330">Description</th><th>Example</th></tr></thead><tbody><tr><td>plate</td><td>String</td><td><code>True</code></td><td>Número de placa a consultar, sin espacios ni puntos.</td><td><code>ABC123</code></td></tr></tbody></table>

#### Solicitud

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: '<https://api.verifik.co/v2/pe/vehiculo/placa>',
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
conn.request("GET", "/v2/pe/vehiculo/placa?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/vehiculo/placa?plate=")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/pe/vehiculo/placa?plate=');
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

### **Respuesta**

<Tabs>
<TabItem value="200" label="200">

```json
{
"data": {
"plate": "ABC123",
"use": "PARTICULAR",
"type": "AUTOMOVIL",
"brand": "NISSAN",
"model": "VERSA",
"year": "2014",
"engineSerial": "HR123456789J",
"chasisSerial": "1234567890",
"seats": "5",
"validFormat": true,
"serial": "1234567890"
},
"signature": {
"dateTime": "August 1, 2022 5:23 PM",
"message": "Certified by [Verifik.co](<http://verifik.co/>)"
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
