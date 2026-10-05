---
id: "en-docs-vehicle-validation-colombia-driver-s-license-response-3"
title: "Driver's License — Response"
sourcePath: "docs/vehicle-validation/colombia/driver-s-license.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/conductor"
sourceAnchor: "Response"
slug: "/vehicle-validation/colombia/driver-s-license"
url: "https://docs.verifik.co/vehicle-validation/colombia/driver-s-license"
---

# Driver's License
**API path(s):** /v2/co/runt/conductor

Verifik's Driver's License Validation API allows you to query official information registered in Colombia's Registro Único Nacional de Tránsito (RUNT) using the driver's identification document number.
This integration is essential for transport companies, car rental agencies, insurers, and logistics platforms that need to verify the legal status and eligibility of drivers before hiring or authorizing vehicle use.

## Response

```json
{
	"data": {
		"ANSVpayments": [],
		"aptitudeCertificates": [
			{
				"categoria": "B1",
				"descripcionTramite": "Trámite expedición licencia conducción",
				"estadoDocumento": "UTILIZADO",
				"fechaExpedicion": "16/09/2024",
				"fechaSolicitud": "16/09/2024",
				"fechaVencimiento": "16/09/4759",
				"idPersona": "22526545",
				"nombreCea": "CENTRO DE ENSEÑANZA AUTOMOVILISTICA EDWCAR AUTOPISTA NORTE ",
				"tipoCertificado": "CERTIFICADO CONDUCTOR"
			}
		],
		"citizenStatus": "ACTIVA",
		"consultationDateTime": "2025-10-10T19:29:01.599Z",
		"documentNumber": "63535709",
		"documentType": "CC",
		"driverStatus": "ACTIVO",
		"fullName": "ARLETH PATRICIA RUEDA CORREA",
		"identityValidationAttempts": {
			"estadoUsuario": "ACTIVO",
			"fechaDesbloqueo": null,
			"validaciones": []
		},
		"identityValidationRequests": {
			"estadoUsuario": "ACTIVO",
			"fechaDesbloqueo": null,
			"validaciones": []
		},
		"infractions": {
			"nroPazYSalvo": "840377030067",
			"tieneMultas": "NO"
		},
		"inscriptionDate": "27/01/2023",
		"inscriptionNumber": "22526545",
		"licenses": [
			{
				"authorityTransit": null,
				"category": "B1",
				"dueDate": "19/09/2034",
				"endDateSuspension": null,
				"examExpirationDate": null,
				"expeditionDate": "19/09/2024",
				"licenceNumber": "63535709",
				"otExpide": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA ",
				"resolutionNumber": null,
				"restrictions": null,
				"startDateSuspension": null,
				"status": "ACTIVA",
				"substratum": "63535709"
			}
		],
		"medicalCertificates": [],
		"requests": [
			{
				"descripcionTipoValidacion": null,
				"descripcionValidacion": null,
				"entidad": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA ",
				"estadoSolicitud": "AUTORIZADA",
				"estadoTramite": "APROBADO",
				"fechaSolicitud": "19/09/2024",
				"identificador": "C 63535709",
				"nombreTramite": "Trámite expedición licencia conducción",
				"numeroSolicitud": "249765412",
				"registro": "RNC",
				"tramitesRealizados": "29"
			},
			{
				"descripcionTipoValidacion": null,
				"descripcionValidacion": null,
				"entidad": "CENTRO DE ENSEÑANZA AUTOMOVILISTICA EDWCAR AUTOPISTA NORTE ",
				"estadoSolicitud": "AUTORIZADA",
				"estadoTramite": "APROBADO",
				"fechaSolicitud": "16/09/2024",
				"identificador": "C 63535709",
				"nombreTramite": "TRÁMITE CERTIFICADO APTITUD EN CONDUCCIÓN",
				"numeroSolicitud": "249498842",
				"registro": "RNC",
				"tramitesRealizados": "35"
			},
			{
				"descripcionTipoValidacion": null,
				"descripcionValidacion": null,
				"entidad": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA ",
				"estadoSolicitud": "AUTORIZADA",
				"estadoTramite": "APROBADO",
				"fechaSolicitud": "02/09/2024",
				"identificador": "FNQ366",
				"nombreTramite": "TRÁMITE LEVANTAMIENTO ALERTA",
				"numeroSolicitud": "248089667",
				"registro": "RNA",
				"tramitesRealizados": "26"
			},
			{
				"descripcionTipoValidacion": null,
				"descripcionValidacion": null,
				"entidad": "CENTRO DE RECONOCIMIENTO DE CONDUCTORES CERTIPASE SAS",
				"estadoSolicitud": "APROBADA",
				"estadoTramite": "APROBADO",
				"fechaSolicitud": "08/08/2024",
				"identificador": "C 63535709",
				"nombreTramite": "Tramite certificado aptitud fisica mental motriz",
				"numeroSolicitud": "245823594",
				"registro": "RNC",
				"tramitesRealizados": "38"
			},
			{
				"descripcionTipoValidacion": null,
				"descripcionValidacion": null,
				"entidad": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA ",
				"estadoSolicitud": "REGISTRADA",
				"estadoTramite": "SOLICITADO",
				"fechaSolicitud": "29/03/2023",
				"identificador": "FNQ366",
				"nombreTramite": "TRÁMITE INSCRIPCIÓN ALERTA",
				"numeroSolicitud": "207145814",
				"registro": "RNA",
				"tramitesRealizados": "11"
			}
		],
		"sicovRequests": [],
		"totalLicenses": "1",
		"transitTaxes": {},
		"firstName": "ARLETH PATRICIA",
		"lastName": "RUEDA CORREA",
		"arrayName": ["ARLETH", "PATRICIA", "RUEDA", "CORREA"]
	},
	"signature": {
		"dateTime": "October 10, 2025 7:29 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "3R2V0"
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
	"message": "missing documentType. missing documentNumber"
}
```

```json
{
	"code": "MissingParameter",
	"message": "documentType must be one of: [CC, CE, PPT, PA, NIT]"
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
	"code": "InternalServerError",
	"message": "Server error."
}
```

  

---
