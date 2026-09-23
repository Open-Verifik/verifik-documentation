---
id: "es-docs-es-validaciones-vehiculos-licencia-de-manejo-florida-endpoint"
title: "Licencia de Manejo Florida — Endpoint"
sourcePath: "docs-es/validaciones-vehiculos/licencia-de-manejo-florida.md"
locale: "es"
category: "validaciones-vehiculos"
tags:
  - "usa"
  - "validaciones-vehiculos"
endpoints:
  - "/v2/usa/florida/driver-license"
  - "/v2/usa/florida/driver-license?documentnumber=b123-456-78-910-0"
sourceAnchor: "Endpoint"
slug: "/validaciones-vehiculos/licencia-de-manejo-florida"
url: "https://docs.verifik.co/verifik-es/validaciones-vehiculos/licencia-de-manejo-florida"
---

# Licencia de Manejo Florida
**API path(s):** /v2/usa/florida/driver-license, /v2/usa/florida/driver-license?documentnumber=b123-456-78-910-0

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/usa/florida/driver-license
```

Este servicio permite a los desarrolladores validar el estado, restricciones, endosos y designaciones de las licencias de manejo de Florida. Al proporcionar un número válido de licencia de manejo de Florida, el servicio responde con el estado de la licencia, fecha de vencimiento, restricciones, endosos y designaciones.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                    | Ejemplo           |
| ---------------- | ------ | -------- | ---------------------------------------------- | ----------------- |
| documentNumber   | String | Sí       | Número de documento de la persona a consultar. | `B123-456-78-910-0` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/florida/driver-license',
  params: { documentNumber: 'B123-456-78-910-0'},
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
conn.request("GET", "/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

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

  
  

```php
setUrl('https://api.verifik.co/v2/usa/florida/driver-license?documentNumber=B123-456-78-910-0');
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
