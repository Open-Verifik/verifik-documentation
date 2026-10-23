---
id: "es-docs-es-validacion-vehiculos-ecuador-endpoint"
title: "🇪🇨 Ecuador - Multas de Vehículos — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/ecuador.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "ec"
  - "validacion-vehiculos"
endpoint: "/v2/ec/vehiculo/placa/multas"
sourceAnchor: "Endpoint"
slug: "/validacion-de-vehiculo/ecuador/consulta-de-informacion-de-vehiculo"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/ecuador/consulta-de-informacion-de-vehiculo"
---

# 🇪🇨 Ecuador - Multas de Vehículos
**API path(s):** /v2/ec/vehiculo/placa/multas

## Endpoint

El servicio de Multas de Placa de Vehículos de Ecuador te permite recuperar información sobre multas asociadas con la placa de matrícula de un vehículo en Ecuador. Puedes acceder a detalles como la información de registro del vehículo, incluyendo el número de placa, clase y modelo. El servicio también proporciona el estado actual, tipo de servicio y fecha de vencimiento del registro, junto con cualquier multa pendiente vinculada a la placa de matrícula.

Este servicio es útil para individuos y empresas que buscan mantenerse informados sobre las multas asociadas con sus vehículos y asegurar el cumplimiento de las leyes de tránsito ecuatorianas.

### Endpoint

```
GET https://api.verifik.co/v2/ec/vehiculo/placa/multas
```

Consulta un vehículo ecuatoriano por **`plate`** (placa). Devuelve datos de registro y **multas pendientes** para **cumplimiento**, **flotas** y **riesgo**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Sí** | Número de placa a consultar, sin espacios ni puntos. | `ABC1234` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ec/vehiculo/placa/multas',
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
conn.request("GET", "/v2/ec/vehiculo/placa/multas?plate=ABC1234", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=ABC1234');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=ABC1234")!,timeoutInterval: Double.infinity)
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
