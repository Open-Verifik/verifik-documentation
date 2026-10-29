---
id: "es-docs-es-validacion-vehiculos-peru-seguro-vehiculo-endpoint"
title: "Perú - Seguro de Vehículo — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/peru/seguro-vehiculo.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "pe"
  - "validacion-vehiculos"
endpoint: "/v2/pe/vehiculo/soat"
sourceAnchor: "Endpoint"
slug: "/validacion-de-vehiculo/peru/seguro-de-vehiculos-en-peru"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/peru/seguro-de-vehiculos-en-peru"
---

# Perú - Seguro de Vehículo
**API path(s):** /v2/pe/vehiculo/soat

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/pe/vehiculo/soat
```

Este servicio proporciona información sobre el estado del seguro de un vehículo en Perú. Retorna detalles incluyendo el nombre de la compañía de seguros, fechas de inicio y fin de la póliza, número de placa del vehículo, número de póliza, tipo de uso, clase de vehículo y estado de la póliza.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `plate` | string | Sí | Número de placa a consultar, sin espacios ni puntos. |

### Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pe/vehiculo/soat',
  params: {plate: 'ABC123'},
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

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/pe/vehiculo/soat?plate=ABC123", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/vehiculo/soat?plate=ABC123")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/pe/vehiculo/soat?plate=ABC123');
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
