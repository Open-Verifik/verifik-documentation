---
id: "en-docs-vehicle-validation-chile-vehicle-soap-response-2"
title: "\\U0001F1E8\\U0001F1F1 Chile - Vehicle SOAP — Response"
sourcePath: "docs/vehicle-validation/chile/vehicle-soap.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoint: "/v2/cl/vehicle-soap"
sourceAnchor: "Response"
slug: "/vehicle-validation/chile/vehicle-soap"
url: "https://docs.verifik.co/vehicle-validation/chile/vehicle-soap"
---

# \U0001F1E8\U0001F1F1 Chile - Vehicle SOAP
**API path(s):** /v2/cl/vehicle-soap

Chilean vehicular **SOAP** (*Seguro Obligatorio de Accidentes Personales*) lookup validates mandatory personal accident insurance for a vehicle registered in Chile. Query by **license plate** and **policy number** to retrieve insurer, owner, validity dates, and vehicle attributes from the AACH registry.

## Response

```json
{
	"data": {
		"status": "VIGENTE",
		"plate": "HTRT86",
		"policyNumber": "94596506",
		"vehicleType": "AUTOMOVIL",
		"brand": "TOYOTA",
		"model": "COROLLA",
		"manufactureYear": "2019",
		"engineNumber": "ENG123456",
		"folioNumber": "FOL789",
		"insuranceCompany": "MAPFRE",
		"ownerName": "JUAN PEREZ LOPEZ",
		"ownerRut": "12.345.678-9",
		"validFrom": "01/01/2026",
		"validTo": "31/12/2026",
		"premium": "$50.000"
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
	"code": "MissingParameter",
	"message": "missing plate\n"
}
```

### Notes

- **Sandbox mode:** plates **`BBCC12`**–**`BBCC21`** return fixed SOAP profiles (`BBCC15` = **VENCIDO**); **`HTRT86`** + **`policyNumber=94596506`** returns the live-style demo profile; **`ERR404`** returns **404**; unmapped plates return random **200**.
- **Sandbox examples:** `BBCC12`/`94590001` (sedan, MAPFRE), `BBCC18`/`94590007` (pickup, CHUBB), `HTRT86`/`94596506` (TOYOTA COROLLA demo).
- For general Chile **private vehicle** lookup, see [🇨🇱 Chile - Vehicle Information](/vehicle-validation/chile).
- Registry **availability** is environment-dependent; outages may return **409** timeout errors.
