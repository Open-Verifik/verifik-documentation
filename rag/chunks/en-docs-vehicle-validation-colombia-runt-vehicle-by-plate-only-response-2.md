---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-plate-only-response-2"
title: "RUNT - Vehicle Records by Plate Only — Response"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-plate-only.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehicle-by-plate-only"
sourceAnchor: "Response"
slug: "/vehicle-validation/colombia/runt-vehicle-by-plate-only"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-plate-only"
---

# RUNT - Vehicle Records by Plate Only
**API path(s):** /v2/co/runt/vehicle-by-plate-only

Query official RUNT vehicle information using **only** the license plate. Unlike [Vehicle records by plate](/vehicle-validation/colombia/runt-vehicle-by-plate), this endpoint does **not** require the owner's `documentType` or `documentNumber`.
Use it when you need name, technical, and status blocks for a Colombian plate without an owner document on hand.

## Response

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
