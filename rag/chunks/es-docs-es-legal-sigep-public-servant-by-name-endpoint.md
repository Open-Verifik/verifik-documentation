---
id: "es-docs-es-legal-sigep-public-servant-by-name-endpoint"
title: "Colombia — Consulta SIGEP por nombre completo — Endpoint"
sourcePath: "docs-es/legal/sigep-public-servant-by-name.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/sigep/name"
sourceAnchor: "Endpoint"
slug: "/legal/sigep-servidor-publico-por-nombre"
url: "https://docs.verifik.co/verifik-es/legal/sigep-servidor-publico-por-nombre"
---

# Colombia — Consulta SIGEP por nombre completo
**API path(s):** /v2/co/sigep/name

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/co/sigep/name
```

Consulte el directorio **SIGEP** con el parámetro **`fullName`**. Si dispone de **tipo y número de documento**, use [SIGEP por documento](/verifik-es/legal/sigep-servidor-publico-por-numero).

### Encabezados

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `fullName` | string | sí | Nombre completo a buscar. Codifique espacios en clientes HTTP manuales. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/sigep/name", {
	params: { fullName: "FRANCIA ELENA MARQUEZ MINA" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/sigep/name"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"fullName": "FRANCIA ELENA MARQUEZ MINA"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"fullName": "FRANCIA ELENA MARQUEZ MINA",
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
		"dateTime": "October 27, 2025 8:46 AM",
		"message": "Certified by Verifik.co"
	},
	"id": "4ROH0"
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
	"message": "missing fullName\n"
}
```
