---
id: "en-docs-legal-colombia-copnia-request-2"
title: "Colombia — COPNIA professional licenses by document — Request"
sourcePath: "docs/legal/colombia-copnia.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia"
sourceAnchor: "Request"
slug: "/legal/colombia-copnia"
url: "https://docs.verifik.co/legal/colombia-copnia"
---

# Colombia — COPNIA professional licenses by document
**API path(s):** /v2/co/copnia

Verifik queries **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) using **`documentType`** and **`documentNumber`**. The live source is the COPNIA Certificate of Good Standing portal. Use this endpoint for **credentialing**, **hiring**, and **compliance** checks on Colombian engineering professionals.

## Request

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

### Response

  

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

## Features

- **Document types** accepted by validation: **CC**, **CE**, **PA**, **PEP**, **PE**, **PPT**, **TI**, **NIT**
- **GET** query parameters only
- **Sandbox** returns a fixed COPNIA-shaped payload for known test documents
- Responses are **signed** and billed as an `apiRequest` hybrid feature
