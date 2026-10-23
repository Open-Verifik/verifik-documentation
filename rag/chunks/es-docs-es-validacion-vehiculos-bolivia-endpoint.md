---
id: "es-docs-es-validacion-vehiculos-bolivia-endpoint"
title: "🇧🇴 Bolivia - Información de Vehículos — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/bolivia.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "bo"
  - "validacion-vehiculos"
endpoint: "/v2/bo/vehicle"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/bolivia"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/bolivia"
---

# 🇧🇴 Bolivia - Información de Vehículos
**API path(s):** /v2/bo/vehicle

## Endpoint

El Servicio de Información de Vehículos en Bolivia te permite recuperar detalles precisos sobre un vehículo registrado en el país. Al proporcionar el número de placa de matrícula, el servicio devuelve información como el número de póliza del vehículo, marca, clase (ej. motocicleta de trabajo), ubicación de registro, tipo de servicio (ej. particular) y modelo.

### Endpoint

```
GET https://api.verifik.co/v2/bo/vehicle
```

Consulta un vehículo en Bolivia por **`plate`** (placa de matrícula). Devuelve detalles del vehículo y del registro para **verificación** y **cumplimiento**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Sí** | Placa de matrícula del vehículo a consultar. | `ABC1234` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/bo/vehicle',
  params: {
    plate: 'ABC1234'
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
conn.request("GET", "/v2/bo/vehicle?plate=ABC1234", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/bo/vehicle?plate=ABC1234');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/bo/vehicle?plate=ABC1234")!,timeoutInterval: Double.infinity)
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
