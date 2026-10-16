---
id: "es-docs-es-legal-verificar-afiliaciones-colombianas-solicitud-2"
title: "Colombia — Afiliaciones de salud y seguridad social — Solicitud"
sourcePath: "docs-es/legal/verificar-afiliaciones-colombianas.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/afiliaciones"
sourceAnchor: "Solicitud"
slug: "/legal/verificar-afiliaciones-colombianas"
url: "https://docs.verifik.co/verifik-es/legal/verificar-afiliaciones-colombianas"
---

# Colombia — Afiliaciones de salud y seguridad social
**API path(s):** /v2/co/afiliaciones

Verifik devuelve **datos de afiliación e información personal** de una persona en Colombia a partir de fuentes oficiales de **salud y seguridad social** (incluido el flujo **RUAF / SISPRO**), usando **tipo de documento**, **número** y **fecha de expedición**. Suele incluir bloques de **EPS**, **ARL**, **pensión (AP)**, **caja de compensación** y **cesantías**, además de **datos personales** cuando la fuente los provee.
Este endpoint es solo **GET** (parámetros en query). Úsalo para **empleo**, **prestaciones** y **cumplimiento** cuando la ley y tu política lo permitan.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/afiliaciones", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
		date: "05/05/2020",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/afiliaciones"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789", "date": "05/05/2020"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"informaciónPersonal": {
			"fechaCorte": "2022-08-19",
			"documentoIdentidad": "CC 123456789",
			"primerNombre": "MATEO",
			"segundoNombre": "",
			"primerApellido": "VERIFIK",
			"segundoApellido": "",
			"sexo": "M"
		},
		"eps": {
			"fechaCorte": "2022-08-19",
			"eps": "FAMISANAR E.P.S. LTDA - CAFAM - COLSUBSIDIO -CM",
			"regimen": "Subsidiado",
			"fechaAfiliacion": "01/09/2020",
			"estadoAfiliacion": "Activo",
			"tipoAfiliado": "CABEZA DE FAMILIA",
			"departamentoMunicipio": "BOGOTA D.C."
		},
		"ap": {
			"fechaCorte": "2022-08-19",
			"pensiones": [
				{
					"regimenPensional": "PENSIONES: AHORRO INDIVIDUAL",
					"administradoraPensional": "SOCIEDAD ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTIAS PORVENIR SA",
					"fechaAfiliacionPensional": "1996-03-01",
					"estadoPensional": "Inactivo"
				}
			]
		},
		"arl": {
			"fechaCorte": "2022-08-19",
			"riesgos": [
				{
					"administradora": "POSITIVA COMPAÑIA DE SEGUROS",
					"fecha": "2016-09-01",
					"estado": "Activa",
					"actividad": "…",
					"municipioLaboral": "Bogotá, D.C.- BOGOTÁ"
				}
			]
		},
		"cajaCompensacion": {
			"fechaCorte": "2022-08-19",
			"cajas": []
		},
		"cesantias": {
			"fechaCorte": "2022-08-19",
			"cesantias": []
		}
	},
	"signature": {
		"dateTime": "August 30, 2022 2:49 PM",
		"message": "Certified by Verifik.co"
	}
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
	"code": "NotFound",
	"message": "The expedition date is incorrect."
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "documentType must be one of [CC, CE, PA, PE]"
}
```

  
  

```json
{
	"code": "Conflict",
	"message": "Unable to connect to the source. Please try again later."
}
```
