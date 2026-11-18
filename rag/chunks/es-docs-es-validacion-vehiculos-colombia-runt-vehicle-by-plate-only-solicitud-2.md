---
id: "es-docs-es-validacion-vehiculos-colombia-runt-vehicle-by-plate-only-solicitud-2"
title: "RUNT - Registros de vehículos solo por placa — Solicitud"
sourcePath: "docs-es/validacion-vehiculos/colombia/runt-vehicle-by-plate-only.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-plate-only"
sourceAnchor: "Solicitud"
slug: "/validacion-vehiculos/colombia/runt-vehicle-by-plate-only"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/runt-vehicle-by-plate-only"
---

# RUNT - Registros de vehículos solo por placa
**API path(s):** /v2/co/runt/vehicle-by-plate-only

Consulta información oficial de un vehículo en RUNT usando **solo** la placa. A diferencia de [Registros de vehículos por placa](/verifik-es/validacion-de-vehiculo/colombia/vehiculo-por-placa-y-cedula-unicamente), este endpoint **no** requiere `documentType` ni `documentNumber` del propietario.
Úsalo cuando necesites los bloques de identidad, técnicos y de estado de una placa colombiana sin el documento del titular.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/vehicle-by-plate-only", {
	params: { plate: "AA123BA" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/runt/vehicle-by-plate-only"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
response = requests.get(url, headers=headers, params={"plate": "AA123BA"})
print(response.json())
```

### Respuesta

  

```json
{
	"data": {
		"datosTecnicos": {
			"noEjes": "2",
			"pasajerosSentados": "5",
			"pesoBrutoVehicular": "1650"
		},
		"documentNumber": null,
		"documentType": null,
		"garantiasFavorDe": [],
		"garantiasMobiliarias": [],
		"informacionBlindaje": {},
		"informacionGeneral": {
			"cilidraje": "1600",
			"claseVehiculo": "AUTOMOVIL",
			"clasificacion": "AUTOMOVIL",
			"color": "BLANCO PERLA",
			"estadoDelVehiculo": "ACTIVO",
			"fechaMatricula": "15/03/2018",
			"linea": "COROLLA",
			"marca": "TOYOTA",
			"modelo": "2020",
			"noChasis": "9FB10000001",
			"noLicenciaTransito": "110000001",
			"noMotor": "MTR0000001",
			"noPlaca": "AA123BA",
			"noVin": "9FB10000001",
			"organismoTransito": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA",
			"prendas": "NO",
			"puertas": "4",
			"repotenciado": "NO",
			"tarjetaRegistro": null,
			"tarjetaServicio": "NO",
			"tieneGravamenes": "NO",
			"tipoCarroceria": "SEDAN",
			"tipoCombustible": "GASOLINA",
			"tipoServicio": "Particular"
		},
		"limitacionPropiedad": [],
		"normalizacionSaneamiento": [],
		"plate": "AA123BA",
		"polizasResponsabilidadCivil": [],
		"soat": [
			{
				"entidadExpideSoat": "SEGUROS DEL ESTADO S.A.",
				"estado": "VIGENTE",
				"fechaExpedicion": "01/01/2024",
				"fechaVencimiento": "31/12/2024",
				"fechaVigencia": "02/01/2024",
				"noPoliza": "SOAT-000001",
				"tipoTarifa": "221"
			}
		],
		"solicitudes": [
			{
				"entidad": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA",
				"estado": "AUTORIZADA",
				"fechaSolicitud": "15/03/2018",
				"noSolicitud": "110000001",
				"tramitesRealizados": "Tramite matricula inicial"
			}
		],
		"tarjetaOperacion": {},
		"tecnoMecanica": [
			{
				"vigente": "SI"
			}
		],
		"vin": "9FB10000001"
	},
	"signature": {
		"dateTime": "September 16, 2026 8:00 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "ABCDE"
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
	"message": "missing plate"
}
```

  
  

```json
{
	"code": "Endpoint_out_of_service",
	"message": "Endpoint_out_of_service"
}
```
