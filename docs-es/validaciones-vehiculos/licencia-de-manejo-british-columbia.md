---
id: licencia-de-manejo-british-columbia
title: Licencia de Manejo British Columbia
description: Servicio de verificación de licencia de manejo de British Columbia
slug: /validaciones-vehiculos/licencia-de-manejo-british-columbia
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Licencia de Manejo British Columbia

## Endpoint

```
https://api.verifik.co/v2/ca/british-columbia/driver-license 
```

El servicio de verificación de licencia de manejo de British Columbia ofrece un método directo para verificar la autenticidad y validez de una licencia de manejo en la provincia de British Columbia, Canadá. Al utilizar este servicio, puede validar rápidamente una licencia de manejo basándose en el número de documento proporcionado y el apellido.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                                                                    | Ejemplo      |
| ---------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- | ------------ |
| documentNumber   | String | Sí       | Licencia de manejo a consultar, todos los datos deben ingresarse exactamente como aparecen en este documento. | `1123456`    |
| lastName         | String | Sí       | Apellido que aparece en la Licencia de Manejo.                                                | `HELLO`      |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/british-columbia/driver-license',
  params: {documentNumber: '7793458', lastName: 'JIWA'},
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
conn.request("GET", "/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO');
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

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "documentNumber": "1123456",
    "lastName": "HELLO",
    "valid": true
  },
  "signature": {
    "dateTime": "August 8, 2023 10:56 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1234567"
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
    "message": "missing lastName\n missing documentNumber\n"
}
```

  </TabItem>
  <TabItem value="409-2" label="409 (Error de Longitud)">

```json
{
    "code": "MissingParameter",
    "message": "documentNumber maximum length: 15\n"
}
```

  </TabItem>
</Tabs>

### Características

-   **Verificación de Licencia**: Verificar la autenticidad y validez de las licencias de manejo de British Columbia
-   **Parámetros Simples**: Solo requiere número de documento y apellido
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, Swift y PHP
-   **Manejo Completo de Errores**: Respuestas de error detalladas para varios escenarios
-   **Validación en Tiempo Real**: Validación rápida basada en registros oficiales