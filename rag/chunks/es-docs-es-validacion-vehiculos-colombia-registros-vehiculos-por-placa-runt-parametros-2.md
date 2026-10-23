---
id: "es-docs-es-validacion-vehiculos-colombia-registros-vehiculos-por-placa-runt-parametros-2"
title: "Registros de Vehículos por Placa — Parámetros"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-vehiculos-por-placa-runt.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/runt/vehicle-by-plate"
sourceAnchor: "Parámetros"
slug: "/validacion-de-vehiculo/colombia/vehiculo-por-placa-y-cedula-unicamente"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/colombia/vehiculo-por-placa-y-cedula-unicamente"
---

# Registros de Vehículos por Placa
**API path(s):** /v2/co/runt/vehicle-by-plate

La API de validación vehicular de Verifik permite consultar información oficial registrada en el Registro Único Nacional de Tránsito (RUNT) de Colombia, utilizando el número de placa del vehículo como identificador principal.
Esta integración es ideal para empresas del sector automotriz, financiero, asegurador y de movilidad, que necesitan confirmar la autenticidad de los datos vehiculares antes de aprobar operaciones, emitir pólizas o realizar procesos de control y cumplimiento normativo.

## Parámetros

| Nombre           | Tipo   | Requerido | Descripción |
| ---------------- | ------ | --------- | ----------- |
| `documentType`   | string | Sí        | Tipo de documento del titular. Valores permitidos: `CC`, `CE`, `PA`, `NIT`. |
| `documentNumber` | string | Sí        | Número de documento del titular, sin espacios ni puntos. |
| `plate`          | string | Sí        | Placa a consultar (normalmente **5–9** caracteres según validación de la API). |

### Solicitud

  

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

### Respuesta

  

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
