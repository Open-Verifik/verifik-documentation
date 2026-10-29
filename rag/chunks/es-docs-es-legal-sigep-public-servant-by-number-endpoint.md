---
id: "es-docs-es-legal-sigep-public-servant-by-number-endpoint"
title: "Colombia — Consulta SIGEP por documento — Endpoint"
sourcePath: "docs-es/legal/sigep-public-servant-by-number.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/sigep/number"
sourceAnchor: "Endpoint"
slug: "/legal/sigep-servidor-publico-por-numero"
url: "https://docs.verifik.co/verifik-es/legal/sigep-servidor-publico-por-numero"
---

# Colombia — Consulta SIGEP por documento
**API path(s):** /v2/co/sigep/number

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/co/sigep/number
```

El directorio **SIGEP** se consulta con **`documentType`** y **`documentNumber`**. Para búsqueda solo por **nombre completo**, use [SIGEP por nombre](/verifik-es/legal/sigep-servidor-publico-por-nombre).

### Encabezados

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | sí | **`CC`** o **`NIT`** (validación de API). |
| `documentNumber` | string | sí | Número sin espacios ni puntuación. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/sigep/number", {
	params: { documentType: "CC", documentNumber: "34503110" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/sigep/number"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "34503110"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"arrayName": ["FRANCIA", "ELENA", "MARQUEZ", "MINA"],
		"documentNumber": "34503110",
		"documentType": "CC",
		"firstName": "FRANCIA ELENA",
		"fullName": "FRANCIA ELENA MARQUEZ MINA",
		"lastName": "MARQUEZ MINA",
		"legend": "",
		"records": [
			{
				"name": "FRANCIA ELENA MARQUEZ MINA",
				"linkProfile": "https://www.funcionpublica.gov.co/dafpIndexerBHV/hvSigep/detallarHV/S4588442-0018-4",
				"position": "Servidor Público",
				"entity": "DEPARTAMENTO ADMINISTRATIVO DE LA PRESIDENCIA DE LA REPUBLICA",
				"email": "juliethrincon@presidencia.gov.co",
				"phone": "3822800",
				"location": "BOGOTÁ. D.C. - BOGOTÁ. D.C."
			}
		]
	},
	"signature": {
		"dateTime": "October 27, 2025 8:49 AM",
		"message": "Certified by Verifik.co"
	},
	"id": "VMH0I"
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
	"message": "documentType must be one of: [CC,NIT]"
}
```
