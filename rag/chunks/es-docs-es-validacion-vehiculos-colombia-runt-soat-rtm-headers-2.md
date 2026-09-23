---
id: "es-docs-es-validacion-vehiculos-colombia-runt-soat-rtm-headers-2"
title: "SOAT y RTM — Headers"
sourcePath: "docs-es/validacion-vehiculos/colombia/runt-soat-rtm.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoints:
  - "/v2/co/runt/vehiculo"
  - "/v2/co/runt/vehiculo?documenttype=cc&documentnumber=123456789&plate=abc123"
sourceAnchor: "Headers"
slug: "/validacion-vehiculos/colombia/runt-soat-rtm"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/runt-soat-rtm"
---

# SOAT y RTM
**API path(s):** /v2/co/runt/vehiculo, /v2/co/runt/vehiculo?documenttype=cc&documentnumber=123456789&plate=abc123

La API de Validación de SOAT y RTM de Verifik proporciona acceso en tiempo real al estado de los documentos obligatorios para vehículos registrados en Colombia: el Seguro Obligatorio de Accidentes de Tránsito (SOAT) y la Revisión Técnico-Mecánica (RTM).
Este servicio es crítico para asegurar que los vehículos cumplan con la normativa de tránsito colombiana, ayudando a prevenir multas y problemas legales.

## Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción                                                               |
| ---------------- | ------ | --------- | ------------------------------------------------------------------------- |
| `documentType`   | string | Sí        | Tipo de documento. Valores permitidos son: CC, CE, PA, RC, NIT.           |
| `documentNumber` | string | Sí        | Número de documento del propietario del vehículo, sin espacios ni puntos. |
| `plate`          | string | Sí        | Placa del vehículo a consultar.                                           |

### Solicitud

```javascript

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/co/runt/vehiculo",
	params: { documentType: "CC", documentNumber: "123456789", plate: "ABC123" },
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
conn.request("GET", "/v2/co/runt/vehiculo?documentType=CC&documentNumber=123456789&plate=ABC123", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=123456789&plate=ABC123")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=123456789&plate=ABC123');
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
