---
id: "es-docs-es-identity-peru-foreigner-id-endpoint"
title: "🇵🇪 Perú - Cédula de Extranjero — Endpoint"
sourcePath: "docs-es/identity/peru-foreigner-id.mdx"
locale: "es"
category: "identity"
tags:
  - "pe"
  - "identity"
endpoint: "/v2/pe/foreigner-id/ce"
sourceAnchor: "Endpoint"
slug: "/identidad/peru-cedula-extranjero"
url: "https://docs.verifik.co/verifik-es/identidad/peru-cedula-extranjero"
---

# 🇵🇪 Perú - Cédula de Extranjero
**API path(s):** /v2/pe/foreigner-id/ce

## Endpoint

El servicio de Verificación de Identidad Peruano te permite verificar la identidad de un individuo en Perú por su número de cédula de extranjero. El servicio devuelve el nombre completo y otra información relacionada del individuo, incluyendo estado migratorio, nacionalidad, vencimiento de residencia y detalles de la cédula de extranjero, junto con una firma para certificar la autenticidad de la respuesta.

Este servicio es útil para verificar residentes extranjeros en Perú y acceder a su estado migratorio y validez de documentos.

### Endpoint

```
GET https://api.verifik.co/v2/pe/foreigner-id/ce
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Sí** | Número de documento de la persona a consultar. | `005015372` |
| `dateOfBirth` | string | **Sí** | La fecha de nacimiento del propietario del documento. | `16/08/1993` |

### Solicitud

  

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/pe/foreigner-id/ce',
  params: {
    documentNumber: '005015372',
    dateOfBirth: '16/08/1993'
  },
  headers: { 
    'Authorization': 'Bearer '
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993');
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
?>
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993")!,timeoutInterval: Double.infinity)
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
