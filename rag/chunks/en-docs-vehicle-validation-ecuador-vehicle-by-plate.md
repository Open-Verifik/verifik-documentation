---
id: "en-docs-vehicle-validation-ecuador-vehicle-by-plate"
title: "\\U0001F1EA\\U0001F1E8 Ecuador - Vehicle Verification — Endpoint"
sourcePath: "docs/vehicle-validation/ecuador/vehicle-by-plate.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ec"
  - "vehicle-validation"
endpoint: "/v2/ec/vehiculo/placa"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/ecuador/vehicle-by-plate"
url: "https://docs.verifik.co/vehicle-validation/ecuador/vehicle-by-plate"
---

# \U0001F1EA\U0001F1E8 Ecuador - Vehicle Verification
**API path(s):** /v2/ec/vehiculo/placa

## Endpoint

This service returns vehicle information registered in Ecuador using the license plate (**`plate`**): make, model, year, type, and related registration-oriented fields (subject to source availability).

### Endpoint

```
GET https://api.verifik.co/v2/ec/vehiculo/placa
```

Query an Ecuadorian vehicle by **`plate`** (no spaces or periods). Use for **verification**, **insurance**, **fleet**, and **compliance** workflows.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Yes** | License plate to query, without spaces or periods. | `PBB3239` |

### Request

  

```javascript

const { data } = await axios.get('https://api.verifik.co/v2/ec/vehiculo/placa', {
  params: { plate: 'PBB3239' },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ',
  },
});
console.log(data);
```

### Response

  

```json
{
  "data": {
    "plate": "PBB3239",
    "brand": "MAKE",
    "model": "MODEL",
    "year": "2020",
    "vehicleType": "SEDAN"
  },
  "signature": {
    "dateTime": "April 8, 2026 11:00 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "VHCL1"
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
  "message": "plate format invalid."
}
```
