---
id: "es-docs-es-validaciones-conductores-chile-licencia-conducir-endpoint"
title: "🇨🇱 Chile - Licencia de Conducir — Endpoint"
sourcePath: "docs-es/validaciones-conductores/chile-licencia-conducir.mdx"
locale: "es"
category: "validaciones-conductores"
tags:
  - "cl"
  - "validaciones-conductores"
endpoints:
  - "/v2/cl/driver-license"
  - "/v2/cl/driver-license?documentnumber=12345678"
sourceAnchor: "Endpoint"
slug: "/validaciones-conductores/chile-licencia-conducir"
url: "https://docs.verifik.co/verifik-es/validaciones-conductores/chile-licencia-conducir"
---

# 🇨🇱 Chile - Licencia de Conducir
**API path(s):** /v2/cl/driver-license, /v2/cl/driver-license?documentnumber=12345678

## Endpoint

Este servicio consulta una licencia de conducir chilena por número (cuerpo del RUN). Hoy solo cubre **Municipalidad de Santiago** (`tramites.munistgo.cl`). Licencias de otras comunas (por ejemplo Ñuñoa) responden **404** aunque el número sea válido. Eso es cobertura, no una caída del servicio.

### Endpoint

```
GET https://api.verifik.co/v2/cl/driver-license
```

Consulta una licencia **emitida en Santiago** por **`documentNumber`**. Suele devolver **RUT**, **clase**, **restricciones**, **fechas de control**, **comuna** y **dirección**, según el registro—útil para **flotas** y **RR.HH.** donde importa la **habilitación para conducir**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Sí** | Cuerpo de 8 dígitos del RUN/licencia. Se eliminan puntos, comas, espacios y un dígito verificador opcional `-K` (`12.345.678-K` → `12345678`). | `12345678` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cl/driver-license',
  params: {
    documentNumber: '12345678'
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
conn.request("GET", "/v2/cl/driver-license?documentNumber=12345678", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/cl/driver-license?documentNumber=12345678');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/driver-license?documentNumber=12345678")!,timeoutInterval: Double.infinity)
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
