---
id: "en-docs-identity-validation-colombia-colombian-citizen-by-name-request-2"
title: "Colombia — Citizen lookup by name (SCCRC) — Request"
sourcePath: "docs/identity-validation/colombia/colombian-citizen-by-name.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/by-name"
sourceAnchor: "Request"
slug: "/identity-validation/colombia/colombian-citizen-by-name"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-citizen-by-name"
---

# Colombia — Citizen lookup by name (SCCRC)
**API path(s):** /v2/co/cedula/by-name

Search the **Registraduría Nacional del Estado Civil** birth civil registry (**SCCRC**) using **names**, **sex**, and **date of birth**. Unlike [Colombian citizen by document](/identity-validation/colombia/colombian-citizen), this endpoint is a **reverse lookup** and may return **multiple matches**.
Use this when you know personal identity attributes but not the NUIP/CC, or when you need to confirm possible registry hits before a document-based check.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/cedula/by-name", {
	params: {
		primerNombre: "MARIA",
		primerApellido: "LOPEZ",
		sexo: "FEMENINO",
		fecha: "15/03/1990",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/cedula/by-name"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {
	"primerNombre": "MARIA",
	"primerApellido": "LOPEZ",
	"sexo": "FEMENINO",
	"fecha": "15/03/1990",
}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"matches": [
			{
				"documentType": "CC",
				"documentNumber": "10000001",
				"firstName": "MARIA ELENA",
				"lastName": "LOPEZ GARCIA",
				"fullName": "MARIA ELENA LOPEZ GARCIA",
				"arrayName": ["MARIA", "ELENA", "LOPEZ", "GARCIA"],
				"sexo": "FEMENINO",
				"serial": "0031010001",
				"oficina": "NOTARIA UNICA - BOGOTA D.C.",
				"expeditionPlace": "NOTARIA UNICA - BOGOTA D.C.",
				"fecha": "15/03/1990",
				"dateOfBirth": "15/03/1990",
				"recordType": "REGISTRO CIVIL DE NACIMIENTO"
			}
		],
		"recordType": "REGISTRO CIVIL DE NACIMIENTO"
	},
	"signature": {
		"dateTime": "July 20, 2026 12:00 PM",
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
	"code": "MissingParameter",
	"message": "missing primerNombre"
}
```

## Features

- **Reverse lookup** against Registraduría **SCCRC** birth registry
- Response is always shaped as **`{ matches: [...] }`** (review every hit)
- Optional second name / surname improve precision
- **GET** and **POST** share the same handler
