---
id: "es-docs-es-validacion-vehiculos-chile-informacion-vehiculo"
title: "Información de Vehículo — Implementación"
sourcePath: "docs-es/validacion-vehiculos/chile/informacion-vehiculo.md"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoint: "/v2/cl/vehicle"
sourceAnchor: "Implementación"
slug: "/validacion-vehiculos/chile/informacion-vehiculo"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/chile/informacion-vehiculo"
---

# Información de Vehículo
**API path(s):** /v2/cl/vehicle

## Implementación

`GET - https://api.verifik.co/v2/cl/vehicle`

Este endpoint de API te permite verificar la información de un vehículo registrado en Chile proporcionando su número de placa de matrícula. La respuesta incluye detalles como el número de chasis, número de motor, fabricante, modelo, año, color y cualquier multa pendiente asociada con el vehículo. Además, la API también proporciona información sobre el propietario del vehículo, tipo y origen, cuando esté disponible. Ten en cuenta que necesitas proporcionar el número de placa de matrícula del vehículo para consultar su información.

### Implementación

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

**Parámetros de Consulta**

NameTypeRequired?DescriptionExampleplateStringTrueFormato actual BB-CC-12 (enviar como BBCC12, cuatro letras + dos dígitos, sin espacios ni puntos).BBCC12

#### Solicitud

```javascript

const options = {
	method: "GET",
	url: "",
	params: { plate: "BBCC12" },
	headers: {
		Accept: "application/json",
		Authorization: "jwt ",
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
headers = {}
conn.request("GET", "/v2/cl/vehicle?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/vehicle?plate=")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/cl/vehicle?plate=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('');
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
```

**Respuesta**

```json
{
	"data": {
		"chasisNumber": "ME1KG0447E2066723",
		"color": "NEGRO",
		"engineNumber": "1ES3032465",
		"fines": "NO POSEE MULTAS",
		"manufacturer": "NO DISPONIBLE",
		"mark": "YAMAHA",
		"model": "FZ 16",
		"orderTheft": "NO DISPONIBLE",
		"origin": "NO DISPONIBLE",
		"owner": "",
		"plate": "BBCC12",
		"publicTrans": "NO DISPONIBLE",
		"revision": "NO DISPONIBLE",
		"rut": "26043542-6",
		"type": "MOTO",
		"typeTransPub": "NO DISPONIBLE",
		"year": "2014"
	},
	"signature": {
		"dateTime": "April 21, 2023 8:32 PM",
		"message": "Certified by Verifik.co"
	}
}
```

```json
{
	"code": "NotFound",
	"message": "Record not found."
}
```

```json
{
	"code": "MissingParameter",
	"message": "missing plate\n"
}
```
