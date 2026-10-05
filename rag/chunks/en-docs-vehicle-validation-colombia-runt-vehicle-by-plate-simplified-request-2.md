---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-plate-simplified-request-2"
title: "Simplified Vehicle Records by Plate in RUNT — Request"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-plate-simplified.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehicle-by-plate-simplified"
sourceAnchor: "Request"
slug: "/vehicle-validation/colombia/runt-vehicle-by-plate-simplified"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-plate-simplified"
---

# Simplified Vehicle Records by Plate in RUNT
**API path(s):** /v2/co/runt/vehicle-by-plate-simplified

Verifik’s Simplified Vehicle Validation API allows you to retrieve essential vehicle information from the Registro Único Nacional de Tránsito (RUNT) using the license plate and owner's document number.
This lightweight version of the vehicle query is designed for applications that need quick verification of vehicle identity and basic characteristics without the extensive data load of insurance and technical inspection history.

## Request

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

### Response

  

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
