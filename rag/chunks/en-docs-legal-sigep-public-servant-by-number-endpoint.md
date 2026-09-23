---
id: "en-docs-legal-sigep-public-servant-by-number-endpoint"
title: "Colombia — SIGEP lookup by document — Endpoint"
sourcePath: "docs/legal/sigep-public-servant-by-number.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/sigep/number"
sourceAnchor: "Endpoint"
slug: "/legal/sigep-public-servant-by-number"
url: "https://docs.verifik.co/legal/sigep-public-servant-by-number"
---

# Colombia — SIGEP lookup by document
**API path(s):** /v2/co/sigep/number

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/co/sigep/number
```

The **SIGEP** directory (Colombian public employment / contracting records) is queried using **`documentType`** and **`documentNumber`**. The service resolves the person’s identity, then returns directory rows (role, entity, contact, profile link) when matches exist. For lookup by **full name** only, use [SIGEP lookup by name](/legal/sigep-public-servant-by-name).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | **`CC`** or **`NIT`** (API validation). |
| `documentNumber` | string | yes | ID number without spaces or punctuation. |

### Request

  

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

### Response

  

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
