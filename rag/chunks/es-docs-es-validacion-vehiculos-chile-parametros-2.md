---
id: "es-docs-es-validacion-vehiculos-chile-parametros-2"
title: "🇨🇱 Chile - Información de Vehículos — Parámetros"
sourcePath: "docs-es/validacion-vehiculos/chile.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle-soap"
  - "/v2/cl/vehicle/v3"
  - "/v2/cl/vehicle?plate=bbcc12"
sourceAnchor: "Parámetros"
slug: "/validacion-vehiculos/chile"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile"
---

# 🇨🇱 Chile - Información de Vehículos
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle-soap, /v2/cl/vehicle/v3, /v2/cl/vehicle?plate=bbcc12

El servicio de validación de vehículos chilenos proporciona capacidades de verificación integrales para información vehicular. Este servicio te permite recuperar información detallada sobre vehículos registrados en Chile.
Endpoints vehiculares relacionados en Chile:
- **Información vehicular (`v2/cl/vehicle`)**: consulta comercial (Reale / getapi). Un **404** significa que la placa no está en esa fuente, no una caída del servicio.
- **Revisión técnica vehicular (`v3/cl/vehicle`)**: estado e historial de inspecciones técnicas. Ver [Chile - Revisión técnica vehicular](/verifik-es/validacion-vehiculos/chile/vehicle-technical-review). Usa esta ruta para ficha técnica / revisión (`GET /v3/cl/vehicle`, no `/v2/cl/vehicle/v3`).
- **SOAP vehicular (`v2/cl/vehicle-soap`)**: certificado de seguro obligatorio de accidentes personales. Ver [Chile - SOAP vehicular](/verifik-es/validacion-vehiculos/chile/vehicle-soap).

## Parámetros

| Name    | Type   | Required | Description                               | Example  |
| ------- | ------ | -------- | ----------------------------------------- | -------- |
| `plate` | string | **Sí**   | Formato actual `BB-CC-12` (envíe `BBCC12`, cuatro letras + dos dígitos, sin espacios ni puntos). | `BBCC12` |

### Solicitud

  

```javascript

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/cl/vehicle",
	params: {
		plate: "BBCC12",
	},
	headers: {
		Accept: "application/json",
		Authorization: "Bearer ",
	},
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
conn.request("GET", "/v2/cl/vehicle?plate=BBCC12", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/cl/vehicle?plate=BBCC12');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/vehicle?plate=BBCC12")!,timeoutInterval: Double.infinity)
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
