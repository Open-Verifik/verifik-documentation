---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-owners-endpoint"
title: "RUNT - Vehicle owners by plate — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-owners.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/propietarios"
  - "/v2/co/runt/vehiculo/owners"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/runt-vehicle-owners"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-owners"
---

# RUNT - Vehicle owners by plate
**API path(s):** /v2/co/runt/propietarios, /v2/co/runt/vehiculo/owners

## Endpoint

Retrieve a Colombian vehicle's basic details and ownership records using only its license plate. This service is useful for ownership verification, onboarding, and vehicle due diligence.

### Endpoint

```
GET https://api.verifik.co/v2/co/runt/propietarios
```

The response includes `plate`, `brand`, `line`, `model`, and an `owners` array with owner identity, ownership period, financing, pledge, and registry details when available. `GET /v2/co/runt/vehiculo/owners` is a legacy alias of the same handler; new integrations should use `propietarios`.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `plate` | string | Yes | Colombian license plate containing 5–9 alphanumeric characters. | `CRL299` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/propietarios", {
	params: { plate: "CRL299" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/runt/propietarios"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
response = requests.get(url, headers=headers, params={"plate": "CRL299"})
print(response.json())
```

### Response

  

```json
{
	"data": {
		"plate": "CRL299",
		"brand": "CHEVROLET",
		"line": "CRUZE",
		"model": "2012",
		"owners": [
			{
				"documentIssueDate": null,
				"documentNumber": "********",
				"documentType": "CC",
				"entity": "ENTIDAD FINANCIERA",
				"financingTime": 42.03,
				"financingType": "Prenda",
				"firstName": "OWNER",
				"fullName": "OWNER EXAMPLE",
				"lastName": "EXAMPLE",
				"ownerId": 10000001,
				"ownershipDuration": {
					"days": 23,
					"months": 6,
					"years": 8
				},
				"ownershipEndDate": "2020-02-13T05:00:00.000+0000",
				"ownershipStartDate": "2011-07-21T05:00:00.000+0000",
				"pledge": "Prenda levantada",
				"registraduriaStatus": null,
				"vehicleRegistryNumber": "15514772"
			}
		]
	},
	"signature": {
		"dateTime": "September 8, 2026 11:00 PM",
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
	"message": "missing plate"
}
```
