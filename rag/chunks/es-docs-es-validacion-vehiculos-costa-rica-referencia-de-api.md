---
id: "es-docs-es-validacion-vehiculos-costa-rica-referencia-de-api"
title: "🇨🇷 Costa Rica - Información de Vehículos — Referencia de API"
sourcePath: "docs-es/validacion-vehiculos/costa-rica.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cr"
  - "validacion-vehiculos"
endpoint: "/v2/cr/vehicle"
sourceAnchor: "Referencia de API"
slug: "/validacion-vehiculos/costa-rica"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/costa-rica"
---

# 🇨🇷 Costa Rica - Información de Vehículos
**API path(s):** /v2/cr/vehicle

## Referencia de API

Este servicio devuelve información detallada de un vehículo inscrito en Costa Rica mediante su **placa de matrícula**. Suele incluir titular actual, datos técnicos del vehículo, **infracciones** e **historial de propietarios** cuando la fuente los provee.

Útil para flotas, seguros y cumplimiento.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/cr/vehicle
```

Envía una solicitud GET con el parámetro de consulta **`plate`** (sin espacios ni signos de puntuación). Una respuesta exitosa incluye datos estructurados del vehículo y del titular cuando están disponibles.

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre | Tipo | Requerido | Descripción | Ejemplo |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Sí** | Placa a consultar sin espacios ni puntos. | `AA123BA` |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cr/vehicle", {
  params: { plate: "AA123BA" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/cr/vehicle?plate=AA123BA", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/cr/vehicle?plate=AA123BA');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cr/vehicle?plate=AA123BA")!,timeoutInterval: Double.infinity)
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
