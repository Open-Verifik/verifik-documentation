---
id: "es-docs-es-validaciones-de-identidad-estados-unidos-encabezados-2"
title: "Verificación de SSN en Estados Unidos — Encabezados"
sourcePath: "docs-es/validaciones-de-identidad/estados-unidos.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "usa"
  - "validaciones-de-identidad"
endpoints:
  - "/v2/usa/ssn"
  - "/v2/usa/ssn?documentnumber=123-45-678"
sourceAnchor: "Encabezados"
slug: "/validaciones-de-identidad/estados-unidos"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/estados-unidos"
---

# Verificación de SSN en Estados Unidos
**API path(s):** /v2/usa/ssn, /v2/usa/ssn?documentnumber=123-45-678

La API de Verificación de SSN de Verifik te ayuda a autenticar Números de Seguro Social (SSN) emitidos en Estados Unidos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la validez de Números de Seguro Social.

## Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentNumber` | string | Sí | SSN a consultar, debe escribirse exactamente como aparece en el documento. |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/ssn',
  params: {
    documentNumber: '123-45-678'
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
conn.request("GET", "/v2/usa/ssn?documentNumber=123-45-678", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/usa/ssn?documentNumber=123-45-678');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/ssn?documentNumber=123-45-678")!,timeoutInterval: Double.infinity)
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
