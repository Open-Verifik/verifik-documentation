---
id: "en-docs-vehicle-validation-colombia-simit-suspensiones-endpoint"
title: "SIMIT - License suspensions — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/simit-suspensiones.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/simit/suspensiones"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/simit-suspensiones"
url: "https://docs.verifik.co/vehicle-validation/colombia/simit-suspensiones"
---

# SIMIT - License suspensions
**API path(s):** /v2/co/simit/suspensiones

## Endpoint

```
GET https://api.verifik.co/v2/co/simit/suspensiones
```

This service returns **SIMIT** information about **suspension or cancellation** of a **driver license** (or related sanctions tied to the queried identity), including resolution references and dates when the upstream source provides them. Use it for compliance and risk checks on Colombian motorists identified by **`documentType`** and **`documentNumber`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Holder document type. Typical values: `CC`, `PA`, `CE`, `TI`, `RC`, `NIT`. |
| `documentNumber` | string | Yes | Document number to query, **without spaces or punctuation**. Length limits enforced by the API may return `409` if exceeded. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/suspensiones", {
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/simit/suspensiones"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "123456789",
		"firstName": "JUAN CARLOS",
		"lastName": "PEREZ LOPEZ",
		"fullName": "JUAN CARLOS PEREZ LOPEZ",
		"suspensiones": [
			{
				"numeroResolucion": "RES-2024-000123",
				"fechaSuspension": "2024/03/15",
				"estado": "VIGENTE",
				"motivo": "Sanción por acumulación de puntos"
			}
		]
	},
	"signature": {
		"message": "Certified by Verifik.co",
		"dateTime": "April 8, 2026 11:00 PM"
	},
	"id": "IDNT1"
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
	"message": "missing documentType. missing documentNumber"
}
```
