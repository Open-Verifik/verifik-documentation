---
id: "es-docs-es-validacion-vehiculos-colombia-registros-vehiculos-por-placa-simplific-solicitud-2"
title: "Validación Vehicular Simplificada por Placa en RUNT — Solicitud"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-plate-simplified"
sourceAnchor: "Solicitud"
slug: "/validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/registros-vehiculos-por-placa-simplificado-runt"
---

# Validación Vehicular Simplificada por Placa en RUNT
**API path(s):** /v2/co/runt/vehicle-by-plate-simplified

La API de Validación Vehicular Simplificada de Verifik permite consultar información esencial del vehículo en el Registro Único Nacional de Tránsito (RUNT) utilizando la placa y el número de documento del propietario.
Esta versión ligera de la consulta vehicular está diseñada para aplicaciones que requieren una verificación rápida de la identidad del vehículo y sus características básicas, sin la carga de datos extensos como el historial de seguros y revisiones técnico-mecánicas.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
		plate: "ABC123",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/runt/vehicle-by-plate-simplified"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789", "plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"documentNumber": "31527228",
		"documentType": "CC",
		"plate": "WHH662",
		"vehicle": {
			"capacidadCarga": "0 KILO",
			"cilindraje": "4500",
			"clasificacion": "AUTOMOVIL",
			"color": "BLANCO VERDE",
			"diasMatriculado": "6686",
			"esRegrabadoChasis": "NO",
			"esRegrabadoMotor": "NO",
			"esRegrabadoSerie": "SI",
			"esRegrabadoVin": "NO",
			"homologaciones": [],
			"idTipoServicio": "2",
			"linea": "T 45",
			"marca": "MAZDA",
			"modelo": "1999",
			"mostrarSolicitudes": "SI",
			"noChasis": "T45LB00445",
			"noPlaca": "WHH662",
			"numRegraSerie": "T45LB9900385RG",
			"organismoTransito": "STRIA DE TTOyTTE MEDELLIN",
			"pasajerosSentados": "30",
			"pesoBruto": null,
			"prendas": "NO",
			"puertas": "2",
			"repotenciado": "NO",
			"seguridadEstado": "NO",
			"tarjetaServicio": "SI",
			"tieneLTImportacion": true,
			"tipoCarroceria": "CERRADA",
			"tipoCombustible": "DIESEL",
			"tipoServicio": "Público",
			"toneladas": "0.00",
			"validacionDIAN": "Exitoso",
			"vehiculoEnsenanza": "NO",
			"verValidaDIAN": false
		}
	},
	"signature": {
		"dateTime": "October 10, 2025 8:10 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "GVMFW"
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
	"message": "missing documentType. missing documentNumber. missing plate"
}
```

```json
{
	"code": "MissingParameter",
	"message": "documentType must be one of: [CC, CE, PA, NIT]"
}
```

```json
{
	"code": "MissingParameter",
	"message": "missing documentNumber\n"
}
```

```json
{
	"code": "MissingParameter",
	"message": "missing documentType\n"
}
```

```json
{
	"code": "MissingParameter",
	"message": "missing plate\n"
}
```

  
  

```json
{
	"code": "InternalServerError",
	"message": "Server error."
}
```
