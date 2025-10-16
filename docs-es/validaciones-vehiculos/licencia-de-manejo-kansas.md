---
id: licencia-de-manejo-kansas
title: Licencia de Manejo Kansas
description: Servicio de verificación de licencia de manejo de Kansas
slug: /validaciones-vehiculos/licencia-de-manejo-kansas
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Verificación de Licencia de Manejo Kansas

## Endpoint

```
https://api.verifik.co/v2/usa/kansas/driver-license
```

El Servicio de Validación de Licencia de Manejo de Kansas permite a los desarrolladores validar programáticamente el estado, restricciones, endosos y designaciones de las licencias de manejo de Kansas. Al proporcionar un número válido de licencia de manejo de Kansas, los usuarios pueden obtener una respuesta que incluye detalles como el estado de la licencia, fecha de vencimiento, cualquier restricción o endoso, y designaciones asociadas con la licencia.

Este servicio es esencial para verificar credenciales de manejo y asegurar el cumplimiento con las regulaciones estatales.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    | Ejemplo      |
| ---------------- | ------ | -------- | ---------------------------------------------- | ------------ |
| documentNumber   | String | Sí       | Número de documento de la persona a consultar. | `K12345678`  |
| dateOfBirth      | String | Sí       | La fecha de nacimiento del titular de la licencia (formato: DD/MM/YYYY). | `29/1/1974`  |
| firstName        | String | Sí       | Nombre del titular de la licencia.             | `MATEO`      |
| lastName         | String | Sí       | Apellido del titular de la licencia.           | `VERIFIK`    |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/kansas/driver-license',
  params: {
    documentNumber: 'K12345678',
    dateOfBirth: '29/01/1974',
    firstName: 'MATEO',
    lastName: 'VERIFIK'
  },
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
conn.request("GET", "/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK');
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
    "cdlStatus": "",
    "currentCredentialInformation": [
      {
        "credentialType": "Driver's License",
        "issueDate": "03/04/2020",
        "expirationDate": "01/29/2026"
      }
    ],
    "dateOfBirth": "29/1/1974",
    "dlNumber": "K02884565",
    "dlStatus": "Valid",
    "documentNumber": "K12345678",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "systemGeneratedDl": "N"
  },
  "signature": {
    "dateTime": "January 19, 2024 4:36 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1Q8UH"
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
    "message": "missing documentNumber\n. missing dateOfBirth\n. missing firstName\n. missing lastName\n"
}
```

  </TabItem>
  <TabItem value="409-2" label="409 (Error de Formato)">

```json
{
    "code": "MissingParameter",
    "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

  </TabItem>
</Tabs>

### Características

-   **Validación Completa de Licencia**: Validar estado, restricciones, endosos y designaciones
-   **Múltiples Parámetros Requeridos**: Número de documento, fecha de nacimiento, nombre y apellido
-   **Información Detallada de Licencia**: Obtener fecha de emisión, fecha de vencimiento y tipo de credencial
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, Swift y PHP
-   **Cumplimiento Estatal**: Esencial para verificar credenciales de manejo y asegurar el cumplimiento