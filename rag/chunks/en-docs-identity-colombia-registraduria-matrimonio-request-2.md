---
id: "en-docs-identity-colombia-registraduria-matrimonio-request-2"
title: "Colombia — Marriage civil registry (SCCRC) — Request"
sourcePath: "docs/identity/colombia-registraduria-matrimonio.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/matrimonio"
sourceAnchor: "Request"
slug: "/identity/colombia-registraduria-matrimonio"
url: "https://docs.verifik.co/identity/colombia-registraduria-matrimonio"
---

# Colombia — Marriage civil registry (SCCRC)
**API path(s):** /v2/co/registraduria/matrimonio

Query the **marriage civil registry** (*registro civil de matrimonio*) from **Registraduría Nacional del Estado Civil** (**SCCRC**).
Provide **one** search mode:
1. **`documentNumber` + `sexo`** — document search (single record)
2. **`primerNombre` + `primerApellido` + `sexo` + `fecha`** — name search (may return **`matches`**)
3. **`serial`** — serial search (single record)

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/registraduria/matrimonio", {
	params: {
		documentNumber: "10000001",
		sexo: "MASCULINO",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/registraduria/matrimonio"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "10000001", "sexo": "MASCULINO"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "10000001",
		"firstName": "JUAN CARLOS",
		"lastName": "PEREZ GOMEZ",
		"fullName": "JUAN CARLOS PEREZ GOMEZ",
		"arrayName": ["JUAN", "CARLOS", "PEREZ", "GOMEZ"],
		"sexo": "MASCULINO",
		"serial": "0042012345",
		"oficina": "NOTARIA UNICA - BOGOTA D.C.",
		"fecha": "20/06/2015",
		"recordType": "REGISTRO CIVIL DE MATRIMONIO"
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
	"message": "Provide serial, or documentNumber+sexo, or name fields with sexo and fecha"
}
```

## Features

- Three search modes: **document**, **name**, or **serial**
- Name mode may return **`matches`**; document/serial return a single object
- **GET** and **POST** share the same handler

## Use cases

- Confirm a **marriage registry** hit for KYC / compliance
- Resolve marriage serials linked to a known document
- Name-based screening when only biographic data is available
