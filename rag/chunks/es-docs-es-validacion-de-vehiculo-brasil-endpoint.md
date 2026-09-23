---
id: "es-docs-es-validacion-de-vehiculo-brasil-endpoint"
title: "Información de vehículos — Endpoint"
sourcePath: "docs-es/validacion-de-vehiculo/brasil.md"
locale: "es"
category: "validacion-de-vehiculo"
tags:
  - "br"
  - "validacion-de-vehiculo"
endpoints:
  - "/v2/br/vehicle"
  - "/v2/br/vehicle?"
sourceAnchor: "Endpoint"
slug: "/validacion-de-vehiculo/brasil"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/brasil"
---

# Información de vehículos
**API path(s):** /v2/br/vehicle, /v2/br/vehicle?

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/br/vehicle
```

El servicio de información de vehículos brasileños te permite verificar la autenticidad de la información de vehículos brasileños proporcionando el número de placa de matrícula del vehículo. El servicio devuelve información detallada sobre el vehículo, incluyendo su marca, modelo, año de fabricación, motor, transmisión, tipo de combustible y más.

Este servicio es útil para concesionarios de autos, compañías de seguros y cualquier negocio o individuo que busque verificar información de vehículos brasileños.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros de Consulta

| Name  | Type   | Required? | Description                                | Example   |
| ----- | ------ | --------- | ------------------------------------------ | --------- |
| plate | String | True      | Placa a consultar, sin espacios ni puntos. | `ABC0123` |

### Solicitud

  

```javascript

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/br/vehicle",
	params: { plate: "ITU7764" },
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

  
  

```php
 "ITU7764"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/br/vehicle?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/br/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ITU7764"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
