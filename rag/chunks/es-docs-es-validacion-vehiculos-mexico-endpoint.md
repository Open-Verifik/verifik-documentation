---
id: "es-docs-es-validacion-vehiculos-mexico-endpoint"
title: "Vehículo Mexicano por Placa — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/mexico.md"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "mx"
  - "validacion-vehiculos"
endpoint: "/v2/mx/vehiculo/placa"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/mexico"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/mexico"
---

# Vehículo Mexicano por Placa
**API path(s):** /v2/mx/vehiculo/placa

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/mx/vehiculo/placa
```

El servicio de información de vehículos proporciona información detallada sobre un vehículo en México basado en su número de placa de matrícula. Este servicio específicamente devuelve información sobre la marca, modelo, año, VIN y otros detalles relacionados del vehículo.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros de Consulta

| Name  | Type   | Required? | Description                                  | Example   |
| ----- | ------ | --------- | -------------------------------------------- | --------- |
| plate | String | True      | Placa de matrícula del vehículo a consultar. | `ABC1234` |

### Solicitud

```javascript

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/mx/vehiculo/placa",
	params: { plate: "ABC1234" },
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

### Respuesta

```json
{
	"success": true,
	"data": {
		"plate": "ABC1234",
		"make": "Nissan",
		"model": "Sentra",
		"year": "2021",
		"engine": "2.0L",
		"transmission": "CVT",
		"fuelType": "Gasoline",
		"vin": "1N4AL3AP8JC123456",
		"registrationDate": "10/08/2021",
		"status": "active",
		"owner": "Carlos Rodríguez",
		"state": "Jalisco",
		"city": "Guadalajara"
	}
}
```

### Respuestas de Error

```json
{
	"success": false,
	"error": "Vehicle not found",
	"code": "VEHICLE_NOT_FOUND"
}
```
