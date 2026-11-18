---
id: "es-docs-es-validacion-vehiculos-colombia-licencia-conducir-runt-respuesta-4"
title: "Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia — Respuesta"
sourcePath: "docs-es/validacion-vehiculos/colombia/licencia-conducir-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/conductor"
sourceAnchor: "Respuesta"
slug: "/validacion-vehiculos/colombia/licencia-conducir-runt"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt"
---

# Consulta de Licencia de Conducción por Cédula en RUNT (Premium) | Verifik API Colombia
**API path(s):** /v2/co/runt/conductor

La API de validación de licencias de Verifik permite consultar información oficial registrada en el Registro Único Nacional de Tránsito (RUNT) de Colombia, utilizando el número de documento de identidad del conductor.
Esta integración es esencial para empresas de transporte, agencias de alquiler de vehículos, aseguradoras y plataformas logísticas que necesitan verificar el estado legal y la idoneidad de los conductores antes de la contratación o autorización de uso de vehículos.
RUNT ahora autentica al conductor con el primer apellido (`primerApellido`) y puede devolver nombres enmascarados. Esta ruta **v2** sigue funcionando sin cambios de integración.
**Tarifa desde el 1 de septiembre de 2026 (America/Bogota):**
- Omita `primerApellido` — Verifik resuelve el apellido internamente — **Premium** (conductor + consulta de nombre). Una fila en el historial.
- Envíe `primerApellido` — se omite la consulta de nombre — tarifa **Básica** (igual que [`/v3/co/runt/conductor`](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico)). Una fila en el historial.
Use la ruta [Básica v3](/verifik-es/validacion-vehiculos/colombia/licencia-conducir-runt-basico) si siempre envía `primerApellido` y quiere que sea obligatorio.

## Respuesta

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
