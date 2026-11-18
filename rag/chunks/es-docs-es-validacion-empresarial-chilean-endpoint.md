---
id: "es-docs-es-validacion-empresarial-chilean-endpoint"
title: "🇨🇱 Chile - Validación Empresarial — Endpoint"
sourcePath: "docs-es/validacion-empresarial/chilean.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "cl"
  - "validacion-empresarial"
endpoint: "/v2/cl/company"
sourceAnchor: "Endpoint"
slug: "/validacion-empresarial/chilean"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/chilean"
---

# 🇨🇱 Chile - Validación Empresarial
**API path(s):** /v2/cl/company

## Endpoint

Este servicio te permite recuperar información sobre una empresa en Chile proporcionando su tipo de documento y número. La respuesta del servicio contendrá el nombre de la empresa, su categoría comercial, subcategoría y actividad. Además, este servicio te proporcionará una lista de servicios para los cuales la empresa está autorizada a trabajar.

### Endpoint

```
GET https://api.verifik.co/v2/cl/company
```

Consulta empresas chilenas por RUT: razón social, actividad, rubros y líneas de negocio autorizadas desde registros oficiales para KYB y due diligence de proveedores.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre | Tipo | Requerido | Descripción | Ejemplo |
| ---- | ---- | -------- | ----------- | ------- |
| `documentType` | string | **Sí** | Tipo de documento. Parámetro permitido: RUT. | `RUT` |
| `documentNumber` | string | **Sí** | RUT de la empresa que quieres consultar, ingresa este parámetro con puntos y guiones según lo establecido por la documentación nativa. | `33516727409` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cl/company',
  params: {
    documentType: 'RUT',
    documentNumber: '212957739'
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
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer ",
}
conn.request("GET", "/v2/cl/company?documentType=RUT&documentNumber=212957739", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=212957739');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setHeader('Accept', 'application/json');
$request->setHeader('Authorization', 'Bearer ');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=212957739")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer ", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()
```
