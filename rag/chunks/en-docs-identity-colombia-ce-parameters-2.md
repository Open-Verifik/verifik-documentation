---
id: "en-docs-identity-colombia-ce-parameters-2"
title: "Colombia — CE (Cédula de Extranjería) — Parameters"
sourcePath: "docs/identity/colombia-ce.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ce"
sourceAnchor: "Parameters"
slug: "/identity/colombia-ce"
url: "https://docs.verifik.co/identity/colombia-ce"
---

# Colombia — CE (Cédula de Extranjería)
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ce

Verifik validates **CE** (*Cédula de Extranjería*) records published by **Migración Colombia** for KYC, eligibility, and compliance workflows.

## Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentNumber` | string | yes | CE number, **digits only**. Typically **6–7 digits** in Colombia. Examples: `712046`, `1156043`. |
| `expeditionDate` | string | yes | Issue date in **`DD/MM/YYYY`** format (e.g. `15/06/2020`). Must match the date on the document. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/foreigner-id/ce", {
	params: {
		documentNumber: "987654321",
		expeditionDate: "15/06/2020",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/foreigner-id/ce"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "987654321", "expeditionDate": "15/06/2020"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"documentNumber": "987654321",
		"documentType": "CE",
		"expirationDate": "15/06/2030",
		"firstName": "MARIA",
		"fullName": "MARIA EJEMPLO PEREZ",
		"lastName": "EJEMPLO PEREZ",
		"status": "VIGENTE"
	},
	"signature": {
		"dateTime": "April 20, 2026 10:00 AM",
		"message": "Certified by Verifik.co"
	},
	"id": "CE01A"
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
	"message": "expeditionDate must be a valid date in DD/MM/YYYY format"
}
```

## Features

- **Official CE lookup** against Migración Colombia’s consultation flow
- **Validity and lifecycle fields** when returned by the source
