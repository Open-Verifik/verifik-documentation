---
id: "en-docs-vehicle-validation-chile-transport-vehicle-public-transport-vehicle-lookup"
title: "\\U0001F1E8\\U0001F1F1 Chile - Public Transport Vehicle — Public Transport Vehicle Lookup"
sourcePath: "docs/vehicle-validation/chile/transport-vehicle.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoint: "/v2/cl/transport-vehicle"
sourceAnchor: "Public Transport Vehicle Lookup"
slug: "/vehicle-validation/chile/transport-vehicle"
url: "https://docs.verifik.co/vehicle-validation/chile/transport-vehicle"
---

# \U0001F1E8\U0001F1F1 Chile - Public Transport Vehicle
**API path(s):** /v2/cl/transport-vehicle

## Public Transport Vehicle Lookup

Chilean public transport vehicle validation service provides verification capabilities for vehicles registered in the **RNT** (*Registro Nacional de Transporte*) registry. This service allows you to retrieve operator, service, and vehicle details for buses and other public transport plates.

## Public Transport Vehicle Lookup

### Endpoint

```
https://api.verifik.co/v2/cl/transport-vehicle
```

Query by **license plate** (`plate`, no spaces or dots). Typical fields include **brand**, **model**, **serviceType**, **vehicleStatus**, **capacity**, **region**, **serviceFolio**, **serviceResponsibleName**, **serviceExpiryDate**, and **plate**—use for **fleet compliance**, **operator onboarding**, and **transport due diligence**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `plate` | string | **Yes** | Current format `BB-CC-12` (send as `BBCC12`, four letters + two digits). | `BBCC12` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/transport-vehicle", {
	params: { plate: "BBCC12" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/transport-vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "BBCC12"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
