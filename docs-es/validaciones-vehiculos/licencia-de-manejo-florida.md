---
id: licencia-de-manejo-florida
title: Licencia de Manejo Florida
description: Servicio de validación de licencia de manejo de Florida
slug: /validaciones-vehiculos/licencia-de-manejo-florida
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Validación de Licencia de Manejo Florida

## Endpoint

```
https://api.verifik.co/v2/usa/florida/driver-license
```

Este servicio permite a los desarrolladores validar el estado, restricciones, endosos y designaciones de las licencias de manejo de Florida. Al proporcionar un número válido de licencia de manejo de Florida, el servicio responde con el estado de la licencia, fecha de vencimiento, restricciones, endosos y designaciones.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    | Ejemplo           |
| ---------------- | ------ | -------- | ---------------------------------------------- | ----------------- |
| documentNumber   | String | Sí       | Número de documento de la persona a consultar. | `B123-456-78-910-0` |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/florida/driver-license',
  params: { documentNumber: 'B123-456-78-910-0'},
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
conn.request("GET", "/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0');
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
        "designations": "None on Record",
        "documentNumber": "B123-456-78-910-0",
        "endorsements": "None on Record",
        "restrictions": "None on Record",
        "status": "As of February 26, 2024, at 12:11 AM, Florida driver license number B123-456-78-910-0 is Valid. This license is a Class E with an expiration date of 12/28/2026."
    },
    "signature": {
        "dateTime": "March 12, 2024 8:15 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "XUXSL"
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
  <TabItem value="409-2" label="409 (Tipo Inválido)">

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [DNIAR]"
}
```

  </TabItem>
</Tabs>

### Características

-   **Validación de Estado de Licencia**: Validar el estado actual de las licencias de manejo de Florida
-   **Información Completa**: Obtener restricciones, endosos y designaciones
-   **Fecha de Vencimiento**: Recuperar información de vencimiento de la licencia
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, Swift y PHP
-   **Datos en Tiempo Real**: Acceso a información actual de la licencia desde registros oficiales