---
id: "en-docs-legal-sigep-public-servant-by-name-endpoint"
title: "Colombia — SIGEP lookup by full name — Endpoint"
sourcePath: "docs/legal/sigep-public-servant-by-name.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/sigep/name"
sourceAnchor: "Endpoint"
slug: "/legal/sigep-public-servant-by-name"
url: "https://docs.verifik.co/legal/sigep-public-servant-by-name"
---

# Colombia — SIGEP lookup by full name
**API path(s):** /v2/co/sigep/name

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/co/sigep/name
```

Query the **SIGEP** public directory using **`fullName`** (as registered in the search form). Results include matching rows with role, entity, contact details, and an official profile link when available. If you have **document type and number**, prefer [SIGEP lookup by document](/legal/sigep-public-servant-by-number) for a more precise flow.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `fullName` | string | yes | Full name to search (e.g. as shown on official records). URL-encode spaces in raw HTTP clients. |

### Request

  

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

### Response

  

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
