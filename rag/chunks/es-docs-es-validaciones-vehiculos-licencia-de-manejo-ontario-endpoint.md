---
id: "es-docs-es-validaciones-vehiculos-licencia-de-manejo-ontario-endpoint"
title: "Licencia de Manejo Ontario — Endpoint"
sourcePath: "docs-es/validaciones-vehiculos/licencia-de-manejo-ontario.md"
locale: "es"
category: "validaciones-vehiculos"
tags:
  - "ca"
  - "validaciones-vehiculos"
endpoint: "/v2/ca/ontario/driver-license"
sourceAnchor: "Endpoint"
slug: "/validaciones-vehiculos/licencia-de-manejo-ontario"
url: "https://docs.verifik.co/verifik-es/validaciones-vehiculos/licencia-de-manejo-ontario"
---

# Licencia de Manejo Ontario
**API path(s):** /v2/ca/ontario/driver-license

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/ca/ontario/driver-license 
```

El servicio de Licencia de Manejo de Ontario le permite obtener rápidamente información esencial sobre una licencia de manejo emitida en la provincia de Ontario, Canadá. Al proporcionar el número de documento, puede acceder a detalles como el estado de la licencia y el número de verificación asociado.

Use este servicio para validar y verificar la autenticidad de las licencias de manejo de Ontario de manera eficiente. Ya sea que necesite confirmar la validez de una licencia de manejo para fines de identificación o regulatorios, este servicio proporciona información precisa y actualizada de la licencia.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                                                                    | Ejemplo              |
| ---------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| documentNumber   | String | Sí       | Licencia de manejo a consultar, todos los datos deben ingresarse exactamente como aparecen en este documento. | `S123456789123456`   |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/ontario/driver-license',
  params: {documentNumber: 'S123456789123456'},
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

url = "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

  
  

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

  
  

```php
setUrl('https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456');
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
