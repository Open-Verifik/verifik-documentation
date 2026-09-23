---
id: "en-docs-identity-colombia-procuraduria-parameters-2"
title: "Colombia — Citizen lookup via Procuraduría — Parameters"
sourcePath: "docs/identity/colombia-procuraduria.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/procuraduria"
  - "/v2/co/procuraduria/antecedentes"
sourceAnchor: "Parameters"
slug: "/identity/colombia-procuraduria"
url: "https://docs.verifik.co/identity/colombia-procuraduria"
---

# Colombia — Citizen lookup via Procuraduría
**API path(s):** /v2/co/cedula, /v2/co/procuraduria, /v2/co/procuraduria/antecedentes

Validate a Colombian document number and extract **names** from **Procuraduría General de la Nación**. This is the official source that supports *Cédula de ciudadanía* (**CC**), *Cédula de extranjería* (**CE**), *Permiso Especial de Permanencia* (**PEP**), *NIT*, and *Permiso por Protección Temporal* (**PPT**).
Unlike [citizen by document](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), this endpoint hits **Procuraduría only** — it does **not** try DIAN, ADRES, or Registraduría. Unlike [disciplinary records](/background-check/colombia-disciplinary-records-attorneys-office) (`/v2/co/procuraduria/antecedentes`), it does **not** return `antecedentes` or `legend`.

## Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `documentType` | string | yes | One of **`CC`**, **`CE`**, **`PPT`**, **`NIT`**, **`PEP`** | `CE` |
| `documentNumber` | string | yes | Document number, digits only | `688925` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/procuraduria", {
	params: {
		documentType: "CE",
		documentNumber: "688925",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/procuraduria"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CE", "documentNumber": "688925"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"documentType": "CE",
		"documentNumber": "688925",
		"firstName": "JUAN SEBASTIAN",
		"lastName": "RAIGOSA GALLEGO",
		"fullName": "JUAN SEBASTIAN RAIGOSA GALLEGO",
		"arrayName": ["JUAN", "SEBASTIAN", "RAIGOSA", "GALLEGO"]
	},
	"signature": {
		"dateTime": "August 25, 2026 12:00 PM",
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
	"message": "documentType must be one of: [CC,CE,PPT,NIT,PEP]"
}
```

## Features

- Direct **Procuraduría name** lookup
- Supports **CC**, **CE**, **PPT**, **NIT**, **PEP**
- No disciplinary records (`antecedentes`, `legend`)
- **GET** and **POST** share the same handler
