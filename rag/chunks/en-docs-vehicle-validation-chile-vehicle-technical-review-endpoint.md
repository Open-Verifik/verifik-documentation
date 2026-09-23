---
id: "en-docs-vehicle-validation-chile-vehicle-technical-review-endpoint"
title: "🇨🇱 Chile - Vehicle Technical Review — Endpoint"
sourcePath: "docs/vehicle-validation/chile/vehicle-technical-review.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle-soap"
  - "/v3/cl/vehicle"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/chile/vehicle-technical-review"
url: "https://docs.verifik.co/vehicle-validation/chile/vehicle-technical-review"
---

# 🇨🇱 Chile - Vehicle Technical Review
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle-soap, /v3/cl/vehicle

## Endpoint

Use this endpoint when you need Chilean **technical review / inspection** data by license plate: vehicle details, inspection plant, certificate number, expiration date, and review status.

Related Chile vehicle endpoints:

- **Vehicle Information (`v2/cl/vehicle`)**: general vehicle registry data such as make, model, owner RUT, engine, chassis, fines, and theft flags.
- **Vehicle Technical Review (`v3/cl/vehicle`)**: technical inspection status and history.
- **Vehicle SOAP (`v2/cl/vehicle-soap`)**: mandatory personal accident insurance certificate by plate and policy number.

### Endpoint

```text
GET https://api.verifik.co/v3/cl/vehicle
```

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `plate` | string | **Yes** | Chilean license plate in a v3-supported format, such as four letters plus two digits or two letters plus four digits. | `XH6640` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/cl/vehicle", {
	params: { plate: "XH6640" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/cl/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "XH6640"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"plate": "XH6640",
		"vehicle": {
			"plate": "XH6640",
			"type": "CAMIONETA (CAP. DE CARGA MENOR A 1.750 KGS.) [B] (A2)",
			"mark": "PEUGEOT",
			"model": "PARTNER TOLE 1.9",
			"year": "2004",
			"engineNumber": "10DXDM0003203",
			"chasisNumber": "60548210",
			"vin": null,
			"sealType": "SELLO VERDE"
		},
		"history": [
			{
				"date": "2026-01-12",
				"plantCode": "PRT-014",
				"plantName": "REVISIONES METROPOLITANA",
				"certificateNumber": "RT-XH6640-2026",
				"expirationDate": "2027-01-12",
				"status": "APROBADA"
			}
		]
	},
	"signature": {
		"dateTime": "June 30, 2026 12:00 PM",
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
	"code": "Invalid_plate_format",
	"message": "Plate must match Chile vehicle format ABCD12 (4 letters and 2 digits) or XH6640 (2 letters and 4 digits)"
}
```

  
  

```json
{
	"code": "timeout_data_source",
	"message": "timeout_data_source"
}
```
