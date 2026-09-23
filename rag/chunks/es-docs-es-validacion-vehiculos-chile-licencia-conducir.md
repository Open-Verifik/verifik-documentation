---
id: "es-docs-es-validacion-vehiculos-chile-licencia-conducir"
title: "Licencia de Conducir — Licencia de conducir chilena"
sourcePath: "docs-es/validacion-vehiculos/chile/licencia-conducir.md"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "cl"
  - "validacion-vehiculos"
endpoints:
  - "/v2/cl/driver-license"
  - "/v2/cl/driver-license?documentnumber="
sourceAnchor: "Licencia de conducir chilena"
slug: "/validacion-de-vehiculo/chile/licencia-de-conducir"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/chile/licencia-de-conducir"
---

# Licencia de Conducir
**API path(s):** /v2/cl/driver-license, /v2/cl/driver-license?documentnumber=

## Licencia de conducir chilena

## Licencia de conducir chilena

`GET - https://api.verifik.co/v2/cl/driver-license`

Este servicio te permite recuperar información detallada sobre una licencia de conducir chilena usando el número de licencia como parámetro de consulta. Puedes obtener información como el RUT (número único de identificación tributaria), dirección, clase de licencia, fechas de control y más. Proporciona datos esenciales relacionados con la licencia de conducir en un formato estructurado.

### Implementación

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

**Parámetros de Consulta**

NameTypeRequired?DescriptionExampledocumentNumberStringTrueLicencia a consultar, sin espacios ni puntos.12345678

#### Solicitud

```javascript

const options = {
	method: "GET",
	url: "",
	params: { documentNumber: "12345678" },

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
conn.request("GET", "/v2/cl/driver-license?documentNumber=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/driver-license?documentNumber=")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/cl/driver-license?documentNumber=');
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
```

**Respuesta**

```json
{
	"data": {
		"RUT": "12.345.678-9",
		"address": "PEDRO LEON UGALDE 1825",
		"class": "B",
		"controlDate": "23/08/2009",
		"documentNumber": "012345678",
		"lastControlDate": "15/07/2003",
		"lastName": "VERIFIK",
		"license": "CA-12345678",
		"municipality": "SANTIAGO",
		"names": "MATEO",
		"procedure": "DUPLICADO",
		"restrictions": ".USAR LENTES O DE CONTACTO. "
	},
	"signature": {
		"dateTime": "November 2, 2023 3:12 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "1tm6q"
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
	"message": "missing documentNumber\n"
}
```
