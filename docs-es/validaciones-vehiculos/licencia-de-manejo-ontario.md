---
id: licencia-de-manejo-ontario
title: Licencia de Manejo Ontario
description: Servicio de verificación de licencia de manejo de Ontario
slug: /validaciones-vehiculos/licencia-de-manejo-ontario
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Licencia de Manejo Ontario

## Endpoint

```
https://api.verifik.co/v2/ca/ontario/driver-license 
```

El servicio de Licencia de Manejo de Ontario le permite obtener rápidamente información esencial sobre una licencia de manejo emitida en la provincia de Ontario, Canadá. Al proporcionar el número de documento, puede acceder a detalles como el estado de la licencia y el número de verificación asociado.

Use este servicio para validar y verificar la autenticidad de las licencias de manejo de Ontario de manera eficiente. Ya sea que necesite confirmar la validez de una licencia de manejo para fines de identificación o regulatorios, este servicio proporciona información precisa y actualizada de la licencia.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                                                                    | Ejemplo              |
| ---------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| documentNumber   | String | Sí       | Licencia de manejo a consultar, todos los datos deben ingresarse exactamente como aparecen en este documento. | `S123456789123456`   |

### Request

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/ontario/driver-license',
  params: {documentNumber: 'S123456789123456'},
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
import requests

url = "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

  </TabItem>
  <TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456")!,timeoutInterval: Double.infinity)
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
$request->setUrl('https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456');
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
    "documentNumber": "S123456789123456",
    "licenceStatus": "Valid",
    "verificationNumber": "123V5"
  },
    "signature": {
        "dateTime": "March 12, 2024 3:47 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "8X9FD"
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

### Características

-   **Verificación de Estado de Licencia**: Obtener rápidamente información esencial sobre las licencias de manejo de Ontario
-   **Parámetro Simple**: Solo requiere número de documento para verificación
-   **Número de Verificación**: Obtener el número de verificación asociado para validación adicional
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, Swift y PHP
-   **Cumplimiento Regulatorio**: Perfecto para fines de identificación y regulatorios