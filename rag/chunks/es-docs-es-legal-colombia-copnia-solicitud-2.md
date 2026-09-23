---
id: "es-docs-es-legal-colombia-copnia-solicitud-2"
title: "Colombia — COPNIA matrículas profesionales por documento — Solicitud"
sourcePath: "docs-es/legal/colombia-copnia.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia"
sourceAnchor: "Solicitud"
slug: "/legal/colombia-copnia"
url: "https://docs.verifik.co/verifik-es/legal/colombia-copnia"
---

# Colombia — COPNIA matrículas profesionales por documento
**API path(s):** /v2/co/copnia

Verifik consulta **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) con **`documentType`** y **`documentNumber`**. La fuente en vivo es el portal de Certificado de Vigencia de COPNIA. Úsalo para **contratación**, **habilitación** y **cumplimiento** de profesionales de ingeniería en Colombia.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/copnia", {
	params: {
		documentType: "CC",
		documentNumber: "80176161",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/copnia"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "80176161"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"arrayName": ["HENRY", "ANDRES", "CASTANEDA", "ACOSTA"],
		"documentNumber": "80176161",
		"documentType": "CC",
		"firstName": "HENRY ANDRES",
		"fullName": "HENRY ANDRES CASTANEDA ACOSTA",
		"lastName": "CASTANEDA ACOSTA",
		"licenses": [
			{
				"licenseNumber": "091132-0839078 CNDC",
				"licenseStatus": "VIGENTE",
				"licenseType": "MATRICULA PROFESIONAL",
				"profession": "INGENIERIA DE SOFTWARE",
				"resolutionDate": "2026-07-27",
				"resolutionNumber": "RN2026NALA032094"
			}
		]
	},
	"signature": {
		"dateTime": "September 15, 2026 9:00 PM",
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
	"message": "documentType must be one of [CC, CE, PA, PEP, PE, PPT, TI, NIT]"
}
```

## Características

- Tipos aceptados: **CC**, **CE**, **PA**, **PEP**, **PE**, **PPT**, **TI**, **NIT**
- Solo **GET** con parámetros de consulta
- **Sandbox** devuelve un payload con la forma COPNIA para documentos de prueba
- Respuestas **firmadas** y facturadas como feature híbrido `apiRequest`
