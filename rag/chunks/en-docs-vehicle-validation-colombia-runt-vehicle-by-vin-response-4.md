---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-vin-response-4"
title: "Vehicle Records by VIN — Response"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-vin.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/vehicle-by-vin"
  - "/v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946"
sourceAnchor: "Response"
slug: "/vehicle-validation/colombia/runt-vehicle-by-vin"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-vin"
---

# Vehicle Records by VIN
**API path(s):** /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946

Verifik’s Vehicle Validation by VIN API allows you to query the complete history and technical specifications of a vehicle registered in Colombia using its Vehicle Identification Number (VIN).
This method is particularly useful when the license plate is unavailable or when verifying the authenticity of a vehicle's identity during inspections, as the VIN is a unique, tamper-resistant identifier.

## Response

```json
{
	"data": {
		"datosTecnicos": {
			"alto": null,
			"ancho": null,
			"capacidadCarga": null,
			"largo": null,
			"noEjes": "2",
			"pasajerosSentados": "7",
			"peso": null,
			"pesoBrutoVehicular": "2990",
			"rodaje": null
		},
		"documentNumber": null,
		"garantiasFavorDe": [],
		"garantiasMobiliarias": [],
		"informacionBlindaje": {
			"blindado": "NO"
		},
		"informacionGeneral": {
			"capacidadCarga": null,
			"cilindraje": "2982",
			"claseVehiculo": "CAMPERO",
			"clasicoAntiguo": "NO",
			"clasificacion": "AUTOMOVIL",
			"color": "PLATA METALICO",
			"diasMatriculado": "4600",
			"esRegrabadoChasis": "NO",
			"esRegrabadoMotor": "NO",
			"esRegrabadoSerie": "NO",
			"esRegrabadoVin": "NO",
			"estadoDelVehiculo": "ACTIVO",
			"fechaMatricula": "07/03/2013",
			"idTipoServicio": "1",
			"linea": "PRADO",
			"marca": "TOYOTA",
			"modelo": "2013",
			"mostrarSolicitudes": "SI",
			"noChasis": "JTEBH9FJ7DK091425",
			"noEjes": "2",
			"noLicenciaTransito": "10024866027",
			"noMotor": "1KD2255830",
			"noPlaca": "NET603",
			"noSerie": null,
			"noVin": "JTEBH9FJ7DK091425",
			"organismoTransito": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA ",
			"pasajerosSentados": "7",
			"pesoBruto": "2990",
			"prendas": "NO",
			"puertas": "4",
			"repotenciado": "NO",
			"seguridadEstado": "NO",
			"tarjetaServicio": "NO",
			"tieneGravamenes": "NO",
			"tieneLTImportacion": false,
			"tipoCarroceria": "WAGON",
			"tipoCombustible": "DIESEL",
			"tipoServicio": "Particular",
			"validacionDIAN": "No Exitoso",
			"vehiculoEnsenanza": "NO",
			"verValidaDIAN": false
		},
		"limitacionPropiedad": [],
		"normalizacionSaneamiento": [
			{
				"deficienciaMatriculaInicial": "NO",
				"vehiculoNormalizado": "NO DISPONIBLE",
				"fecha": null,
				"numeroActoAdministrativo": null,
				"descargaCertificado": null,
				"solicitudNormalizacion": null
			}
		],
		"polizasResponsabilidadCivil": [
			{
				"idPoliza": "492211103",
				"numeroPoliza": "104231777",
				"fechaExpedicion": "27/09/2023",
				"fechaInicioVigencia": "27/09/2023",
				"fechaFinVigencia": "27/09/2024",
				"entidadExpide": "COMPAÑIA MUNDIAL DE SEGUROS S A",
				"tipoPoliza": "Responsabilidad Civil Extracontractual",
				"estado": "INACTIVA",
				"tipoDocTomador": "NIT",
				"nroDocTomador": "901254531",
				"coberturas": [
					{
						"codigo": "01",
						"descripcion": "MUERTE",
						"monto": "0"
					},
					{
						"codigo": "02",
						"descripcion": "INCAPACIDAD PERMANENTE",
						"monto": "0"
					},
					{
						"codigo": "03",
						"descripcion": "INCAPACIDAD TEMPORAL",
						"monto": "0"
					},
					{
						"codigo": "04",
						"descripcion": "GASTOS MEDICOS",
						"monto": "0"
					},
					{
						"codigo": "05",
						"descripcion": "MUERTE A TERCEROS",
						"monto": "0"
					},
					{
						"codigo": "06",
						"descripcion": "DAÑOS A TERCEROS",
						"monto": "15"
					},
					{
						"codigo": "07",
						"descripcion": "MUERTE O DAÑOS A MÁS DE DOS PERSONAS",
						"monto": "0"
					}
				]
			}
		],
		"soat": [
			{
				"origen": "NACIONAL",
				"tipoTarifa": "622",
				"noPoliza": "890112959420100",
				"fechaExpedicion": "14/11/2024",
				"fechaExpediSoat": "14/11/2024",
				"fechaVigencia": "15/11/2024",
				"fechaVencimiento": "14/11/2025",
				"entidadExpideSoat": "SEGUROS COMERCIALES BOLIVAR S.A",
				"estado": "VIGENTE",
				"estadoSoat": "EMITIDA",
				"placa": null,
				"nombrePais": null
			},
			{
				"origen": "NACIONAL",
				"tipoTarifa": "622",
				"noPoliza": "86857648",
				"fechaExpedicion": "12/11/2023",
				"fechaExpediSoat": "12/11/2023",
				"fechaVigencia": "13/11/2023",
				"fechaVencimiento": "12/11/2024",
				"entidadExpideSoat": "COMPAÑIA MUNDIAL DE SEGUROS S A",
				"estado": "NO VIGENTE",
				"estadoSoat": "EMITIDA",
				"placa": null,
				"nombrePais": null
			},
			{
				"origen": "NACIONAL",
				"tipoTarifa": "621",
				"noPoliza": "30473991",
				"fechaExpedicion": "31/10/2022",
				"fechaExpediSoat": "31/10/2022",
				"fechaVigencia": "01/11/2022",
				"fechaVencimiento": "31/10/2023",
				"entidadExpideSoat": "SEGUROS GENERALES SURAMERICANA S.A.",
				"estado": "NO VIGENTE",
				"estadoSoat": "EMITIDA",
				"placa": null,
				"nombrePais": null
			},
			{
				"origen": "NACIONAL",
				"tipoTarifa": "621",
				"noPoliza": "81788855",
				"fechaExpedicion": "30/10/2021",
				"fechaExpediSoat": "30/10/2021",
				"fechaVigencia": "31/10/2021",
				"fechaVencimiento": "30/10/2022",
				"entidadExpideSoat": "COMPAÑIA MUNDIAL DE SEGUROS S A",
				"estado": "NO VIGENTE",
				"estadoSoat": "EMITIDA",
				"placa": null,
				"nombrePais": null
			},
			{
				"origen": "NACIONAL",
				"tipoTarifa": "621",
				"noPoliza": "14742800209450",
				"fechaExpedicion": "30/07/2020",
				"fechaExpediSoat": "30/07/2020",
				"fechaVigencia": "31/07/2020",
				"fechaVencimiento": "30/07/2021",
				"entidadExpideSoat": "SEGUROS DEL ESTADO S.A.",
				"estado": "NO VIGENTE",
				"estadoSoat": "EMITIDA",
				"placa": null,
				"nombrePais": null
			}
		],
		"solicitudes": [
			{
				"noSolicitud": "277445038",
				"fechaSolicitud": "30/09/2025",
				"estado": "APROBADA",
				"tramitesRealizados": "Tramite revision tecnico mecanica, ",
				"entidad": "TECMOCAR SAN JUAN"
			},
			{
				"noSolicitud": "250621272",
				"fechaSolicitud": "27/09/2024",
				"estado": "APROBADA",
				"tramitesRealizados": "Tramite revision tecnico mecanica, ",
				"entidad": "TECMOCAR SAN JUAN"
			},
			{
				"noSolicitud": "218742962",
				"fechaSolicitud": "27/09/2023",
				"estado": "APROBADA",
				"tramitesRealizados": "Tramite revision tecnico mecanica, ",
				"entidad": "TECMOCAR SAN JUAN"
			},
			{
				"noSolicitud": "195413987",
				"fechaSolicitud": "13/09/2022",
				"estado": "APROBADA",
				"tramitesRealizados": "Tramite revision tecnico mecanica, ",
				"entidad": "TECMOCAR SAN JUAN"
			},
			{
				"noSolicitud": "166321690",
				"fechaSolicitud": "22/12/2021",
				"estado": "AUTORIZADA",
				"tramitesRealizados": "TRÁMITE TRASPASO, ",
				"entidad": "SECRETARIA DISTRITAL DE MOVILIDAD DE BOGOTA "
			}
		],
		"tarjetaOperacion": {},
		"tecnoMecanica": [
			{
				"fechaExpedicion": "30/09/2025",
				"fechaVencimiento": "30/09/2026",
				"cdaExpide": "TECMOCAR SAN JUAN",
				"estado": "APROBADA",
				"tipoRevision": "REVISION TECNICO-MECANICO",
				"vigente": "SI",
				"nroCertificado": "184285672",
				"numeroPlaca": "NET603",
				"informacionConsistente": "SI",
				"url": "b8c4f8b0-dca8-43cf-9539-1f3145db365e"
			},
			{
				"fechaExpedicion": "27/09/2024",
				"fechaVencimiento": "27/09/2025",
				"cdaExpide": "TECMOCAR SAN JUAN",
				"estado": "APROBADA",
				"tipoRevision": "REVISION TECNICO-MECANICO",
				"vigente": "NO",
				"nroCertificado": "176162807",
				"numeroPlaca": "NET603",
				"informacionConsistente": "SI",
				"url": null
			},
			{
				"fechaExpedicion": "27/09/2023",
				"fechaVencimiento": "27/09/2024",
				"cdaExpide": "TECMOCAR SAN JUAN",
				"estado": "APROBADA",
				"tipoRevision": "REVISION TECNICO-MECANICO",
				"vigente": "NO",
				"nroCertificado": "168659211",
				"numeroPlaca": "NET603",
				"informacionConsistente": "SI",
				"url": null
			},
			{
				"fechaExpedicion": "13/09/2022",
				"fechaVencimiento": "13/09/2023",
				"cdaExpide": "TECMOCAR SAN JUAN",
				"estado": "APROBADA",
				"tipoRevision": "REVISION TECNICO-MECANICO",
				"vigente": "NO",
				"nroCertificado": "161452198",
				"numeroPlaca": "NET603",
				"informacionConsistente": "SI",
				"url": null
			},
			{
				"fechaExpedicion": "13/09/2021",
				"fechaVencimiento": "13/09/2022",
				"cdaExpide": "CDA CENTRO VALLE",
				"estado": "APROBADA",
				"tipoRevision": "REVISION TECNICO-MECANICO",
				"vigente": "NO",
				"nroCertificado": "155014587",
				"numeroPlaca": "NET603",
				"informacionConsistente": "SI",
				"url": null
			}
		],
		"vin": "JTEBH9FJ7DK091425"
	},
	"signature": {
		"dateTime": "October 10, 2025 8:12 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "BJ24Z"
}
```
