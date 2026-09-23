---
id: "en-docs-vehicle-validation-colombia-runt-colombian-vehicle-request-2"
title: "Vehicle Records by Plate — Request"
sourcePath: "docs/vehicle-validation/colombia/runt-colombian-vehicle.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehicle-by-plate"
sourceAnchor: "Request"
slug: "/vehicle-validation/colombia/runt-colombian-vehicle"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-colombian-vehicle"
---

# Vehicle Records by Plate
**API path(s):** /v2/co/runt/vehicle-by-plate

Verifik's Vehicle Validation API allows you to query official information registered in Colombia's Registro Único Nacional de Tránsito (RUNT) using the vehicle's license plate number as the main identifier.
This integration is ideal for companies in the automotive, financial, insurance, and mobility sectors that need to confirm the authenticity of vehicle data before approving transactions, issuing insurance policies, or performing control and compliance procedures.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/vehicle-by-plate", {
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

url = "https://api.verifik.co/v2/co/runt/vehicle-by-plate"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789", "plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"informacionGeneral": {
			"noLicenciaTransito": "10021312347",
			"estadoDelVehiculo": "ACTIVO",
			"tipoServicio": "Particular",
			"claseVehiculo": "CAMIONETA",
			"marca": "MAZDA",
			"linea": "CX-30",
			"modelo": "2021",
			"color": "MACHINE GRAY",
			"noMotor": "PY402912330",
			"noChasis": "3MVDM2WLAML234946",
			"noVin": "3MVDM2WLAML234946",
			"cilidraje": "2488",
			"tipoCarroceria": "WAGON",
			"fechaMatricula": "17/10/2020",
			"tieneGravamenes": "NO",
			"organismoTransito": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA",
			"prendas": "NO",
			"clasificacion": "AUTOMOVIL",
			"tipoCombustible": "GASOLINA",
			"noPlaca": "ABC123",
			"puertas": "5"
		},
		"datosTecnicos": {
			"pesoBrutoVehicular": "1939",
			"noEjes": "2",
			"pasajerosSentados": "5"
		},
		"soat": [
			{
				"noPoliza": "355100023467200",
				"fechaExpedicion": "03/10/2023",
				"fechaVigencia": "17/10/2023",
				"fechaVencimiento": "16/10/2024",
				"entidadExpideSoat": "SEGUROS COMERCIALES BOLIVAR S.A",
				"estado": "VIGENTE",
				"tipoTarifa": "221"
			}
		],
		"polizasResponsabilidadCivil": [],
		"tecnoMecanica": [
			{
				"vigente": "NO APLICA"
			}
		],
		"solicitudes": [
			{
				"noSolicitud": "124539870",
				"fechaSolicitud": "17/10/2020",
				"estado": "AUTORIZADA",
				"tramitesRealizados": "Tramite matricula inicial",
				"entidad": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA"
			}
		]
	},
	"signature": { "message": "Certified by Verifik.co", "dateTime": "March 14, 2024 2:23 PM" },
	"id": "DWTV2"
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
