---
id: "es-docs-es-vehicle-validation-paraguay-endpoint"
title: "🇵🇾 Paraguay - Información de Vehículos — Endpoint"
sourcePath: "docs-es/vehicle-validation/paraguay.mdx"
locale: "es"
category: "vehicle-validation"
tags:
  - "py"
  - "vehicle-validation"
endpoints:
  - "/v2/py/vehicle"
  - "/v2/py/vehicle?plate=abc123"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/paraguay"
url: "https://docs.verifik.co/verifik-es/vehicle-validation/paraguay"
---

# 🇵🇾 Paraguay - Información de Vehículos
**API path(s):** /v2/py/vehicle, /v2/py/vehicle?plate=abc123

## Endpoint

Este servicio proporciona información detallada sobre un vehículo en Paraguay usando su número de placa de matrícula. La respuesta incluye detalles del vehículo como la marca, chasis, tipo, año, número de ejes, el nombre del propietario, el tipo de servicio, el estado actual del vehículo y el número de placa de matrícula.

Esta información es útil para varios propósitos, incluyendo verificación de vehículos, verificaciones de propiedad y monitoreo de cumplimiento.

### Endpoint

```
GET https://api.verifik.co/v2/py/vehicle
```

Consulta un vehículo en Paraguay por **`plate`** (placa de matrícula). Devuelve detalles del vehículo y del propietario para **verificación** y **cumplimiento**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `plate` | string | Sí | Número de placa a consultar. |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/py/vehicle',
  params: {
    plate: 'ABC123'
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
conn.request("GET", "/v2/py/vehicle?plate=ABC123", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/py/vehicle?plate=ABC123');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/py/vehicle?plate=ABC123")!,timeoutInterval: Double.infinity)
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
