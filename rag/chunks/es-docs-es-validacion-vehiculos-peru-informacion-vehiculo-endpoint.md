---
id: "es-docs-es-validacion-vehiculos-peru-informacion-vehiculo-endpoint"
title: "Perú - Información de Vehículo — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/peru/informacion-vehiculo.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "pe"
  - "validacion-vehiculos"
endpoint: "/v2/pe/vehiculo/placa"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/peru/informacion-vehiculo"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/peru/informacion-vehiculo"
---

# Perú - Información de Vehículo
**API path(s):** /v2/pe/vehiculo/placa

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/pe/vehiculo/placa
```

El servicio de Información de Vehículos Peruanos proporciona datos detallados sobre vehículos registrados en Perú basándose en su número de placa. La respuesta incluye detalles clave como la marca, modelo, año, números de serie del motor y chasis, capacidad de asientos y tipo de uso del vehículo.

### Headers

| Nombre          | Valor              |
| --------------- | ------------------ |
| Content-Type    | `application/json` |
| Authorization   | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| ---------------- | ------- | --------- | ---------------------------------------------- |
| `plate`          | string  | Sí        | Número de placa a consultar, sin espacios ni puntos. |

### Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pe/vehiculo/placa',
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
conn.request("GET", "/v2/pe/vehiculo/placa?plate=ABC123", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/vehiculo/placa?plate=ABC123")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/pe/vehiculo/placa?plate=ABC123');
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
