---
id: "es-docs-es-validacion-vehiculos-colombia-registros-vehiculos-por-vin-runt-solicitud-2"
title: "Registros de Vehículos por VIN en RUNT — Solicitud"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-vin"
sourceAnchor: "Solicitud"
slug: "/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt"
---

# Registros de Vehículos por VIN en RUNT
**API path(s):** /v2/co/runt/vehicle-by-vin

La API de Validación Vehicular por VIN de Verifik permite consultar el historial completo y las especificaciones técnicas de un vehículo registrado en Colombia utilizando su Número de Identificación Vehicular (VIN).
Este método es particularmente útil cuando no se dispone de la placa o para verificar la autenticidad de la identidad de un vehículo durante inspecciones, ya que el VIN es un identificador único y difícil de alterar.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/vehicle-by-vin", {
	params: { vin: "3MVDM2WLAML234946" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/runt/vehicle-by-vin"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"vin": "3MVDM2WLAML234946"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```php
setUrl('https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=3MVDM2WLAML234946');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Accept' => 'application/json',
  'Authorization' => 'Bearer '
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=3MVDM2WLAML234946")!,timeoutInterval: Double.infinity)
request.addValue("application/json", forHTTPHeaderField: "Accept")
request.addValue("Bearer ", forHTTPHeaderField: "Authorization")
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
