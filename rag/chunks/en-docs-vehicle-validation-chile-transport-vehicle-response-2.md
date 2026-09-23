---
id: "en-docs-vehicle-validation-chile-transport-vehicle-response-2"
title: "\\U0001F1E8\\U0001F1F1 Chile - Public Transport Vehicle — Response"
sourcePath: "docs/vehicle-validation/chile/transport-vehicle.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoint: "/v2/cl/transport-vehicle"
sourceAnchor: "Response"
slug: "/vehicle-validation/chile/transport-vehicle"
url: "https://docs.verifik.co/vehicle-validation/chile/transport-vehicle"
---

# \U0001F1E8\U0001F1F1 Chile - Public Transport Vehicle
**API path(s):** /v2/cl/transport-vehicle

Chilean public transport vehicle validation service provides verification capabilities for vehicles registered in the **RNT** (*Registro Nacional de Transporte*) registry. This service allows you to retrieve operator, service, and vehicle details for buses and other public transport plates.

## Response

```json
{
	"data": {
		"plate": "BBCC12",
		"brand": "MERCEDES BENZ",
		"model": "O500 RS",
		"serviceType": "TRANSPORTE URBANO DE PASAJEROS",
		"vehicleStatus": "VIGENTE",
		"capacity": "45",
		"region": "METROPOLITANA DE SANTIAGO",
		"serviceFolio": "RNT-CL-100001",
		"serviceResponsibleName": "TRANSPORTES DEMO SPA",
		"serviceStatus": "HABILITADO",
		"serviceExpiryDate": "31/12/2026"
	},
	"signature": {
		"dateTime": "January 16, 2024 3:44 PM",
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
	"message": "\"plate\" is required"
}
```

### Notes

- **Sandbox mode:** plates **`BBCC12`**–**`BBCC21`** return fixed fixtures; **`ERR404`** returns **404**.
- For general Chile **private vehicle** lookup, see [🇨🇱 Chile - Vehicle Information](/vehicle-validation/chile).
- Registry **availability** is environment-dependent; outages may return **5xx** errors.
