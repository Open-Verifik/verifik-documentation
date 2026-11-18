---
id: "en-docs-vehicle-validation-colombia-runt-drivers-license-basic-request-2"
title: "RUNT - Driver's License (Basic) — Request"
sourcePath: "docs/vehicle-validation/colombia/runt-drivers-license-basic.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
sourceAnchor: "Request"
slug: "/vehicle-validation/colombia/runt-drivers-license-basic"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-drivers-license-basic"
---

# RUNT - Driver's License (Basic)

Same RUNT driver lookup as [Premium v2](/vehicle-validation/colombia/runt-drivers-license), billed at the **current conductor price**. You must send `primerApellido`. Omitting it returns `409 MissingParameter`.
Use this path when you already know the first last name. If you stay on v2 and send `primerApellido`, you also pay this Basic rate without changing the URL.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/co/runt/conductor", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
		primerApellido: "GARCIA",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/co/runt/conductor"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789", "primerApellido": "GARCIA"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "63535709",
		"fullName": "ARLETH PATRICIA RUEDA CORREA",
		"driverStatus": "ACTIVO",
		"citizenStatus": "ACTIVA",
		"licenses": [
			{
				"category": "B1",
				"status": "ACTIVA",
				"dueDate": "19/09/2034",
				"expeditionDate": "19/09/2024"
			}
		]
	},
	"signature": {
		"dateTime": "October 10, 2025 7:29 PM",
		"message": "Certified by Verifik.co"
	}
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "\"primerApellido\" is required"
}
```

### Notes

- One API request and one credit row at the Basic conductor price.
- Without `primerApellido` this endpoint does not fall back to a name lookup.
- For automatic last-name resolution (Premium), use [`/v2/co/runt/conductor`](/vehicle-validation/colombia/runt-drivers-license).
