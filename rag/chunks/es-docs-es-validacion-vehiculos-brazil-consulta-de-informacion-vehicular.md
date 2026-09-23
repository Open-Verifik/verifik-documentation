---
id: "es-docs-es-validacion-vehiculos-brazil-consulta-de-informacion-vehicular"
title: "Información de vehículos — Consulta de información vehicular"
sourcePath: "docs-es/validacion-vehiculos/brazil.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "br"
  - "validacion-vehiculos"
endpoints:
  - "/v2/br/vehicle"
  - "/v2/br/vehicle?plate=pzy7h82"
sourceAnchor: "Consulta de información vehicular"
slug: "/validacion-vehiculos/brazil"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/brazil"
---

# Información de vehículos
**API path(s):** /v2/br/vehicle, /v2/br/vehicle?plate=pzy7h82

## Consulta de información vehicular

## Consulta de información vehicular

### Endpoint

```
GET https://api.verifik.co/v2/br/vehicle
```

Con una **placa** brasileña, **Verifik** devuelve en una sola petición datos estructurados del vehículo para relacionar un activo físico con atributos verificados y normalizados. Está orientada a **altas de flota y movilidad**, **cotización y siniestros de seguros**, **garantías y crédito con colateral**, y **revisiones en marketplaces o concesionarios** cuando la placa es el identificador principal.

La API de Verifik devuelve un **registro normalizado del vehículo** para esa placa, con **placa**, **marca**, **modelo**, **año modelo** y **año de fabricación**, **chasis (VIN)**, **motor**, **color**, **tipo de carrocería**, **combustible**, **transmisión**, **puertas**, **fabricante o planta**, **códigos FIPE** cuando corresponden a ese vehículo, e **indicadores de irregularidades o restricciones** cuando existen para ese registro. Sirve para comprobar que la unidad coincide con la línea oficial antes de continuar.

### Encabezados

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| ------ | ---- | --------- | ----------- |
| `plate` | string | **Sí** | Placa a consultar (letras y números; se normaliza el uso de mayúsculas). Ejemplo: `PZY7H82`. |

### Solicitud

  

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/br/vehicle",
  params: { plate: "PZY7H82" },
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
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer ",
}
conn.request("GET", "/v2/br/vehicle?plate=PZY7H82", "", headers)
res = conn.getresponse()
print(res.read().decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/br/vehicle', [
  'query' => ['plate' => 'PZY7H82'],
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);
echo $response->getBody();
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/br/vehicle?plate=PZY7H82")!)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer ", forHTTPHeaderField: "Authorization")
let task = URLSession.shared.dataTask(with: request) { data, _, _ in
  print(String(data: data ?? Data(), encoding: .utf8) ?? "")
}
task.resume()
```
