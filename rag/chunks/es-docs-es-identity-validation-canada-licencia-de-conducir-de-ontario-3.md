---
id: "es-docs-es-identity-validation-canada-licencia-de-conducir-de-ontario-3"
title: "Validación de Licencias de Conducir en Canadá — Licencia de Conducir de Ontario"
sourcePath: "docs-es/identity-validation/canada.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "ca"
  - "identity-validation"
endpoint: "/v2/ca/british-columbia/driver-license"
sourceAnchor: "Licencia de Conducir de Ontario"
slug: "/identity-validation/canada"
url: "https://docs.verifik.co/verifik-es/identity-validation/canada"
---

# Validación de Licencias de Conducir en Canadá
**API path(s):** /v2/ca/british-columbia/driver-license

La API de Verificación de Licencias de Conducir de Verifik te ayuda a autenticar licencias de conducir canadienses usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la validez de licencias de conducir emitidas en las provincias de Columbia Británica y Ontario.

## Licencia de Conducir de Ontario

### Endpoint

```
GET https://api.verifik.co/v2/ca/ontario/driver-license
```

El servicio de Licencia de Conducir de Ontario te permite obtener rápidamente información esencial sobre una licencia de conducir emitida en la provincia de Ontario, Canadá. Al proporcionar el número de documento, puedes acceder a detalles como el estado de la licencia y el número de verificación asociado.

Usa este servicio para validar y verificar la autenticidad de las licencias de conducir de Ontario de manera eficiente. Ya sea que necesites confirmar la validez de una licencia de conducir para fines de identificación o regulatorios, este servicio proporciona información precisa y actualizada de la licencia.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentNumber` | string | Sí | Licencia de conducir a consultar, todos los datos deben ingresarse exactamente como se encuentran en este documento. |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ca/ontario/driver-license',
  params: {
    documentNumber: 'S123456789123456'
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

url = "https://api.verifik.co/v2/ca/ontario/driver-license?documentNumber=S123456789123456"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
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
?>
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
