---
id: "en-docs-legal-verify-colombian-affiliations-request-2"
title: "Colombia — Health & social security affiliations — Request"
sourcePath: "docs/legal/verify-colombian-affiliations.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/afiliaciones"
sourceAnchor: "Request"
slug: "/legal/verify-colombian-affiliations"
url: "https://docs.verifik.co/legal/verify-colombian-affiliations"
---

# Colombia — Health & social security affiliations
**API path(s):** /v2/co/afiliaciones

Verifik returns **affiliation and personal data** for a Colombian individual from official **health and social security** sources (including **RUAF / SISPRO** flows), using **document type**, **document number**, and **document issue date**. Typical blocks include **EPS** (health), **ARL** (occupational risk), **pension (AP)**, **caja de compensación**, and **cesantías**, plus **personal** fields when returned by the source.
This endpoint is **GET-only** (query parameters). Use it for **employment**, **benefits**, and **compliance** checks where this data is allowed.

## Request

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

### Response

  

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
