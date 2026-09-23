---
id: "es-docs-es-identity-peru-solicitud-2"
title: "Ciudadano Peruano v3 — Solicitud"
sourcePath: "docs-es/identity/peru.mdx"
locale: "es"
category: "identity"
tags:
  - "pe"
  - "identity"
endpoint: "/v3/pe/cedula"
sourceAnchor: "Solicitud"
slug: "/identidad/peru"
url: "https://docs.verifik.co/verifik-es/identidad/peru"
---

# Ciudadano Peruano v3
**API path(s):** /v3/pe/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos peruanos usando el Documento Nacional de Identidad (DNI). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v3/pe/cedula',
  params: {
    documentType: 'DNI',
    documentNumber: '1234567'
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
conn.request("GET", "/v3/pe/cedula?documentType=DNI&documentNumber=1234567", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=1234567');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=1234567")!,timeoutInterval: Double.infinity)
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
