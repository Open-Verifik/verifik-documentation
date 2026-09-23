---
id: "es-docs-es-identity-canada-licencia-de-conducir-de-columbia-britanica-2"
title: "Validación de Licencias de Conducir en Canadá — Licencia de Conducir de Columbia Británica"
sourcePath: "docs-es/identity/canada.mdx"
locale: "es"
category: "identity"
tags:
  - "ca"
  - "identity"
endpoints:
  - "/v2/ca/british-columbia/driver-license"
  - "/v2/ca/ontario/driver-license"
sourceAnchor: "Licencia de Conducir de Columbia Británica"
slug: "/identidad/canada"
url: "https://docs.verifik.co/verifik-es/identidad/canada"
---

# Validación de Licencias de Conducir en Canadá
**API path(s):** /v2/ca/british-columbia/driver-license, /v2/ca/ontario/driver-license

La API de Verificación de Licencias de Conducir de Verifik te ayuda a autenticar licencias de conducir canadienses usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la validez de licencias de conducir emitidas en las provincias de Columbia Británica y Ontario.

## Licencia de Conducir de Columbia Británica

### Endpoint

```
GET https://api.verifik.co/v2/ca/british-columbia/driver-license
```

El servicio de Verificación de Licencia de Conducir de Columbia Británica ofrece un método directo para verificar la autenticidad y validez de una licencia de conducir en la provincia de Columbia Británica, Canadá. Al utilizar este servicio, puedes validar rápidamente una licencia de conducir basándote en el número de documento proporcionado y el apellido.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Sí** | Licencia de conducir a consultar, todos los datos deben ingresarse exactamente como se encuentran en este documento. | `1123456` |
| `lastName` | string | **Sí** | Apellido que aparece en la Licencia de Conducir. | `HELLO` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/british-columbia/driver-license',
  params: {
    documentNumber: '7793458',
    lastName: 'JIWA'
  },
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
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
conn.request("GET", "/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/ca/british-columbia/driver-license?documentNumber=1123456&lastName=HELLO');
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
