---
id: "en-docs-identity-colombia-ppt-parameters-2"
title: "Colombia — PPT (Temporary Protection Permit) — Parameters"
sourcePath: "docs/identity/colombia-ppt.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/foreigner-id/ppt"
sourceAnchor: "Parameters"
slug: "/identity/colombia-ppt"
url: "https://docs.verifik.co/identity/colombia-ppt"
---

# Colombia — PPT (Temporary Protection Permit)
**API path(s):** /v2/co/foreigner-id/ppt

Verifik validates **PPT** (*Permiso de Protección Temporal*) records published by **Migración Colombia** for KYC, eligibility, and compliance workflows.

## Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentNumber` | string | yes | PPT number, **digits only**. Typically **up to 7 digits** (some systems pad to 15). Example: `2081381`. |
| `expeditionDate` | string | yes | Issue date in **`DD/MM/YYYY`** format (e.g. `07/03/2022`). Must match the document. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/foreigner-id/ppt", {
	params: {
		documentNumber: "123456789",
		expeditionDate: "07/03/2022",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/foreigner-id/ppt"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "123456789", "expeditionDate": "07/03/2022"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"arrayName": ["JUAN", "MIGUEL", "CAMERO", "MORALES"],
		"documentNumber": "2081381",
		"documentType": "PPT",
		"expeditionDate": "07/03/2022",
		"expirationDate": "30/05/2031",
		"firstName": "JUAN MIGUEL",
		"fullName": "JUAN MIGUEL CAMERO MORALES",
		"lastName": "CAMERO MORALES",
		"status": "VIGENTE"
	},
	"signature": {
		"dateTime": "May 13, 2025 11:52 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "JD24J"
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
