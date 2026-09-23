---
id: "es-docs-es-validaciones-vehiculos-licencia-de-manejo-kansas-endpoint"
title: "Licencia de Manejo Kansas — Endpoint"
sourcePath: "docs-es/validaciones-vehiculos/licencia-de-manejo-kansas.md"
locale: "es"
category: "validaciones-vehiculos"
tags:
  - "usa"
  - "validaciones-vehiculos"
endpoints:
  - "/v2/usa/kansas/driver-license"
  - "/v2/usa/kansas/driver-license?documentnumber=k12345678&dateofbirth=29/01/1974&firstname=mateo&lastname=verifik"
sourceAnchor: "Endpoint"
slug: "/validaciones-vehiculos/licencia-de-manejo-kansas"
url: "https://docs.verifik.co/verifik-es/validaciones-vehiculos/licencia-de-manejo-kansas"
---

# Licencia de Manejo Kansas
**API path(s):** /v2/usa/kansas/driver-license, /v2/usa/kansas/driver-license?documentnumber=k12345678&dateofbirth=29/01/1974&firstname=mateo&lastname=verifik

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/usa/kansas/driver-license
```

El Servicio de Validación de Licencia de Manejo de Kansas permite a los desarrolladores validar programáticamente el estado, restricciones, endosos y designaciones de las licencias de manejo de Kansas. Al proporcionar un número válido de licencia de manejo de Kansas, los usuarios pueden obtener una respuesta que incluye detalles como el estado de la licencia, fecha de vencimiento, cualquier restricción o endoso, y designaciones asociadas con la licencia.

Este servicio es esencial para verificar credenciales de manejo y asegurar el cumplimiento con las regulaciones estatales.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    | Ejemplo      |
| ---------------- | ------ | -------- | ---------------------------------------------- | ------------ |
| documentNumber   | String | Sí       | Número de documento de la persona a consultar. | `K12345678`  |
| dateOfBirth      | String | Sí       | La fecha de nacimiento del titular de la licencia (formato: DD/MM/YYYY). | `29/1/1974`  |
| firstName        | String | Sí       | Nombre del titular de la licencia.             | `MATEO`      |
| lastName         | String | Sí       | Apellido del titular de la licencia.           | `VERIFIK`    |

### Request

  

```javascript

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
    Authorization: 'jwt '
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

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

  
  

```php
setUrl('https://api.verifik.co/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK');
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
