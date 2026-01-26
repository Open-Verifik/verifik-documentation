---
id: mexico
title: México
description: Verificar información de vehículos mexicanos usando placa de matrícula
slug: /validacion-vehiculos/mexico
---

# México

## Endpoint

```
https://api.verifik.co/v2/mx/vehiculo/placa
```

El servicio de información de vehículos proporciona información detallada sobre un vehículo en México basado en su número de placa de matrícula. Este servicio específicamente devuelve información sobre la marca, modelo, año, VIN y otros detalles relacionados del vehículo.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros de Consulta

| Name  | Type   | Required? | Description                                  | Example   |
| ----- | ------ | --------- | -------------------------------------------- | --------- |
| plate | String | True      | Placa de matrícula del vehículo a consultar. | `ABC1234` |

### Solicitud

```javascript
import axios from "axios";

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/mx/vehiculo/placa",
	params: { plate: "ABC1234" },
	headers: {
		Accept: "application/json",
		Authorization: "Bearer <your_token>",
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

## Casos de Uso

-   **Verificación de Seguros**: Verificar detalles del vehículo para fines de seguros
-   **Concesionarios de Autos**: Validar información del vehículo antes de la compra
-   **Gestión de Flotas**: Rastrear información de vehículos de la empresa
-   **Aplicación de la Ley**: Verificar registro y propiedad del vehículo
-   **Debida Diligencia**: Verificar información del vehículo para transacciones
